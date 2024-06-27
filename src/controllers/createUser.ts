import { Request, Response } from 'express';
import User from '../db/models/User';
import { MongoError } from 'mongodb';
const { v4: uuid } = require('uuid')

export default async function createUser(req: Request, res: Response): Promise<void> {
  try {
    const { nombre, apellido, email, telefono } = req.body;

    const apiKey = uuid()
    const newUser = new User({ nombre, apellido, email, telefono, apiKey });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    if (error instanceof MongoError && error.code === 11000) {
      res.status(400).json({ error: 'El número de teléfono ya está registrado' });
    } else {
      console.error('Error al crear usuario:', error instanceof Error ? error.message : 'Unknown error');
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
}