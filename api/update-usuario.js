export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { email, fields } = req.body;
    if (!email || !fields) return res.status(400).json({ error: "Faltan email o fields" });

    const SUPABASE_URL = process.env.SUPABASE_URL || "https://ebczaoptweskqzuzrmls.supabase.co";
    const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/usuarios?email=eq.${encodeURIComponent(email)}`,
      {
        method: "PATCH",
        headers: {
          "apikey": SUPABASE_SERVICE_KEY,
          "Authorization": `Bearer ${SUPABASE_SERVICE_KEY}`,
          "Content-Type": "application/json",
          "Prefer": "return=representation"
        },
        body: JSON.stringify(fields)
      }
    );

    const data = await response.json();
    if (!response.ok) return res.status(response.status).json({ error: data });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error actualizando usuario" });
  }
}
