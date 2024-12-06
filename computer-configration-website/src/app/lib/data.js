import { sql } from '@vercel/postgres';

// function fetchPcBuild() {
//   try {
//     const pcBuild
//   }
// }

export async function fetchPcParts(cat = '') {
  try {
    const data = await sql`
    SELECT *
    FROM pc_parts
    WHERE category = ${cat}
    `;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch data.');
  }
}

export async function fetchposts() {
  try {
    const data = await sql` SELECT * from posts `;

    return data.rows;
  } catch (error) {
    console.error('Database Error', error);
    throw new Error('Failed to fetch data');
  }
}

export async function fetchComemnts(id) {
  try {
    const data = await sql`
      SELECT * from comments where post_id = ${id}
    `;

    return data.rows;
  } catch (error) {
    console.error('Database Error', error);
    throw new Error('Failed to fetch data');
  }
}
