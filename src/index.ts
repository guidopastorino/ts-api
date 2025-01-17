import { Request, Response } from "express";
import { authenticateApiKey } from "./middlewares/ApiKeyAuth";
import { registerUser } from "./utils/registerUser";
import { verifyEmail } from "./utils/verifyEmail";
const express = require('express');
const cors = require('cors')
const dbConnect = require('./db/db').default;
const usersRouter = require('./routes/userRouter').default;

const app = express();
const port = process.env.PORT || 3000;

// Database connection
dbConnect();

// Middleware para permitir CORS
app.use(cors());

// Middleware para parsear JSON en las solicitudes
app.use(express.json());

// Main route
app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Server working successfully</h1>');
});

// Email (register and verify)
app.post('/register', registerUser);
app.get('/verify-email', verifyEmail);

// Monta el enrutador de usuarios bajo /api
app.use('/api', authenticateApiKey, usersRouter);

// Inicia el servidor
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
