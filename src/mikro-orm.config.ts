import { PostgreSqlDriver, defineConfig } from '@mikro-orm/postgresql';
import * as dotenv from 'dotenv';
import { Migrator } from '@mikro-orm/migrations';

// Load .env file if it exists
dotenv.config();

export default defineConfig({
  driver: PostgreSqlDriver,
  migrations: {
    path: './migrations',
    emit: 'ts',
  },
  entities: ['src/**/*.entity.ts'],
  dbName: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  extensions: [Migrator],
});
