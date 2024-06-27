const nodemailer = require('nodemailer');
import { ACCOUNT_EMAIL, ACCOUNT_APP_PASSWORD }  from '../config';
import dotenv from 'dotenv'

dotenv.config()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: ACCOUNT_EMAIL,
    pass: ACCOUNT_APP_PASSWORD
  },
  logger: true,
  debug: true,
  secure: true,
  tls: {
    rejectUnauthorized: true
  }
});

export default transporter