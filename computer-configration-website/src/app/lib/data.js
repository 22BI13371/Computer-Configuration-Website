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

export async function fetchComments(id) {
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

export async function fetchPcPartWithFilter(category = '', filters = {}) {
  let query = `SELECT * FROM pc_parts WHERE category = $1`;
  const queryParams = [category];
  const filterClauses = [];
  let paramIndex = 2;

  Object.entries(filters).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      // Handle multiple values with IN
      const placeholders = value.map(() => `$${paramIndex++}`).join(', ');
      filterClauses.push(`${key} IN (${placeholders})`);
      queryParams.push(...value);
    } else {
      // Handle single value
      filterClauses.push(`${key} = $${paramIndex}`);
      queryParams.push(value);
      paramIndex++;
    }
  });

  if (filterClauses.length > 0) {
    query += ` AND ${filterClauses.join(' AND ')}`;
  }

  console.log(queryParams);

  try {
    const data = await sql.query(query, queryParams);

    return data.rows;
  } catch (error) {
    console.error('Database Error', error);
    throw new Error('Failed to fetch data');
  }
}
