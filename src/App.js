import React, { useState } from "react";

const NUNITO = "'Nunito', sans-serif";
const GEORGIA = "Georgia, serif";

const SYSTEM_PROMPT = `Sos un consultor especializado en el método SIMPLE de Diseño Humano, con 15 años de experiencia asesorando a empresarios y directivos. Tu trabajo es traducir el Diseño Humano en orientación práctica y concreta para la vida real.

TONO Y ESTILO:
- Voseo rioplatense siempre. Todo en español.
- Tono cálido, directo, sin solemnidad. Como un amigo muy inteligente que sabe mucho.
- Frases cortas. Sin paja. Sin intro genérica tipo "gran pregunta" o "en el Diseño Humano...".
- No uses el nombre de la persona, solo "vos" y "tu".
- Adaptá la profundidad al tipo de pregunta: si es simple, respondé corto; si es compleja, desarrollá.

VOCABULARIO — USÁ SIEMPRE:
trabajar, gestionar, generar, desafío, potencial, foco, procesar, alinear, impacto, claridad, decisión, energía, respuesta, autoridad, estrategia, diseño, perfil, tipo, centro, canal.

VOCABULARIO — USÁ CON CRITERIO (solo cuando suena natural, no forzado):
arrancar, bajada práctica, pegar, dar vuelta, soltar, meterse, empujar, tirarse a algo, caer (ej: "hasta que no cae, no decidís").

VOCABULARIO — NUNCA:
- Lunfardo: laburo, posta, quilombo, fiaca, piola, copado, berretín, chabón, zarpado, "re" como intensificador.
- Autoayuda / coaching espiritual: vibrar, vibración, manifestar, manifestación, sanar, sanación, propósito de vida, misión de alma, despertar, expandir tu conciencia, anclar esa energía, integrar tu sombra, auras, chakras, encarnación, energías cósmicas.

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

const USERS = {
  "mark@multiplaihealth.com": {
    nombre: "Mark Paul", apellido: "Ramondt", tipo: "Generador", autoridad: "Emocional (Plexo Solar)", perfil: "4/1",
    estrategia: "Responder", firma: "Satisfacción", no_self_theme: "Frustración", definicion: "Triple",
    centros: { Emocional: "defined", Ajna: "defined", Sacral: "defined", Bazo: "undefined", Corazon: "undefined", Cabeza: "defined", Garganta: "defined", G: "defined", Raiz: "defined" },
    canales_definidos: ["43-23", "64-47", "46-29", "30-41"],
    variables: { motivación: "Innocence", digestión: "Calm", perspectiva: "Perspective 6", entorno: "Mountains" },
    fecha_nacimiento: "1969-11-14", lugar_nacimiento: "Ciudad de México, México"
  },
  "tomas.fileni@gmail.com": {
    nombre: "Tomás", apellido: "Fileni", tipo: "Generador", autoridad: "Sacral", perfil: "2/4",
    estrategia: "Responder", firma: "Satisfacción", no_self_theme: "Frustración", definicion: "Doble",
    centros: { Bazo: "defined", Sacral: "defined", Emocional: "undefined", Ajna: "undefined", Raiz: "undefined", Corazon: "defined", Garganta: "undefined", G: "defined", Cabeza: "undefined" },
    canales_definidos: ["26-44", "46-29"],
    variables: { motivación: "Guilt", digestión: "Smell", entorno: "Valleys", perspectiva: "Perspective 5" },
    fecha_nacimiento: "1988-02-15", lugar_nacimiento: "Buenos Aires, Argentina"
  },
  "blondyar@gmail.com": {
    nombre: "Daniela", apellido: "Cuppi", tipo: "Generador Manifestante", autoridad: "Sacral", perfil: "6/2",
    estrategia: "Responder y luego informar", firma: "Satisfacción/Paz", no_self_theme: "Frustración/Enojo", definicion: "Simple",
    centros: { Sacral: "defined", Bazo: "undefined", Emocional: "undefined", Ajna: "undefined", Raiz: "defined", Corazon: "undefined", Cabeza: "undefined", G: "defined", Garganta: "defined" },
    canales_definidos: ["10-34", "31-7", "9-52"],
    variables: { motivación: "Hope", digestión: "Calm", perspectiva: "Personal", entorno: "Shores" },
    fecha_nacimiento: "1986-06-30", lugar_nacimiento: "Córdoba, Argentina"
  },
  "mateo@cookunity.com": {
    nombre: "Mateo", apellido: "Marietti", tipo: "Proyector", autoridad: "Emocional (Plexo Solar)", perfil: "3/5",
    estrategia: "Esperar invitación", firma: "Éxito", no_self_theme: "Amargura", definicion: "Doble",
    centros: { Ajna: "defined", G: "undefined", Emocional: "defined", Cabeza: "undefined", Corazon: "undefined", Bazo: "defined", Sacral: "undefined", Garganta: "defined", Raiz: "defined" },
    canales_definidos: ["43-23", "28-38", "30-41"],
    variables: { motivación: "Desire", digestión: "Thirst", entorno: "Caves", perspectiva: "Personal" },
    fecha_nacimiento: "1985-02-15", lugar_nacimiento: "Buenos Aires, Argentina"
  },
  "soyfranblanco@gmail.com": {
    nombre: "Francisco", apellido: "Blanco", tipo: "Generador", autoridad: "Sacral", perfil: "4/6",
    estrategia: "Responder", firma: "Satisfacción", no_self_theme: "Frustración", definicion: "Simple",
    centros: { Corazon: "undefined", Cabeza: "undefined", G: "undefined", Emocional: "undefined", Ajna: "undefined", Raiz: "defined", Sacral: "defined", Garganta: "undefined", Bazo: "defined" },
    canales_definidos: ["28-38", "50-27", "42-53"],
    variables: { motivación: "Hope", perspectiva: "Perspective 6", entorno: "Caves", digestión: "Calm" },
    fecha_nacimiento: "1984-05-06", lugar_nacimiento: "San Andrés de Giles, Argentina"
  },
  "dejatellevaralegremente@gmail.com": {
    nombre: "Mercedes", apellido: "González", tipo: "Proyector", autoridad: "Esplénica (Bazo)", perfil: "4/1",
    estrategia: "Esperar invitación", firma: "Éxito", no_self_theme: "Amargura", definicion: "Simple",
    centros: { Cabeza: "undefined", Corazon: "undefined", Ajna: "undefined", G: "defined", Emocional: "undefined", Raiz: "undefined", Bazo: "defined", Sacral: "undefined", Garganta: "undefined" },
    canales_definidos: ["10-57"],
    variables: { motivación: "Innocence", entorno: "Shores", perspectiva: "Perspective 6", digestión: "Calm" },
    fecha_nacimiento: "1990-01-03", lugar_nacimiento: "Buenos Aires, Argentina"
  }
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
const inp = { width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(184,154,78,.3)", color: "#f0ebe0", fontFamily: NUNITO, fontSize: ".95rem", padding: ".6rem 0", outline: "none", marginBottom: "1.3rem", display: "block", boxSizing: "border-box" };

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
    <div style={{ background: C.bg, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", fontFamily: NUNITO, color: C.txt }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&display=swap');`}</style>
      <div style={logo}>SIMPLE</div>
      <div style={{ textAlign: "center", maxWidth: 560 }}>
        <div style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 300, lineHeight: 1.25, marginBottom: "1.4rem", fontFamily: GEORGIA }}>
          Tu manual de instrucciones<br/>
          <span style={{ color: C.gold, fontStyle: "italic" }}>personalizado.</span>
        </div>
        <div style={{ color: C.dim, fontSize: "1rem", lineHeight: 1.8, maxWidth: 460, margin: "0 auto .6rem", fontFamily: NUNITO, fontWeight: 400 }}>
          Todo lo que necesitás saber sobre cómo funcionás.
        </div>
        <div style={{ color: "rgba(240,235,224,.3)", fontSize: ".85rem", fontFamily: NUNITO, fontWeight: 400, letterSpacing: ".05em", marginBottom: "2.5rem" }}>
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
    const user = USERS[email.toLowerCase().trim()];
    if (!user) { setErr("Email no registrado en el prototipo."); return; }
    if (pass !== "demo") { setErr("Contraseña incorrecta. Usá 'demo' para el prototipo."); return; }
    go("chat", email.toLowerCase().trim());
  }
  return (
    <div style={{ background: C.bg, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", fontFamily: NUNITO, color: C.txt }}>
      <div style={logo}>SIMPLE</div>
      <div style={{ width: "100%", maxWidth: 420 }}>
        <div style={{ fontSize: "1.5rem", fontWeight: 300, textAlign: "center", marginBottom: ".4rem", fontFamily: GEORGIA }}>Ingresar</div>
        <div style={{ color: C.dim, textAlign: "center", marginBottom: "1.5rem", fontSize: ".9rem" }}>Bienvenido de nuevo.</div>
        <div style={{ border: "1px solid rgba(184,154,78,.2)", padding: "2.5rem", background: "rgba(255,255,255,.02)" }}>
          {err && <div style={{ color: "#c06040", fontFamily: "monospace", fontSize: ".63rem", marginBottom: ".8rem", textAlign: "center" }}>{err}</div>}
          <label style={lbl}>Email</label>
          <input style={inp} type="email" placeholder="tu@email.com" value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === "Enter" && ok()} />
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

function Chat({ go, userEmail }) {
  const user = USERS[userEmail] || USERS["soyfranblanco@gmail.com"];
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const sys = SYSTEM_PROMPT + " DISEÑO DE LA PERSONA: " + JSON.stringify(user);
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

  const [tab, setTab] = useState(null);
  const [lang, setLang] = useState("es");

  return (
    <div style={{ background: C.bg, minHeight: "100vh", display: "flex", flexDirection: "column", fontFamily: NUNITO, color: C.txt }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&display=swap');
        @keyframes p{0%,80%,100%{opacity:.2;transform:scale(.8)}40%{opacity:1;transform:scale(1)}}
        .tab-btn { background: none; border: none; cursor: pointer; font-family: monospace; font-size: .58rem; letter-spacing: .25em; text-transform: uppercase; padding: .5rem .9rem; color: rgba(240,235,224,.4); transition: color .2s; }
        .tab-btn:hover { color: #b89a4e; }
        .tab-btn.active { color: #b89a4e; border-bottom: 1px solid #b89a4e; }
        .tab-panel { padding: 1.2rem 2rem; border-bottom: 1px solid rgba(184,154,78,.1); background: rgba(255,255,255,.02); font-size: .88rem; line-height: 1.8; color: rgba(240,235,224,.7); font-family: '${NUNITO}'; }
      `}</style>

      {/* Header */}
      <div style={{ padding: ".9rem 2rem", borderBottom: "1px solid rgba(184,154,78,.2)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ ...logo, marginBottom: 0 }}>SIMPLE</div>
        <button onClick={() => go("welcome")} style={{ color: C.gold, background: "none", border: "none", cursor: "pointer", fontFamily: "monospace", fontSize: ".6rem" }}>Salir →</button>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: "1px solid rgba(184,154,78,.15)", display: "flex", alignItems: "center", paddingLeft: "1rem", gap: ".2rem" }}>
        {[["mi-diseno", "Mi diseño"], ["inspiracion", "Inspiración"], ["como-funciona", "Cómo funciona"]].map(([id, label]) => (
          <button key={id} className={`tab-btn${tab === id ? " active" : ""}`}
            onClick={() => setTab(tab === id ? null : id)}>
            {label}
          </button>
        ))}
        <div style={{ marginLeft: "auto", display: "flex", gap: ".3rem", paddingRight: "1rem" }}>
          {["es", "en"].map(l => (
            <button key={l} onClick={() => setLang(l)}
              style={{ background: lang === l ? "rgba(184,154,78,.15)" : "none", border: "1px solid rgba(184,154,78,.25)", color: lang === l ? C.gold : C.dim, fontFamily: "monospace", fontSize: ".55rem", letterSpacing: ".2em", padding: ".3em .7em", cursor: "pointer", textTransform: "uppercase" }}>
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Tab panels */}
      {tab === "mi-diseno" && (
        <div className="tab-panel">
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            {[["Tipo", user.tipo], ["Autoridad", user.autoridad], ["Perfil", user.perfil], ["Estrategia", user.estrategia], ["Firma", user.firma], ["Entorno", user.variables?.entorno]].map(([l, v]) => (
              <div key={l}>
                <div style={{ fontFamily: "monospace", fontSize: ".5rem", letterSpacing: ".3em", color: C.gold, textTransform: "uppercase", marginBottom: 3 }}>{l}</div>
                <div style={{ fontSize: ".9rem" }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      {tab === "inspiracion" && (
        <div className="tab-panel">
          <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
            {CHIPS.map(c => (
              <button key={c} onClick={() => { send(c); setTab(null); }}
                style={{ fontFamily: NUNITO, fontSize: ".8rem", padding: ".4em .9em", border: "1px solid rgba(184,154,78,.25)", color: C.dim, cursor: "pointer", background: "transparent", borderRadius: 2 }}
                onMouseEnter={e => { e.target.style.borderColor = C.gold; e.target.style.color = "#d4b96a"; }}
                onMouseLeave={e => { e.target.style.borderColor = "rgba(184,154,78,.25)"; e.target.style.color = C.dim; }}>
                {c}
              </button>
            ))}
          </div>
        </div>
      )}
      {tab === "como-funciona" && (
        <div className="tab-panel" style={{ maxWidth: 640 }}>
          <p style={{ marginTop: 0 }}><strong style={{ color: C.gold }}>SIMPLE</strong> es tu consultor personal de Diseño Humano. Podés hacerle cualquier pregunta sobre cómo tomás decisiones, cómo te relacionás, cómo gestionás tu energía o cómo avanzar en tu trabajo.</p>
          <p>No da respuestas genéricas. Todo lo que te diga está basado en tu diseño específico — tu tipo, autoridad, perfil y centros.</p>
          <p style={{ marginBottom: 0 }}>Cuanto más contexto le des sobre tu situación concreta, mejor va a ser la respuesta. No hace falta que sepas nada de Diseño Humano para usarlo.</p>
        </div>
      )}
      <div style={{ flex: 1, maxWidth: 760, margin: "0 auto", width: "100%", padding: "0 1.5rem", display: "flex", flexDirection: "column" }}>
        <div ref={chatContainerRef} style={{ flex: 1, padding: "1.8rem 0", paddingRight: "1rem", display: "flex", flexDirection: "column", gap: "1.8rem", overflowY: "auto", maxHeight: "58vh", minHeight: 180 }}>
          {msgs.length === 0 && (
            <div style={{ textAlign: "center", padding: "1.8rem 1rem", border: "1px solid rgba(184,154,78,.15)" }}>
              <div style={{ fontSize: "1.9rem", fontWeight: 300, marginBottom: ".4rem", fontFamily: GEORGIA }}>Hola, <span style={{ color: C.gold, fontStyle: "italic" }}>{user.nombre}</span></div>
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
              <div style={m.role === "user" ? { fontSize: "1rem", fontStyle: "italic", color: "rgba(240,235,224,.55)", lineHeight: 1.7, fontFamily: NUNITO } : { fontSize: "1rem", color: C.txt, lineHeight: 1.85, fontFamily: NUNITO }}
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
      {screen === "chat" && <Chat go={go} userEmail={email} />}
    </div>
  );
}
