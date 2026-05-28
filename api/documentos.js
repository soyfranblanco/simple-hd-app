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

  const { action, email, id, fields } = req.body;

  try {
    // ── Obtener documentos de un usuario ──────────────────────────────────
    if (action === "get") {
      if (!email) return res.status(400).json({ error: "Falta email" });
      const r = await fetch(`${SUPABASE_URL}/rest/v1/documentos?usuario_email=eq.${encodeURIComponent(email)}&order=created_at.asc`, { headers });
      const data = await r.json();
      if (!r.ok) return res.status(r.status).json({ error: data });
      return res.status(200).json(data);
    }

    // ── Insertar documento nuevo ──────────────────────────────────────────
    if (action === "insert") {
      if (!fields) return res.status(400).json({ error: "Faltan fields" });
      const r = await fetch(`${SUPABASE_URL}/rest/v1/documentos`, {
        method: "POST", headers,
        body: JSON.stringify(fields)
      });
      const data = await r.json();
      if (!r.ok) return res.status(r.status).json({ error: data });
      return res.status(200).json(data);
    }

    // ── Actualizar documento (toggle activo) ──────────────────────────────
    if (action === "update") {
      if (!id || !fields) return res.status(400).json({ error: "Faltan campos" });
      const r = await fetch(`${SUPABASE_URL}/rest/v1/documentos?id=eq.${id}`, {
        method: "PATCH", headers,
        body: JSON.stringify(fields)
      });
      const data = await r.json();
      if (!r.ok) return res.status(r.status).json({ error: data });
      return res.status(200).json(data);
    }

    // ── Eliminar documento ────────────────────────────────────────────────
    if (action === "delete") {
      if (!id) return res.status(400).json({ error: "Falta id" });
      const r = await fetch(`${SUPABASE_URL}/rest/v1/documentos?id=eq.${id}`, {
        method: "DELETE", headers
      });
      if (!r.ok) {
        const data = await r.json();
        return res.status(r.status).json({ error: data });
      }
      return res.status(200).json({ deleted: true });
    }

    return res.status(400).json({ error: "Acción no reconocida" });
  } catch (error) {
    console.error("Error en documentos:", error);
    return res.status(500).json({ error: "Error interno" });
  }
}
