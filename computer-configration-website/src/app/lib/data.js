import { sql } from "@vercel/postgres";

// function fetchPcBuild() {
//   try {
//     const pcBuild
//   }
// }

export async function fetchPcParts(cat = "") {
  try {
    const data = await sql`
    SELECT *
    FROM pc_parts
    WHERE category = ${cat}
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
}

export async function fetchposts() {
  try {
    const data = await sql` SELECT * from posts `;

    return data.rows;
  } catch (error) {
    console.error("Database Error", error);
    throw new Error("Failed to fetch data");
  }
}

export async function fetchComments(id) {
  try {
    const data = await sql`
      SELECT * from comments where post_id = ${id}
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error", error);
    throw new Error("Failed to fetch data");
  }
}

export async function fetchPcPartWithFilter(
  category = "",
  filters = {},
  jsonFilters = {}
) {
  let query = "SELECT * FROM pc_parts WHERE category = $1";
  const queryParams = [category];

  const filterClauses = [];
  let paramIndex = 2;

  Object.entries(filters).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      const placeholders = value.map(() => `$${paramIndex++}`).join(", ");
      filterClauses.push(`${key} IN (${placeholders})`);
      queryParams.push(...value);
    } else if (typeof value === "object" && (value.min || value.max)) {
      if (value.min !== undefined) {
        filterClauses.push(`${key} >= $${paramIndex}`);
        queryParams.push(value.min);
        paramIndex++;
      }
      if (value.max !== undefined) {
        filterClauses.push(`${key} <= $${paramIndex}`);
        queryParams.push(value.max);
        paramIndex++;
      }
    } else {
      filterClauses.push(`${key} = $${paramIndex}`);
      queryParams.push(value);
      paramIndex++;
    }
  });

  Object.entries(jsonFilters).forEach(([key, value]) => {
    if (typeof value === "string" || typeof value === "number") {
      // Handle equality in JSONB
      filterClauses.push(`specification->>'${key}' = $${paramIndex}`);
      queryParams.push(value);
      paramIndex++;
    } else if (Array.isArray(value)) {
      // Handle array containment in JSONB
      filterClauses.push(`specification->'${key}' @> $${paramIndex}::jsonb`);
      queryParams.push(JSON.stringify(value));
      paramIndex++;
    } else if (typeof value === "object" && (value.min || value.max)) {
      // Handle range filters in JSONB
      if (value.min !== undefined) {
        filterClauses.push(
          `(specification->>'${key}')::numeric >= $${paramIndex}`
        );
        queryParams.push(value.min);
        paramIndex++;
      }
      if (value.max !== undefined) {
        filterClauses.push(
          `(specification->>'${key}')::numeric <= $${paramIndex}`
        );
        queryParams.push(value.max);
        paramIndex++;
      }
    }
  });

  if (filterClauses.length > 0) {
    query += ` AND ${filterClauses.join(" AND ")}`;
  }

  console.log(queryParams);

  try {
    const data = await sql.query(query, queryParams);

    return data.rows;
  } catch (error) {
    console.error("Database Error", error);
    throw new Error("Failed to fetch data");
  }
}

export async function fetchPcBuildPartsWithId(id) {
  try {
    const parts = await sql`
      select * 
      from pc_parts
      where id
      in (SELECT part_id
          FROM pc_build_parts
          WHERE build_id = ${id})
          `;

    return parts.rows;
  } catch (error) {
    console.error('Database Error', error);
    throw new Error('Failed to fetch data');
  }
}
