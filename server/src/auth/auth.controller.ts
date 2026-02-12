import { Request, Response } from 'express';
import { RegisterSchema, LoginSchema, registerUser, loginUser } from './auth.service';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';

/**
 * Auth Controller
 * Handles registration, login, and profile retrieval.
 */

export const register = async (req: Request, res: Response) => {
  try {
    const data = RegisterSchema.parse(req.body);
    const result = await registerUser(data);
    res.status(201).json(result);
  } catch (error: any) {
    if (error.issues) {
      res.status(400).json({ error: 'Validation error', details: error.issues });
    } else {
      res.status(400).json({ error: error.message });
    }
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const data = LoginSchema.parse(req.body);
    const result = await loginUser(data);
    res.json(result);
  } catch (error: any) {
    if (error.issues) {
      res.status(400).json({ error: 'Validation error', details: error.issues });
    } else {
      res.status(401).json({ error: error.message });
    }
  }
};

export const getMe = async (req: Request, res: Response) => {
  // @ts-ignore - user is attached by middleware
  res.json(req.user);
};

export const googleCallback = async (req: Request, res: Response) => {
  // User is already authenticated and attached to req.user by passport
  const user: any = req.user;

  if (!user) {
      res.status(401).json({ error: 'Authentication failed' });
      return;
  }

  const token = jwt.sign(
    { userId: user.id, role: user.role, email: user.email },
    JWT_SECRET,
    { expiresIn: '1d' }
  );

  // Redirect to frontend with token
  // Adjust the URL to your frontend's actual URL
  const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';
  res.redirect(`${frontendUrl}/auth/callback?token=${token}`);
};
