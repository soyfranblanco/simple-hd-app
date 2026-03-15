import React, { useState } from "react";

const SYSTEM_PROMPT = `Sos un consultor especializado en el método SIMPLE de Diseño Humano, con 15 años de experiencia asesorando a empresarios y directivos. Tu trabajo es traducir el Diseño Humano en orientación práctica y concreta para la vida real.

TONO Y ESTILO:
- Voseo rioplatense siempre. Todo en español.
- Tono cálido, directo, sin solemnidad. Como un amigo muy inteligente que sabe mucho.
- Frases cortas. Sin paja. Sin intro genérica tipo "gran pregunta" o "en el Diseño Humano...".
- Nunca: auras, vibraciones, chakras, encarnación, laburo, energías cósmicas.
- No uses el nombre de la persona, solo "vos" y "tu".
- Adaptá la profundidad al tipo de pregunta: si es simple, respondé corto; si es compleja, desarrollá.

CÓMO USAR EL DISEÑO HUMANO EN TUS RESPUESTAS:
- Siempre anclá tu respuesta en el tipo, autoridad, perfil o centros de la persona — pero traducilo a consecuencias prácticas, no como clase teórica.
- Nombrá los conceptos de DH (Generador, Sacral, perfil 4/6, etc.) porque ayuda a que la persona aprenda su propio lenguaje. Pero siempre explicá qué significa en términos concretos.
- Puertas y canales específicos: mencionarlos SOLO si la persona pregunta por detalles técnicos. En el resto de los casos, traducí esa energía a comportamiento observable.

CÓMO RESPONDER SEGÚN EL TIPO DE PREGUNTA:
- Pregunta genérica o amplia (ej: "¿cómo tomo mejores decisiones?"): hacé UNA pregunta de contexto antes de responder. Necesitás saber de qué decisión se trata para dar algo útil.
- Pregunta específica con contexto claro: respondé directo, anclado en su diseño.
- Pregunta sobre relaciones o vínculos: usá su perfil y tipo para explicar su patrón natural de relacionarse.
- Pregunta sobre liderazgo o equipos: enfocate en su estrategia y autoridad como base de su estilo natural.
- Pregunta sobre dinero o proyectos: anclá en sus centros definidos y su firma.
- Pregunta sobre bienestar o energía: usá el centro Sacral y Raíz para explicar su relación con el esfuerzo.
- Pregunta sobre propósito: usá perfil y tipo para hablar de su camino natural, sin sonar a autoayuda.

LÍMITES CLAROS:
- Si la pregunta no tiene nada que ver con el Diseño Humano ni con el desarrollo personal o profesional, decí amablemente que no es tu área.
- No hagas diagnósticos de salud mental ni médicos.
- Si falta contexto para dar una respuesta útil, preguntá antes de responder.`;

const DEMO_USER = {
  nombre: "Francisco", tipo: "Generador", autoridad: "Sacral", perfil: "4/6",
  estrategia: "Responder", firma: "Satisfacción",
  centros: { Bazo: "defined", Sacral: "defined", Raiz: "defined" },
  canales: ["28-38", "50-27", "42-53"],
  entorno: "Cuevas", motivacion: "Esperanza"
};

const CHIPS = [
  "¿Cómo tomo decisiones importantes?",
  "¿Cuál es mi superpoder en el trabajo?",
  "¿Por qué me agoto tan seguido?",
  "¿Cómo atraigo mejores oportunidades?",
  "¿Cómo comunico mi servicio?",
  "¿Cómo me vinculo mejor con los demás?"
];

const C = { bg: "#080808", gold: "#b89a4e", txt: "#f0ebe0", dim: "rgba(240,235,224,0.45)" };

function md(t) {
  return t.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#d4b96a">$1</strong>').replace(/\n/g, "<br/>");
}

const logo = { fontFamily: "monospace", fontSize: ".7rem", letterSpacing: ".5em", color: "#b89a4e", border: "1px solid #b89a4e", padding: ".4em 1em", display: "inline-block", marginBottom: "3rem" };
const lbl = { fontFamily: "monospace", fontSize: ".55rem", letterSpacing: ".3em", color: "#b89a4e", textTransform: "uppercase", display: "block", marginBottom: ".35rem" };
const inp = { width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(184,154,78,.3)", color: "#f0ebe0", fontFamily: "Georgia,serif", fontSize: ".95rem", padding: ".6rem 0", outline: "none", marginBottom: "1.3rem", display: "block", boxSizing: "border-box" };

function Eye({ value, onChange, placeholder = "Contraseña" }) {
  const [s, setS] = useState(false);
  return (
    <div style={{ position: "relative", marginBottom: "1.3rem" }}>
      <input style={{ ...inp, marginBottom: 0, paddingRight: "2rem" }} type={s ? "text" : "password"} placeholder={placeholder} value={value} onChange={onChange} />
      <button onClick={() => setS(v => !v)} style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "rgba(240,235,224,.45)", fontSize: "1rem" }}>
        {s ? "🙈" : "👁"}
      </button>
    </div>
  );
}

function Welcome({ go }) {
  return (
    <div style={{ background: C.bg, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", fontFamily: "Georgia,serif", color: C.txt }}>
      <div style={logo}>SIMPLE</div>
      <div style={{ textAlign: "center", maxWidth: 560 }}>
        <div style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 300, lineHeight: 1.25, marginBottom: "1.4rem" }}>
          Tu manual de instrucciones<br/>

          <span style={{ color: C.gold, fontStyle: "italic" }}>personalizado.</span>
        </div>
        <div style={{ color: C.dim, fontSize: "1rem", lineHeight: 1.8, maxWidth: 460, margin: "0 auto .6rem" }}>
          Todo lo que necesitás saber sobre cómo funcionás.
        </div>
        <div style={{ color: "rgba(240,235,224,.3)", fontSize: ".85rem", fontFamily: "monospace", letterSpacing: ".05em", marginBottom: "2.5rem" }}>
          Sin respuestas genéricas. Creado a tu medida.
        </div>
        <div style={{ maxWidth: 300, margin: "0 auto", display: "flex", flexDirection: "column", gap: ".8rem" }}>
          <button onClick={() => go("register")} style={{ background: C.gold, color: C.bg, border: "none", fontFamily: "monospace", fontSize: ".65rem", letterSpacing: ".3em", padding: ".85em 2em", cursor: "pointer", textTransform: "uppercase", width: "100%" }}>
            Crear mi cuenta
          </button>
          <button onClick={() => go("login")} style={{ background: "transparent", color: C.dim, border: "1px solid rgba(184,154,78,.3)", fontFamily: "monospace", fontSize: ".65rem", letterSpacing: ".3em", padding: ".85em 2em", cursor: "pointer", textTransform: "uppercase", width: "100%" }}>
            Ya tengo cuenta
          </button>
        </div>
      </div>
      <div style={{ position: "fixed", bottom: "2rem", fontFamily: "monospace", fontSize: ".55rem", color: "rgba(240,235,224,.2)", letterSpacing: ".2em" }}>
        © SIMPLE — DISEÑO HUMANO
      </div>
    </div>
  );
}

function Register({ go }) {
  const [f, setF] = useState({ nom: "", ape: "", email: "", tel: "", fecha: "", hora: "", lugar: "", pass: "" });
  const [err, setErr] = useState("");
  const u = (k, v) => setF(p => ({ ...p, [k]: v }));
  function ok() {
    if (!f.nom || !f.ape || !f.email || !f.fecha || !f.hora || !f.lugar || !f.pass) { setErr("Completá todos los campos obligatorios."); return; }
    go("pending", f.email);
  }
  return (
    <div style={{ background: C.bg, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", padding: "2.5rem 2rem", fontFamily: "Georgia,serif", color: C.txt, overflowY: "auto" }}>
      <div style={logo}>SIMPLE</div>
      <div style={{ width: "100%", maxWidth: 420 }}>
        <div style={{ fontSize: "1.5rem", fontWeight: 300, textAlign: "center", marginBottom: ".4rem" }}>Crear cuenta</div>
        <div style={{ color: C.dim, textAlign: "center", marginBottom: "1.5rem", fontSize: ".9rem", lineHeight: 1.6 }}>Ingresá tus datos para calcular tu diseño.</div>
        <div style={{ border: "1px solid rgba(184,154,78,.2)", padding: "2.5rem", background: "rgba(255,255,255,.02)" }}>
          {err && <div style={{ color: "#c06040", fontFamily: "monospace", fontSize: ".63rem", marginBottom: ".8rem", textAlign: "center" }}>{err}</div>}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div><label style={lbl}>Nombre *</label><input style={inp} placeholder="Tu nombre" value={f.nom} onChange={e => u("nom", e.target.value)} /></div>
            <div><label style={lbl}>Apellido *</label><input style={inp} placeholder="Tu apellido" value={f.ape} onChange={e => u("ape", e.target.value)} /></div>
          </div>
          <label style={lbl}>Email *</label>
          <input style={inp} type="email" placeholder="tu@email.com" value={f.email} onChange={e => u("email", e.target.value)} />
          <label style={lbl}>Teléfono</label>
          <input style={inp} type="tel" placeholder="+54 11 0000 0000" value={f.tel} onChange={e => u("tel", e.target.value)} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div><label style={lbl}>Fecha *</label><input style={inp} type="date" value={f.fecha} onChange={e => u("fecha", e.target.value)} /></div>
            <div><label style={lbl}>Hora *</label><input style={inp} type="time" value={f.hora} onChange={e => u("hora", e.target.value)} /></div>
          </div>
          <label style={lbl}>Lugar de nacimiento *</label>
          <input style={inp} placeholder="Ciudad, País" value={f.lugar} onChange={e => u("lugar", e.target.value)} />
          <label style={lbl}>Contraseña *</label>
          <Eye value={f.pass} onChange={e => u("pass", e.target.value)} />
          <button onClick={ok} style={{ background: C.gold, color: C.bg, border: "none", fontFamily: "monospace", fontSize: ".65rem", letterSpacing: ".3em", padding: ".85em 2em", cursor: "pointer", textTransform: "uppercase", width: "100%" }}>Registrarme</button>
        </div>
        <div style={{ textAlign: "center", margin: "1.2rem 0", color: C.dim, fontFamily: "monospace", fontSize: ".7rem" }}>
          ¿Ya tenés cuenta? <button onClick={() => go("login")} style={{ color: C.gold, background: "none", border: "none", cursor: "pointer", fontFamily: "monospace", fontSize: ".63rem" }}>Ingresá acá</button>
        </div>
      </div>
    </div>
  );
}

function Pending({ email, go }) {
  return (
    <div style={{ background: C.bg, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", fontFamily: "Georgia,serif", color: C.txt }}>
      <div style={logo}>SIMPLE</div>
      <div style={{ textAlign: "center", maxWidth: 460 }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "1.2rem" }}>✉️</div>
        <div style={{ fontSize: "1.5rem", fontWeight: 300, marginBottom: ".8rem" }}>Revisá tu email</div>
        <div style={{ color: C.dim, lineHeight: 1.7, marginBottom: "1.5rem" }}>
          Te mandamos un link a <span style={{ color: C.gold }}>{email}</span>.<br /><br />
          Una vez que confirmés podés ingresar y explorar tu diseño.
        </div>
        <div style={{ border: "1px solid rgba(184,154,78,.2)", padding: "1rem 1.5rem", background: "rgba(184,154,78,.04)", marginBottom: "2rem", fontFamily: "monospace", fontSize: ".68rem", color: C.dim, lineHeight: 1.8 }}>
          ¿No recibiste el email? Revisá tu carpeta de spam.
        </div>
        <button onClick={() => go("welcome")} style={{ color: C.gold, background: "none", border: "none", cursor: "pointer", fontFamily: "monospace", fontSize: ".63rem" }}>← Volver al inicio</button>
      </div>
    </div>
  );
}

function Login({ go }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");
  function ok() {
    if (!email || !pass) { setErr("Completá email y contraseña."); return; }
    if (pass === "demo") { go("chat"); return; }
    setErr("Contraseña incorrecta. Usá 'demo' para el prototipo.");
  }
  return (
    <div style={{ background: C.bg, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", fontFamily: "Georgia,serif", color: C.txt }}>
      <div style={logo}>SIMPLE</div>
      <div style={{ width: "100%", maxWidth: 420 }}>
        <div style={{ fontSize: "1.5rem", fontWeight: 300, textAlign: "center", marginBottom: ".4rem" }}>Ingresar</div>
        <div style={{ color: C.dim, textAlign: "center", marginBottom: "1.5rem", fontSize: ".9rem" }}>Bienvenido de nuevo.</div>
        <div style={{ border: "1px solid rgba(184,154,78,.2)", padding: "2.5rem", background: "rgba(255,255,255,.02)" }}>
          {err && <div style={{ color: "#c06040", fontFamily: "monospace", fontSize: ".63rem", marginBottom: ".8rem", textAlign: "center" }}>{err}</div>}
          <label style={lbl}>Email</label>
          <input style={inp} type="email" placeholder="tu@email.com" value={email} onChange={e => setEmail(e.target.value)} />
          <label style={lbl}>Contraseña</label>
          <Eye value={pass} onChange={e => setPass(e.target.value)} placeholder="Tu contraseña" />
          <button onClick={ok} style={{ background: C.gold, color: C.bg, border: "none", fontFamily: "monospace", fontSize: ".65rem", letterSpacing: ".3em", padding: ".85em 2em", cursor: "pointer", textTransform: "uppercase", width: "100%" }}>Ingresar</button>
        </div>
        <div style={{ textAlign: "center", margin: "1.2rem 0", color: C.dim, fontFamily: "monospace", fontSize: ".7rem" }}>
          ¿No tenés cuenta? <button onClick={() => go("register")} style={{ color: C.gold, background: "none", border: "none", cursor: "pointer", fontFamily: "monospace", fontSize: ".63rem" }}>Registrate acá</button>
        </div>
      </div>
    </div>
  );
}

function Chat({ go }) {
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const sys = SYSTEM_PROMPT + " DISEÑO: " + JSON.stringify(DEMO_USER);
  const lastAssistantRef = React.useRef(null);
  const chatContainerRef = React.useRef(null);

  const lastUserRef = React.useRef(null);

  React.useEffect(() => {
    if (!msgs.length) return;
    const last = msgs[msgs.length - 1];
    if (last.role === "user" && lastUserRef.current && chatContainerRef.current) {
      const container = chatContainerRef.current;
      const el = lastUserRef.current;
      container.scrollTop = el.offsetTop - container.offsetTop - 20;
    }
    if (last.role === "assistant" && lastAssistantRef.current && chatContainerRef.current) {
      const container = chatContainerRef.current;
      const el = lastAssistantRef.current;
      container.scrollTop = el.offsetTop - container.offsetTop - 20;
    }
  }, [msgs]);

  async function send(t) {
    const txt = t || input.trim();
    if (!txt || loading) return;
    setInput("");
    const next = [...msgs, { role: "user", content: txt }];
    setMsgs(next);
    setLoading(true);
    try {
      const r = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1000, system: sys, messages: next })
      });
      const d = await r.json();
      setMsgs([...next, { role: "assistant", content: d?.content?.[0]?.text || "Error." }]);
    } catch { setMsgs([...next, { role: "assistant", content: "Error de conexión." }]); }
    setLoading(false);
  }

  return (
    <div style={{ background: C.bg, minHeight: "100vh", display: "flex", flexDirection: "column", fontFamily: "Georgia,serif", color: C.txt }}>
      <style>{"@keyframes p{0%,80%,100%{opacity:.2;transform:scale(.8)}40%{opacity:1;transform:scale(1)}}"}</style>
      <div style={{ padding: ".9rem 2rem", borderBottom: "1px solid rgba(184,154,78,.2)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ ...logo, marginBottom: 0 }}>SIMPLE</div>
        <button onClick={() => go("welcome")} style={{ color: C.gold, background: "none", border: "none", cursor: "pointer", fontFamily: "monospace", fontSize: ".6rem" }}>Salir →</button>
      </div>
      <div style={{ padding: ".7rem 2rem", borderBottom: "1px solid rgba(184,154,78,.15)", background: "rgba(255,255,255,.02)", display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
        {[["Tipo", DEMO_USER.tipo], ["Autoridad", DEMO_USER.autoridad], ["Perfil", DEMO_USER.perfil], ["Estrategia", DEMO_USER.estrategia], ["Firma", DEMO_USER.firma]].map(([l, v], i) => (
          <div key={l} style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            {i > 0 && <div style={{ width: 1, height: "1.3rem", background: "rgba(184,154,78,.2)" }} />}
            <div>
              <div style={{ fontFamily: "monospace", fontSize: ".5rem", letterSpacing: ".3em", color: C.gold, textTransform: "uppercase", marginBottom: 2 }}>{l}</div>
              <div style={{ fontSize: ".85rem" }}>{v}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ flex: 1, maxWidth: 760, margin: "0 auto", width: "100%", padding: "0 1.5rem", display: "flex", flexDirection: "column" }}>
        <div ref={chatContainerRef} style={{ flex: 1, padding: "1.8rem 0", paddingRight: "1rem", display: "flex", flexDirection: "column", gap: "1.8rem", overflowY: "auto", maxHeight: "58vh", minHeight: 180 }}>
          {msgs.length === 0 && (
            <div style={{ textAlign: "center", padding: "1.8rem 1rem", border: "1px solid rgba(184,154,78,.15)" }}>
              <div style={{ fontSize: "1.9rem", fontWeight: 300, marginBottom: ".4rem" }}>Hola, <span style={{ color: C.gold, fontStyle: "italic" }}>{DEMO_USER.nombre}</span></div>
              <div style={{ fontSize: ".9rem", color: C.dim, marginBottom: "1.5rem", lineHeight: 1.6 }}>Soy tu consultor personal de Diseño Humano.<br />Haceme cualquier pregunta.</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", justifyContent: "center" }}>
                {CHIPS.map(c => (
                  <button key={c} onClick={() => send(c)} style={{ fontFamily: "monospace", fontSize: ".6rem", padding: ".4em .85em", border: "1px solid rgba(184,154,78,.25)", color: C.dim, cursor: "pointer", background: "transparent" }}
                    onMouseEnter={e => { e.target.style.borderColor = C.gold; e.target.style.color = "#d4b96a"; }}
                    onMouseLeave={e => { e.target.style.borderColor = "rgba(184,154,78,.25)"; e.target.style.color = C.dim; }}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}
          {msgs.map((m, i) => (
            <div key={i}
              ref={m.role === "assistant" && i === msgs.length - 1 ? lastAssistantRef : m.role === "user" && i === msgs.length - 1 ? lastUserRef : null}
              style={{ textAlign: m.role === "user" ? "right" : "left" }}>
              <div style={{ fontFamily: "monospace", fontSize: ".53rem", letterSpacing: ".3em", textTransform: "uppercase", marginBottom: ".3rem", color: m.role === "user" ? "rgba(240,235,224,.3)" : C.gold }}>
                {m.role === "user" ? "Vos" : "SIMPLE"}
              </div>
              <div style={m.role === "user" ? { fontSize: "1rem", fontStyle: "italic", color: "rgba(240,235,224,.55)", lineHeight: 1.7 } : { fontSize: "1rem", color: C.txt, lineHeight: 1.85 }}
                dangerouslySetInnerHTML={{ __html: md(m.content) }} />
            </div>
          ))}
          {loading && (
            <div>
              <div style={{ fontFamily: "monospace", fontSize: ".53rem", letterSpacing: ".3em", color: C.gold, marginBottom: ".3rem" }}>SIMPLE</div>
              <div style={{ display: "flex", gap: 5 }}>
                {[0, 1, 2].map(i => <div key={i} style={{ width: 5, height: 5, background: C.gold, borderRadius: "50%", animation: `p 1.4s ${i * .2}s infinite ease-in-out` }} />)}
              </div>
            </div>
          )}
          
        </div>
        <div style={{ padding: "1rem 0 1.5rem", borderTop: "1px solid rgba(184,154,78,.15)", display: "flex", gap: ".8rem", alignItems: "flex-end" }}>
          <textarea style={{ flex: 1, background: "transparent", border: "none", borderBottom: "1px solid rgba(184,154,78,.25)", color: C.txt, fontFamily: "Georgia,serif", fontSize: ".95rem", padding: ".6rem 0", outline: "none", resize: "none", minHeight: "2rem", lineHeight: 1.5 }}
            value={input} placeholder="Hacé tu pregunta..."
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }} rows={1} />
          <button onClick={() => send()} disabled={loading || !input.trim()} style={{ background: "transparent", border: "1px solid " + C.gold, color: C.gold, fontFamily: "monospace", fontSize: ".6rem", letterSpacing: ".2em", padding: ".6em 1em", cursor: "pointer", textTransform: "uppercase", marginBottom: 2, opacity: loading || !input.trim() ? 0.3 : 1 }}>Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState("welcome");
  const [email, setEmail] = useState("");
  function go(s, e) { if (e) setEmail(e); setScreen(s); }
  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <style>{"*{box-sizing:border-box;margin:0;padding:0}body{background:#080808}input,textarea{color:#f0ebe0!important;-webkit-text-fill-color:#f0ebe0!important;caret-color:#b89a4e}input::placeholder,textarea::placeholder{color:rgba(240,235,224,.3)!important;-webkit-text-fill-color:rgba(240,235,224,.3)!important}input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px #080808 inset!important;-webkit-text-fill-color:#f0ebe0!important}"}</style>
      {screen === "welcome" && <Welcome go={go} />}
      {screen === "register" && <Register go={go} />}
      {screen === "pending" && <Pending email={email} go={go} />}
      {screen === "login" && <Login go={go} />}
      {screen === "chat" && <Chat go={go} />}
    </div>
  );
}
