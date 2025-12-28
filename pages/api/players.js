// pages/api/players.js
import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  const isProd = process.env.NODE_ENV === "production";

  if (isProd) {
    // Return mock data on Vercel
    res.status(200).json([
      { player_id: 1, first_name: "John", preferred_name: "Johnny", last_name: "Doe", email: "john@example.com" },
      { player_id: 2, first_name: "Jane", preferred_name: "Janey", last_name: "Smith", email: "jane@example.com" },
    ]);
    return;
  }

  let connection;
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || '127.0.0.1',
      port: process.env.DB_PORT || 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

console.log("Connecting to DB:", process.env.DB_HOST, process.env.DB_USER, process.env.DB_NAME);

const [rows] = await connection.execute('SELECT * FROM player');
console.log("Query returned:", rows);

    res.status(200).json(rows);

  } catch (error) {
    console.error('Database connection/query error:', error);
    res.status(500).json({ error: error.message });

  } finally {
    if (connection) connection.end().catch(err => console.error('Error closing DB connection:', err));
  }
}
