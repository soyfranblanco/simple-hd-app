export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const SUPABASE_URL = process.env.SUPABASE_URL || "https://ebczaoptweskqzuzrmls.supabase.co";
  const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
  const headers = {
    "apikey": SUPABASE_SERVICE_KEY,
    "Authorization": `Bearer ${SUPABASE_SERVICE_KEY}`,
    "Content-Type": "application/json",
    "Prefer": "return=representation"
  };

  const { action, email, fields } = req.body;

  try {
    // ── Obtener usuario por email ──────────────────────────────────────────
    if (action === "get") {
      if (!email) return res.status(400).json({ error: "Falta email" });
      const r = await fetch(`${SUPABASE_URL}/rest/v1/usuarios?email=eq.${encodeURIComponent(email)}&select=*`, { headers });
      const data = await r.json();
      if (!r.ok) return res.status(r.status).json({ error: data });
      return res.status(200).json(data);
    }

    // ── Obtener todos los usuarios (admin) ────────────────────────────────
    if (action === "get-all") {
      const r = await fetch(`${SUPABASE_URL}/rest/v1/usuarios?select=email,nombre,apellido,diseno,empresa,created_at&order=created_at.desc`, { headers });
      const data = await r.json();
      if (!r.ok) return res.status(r.status).json({ error: data });
      return res.status(200).json(data);
    }

    // ── Insertar usuario nuevo ────────────────────────────────────────────
    if (action === "insert") {
      if (!fields) return res.status(400).json({ error: "Faltan fields" });
      const r = await fetch(`${SUPABASE_URL}/rest/v1/usuarios`, {
        method: "POST", headers,
        body: JSON.stringify(fields)
      });
      const data = await r.json();
      if (!r.ok) return res.status(r.status).json({ error: data });
      return res.status(200).json(data);
    }

    // ── Actualizar usuario (empresa, diseno, etc) ─────────────────────────
    if (action === "update") {
      if (!email || !fields) return res.status(400).json({ error: "Faltan campos" });
      const r = await fetch(`${SUPABASE_URL}/rest/v1/usuarios?email=eq.${encodeURIComponent(email)}`, {
        method: "PATCH", headers,
        body: JSON.stringify(fields)
      });
      const data = await r.json();
      if (!r.ok) return res.status(r.status).json({ error: data });
      return res.status(200).json(data);
    }

    return res.status(400).json({ error: "Acción no reconocida" });
  } catch (error) {
    console.error("Error en usuarios:", error);
    return res.status(500).json({ error: "Error interno" });
  }
}
