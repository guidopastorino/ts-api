import { Request } from 'express';

// Response of the server at req.user
interface UserPayload {
  _id: String;
  nombre: String;
  apellido: String;
  email: String;
  telefono: String;
  apiKey: String;
}

declare module 'express-serve-static-core' {
  interface Request {
    user?: UserPayload;
  }
}