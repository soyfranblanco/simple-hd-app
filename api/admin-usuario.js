export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const SUPABASE_URL = process.env.SUPABASE_URL || "https://ebczaoptweskqzuzrmls.supabase.co";
  const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

  const { nombre, apellido, email, password, diseno } = req.body;
  if (!nombre || !apellido || !email || !password || !diseno) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }

  try {
    // 1. Crear usuario en Supabase Auth sin verificación de email
    const authRes = await fetch(`${SUPABASE_URL}/auth/v1/admin/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_SERVICE_KEY,
        "Authorization": `Bearer ${SUPABASE_SERVICE_KEY}`
      },
      body: JSON.stringify({
        email,
        password,
        email_confirm: true,
        user_metadata: { nombre, apellido }
      })
    });

    const authData = await authRes.json();
    if (!authRes.ok) {
      return res.status(authRes.status).json({ error: authData.message || authData.error || "Error al crear usuario en Auth" });
    }

    // 2. Guardar en tabla usuarios con su diseño
    const dbRes = await fetch(`${SUPABASE_URL}/rest/v1/usuarios`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_SERVICE_KEY,
        "Authorization": `Bearer ${SUPABASE_SERVICE_KEY}`,
        "Prefer": "return=representation"
      },
      body: JSON.stringify({ email: email.toLowerCase().trim(), nombre, apellido, password_hash: password, diseno })
    });

    const dbData = await dbRes.json();
    if (!dbRes.ok) {
      return res.status(dbRes.status).json({ error: dbData });
    }

    return res.status(200).json({ ok: true, usuario: dbData[0] });
  } catch (error) {
    console.error("Error en admin-usuario:", error);
    return res.status(500).json({ error: "Error interno" });
  }
}
