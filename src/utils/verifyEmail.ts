import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import User from "../db/models/User";
import transporter from '../services/mailer';
import { ACCOUNT_EMAIL, JWT_SECRET } from "../config";

export async function verifyEmail(req: Request, res: Response): Promise<void> {
  const token = req.query.token as string;

  try {
    const decoded: any = jwt.verify(token, JWT_SECRET);
    const { nombre, apellido, email, telefono, password } = decoded;

    // Verificar si el usuario ya existe
    let user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ error: "Email already verified" });
      return;
    }

    // Crear el usuario completo y generar la API key
    const apiKey = uuidv4();
    user = new User({ nombre, apellido, email, telefono, password, apiKey });
    await user.save();

    await transporter.sendMail({
      from: ACCOUNT_EMAIL,
      to: user.email,
      subject: 'Your API Key',
      html: `<p>Your API key is:</p><p>${apiKey}</p>`,
    });

    res.status(200).json({ message: 'Email verified and API key sent' });
  } catch (error) {
    console.error('Error verifying email:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
