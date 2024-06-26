import { Request, Response } from "express";
import User from "../db/models/User";

export default async function getAllUsers(req: Request, res: Response): Promise<void> {
  try {
    const users = await User.find();

    // Devolver una lista vacía si no se encuentran usuarios
    res.status(200).json(users);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}