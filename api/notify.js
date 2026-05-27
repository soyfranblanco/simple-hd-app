export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { subject, body } = req.body;
  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "SIMPLE <noreply@metodosimple.ar>",
        to: ["soyfranblanco@gmail.com"],
        subject,
        text: body,
      }),
    });

    if (!r.ok) {
      const err = await r.json();
      return res.status(500).json({ error: err });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
