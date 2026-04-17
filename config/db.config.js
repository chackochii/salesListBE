import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config({ path: './environments/.env' });

const caCertPath = path.join(process.cwd(), 'environments', 'ca-certificate.crt');

export default {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  PORT: process.env.DB_PORT || 25060,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
      // ca: fs.readFileSync(caCertPath).toString()
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};