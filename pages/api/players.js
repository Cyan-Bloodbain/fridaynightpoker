import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  let connection;
  try {
    console.log("Connecting to DB:", process.env.DB_HOST, process.env.DB_USER, process.env.DB_NAME);

    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    const [rows] = await connection.execute('SELECT * FROM player');
    console.log("Query returned:", rows);

    res.status(200).json(rows);

  } catch (error) {
    console.error("Database connection/query error:", error);
    res.status(500).json({ error: error.message });
  } finally {
    if (connection) connection.end().catch(err => console.error('Error closing DB connection:', err));
  }
}
