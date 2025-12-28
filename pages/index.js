// pages/index.js
import { useState } from "react";
import Head from "next/head";

const thStyle = {
  border: "1px solid #ccc",
  padding: "8px",
  backgroundColor: "#444",
  color: "white",
  textAlign: "left",
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "8px",
};

export default function Home() {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function loadReport(endpoint) {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(endpoint);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      setReport(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load player list.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Friday Night Poker</title>
        <style>{`
          body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
          header, footer { background-color: #333; color: white; padding: 1em; text-align: center; }
          nav { background-color: #444; padding: 1em; text-align: center; }
          nav a { color: white; margin: 0 15px; text-decoration: none; transition: color 0.3s; }
          nav a:hover { color: #ff0; }
          .container { display: flex; margin: 20px; }
          main { flex: 3; padding: 1em; }
          aside { flex: 1; background-color: #f4f4f4; padding: 1em; margin-left: 10px; }
          footer { margin-top: 20px; }
          button { margin-top: 1em; padding: 0.5em 1em; background-color: #333; color: white; border: none; cursor: pointer; }
          button:disabled { background-color: #999; cursor: not-allowed; }
          table { width: 100%; border-collapse: collapse; margin-top: 1em; }
          th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
        `}</style>
      </Head>

      <header>
        <h1>Friday Night Poker!</h1>
        <img
          src="https://ebay-graphics.s3.us-east-2.amazonaws.com/Poker+Website+images/star+wars+poker.jpg"
          alt="Friday Night Poker"
          width="1200"
        />
      </header>

      <nav>
        <a href="#">Home</a>
        <a href="#">Wall of Fame</a>
        <a
          href="https://ebay-graphics.s3.us-east-2.amazonaws.com/Poker+Website+images/Poker-Hand-Rankings-In-Order-689x1024.jpg"
          target="_blank"
        >
          Poker Hands Ranked
        </a>
        <a
          href="https://ebay-graphics.s3.us-east-2.amazonaws.com/Poker+Website+images/Four+and+two+rule.jpg"
          target="_blank"
        >
          Easy Odds Calculation
        </a>
      </nav>

      <div className="container">
        <main>
          <h2>Welcome to the Friday Night Poker site!!!</h2>

<button onClick={() => { console.log("Button clicked"); loadReport("/api/players"); }}>
  Load Player List
</button>


          {error && <p style={{ color: "red" }}>{error}</p>}

          {Array.isArray(report) && report.length > 0 && (
            <table>
              <thead>
                <tr>
                  <th style={thStyle}>ID</th>
                  <th style={thStyle}>First Name</th>
                  <th style={thStyle}>Preferred</th>
                  <th style={thStyle}>Last Name</th>
                  <th style={thStyle}>Email</th>
                </tr>
              </thead>
              <tbody>
                {report.map((player) => (
                  <tr key={player.player_id}>
                    <td style={tdStyle}>{player.player_id}</td>
                    <td style={tdStyle}>{player.first_name}</td>
                    <td style={tdStyle}>{player.preferred_name}</td>
                    <td style={tdStyle}>{player.last_name}</td>
                    <td style={tdStyle}>{player.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {Array.isArray(report) && report.length === 0 && (
            <p>No players found.</p>
          )}

          <p>
            On the site you can check the poker stats section and rate your
            performance against the other players as well as find general news
            and upcoming events. The site is still under construction.
          </p>

          <h2>Poker Stats</h2>
          <ul>
            <li>
              <a
                href="https://ebay-graphics.s3.us-east-2.amazonaws.com/Poker+Website+images/Leaderboard.jpg"
                target="_blank"
              >
                Leaderboard - Cash game winnings
              </a>
            </li>
            <li>
              <a
                href="https://ebay-graphics.s3.us-east-2.amazonaws.com/Poker+Website+images/Best+Hand+Stats.jpg"
                target="_blank"
              >
                Best Hand Stats
              </a>
            </li>
            <li>
              <a
                href="https://ebay-graphics.s3.us-east-2.amazonaws.com/Poker+Website+images/Best+Hand+Winners.jpg"
                target="_blank"
              >
                Best Hand Winners
              </a>
            </li>
            <li>
              <a
                href="https://ebay-graphics.s3.us-east-2.amazonaws.com/Poker+Website+images/Tournament+winners.jpg"
                target="_blank"
              >
                Tournament Winners
              </a>
            </li>
          </ul>
        </main>

        <aside>
          <h2>News and Upcoming Events</h2>
          <p>Tournament announcements and other need-to-know info.</p>
        </aside>

        <aside>
          <h2>Entertainment</h2>
          <p>Short videos, memes, and misc funnies.</p>
        </aside>
      </div>

      <footer>
        <p>© 2025 Friday Night Poker</p>
      </footer>
    </>
  );
}
