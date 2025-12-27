export default function handler(req, res) {
  res.json({
    DB_PASSWORD: process.env.DB_PASSWORD,
    LENGTH: process.env.DB_PASSWORD?.length,
  });
}
