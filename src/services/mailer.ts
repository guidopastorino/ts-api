const nodemailer = require('nodemailer');
import { ACCOUNT_EMAIL, ACCOUNT_PASSWORD, ACCOUNT_APP_PASSWORD }  from '../config';
import dotenv from 'dotenv'

dotenv.config()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  secure: true,
  logger: true,
  debug: true,
  secureConnection: false,
  auth: {
    user: ACCOUNT_EMAIL,
    pass: ACCOUNT_APP_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
})

export default transporter