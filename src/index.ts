import usersRouter from "./routes/userRouter";

const express = require('express')
const { v4: uuidv4 } = require('uuid')
const dbConnect = require('./db/db').default; // Se usa .default debido a export default
const dotenv = require('dotenv');

const app = express();
const port = process.env.PORT || 3000;

dbConnect()

app.use(express.json());

// Monta el enrutador de usuarios bajo /api
app.use('/api', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
