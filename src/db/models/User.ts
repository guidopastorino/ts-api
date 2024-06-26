import mongoose, { Schema, Document } from 'mongoose';

// Definición de la interfaz para el documento de Usuario
interface IUser extends Document {
  nombre: string;
  apellido: string;
  edad: number;
  telefono: string;
}

// Esquema de Mongoose para el modelo de Usuario
const UserSchema: Schema = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  edad: { type: Number, required: true },
  telefono: { type: String, required: true, unique: true }
});

// Crear y exportar el modelo de Usuario
const User = mongoose.model<IUser>('User', UserSchema);

export default User;