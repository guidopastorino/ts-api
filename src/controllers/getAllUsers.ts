import { Request, Response } from "express";
import User from "../db/models/User";

export default async function getAllUsers(req: Request, res: Response): Promise<void> {
  try {
    const users = await User.find();

    // Array con los usuarios excluyendo su api key
    const usersWithoutApiKeys = users.map(user => ({
      _id: user._id,
      nombre: user.nombre,
      apellido: user.apellido,
      email: user.email,
      telefono: user.telefono
    }));

    // Devolver una lista vacía si no se encuentran usuarios
    res.status(200).json(usersWithoutApiKeys);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}