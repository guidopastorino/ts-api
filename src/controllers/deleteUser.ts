import { Request, Response } from "express";
import User from "../db/models/User";

export default async function deleteUser(req: Request, res: Response): Promise<void> {
  const userID = req.params.id
  try {
    const deletedUser = await User.findByIdAndDelete(userID)
    if (!deletedUser) {
      res.status(500).json({ error: "Usuario a eliminar no encontrado" })
      return
    }
    res.status(200).json({ message: "Usuario eliminado correctamente", deletedUser })
  } catch (error) {
    console.error('Error al eliminar usuario por ID:', error instanceof Error ? error.message : 'Unknown error');
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}