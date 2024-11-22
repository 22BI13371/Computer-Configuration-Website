import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXIST users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      username  VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      is_admin BOOLEAN NOT NULL DEFAULT false,
      created_at VARCHAR NOT NULL
    );
  `;
}

async function seedPosts() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXIST posts (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_id UUID NOT NULL,
      title TEXT NOT NULL,
      body TEXT NOT NULL,
      created_at VARCHAR NOT NULL,
      updated_at VARCHAR
    );
  `;
}

async function seedComments() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXIST comments (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      post_id UUID NOT NULL,
      user_id UUID NOT NULL,
      text TEXT NOT NULL,
      created_at VARCHAR
    );
  `;
}
