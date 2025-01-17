import mongoose, { Schema, Document, Model } from 'mongoose';

// Definición de interfaz para el usuario en Mongoose
interface IUser extends Document {
  _id: String;
  nombre: String;
  apellido: String;
  email: String;
  telefono: String;
  apiKey: String;
  __v: Number;
}

// Esquema de Mongoose para el usuario
const userSchema = new Schema<IUser>({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefono: { type: String, required: true, unique: true },
  apiKey: { type: String, required: true, unique: true }
});

// Modelo de Mongoose para el usuario
const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User;
