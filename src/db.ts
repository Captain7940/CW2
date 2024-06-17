// src/db.ts
import { Pool } from 'pg';

// Replace with your ElephantSQL connection string
const connectionString = 'postgres://xzkoofob:UXdvl-w8UBW9W6gIqoH4c3oUPtdbMRw6@john.db.elephantsql.com/xzkoofob';

export const pool = new Pool({
  connectionString,
});
