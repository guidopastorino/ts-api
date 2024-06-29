import { Request, Response, NextFunction } from "express";
import dotenv from 'dotenv'
import User from "../db/models/User";

dotenv.config();

interface AuthenticatedUser extends Request {
  user?: {
    _id: String;
    nombre: String;
    apellido: String;
    email: String;
    telefono: String;
    apiKey: String;
  }
}

// Middleware de autenticación con API key
export async function authenticateApiKey(req: AuthenticatedUser, res: Response, next: NextFunction) {
  const apiKey = req.header('x-api-key')
  if (!apiKey) {
    return res.status(401).json({ error: "API key no proporsionada" })
  }
  // validar api key
  try {
    const user = await User.findOne({ apiKey })
    if (!user) {
      return res.status(403).json({ error: "API Key inválida o no autorizada" })
    }
    req.user = user; // Guardar el usuario como objeto para usarlo en la ruta
    next()
  } catch (error) {
    console.error('Error al autenticar API Key:', error instanceof Error ? error.message : 'Unknown error');
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}