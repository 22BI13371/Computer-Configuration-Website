import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import {
  users,
  posts,
  comments,
  pcParts,
  pcBuilds,
  pcBuildsParts,
} from '../lib/placeholder_data';

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      username  TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      is_admin BOOLEAN NOT NULL DEFAULT FALSE,
      created_at TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedpassword = await bcrypt.hash(user.password, 10);
      return client.sql`
      INSERT INTO users (id, username, email, password, is_admin, created_at)
      VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedpassword}, ${user.is_admin}, ${user.created_at})
      ON CONFLICT (id) DO NOTHING
      `;
    })
  );

  return insertedUsers;
}

async function seedPosts() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTs posts (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_id UUID NOT NULL,
      title TEXT NOT NULL,
      body TEXT NOT NULL,
      created_at VARCHAR NOT NULL,
      updated_at VARCHAR,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `;

  const insertedPosts = await Promise.all(
    posts.map(
      (post) => client.sql`
        INSERT INTO posts (id, user_id, title, body, created_at, updated_at)
        VALUES (${post.id}, ${post.user_id}, ${post.title}, ${post.body}, ${post.created_at}, ${post.updated_at})
        ON CONFLICT (id) DO NOTHING
      `
    )
  );

  return insertedPosts;
}

async function seedComments() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS comments (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      post_id UUID NOT NULL,
      user_id UUID NOT NULL,
      body TEXT NOT NULL,
      created_at VARCHAR,
      FOREIGN KEY (user_id)  REFERENCES users(id),
      FOREIGN KEY (post_id)  REFERENCES posts(id)
    );
  `;

  const insertedComments = await Promise.all(
    comments.map(
      (comment) => client.sql`
      INSERT INTO comments (id, post_id, user_id, body, created_at)
      VALUES (${comment.id}, ${comment.post_id}, ${comment.user_id}, ${comment.text}, ${comment.created_at})
      ON CONFLICT (id) DO NOTHING
    `
    )
  );

  return insertedComments;
}

async function seedPcBuilds() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS pc_builds (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_id UUID NOT NULL,
      name TEXT NOT NULL,
      created_at TEXT,
      is_private BOOLEAN DEFAULT FALSE,
      allow_comments BOOLEAN DEFAULT FALSE,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `;

  const insertedPcBuilds = await Promise.all(
    pcBuilds.map(
      (pcBuild) => client.sql`
        INSERT INTO pc_builds (id, user_id, name, created_at, is_private, allow_comments)
        VALUES (${pcBuild.id}, ${pcBuild.user_id}, ${pcBuild.name}, ${pcBuild.created_at}, ${pcBuild.is_private}, ${pcBuild.allow_comments})
        ON CONFLICT (id) DO NOTHING
      `
    )
  );

  return insertedPcBuilds;
}

async function seedPcBuildParts() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS pc_build_parts (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      build_id UUID NOT NULL,
      part_id UUID NOT NULL,
      quantity INT NOT NULL DEFAULT 1,
      FOREIGN KEY (build_id) REFERENCES pc_builds(id),
      FOREIGN KEY (part_id) REFERENCES pc_parts(id)
    );
  `;

  const insertedPcBuildParts = await Promise.all(
    pcBuildsParts.map(
      (pcBuildsPart) => client.sql`
      INSERT INTO pc_build_parts (id, build_id, part_id, quantity)
      VALUES (${pcBuildsPart.id}, ${pcBuildsPart.build_id}, ${pcBuildsPart.part_id}, ${pcBuildsPart.quantity})
    `
    )
  );

  return insertedPcBuildParts;
}

async function seedPcParts() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS pc_parts (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name TEXT NOT NULL,
      current_price INTEGER,
      category TEXT NOT NULL,
      manufacturer TEXT NOT NULL,
      part_number TEXT NOT NULL,
      specification JSONB NOT NULL
    );
  `;

  const insertedPcParts = await Promise.all(
    pcParts.map(
      (part) => client.sql`
        INSERT INTO pc_parts (id, name, current_price, category, manufacturer, part_number, specification)
        VALUES (${part.id}, ${part.name}, ${part.current_price * 100}, ${
        part.category
      }, ${part.manufacturer}, ${part.part_number}, ${part.specification})
        ON CONFLICT (id) DO NOTHING
      `
    )
  );

  return insertedPcParts;
}

async function createIndexes() {
  await client.sql`
    CREATE INDEX IF NOT EXISTS pc_parts_category_idx ON pc_parts (category);
    CREATE INDEX IF NOT EXISTS pc_parts_manufacturer_idx ON pc_parts (manufacturer);
  `;
}

export async function GET() {
  // console.log(pcParts);
  // return Response.json(JSON.stringify(pcPart[0]));
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await seedPosts();
    await seedComments();
    await seedPcParts();
    await seedPcBuilds();
    await seedPcBuildParts();
    await createIndexes();
    await client.sql`COMMIT`;
    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
  // await seedPcParts();
  // return Response.json({ message: 'Database seeded successfully' });
}
