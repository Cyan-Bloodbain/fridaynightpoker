// pages/index.js
import { useState } from "react";

export default function Home() {
  const [report, setReport] = useState(null);

  async function loadReport(endpoint) {
    const response = await fetch(endpoint);
    const data = await response.json();
    setReport(data);
  }

  return (
    <>
      <head>
        <title>Friday Night Poker</title>
        <style>{`
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
          }
          header, footer {
            background-color: #333;
            color: white;
            padding: 1em;
            text-align: center;
          }
          nav {
            background-color: #444;
            padding: 1em;
            text-align: center;
          }
          nav a {
            color: white;
            margin: 0 15px;
            text-decoration: none;
            transition: color 0.3s;
          }
          nav a:hover {
            color: #ff0;
          }
          .container {
            display: flex;
            margin: 20px;
          }
          main {
            flex: 3;
            padding: 1em;
          }
          aside {
            flex: 1;
            background-color: #f4f4f4;
            padding: 1em;
            margin-left: 10px;
          }
          footer {
            margin-top: 20px;
          }
          #toggleContent {
            margin-top: 1em;
            padding: 0.5em 1em;
            background-color: #333;
            color: white;
            border: none;
            cursor: pointer;
          }
          #extraContent {
            display: none;
            margin-top: 1em;
            padding: 1em;
            background-color: #eee;
          }
        `}</style>
      </head>

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

          <button onClick={() => loadReport("/api/report/top-stats")}>
            Player List Test
          </button>

          <pre>{report ? JSON.stringify(report, null, 2) : ""}</pre>

          <p>
            On the site you can check the poker stats section and rate your
            performance against the other players as well as find general news
            and upcoming events. The site is still under construction and is
            pretty rudimentary in function and appearance at the moment, having
            the bare minimum, but will improve as we progress.
          </p>

          <p>
            Thanks for visiting and if you have any suggestions or specific
            things you would like to see on the site, bring it up at poker on
            Friday.
          </p>

          <br />

          <h2>Poker Stats</h2>

          <ul>
            <a
              href="https://ebay-graphics.s3.us-east-2.amazonaws.com/Poker+Website+images/Leaderboard.jpg"
              target="_blank"
            >
              Leaderboard - Cash game winnings
            </a>
          </ul>
          <ul>
            <a
              href="https://ebay-graphics.s3.us-east-2.amazonaws.com/Poker+Website+images/Best+Hand+Stats.jpg"
              target="_blank"
            >
              Best Hand Stats
            </a>
          </ul>
          <ul>
            <a
              href="https://ebay-graphics.s3.us-east-2.amazonaws.com/Poker+Website+images/Best+Hand+Winners.jpg"
              target="_blank"
            >
              Best Hand Winners
            </a>
          </ul>
          <ul>
            <a
              href="https://ebay-graphics.s3.us-east-2.amazonaws.com/Poker+Website+images/Tournament+winners.jpg"
              target="_blank"
            >
              Tournament Winners
            </a>
          </ul>
        </main>

        <aside>
          <h2>News and Upcoming Events</h2>
          <p>
            This will be used for tournament announcements and other need to
            know info.
          </p>
        </aside>

        <aside>
          <h2>Entertainment</h2>
          <p>
            This section will be for short videos, memes, and misc funnies.
          </p>
        </aside>
      </div>

      <footer>
        <p>© 2025 Friday Night Poker</p>
      </footer>
    </>
  );
}
