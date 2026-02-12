import { z } from 'zod';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma';
import { Role } from '@prisma/client';
import { resend } from '../lib/mail';

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';

// Schema for User Registration
export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

// Schema for User Login
export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const registerUser = async (data: z.infer<typeof RegisterSchema>) => {
  const { email, password, name } = data;

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
      role: Role.VIEWER, // Default role
    },
  });

  // Send welcome email
  try {
    await resend.emails.send({
      from: 'Fateweaver <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome to Fateweaver',
      html: `<p>Hello ${name || email},</p><p>Welcome to Fateweaver! Your account has been successfully created.</p>`,
    });
  } catch (error) {
    console.error('Failed to send welcome email:', error);
  }

  const token = jwt.sign(
    { userId: user.id, role: user.role, email: user.email },
    JWT_SECRET,
    { expiresIn: '1d' }
  );

  return { token, user: { id: user.id, email: user.email, role: user.role } };
};

export const loginUser = async (data: z.infer<typeof LoginSchema>) => {
  const { email, password } = data;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error('Invalid credentials');
  }

  if (!user.password) {
      throw new Error('Invalid credentials');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign(
    { userId: user.id, role: user.role, email: user.email },
    JWT_SECRET,
    { expiresIn: '1d' }
  );

  return { token, user: { id: user.id, email: user.email, role: user.role } };
};
