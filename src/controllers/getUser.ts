import { Request, Response } from "express";
import mongoose from "mongoose";
import User from "../db/models/User";

export default async function getUser(req: Request, res: Response): Promise<void> {
  const userID = req.params.id;

  // Validar si el ID cumple con el formato ObjectId
  if (!mongoose.isValidObjectId(userID)) {
    res.status(400).json({ error: "ID de usuario no válido" });
    return;
  }

  try {
    const user = await User.findById(userID).lean(); // .lean() para obtener un objeto JS plano

    // Si no se encuentra un usuario con ese ID, devolver 404
    if (!user) {
      res.status(404).json({ error: "Usuario no encontrado" });
      return;
    }

    // Eliminar la API key del objeto de usuario antes de devolverlo
    const { apiKey, ...userWithoutApiKey } = user;

    // Si se encuentra el usuario, devolverlo como respuesta
    res.status(200).json(userWithoutApiKey);
  } catch (error) {
    console.error('Error al buscar usuario por ID:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}
