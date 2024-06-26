import express from 'express'
import { createUser, getUser, getAllUsers, deleteUser, updateUser } from '../controllers/controllers'

const usersRouter = express.Router()

// Ruta para crear un nuevo usuario
usersRouter.post('/users', createUser);

// Ruta para obtener un usuario mediante su id
usersRouter.get('/users/:id', getUser);

// Ruta para obtener todos los usuarios
usersRouter.get('/users', getAllUsers);

// Ruta para eliminar un usuario mediante su id
usersRouter.delete('/users/:id', deleteUser);

// Ruta para actualizar los campos de un usuario mediante su id
usersRouter.put('/users/:id', updateUser);

export default usersRouter