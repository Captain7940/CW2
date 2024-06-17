// src/api.ts
import { pool } from './db';

export async function postDataToDatabase(data: any) {
  const query = `
    INSERT INTO pet(id, title, variety, gender, age, info, location, imageurl)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *;
  `;
  const values = [data.id, data.title, data.variety, data.gender, data.age, data.info, data.location, data.imageurl];

  try {
    const res = await pool.query(query, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  }
}
