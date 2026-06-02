const codes = new Map();

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).end();

  const { action, code } = req.body;
  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  if (action === "send-code") {
    // Generar código de 6 dígitos
    const newCode = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutos
    codes.set("admin", { code: newCode, expiresAt });

    try {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${RESEND_API_KEY}` },
        body: JSON.stringify({
          from: "SIMPLE <noreply@metodosimple.ar>",
          to: ["soyfranblanco@gmail.com"],
          subject: "Código de acceso al admin — SIMPLE",
          text: `Tu código de acceso es: ${newCode}\n\nVence en 10 minutos.`
        })
      });
      if (!r.ok) { const err = await r.json(); return res.status(500).json({ error: err }); }
      return res.status(200).json({ ok: true });
    } catch (e) { return res.status(500).json({ error: e.message }); }
  }

  if (action === "verify-code") {
    const stored = codes.get("admin");
    if (!stored) return res.status(400).json({ error: "No hay código activo." });
    if (Date.now() > stored.expiresAt) {
      codes.delete("admin");
      return res.status(400).json({ error: "El código expiró. Volvé a intentar." });
    }
    if (code !== stored.code) return res.status(400).json({ error: "Código incorrecto." });
    codes.delete("admin");
    return res.status(200).json({ ok: true });
  }

  return res.status(400).json({ error: "Acción no reconocida" });
}
