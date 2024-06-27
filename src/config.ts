import dotenv from 'dotenv';

dotenv.config();

export const MONGODB_URI = process.env.MONGODB_URI as string;
export const JWT_SECRET = process.env.JWT_SECRET as string;
export const ACCOUNT_EMAIL = process.env.ACCOUNT_EMAIL as string;
export const ACCOUNT_APP_PASSWORD = process.env.ACCOUNT_APP_PASSWORD as string;