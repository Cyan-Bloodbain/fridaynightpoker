import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  let connection;

try {
  connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  console.log("Connected to DB!");
} catch (err) {
  console.error("DB connection failed:", err);
}



    const [rows] = await connection.execute('SELECT * FROM player');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Database connection/query error:', error);
    res.status(500).json({ error: error.message });
  } finally {
    if (connection) await connection.end();
  }
}
