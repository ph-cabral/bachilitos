import { config } from 'dotenv';
import { z } from 'zod';

config(); // Carga las variables de entorno del archivo .env

const envSchema = z.object({
  PORT: z.string().default('3000'),
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32),
});

export const env = envSchema.parse(process.env);
