import { useEffect, useState } from "react";
import Link from "next/link";

export default function Players() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  async function fetchPlayers() {
    const res = await fetch("/api/players");
    const data = await res.json();
    console.log("API returned:", data);  // <-- check this
    setPlayers(Array.isArray(data) ? data : []);
  }
  fetchPlayers();
}, []);


  if (loading) return <p>Loading players...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Player List</h1>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Preferred Name</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
			<tbody>
			  {(Array.isArray(players) ? players : []).map((p, i) => (
				<tr key={i}>
				  <td>{p.PREFERRED_NAME}</td>
				  <td>{p.FIRST_NAME}</td>
				  <td>{p.LAST_NAME}</td>
				  <td>{p.EMAIL}</td>
				</tr>
			  ))}
			</tbody>
      </table>
      <br />
      <Link href="/">⬅ Back to Home</Link>
    </div>
  );
}
