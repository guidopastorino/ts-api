import { Request, Response } from "express";
const express = require('express');
const dbConnect = require('./db/db').default; // Se usa .default debido a export default
const usersRouter = require('./routes/userRouter').default; // Se usa .default debido a export default

const app = express();
const port = process.env.PORT || 3000;

// Conecta a la base de datos
dbConnect();

// Middleware para parsear JSON en las solicitudes
app.use(express.json());

// Ruta principal
app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Server working successfully</h1>');
});

// Monta el enrutador de usuarios bajo /api
app.use('/api', usersRouter);

// Inicia el servidor
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
