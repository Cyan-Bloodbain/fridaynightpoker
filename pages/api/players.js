import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  let connection;

  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || '127.0.0.1',
      port: process.env.DB_PORT || 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    const [rows] = await connection.execute('SELECT * FROM player');
    res.status(200).json(rows);

  } catch (error) {
    console.error('Database connection/query error:', error);
    res.status(500).json({ error: error.message });

  } finally {
    // wrap in a separate async block to avoid top-level await parsing issues
    if (connection) {
      connection.end().catch(err => console.error('Error closing DB connection:', err));
    }
  }
}
