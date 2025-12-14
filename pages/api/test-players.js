export default async function handler(req, res) {
  console.log("API called"); // Log API call

  try {
    // Return dummy data without touching DB
    const dummyData = [
      { PREFERRED_NAME: "Josh", FIRST_NAME: "Joshua", LAST_NAME: "Shepard", EMAIL: "josh@example.com" },
      { PREFERRED_NAME: "Anna", FIRST_NAME: "Anna", LAST_NAME: "Smith", EMAIL: "anna@example.com" }
    ];

    console.log("Returning dummy data:", dummyData);
    res.status(200).json(dummyData);

  } catch (err) {
    console.error("API error:", err);
    res.status(500).json({ error: "Server error" });
  }
}
