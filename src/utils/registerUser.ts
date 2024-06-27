import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import User from "../db/models/User";
import transporter from '../services/mailer';
import dotenv from 'dotenv';
import { ACCOUNT_EMAIL, JWT_SECRET, SERVER_URL } from '../config';

dotenv.config();

export async function registerUser(req: Request, res: Response): Promise<void> {
  const { nombre, apellido, email, telefono, password } = req.body;

  try {
    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ error: 'Email already registered' });
      return;
    }

    const token = jwt.sign({ nombre, apellido, email, telefono, password }, JWT_SECRET, { expiresIn: '24h' });

    const verificationLink = `${SERVER_URL}/verify-email?token=${token}`;
    console.log("verificationLink", verificationLink);

    await transporter.sendMail({
      from: ACCOUNT_EMAIL,
      to: email,
      subject: 'Email Verification',
      html: `<p>Please verify your email by clicking the following link:</p><a href="${verificationLink}">Verify Email</a>`,
    });

    res.status(201).json({ message: 'User registered. Please verify your email.' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
