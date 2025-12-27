import mysql from 'mysql2/promise';

let connection;

export async function getDB() {
  if (!connection) {
    connection = await mysql.createConnection({
      host: '127.0.0.1',
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
  }
  return connection;
}
