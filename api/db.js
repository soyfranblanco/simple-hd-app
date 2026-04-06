const SUPABASE_URL = "https://ebczaoptweskqzuzrmls.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViY3phb3B0d2Vza3F6dXpybWxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0OTMxODEsImV4cCI6MjA5MTA2OTE4MX0.Q5wqENM29xaLdVdoG8Gx6Pl49WZSQIGfe2704fa-vNc";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") return res.status(200).end();

  const { path, ...query } = req.query;
  const tablePath = Array.isArray(path) ? path.join("/") : path;
  
  const queryString = new URLSearchParams(query).toString();
  const url = `${SUPABASE_URL}/rest/v1/${tablePath}${queryString ? "?" + queryString : ""}`;

  try {
    const response = await fetch(url, {
      method: req.method,
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_KEY,
        "Authorization": `Bearer ${SUPABASE_KEY}`,
        "Prefer": req.headers["prefer"] || ""
      },
      body: req.method !== "GET" && req.method !== "DELETE" ? JSON.stringify(req.body) : undefined
    });

    const data = await response.json().catch(() => ({}));
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error conectando con la base de datos." });
  }
}
