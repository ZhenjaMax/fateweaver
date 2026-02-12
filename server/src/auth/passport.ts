import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import prisma from '../lib/prisma';
import { Role } from '@prisma/client';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      callbackURL: process.env.GOOGLE_REDIRECT_URI || '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0].value;
        const googleId = profile.id;

        if (!email) {
            return done(new Error('No email found from Google provider'));
        }

        // Check if user exists
        let user = await prisma.user.findFirst({
            where: {
                OR: [
                    { googleId },
                    { email }
                ]
            }
        });

        if (user) {
            // Link googleId if not already linked
            if (!user.googleId) {
                user = await prisma.user.update({
                    where: { id: user.id },
                    data: { googleId }
                });
            }
        } else {
            // Create new user
            user = await prisma.user.create({
                data: {
                    email,
                    googleId,
                    name: profile.displayName,
                    role: Role.VIEWER,
                    // No password for Google auth users
                }
            });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// We don't need serialize/deserialize if we are using JWTs and not sessions,
// but passport might require them if session support is not explicitly disabled in the route.
// However, since we will use { session: false } in the route, we can skip this or provide minimal implementation.
passport.serializeUser((user: any, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
    try {
        const user = await prisma.user.findUnique({ where: { id } });
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

export default passport;
