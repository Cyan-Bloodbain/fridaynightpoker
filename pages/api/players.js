// pages/api/players.js
import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  let connection;

  try {
    // Create connection using environment variables
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    // Query players table
    const [rows] = await connection.execute('SELECT * FROM player');

    res.status(200).json(rows);
  } catch (error) {
    console.error('Database connection/query error:', error);
    res.status(500).json({ error: error.message });
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}
