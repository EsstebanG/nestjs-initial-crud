// src/config/database-init.ts
import { Client } from 'pg';

export async function ensureDatabaseExists() {
  const client = new Client({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'postgres', // se conecta a la DB por defecto
  });

  await client.connect();

  const dbName = process.env.DB_NAME;

  const result = await client.query(`SELECT 1 FROM pg_database WHERE datname = '${dbName}'`);
  if (result.rowCount === 0) {
    await client.query(`CREATE DATABASE ${dbName}`);
    console.log(`✅ Database '${dbName}' created successfully`);
  } else {
    console.log(`📦 Database '${dbName}' already exists`);
  }

  await client.end();
}
