import mysql from "mysql2/promise";

export default async function handler(req, res) {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: "GameStatisticsDB",
    });

    const [rows] = await connection.execute(`
      SELECT 
        PREFERRED_NAME,
        FIRST_NAME,
        LAST_NAME,
        EMAIL
      FROM PLAYER
    `);

    await connection.end();

    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
}
