import { Request, Response } from 'express';
import { RegisterSchema, LoginSchema, registerUser, loginUser } from './auth.service';

/**
 * Auth Controller
 * Handles registration, login, and profile retrieval.
 */

export const register = async (req: Request, res: Response) => {
  try {
    const data = RegisterSchema.parse(req.body);
    const user = await registerUser(data);
    res.status(201).json(user);
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
