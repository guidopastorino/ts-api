import { Request, Response } from "express";
import User from "../db/models/User";

export default async function updateUser(req: Request, res: Response): Promise<void> {
  const userID = req.params.id;
  const updates = req.body
  try {
    const updatedUser = await User.findByIdAndUpdate(userID, updates, { new: true })
    if (!updatedUser) {
      res.status(404).json({ message: "Usuario a ser actualizado no encontrado" })
      return
    }
    res.status(200).json({ message: "Usuario actualizado correctamente", updatedUser })
  } catch (error) {
    console.error('Error al actualizar usuario:', error instanceof Error ? error.message : 'Unknown error');
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}