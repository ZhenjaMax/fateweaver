import { Router } from 'express';
import passport from 'passport';
import { register, login, getMe, googleCallback } from './auth.controller';
import { authenticateToken } from './auth.middleware';
import { RequestHandler } from 'express';

/**
 * Auth Routes
 * Defines endpoints for authentication.
 */

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', authenticateToken as RequestHandler, getMe as RequestHandler);

router.get('/google', (req, res, next) => {
  console.log('Attempting Google Auth');
  next();
}, passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get(
  '/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: '/login' }),
  googleCallback
);

export default router;
