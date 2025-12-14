import mysql from 'mysql2/promise';

async function test() {
  try {
    const conn = await mysql.createConnection({
      host: '127.0.0.1',
      user: 'root',
      password: '000Death$tar#',
      database: 'GameStatisticsDB'
    });
    console.log('Connected!');
    await conn.end();
  } catch (err) {
    console.error(err);
  }
}

test();
