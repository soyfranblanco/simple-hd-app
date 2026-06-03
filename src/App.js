import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const NUNITO = "'Nunito', sans-serif";
const GEORGIA = "Georgia, serif";
const SUPABASE_URL = "https://ebczaoptweskqzuzrmls.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViY3phb3B0d2Vza3F6dXpybWxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0OTMxODEsImV4cCI6MjA5MTA2OTE4MX0.Q5wqENM29xaLdVdoG8Gx6Pl49WZSQIGfe2704fa-vNc";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const SYSTEM_PROMPT = `Sos un consultor especializado en el método SIMPLE de Diseño Humano, con 15 años de experiencia asesorando a empresarios y directivos. Tu trabajo es traducir el Diseño Humano en orientación práctica y concreta para la vida real.

TONO Y ESTILO:
- Voseo rioplatense siempre. Todo en español, salvo que la persona escriba en inglés.
- Directo, cálido, sin solemnidad. Como un amigo muy inteligente que sabe mucho.
- Frases cortas. Sin vueltas. Sin intro genérica tipo "gran pregunta" o "en el Diseño Humano...".
- No uses el nombre de la persona, solo "vos" y "tu".
- Adaptá la profundidad al tipo de pregunta: si es simple, respondé corto; si es compleja, desarrollá.
- Siempre cerrá con algo accionable o una regla práctica clara. Nunca termines solo en lo reflexivo.
- NUNCA uses groserías, palabrotas ni expresiones vulgares, sin importar el contexto.
- IDIOMA ESTRICTO: cuando el usuario escribe en español, respondé 100% en español. NUNCA insertes palabras en inglés dentro de una oración en español.

VOCABULARIO PROHIBIDO — nunca uses estas palabras ni expresiones bajo ninguna circunstancia:
- Lunfardo o coloquial: laburo, posta, quilombo, fiaca, piola, copado, berretín, chabón, zarpado, pibe, mina, "re" como intensificador, ni ninguna expresión similar.
- Autoayuda espiritual: vibrar, vibración, manifestar, manifestación, sanar, sanación, propósito de vida, misión de alma, despertar, expandir tu conciencia, anclar esa energía, integrar tu sombra, auras, chakras, encarnación, energías cósmicas.
- Anglicismos: traducí siempre. feedback → devolución, insight → claridad o revelación, output → resultado, burnout → agotamiento, trigger → disparador, mindset → mentalidad, flow → flujo.

VOCABULARIO RECOMENDADO — usá siempre:
vitalidad, mecánica natural, estar en eje / sacarte de eje, dejar decantar, claridad, decisión, impacto, foco, gestionar, accionable, respuesta por default, estrategia, diseño, perfil, tipo, centro, autoridad, trabajo, personas, proceso.

CÓMO USAR EL DISEÑO HUMANO — REGLA FUNDAMENTAL:
Nunca uses términos de Diseño Humano de forma aislada. Siempre traducí primero al impacto concreto y observable en la vida de la persona. El término técnico es opcional — si lo usás, va entre paréntesis o al final, nunca primero.

MAL: "Tu autoridad esplénica te permite tomar decisiones instantáneas."
BIEN: "Tenés un instinto que funciona en el momento — si algo te dice que no, ese impulso es confiable aunque no puedas explicarlo racionalmente. (Eso en Diseño Humano se llama autoridad esplénica.)"

MAL: "Como Proyector, tu estrategia es esperar la invitación."
BIEN: "Tu mejor rendimiento viene cuando te llaman a participar, no cuando buscás el protagonismo. Forzar situaciones te va a costar más energía de lo que vale."

MAL: "Tu centro Sacral indefinido hace que absorbas la energía del entorno."
BIEN: "Sos sensible a la energía del grupo — si el ambiente está tenso o bajo, vos lo sentís en el cuerpo antes que nadie. Eso no es debilidad, es información valiosa."

RECORDATORIO OCASIONAL:
Cada 3 o 4 intercambios, si introdujiste algún concepto nuevo o complejo, cerrá con una línea natural como: "Si algo de lo que te dije no quedó claro, preguntame y lo desarrollamos." No lo pongas en cada respuesta — solo cuando sea relevante.

COMPORTAMIENTO ACTIVO — PREGUNTAS E INTERVENCIONES PROACTIVAS:
No seas solo reactivo. Cuando el contexto lo justifique:
- Hacé UNA pregunta que lleve a la persona a reflexionar más profundo sobre lo que está debatiendo. Ejemplo: si alguien dice "no sé si aceptar esta propuesta", preguntá "¿Qué pasa en tu cuerpo cuando pensás en decir que sí?"
- Detectá situaciones donde el diseño tiene algo específico que decir, aunque no te lo hayan preguntado. Ejemplo: si alguien con autoridad emocional está evaluando una decisión importante, mencionalo: "Antes de decidir — ¿le diste tiempo real a esto? Tu forma natural de tener claridad es dejar que la ola emocional se asiente. Si todavía hay urgencia o presión, no es el momento."
- Si detectás que la persona está actuando desde su no-self (frustración, amargura, enojo, decepción según su tipo), nombralo con cuidado: "Lo que describís suena a que estás operando desde un lugar que no es el tuyo. ¿Qué pasaría si..."

PERSONALIZACIÓN SEGÚN EL TIPO:
Ajustá cómo interactuás según el tipo de la persona, no solo el contenido:
- Generador: hacele preguntas que pueda responder con el cuerpo ("¿te genera energía o te pesa?"). Su claridad viene de la respuesta visceral, no del análisis.
- Generador Manifestante: combina respuesta corporal con necesidad de informar. Preguntale qué quiere hacer Y si ya lo comunicó a quien corresponde.
- Proyector: no lo empujés, invitalo a observar ("¿qué ves vos en esta situación que los demás no están viendo?"). Su valor está en la guía, no en la acción directa.
- Manifestador: dale espacio para que informe, no le preguntés permiso. Su claridad viene de su propia iniciativa — ayudalo a comunicar antes de actuar.
- Reflector: nunca lo apurés. Necesita tiempo y contexto para tener claridad. Preguntale cómo se sintió en distintos momentos, no qué decidió.

PERSONALIZACIÓN SEGÚN LA AUTORIDAD:
- Sacral: hacele preguntas de sí/no para que el cuerpo responda. "¿Sentís que sí o que no?" es más útil que "¿qué pensás?"
- Emocional: siempre recordale que necesita tiempo antes de decidir. Si hay urgencia o presión, su respuesta por default es esperar. Nunca lo empujés a decidir en el momento.
- Esplénica: preguntale qué sintió en el momento, no qué pensó después. Su instinto es instantáneo y no se repite.
- Ego: preguntale qué quiere genuinamente, no qué debería querer. Si no hay un querer claro, no es el momento.
- Self/G: ayudalo a identificar en qué contextos y con qué personas siente claridad natural. No se fuerza — se observa.
- Mental: necesita hablar con personas de confianza para procesar. Preguntale con quién lo habló, no qué decidió solo.
- Lunar: necesita un ciclo completo (28 días) para decisiones importantes. Ayudalo a no apresurarse.

PERSONALIZACIÓN SEGÚN EL PERFIL:
Ajustá el estilo de entrega — no el contenido — según las líneas del perfil:
- Perfil con línea 1 (1/3, 1/4): necesita fundamentos antes de actuar. Dale el marco primero, después la sugerencia. Si no entiende el porqué, no va a confiar en el consejo.
- Perfil con línea 2 (2/4, 2/5): aprende solo y necesita espacio. Sugerí en lugar de instruir. Dale una sola dirección clara y dejalo procesar a su manera. No lo sobrecargues de pasos.
- Perfil con línea 3 (3/5, 3/6): aprende del error y la experiencia directa. Cuando hable de fracasos o frustraciones, recordale que probar es su método natural — no algo que salió mal. Normalizá el ensayo y error como parte de su proceso.
- Perfil con línea 4 (4/1, 4/6): construye desde sus vínculos. Cuando evalúe oportunidades o decisiones, preguntale quién de su red cercana está involucrado. Sus mejores movimientos siempre pasan por personas que ya conoce.
- Perfil con línea 5 (5/1, 5/2): carga con las expectativas de los demás. Antes de sugerir algo, preguntale si eso lo quiere él o lo está haciendo por presión externa. Ayudalo a separar lo que otros esperan de lo que genuinamente quiere.
- Perfil con línea 6 (6/2, 6/3): tiene un proceso de largo plazo en tres fases — experimenta, se retira a observar, y después lidera desde el ejemplo. No lo presiones con resultados inmediatos. Si está en fase de observación, es parte de su proceso, no estancamiento.

AUTORIDADES — CÓMO EXPLICARLAS EN TÉRMINOS PRÁCTICOS:
- Sacral: "Tu cuerpo responde antes que tu mente. Si algo te genera energía y ganas, es un sí. Si sentís pesadez o indiferencia, es un no. Decidís antes de pensar — y eso está bien."
- Emocional: "No hay claridad en el momento. Necesitás dejar que pase la ola emocional — entusiasmo primero, dudas después, y en algún punto llegás a una calma neutra. Eso es tu sí. Si te presionan a decidir rápido, tu respuesta por default es esperar."
- Esplénica: "Tenés un instinto instantáneo que no se repite. Es un susurro, no un grito. Si lo ignorás, después sabés que tenías razón."
- Ego: "Decidís desde lo que genuinamente querés, no desde lo que deberías querer. Si no hay un quiero claro, no es el momento."
- Self/G: "La claridad llega sola cuando estás en el lugar y con las personas correctas. No se fuerza — se espera."
- Mental: "Tu claridad viene de hablar, no de pensar solo. Necesitás personas de confianza que te escuchen sin darte su opinión."
- Lunar: "Tus decisiones importantes necesitan tiempo — idealmente un ciclo completo. Lo que sentís hoy puede ser muy distinto en 28 días."

CENTROS INDEFINIDOS CLAVE (mencionarlos solo cuando sean relevantes):
- G indefinido: identidad fluida. No lo encasilles. Su claridad viene del contexto, no de definiciones fijas sobre quién es.
- Ego indefinido: tiende a sobre-comprometerse para demostrar valor. Ayudalo a evaluar desde sus ganas reales, no desde la necesidad de probar algo.
- Emocional indefinido: absorbe el estado emocional del entorno. Cuando esté confundido, preguntale si lo que siente es suyo o del contexto.
- Cabeza indefinida: se llena de preguntas que no son suyas. Anclaló en sus preguntas propias, no en las de los demás.

CÓMO RESPONDER SEGÚN EL TIPO DE PREGUNTA:
- Pregunta genérica: hacé UNA pregunta de contexto antes de responder.
- Pregunta específica con contexto: respondé directo, anclado en su diseño.
- Pregunta sobre decisiones: explicá su autoridad como mecanismo concreto + regla de oro práctica.
- Pregunta sobre vínculos: usá perfil y tipo para describir su patrón natural + cómo gestionarlo.
- Pregunta sobre energía o agotamiento: usá centros definidos + relación con su firma y no-self.

LÍMITES:
- Si la pregunta no tiene que ver con DH ni con desarrollo personal o profesional, decí amablemente que no es tu área.
- No hagas diagnósticos médicos ni de salud mental.
- Si falta contexto, preguntá antes de responder — pero solo UNA pregunta por vez.`;

const ENTORNOS_ES = {
  "Mountains": "Montañas", "Shores": "Costas", "Valleys": "Valles",
  "Caves": "Cuevas", "Markets": "Mercados", "Kitchens": "Cocinas",
  "Mountain": "Montañas", "Shore": "Costas", "Valley": "Valles",
  "Cave": "Cuevas", "Market": "Mercados", "Kitchen": "Cocinas"
};

const MOTIVACIONES_ES = {
  "Innocence": "Inocencia", "Hope": "Esperanza", "Desire": "Deseo",
  "Need": "Necesidad", "Guilt": "Culpa", "Fear": "Miedo"
};

function traducirEntorno(e) { return ENTORNOS_ES[e] || e; }
function traducirMotivacion(m) { return MOTIVACIONES_ES[m] || m; }

const CHIPS_ES = [
  "¿Cómo tomo decisiones importantes?",
  "¿Cuál es mi superpoder en el trabajo?",
  "¿Qué más puedo conocer de mi diseño?",
  "¿Cómo puedo sacarle más provecho a esta herramienta?"
];

const CHIPS_EN = [
  "How do I make important decisions?",
  "What's my superpower at work?",
  "What else can I learn about my design?",
  "How can I get the most out of this tool?"
];

const C = { bg: "#080808", gold: "#b89a4e", txt: "#f0ebe0", dim: "rgba(240,235,224,0.45)" };

function md(t) {
  return t
    .replace(/^### (.+)$/gm, '<span style="color:#b89a4e">$1</span>')
    .replace(/^## (.+)$/gm, '<span style="color:#b89a4e">$1</span>')
    .replace(/^# (.+)$/gm, '<span style="color:#b89a4e">$1</span>')
    .replace(/\*\*(.*?)\*\*/g, '<span style="color:#b89a4e">$1</span>')
    .replace(/\n/g, "<br/>");
}

// ── API helpers ───────────────────────────────────────────────────────────────
async function apiConversaciones(body) {
  const r = await fetch("/api/conversaciones", {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  return r.json();
}

async function apiDocumentos(body) {
  const r = await fetch("/api/documentos", {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  return r.json();
}

async function apiUsuarios(body) {
  const r = await fetch("/api/usuarios", {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  return r.json();
}

const logo = { fontFamily: "monospace", fontSize: ".7rem", letterSpacing: ".5em", color: "#b89a4e", border: "1px solid #b89a4e", padding: ".4em 1em", display: "inline-block", marginBottom: "3rem" };
const lbl = { fontFamily: "monospace", fontSize: ".55rem", letterSpacing: ".3em", color: "#b89a4e", textTransform: "uppercase", display: "block", marginBottom: ".35rem" };
const inp = { width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(184,154,78,.3)", color: "#f0ebe0", fontFamily: NUNITO, fontSize: ".95rem", padding: ".6rem 0", outline: "none", marginBottom: "1.3rem", display: "block", boxSizing: "border-box" };

function Eye({ value, onChange, placeholder = "Contraseña", onKeyDown }) {
  const [s, setS] = useState(false);
  return (
    <div style={{ position: "relative", marginBottom: "1.3rem" }}>
      <input style={{ ...inp, marginBottom: 0, paddingRight: "2rem" }} type={s ? "text" : "password"} placeholder={placeholder} value={value} onChange={onChange} onKeyDown={onKeyDown} />
      <button onClick={() => setS(v => !v)} style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "rgba(240,235,224,.45)", fontSize: "1rem" }}>
        {s ? "🙈" : "👁"}
      </button>
    </div>
  );
}

function Welcome({ go, lang, setLang }) {
  return (
    <div style={{ background: C.bg, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", fontFamily: NUNITO, color: C.txt }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&display=swap');`}</style>
      <div style={{ position: "fixed", top: "1.5rem", right: "1.5rem", display: "flex", gap: ".3rem" }}>
        {["es", "en"].map(l => (
          <button key={l} onClick={() => setLang(l)}
            style={{ background: lang === l ? "rgba(184,154,78,.15)" : "none", border: "1px solid rgba(184,154,78,.25)", color: lang === l ? C.gold : C.dim, fontFamily: "monospace", fontSize: ".55rem", letterSpacing: ".2em", padding: ".3em .7em", cursor: "pointer", textTransform: "uppercase" }}>
            {l}
          </button>
        ))}
      </div>
      <div style={logo}>SIMPLE</div>
      <div style={{ textAlign: "center", maxWidth: 560 }}>
        <div style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 300, lineHeight: 1.25, marginBottom: "1.4rem", fontFamily: GEORGIA }}>
          {lang === "en" ? <>Your personal<br/><span style={{ color: C.gold, fontStyle: "italic" }}>decision-making system.</span></> : <>Tu sistema personal de<br/><span style={{ color: C.gold, fontStyle: "italic" }}>toma de decisiones.</span></>}
        </div>
        <div style={{ color: C.dim, fontSize: "1rem", lineHeight: 1.8, maxWidth: 460, margin: "0 auto 2.5rem", fontFamily: NUNITO, fontWeight: 400 }}>
          {lang === "en" ? "An AI that responds according to how you're designed." : "Una IA que responde según cómo estás diseñado."}
        </div>
        <div style={{ maxWidth: 300, margin: "0 auto", display: "flex", flexDirection: "column", gap: ".8rem" }}>
          <button onClick={() => go("register")} style={{ background: C.gold, color: C.bg, border: "none", borderRadius: 24, fontFamily: "monospace", fontSize: ".65rem", letterSpacing: ".3em", padding: ".85em 2em", cursor: "pointer", textTransform: "uppercase", width: "100%" }}>
            {lang === "en" ? "Create my account" : "Crear mi cuenta"}
          </button>
          <button onClick={() => go("login")} style={{ background: "transparent", color: C.dim, border: "1px solid rgba(184,154,78,.3)", fontFamily: "monospace", fontSize: ".65rem", letterSpacing: ".3em", padding: ".85em 2em", cursor: "pointer", textTransform: "uppercase", width: "100%" }}>
            {lang === "en" ? "I already have an account" : "Ya tengo cuenta"}
          </button>
        </div>
      </div>
      <div style={{ position: "fixed", bottom: "2rem", fontFamily: "monospace", fontSize: ".55rem", color: "rgba(240,235,224,.2)", letterSpacing: ".15em", textAlign: "center" }}>
        SIMPLE es una herramienta creada y registrada por Fran Blanco. 2026
      </div>
    </div>
  );
}

function CityInput({ value, onChange, placeholder }) {
  const [sugerencias, setSugerencias] = useState([]);
  const [show, setShow] = useState(false);
  const timer = React.useRef(null);

  async function buscar(q) {
    if (q.length < 3) { setSugerencias([]); return; }
    try {
      const r = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&limit=5&featuretype=city&accept-language=es`);
      const data = await r.json();
      setSugerencias(data.map(d => d.display_name));
    } catch { setSugerencias([]); }
  }

  function handleChange(e) {
    onChange(e.target.value);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => buscar(e.target.value), 400);
    setShow(true);
  }

  function elegir(ciudad) {
    onChange(ciudad);
    setSugerencias([]);
    setShow(false);
  }

  return (
    <div style={{ position: "relative", marginBottom: "1.3rem" }}>
      <input style={{ ...inp, marginBottom: 0 }} placeholder={placeholder} value={value} onChange={handleChange} onBlur={() => setTimeout(() => setShow(false), 200)} onFocus={() => sugerencias.length > 0 && setShow(true)} />
      {show && sugerencias.length > 0 && (
        <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "#1a1a1a", border: "1px solid rgba(184,154,78,.3)", zIndex: 50, maxHeight: 200, overflowY: "auto" }}>
          {sugerencias.map((s, i) => (
            <div key={i} onClick={() => elegir(s)}
              style={{ padding: ".7rem 1rem", fontSize: ".82rem", color: C.dim, cursor: "pointer", borderBottom: "1px solid rgba(184,154,78,.1)" }}
              onMouseEnter={e => e.target.style.color = C.gold}
              onMouseLeave={e => e.target.style.color = C.dim}>
              {s}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Register({ go, lang, setDynamicUser }) {
  const [f, setF] = useState({ nom: "", ape: "", email: "", tel: "", fecha: "", hora: "", lugar: "", pass: "", tyc: false });
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const u = (k, v) => setF(p => ({ ...p, [k]: v }));

  async function ok() {
    if (!f.nom || !f.ape || !f.email || !f.fecha || !f.hora || !f.lugar || !f.pass) {
      setErr("Completá todos los campos obligatorios."); return;
    }
    if (!f.tyc) { setErr("Aceptá los términos y condiciones para continuar."); return; }
    setLoading(true); setErr("");
    try {
      const r = await fetch("/api/hd", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre: f.nom, apellido: f.ape, birth_date: f.fecha, birth_time: f.hora, ciudad: f.lugar })
      });
      const diseno = await r.json();
      if (diseno.error) { setErr("Error al calcular tu diseño: " + diseno.error); setLoading(false); return; }

      const { error: authError } = await supabase.auth.signUp({
        email: f.email.toLowerCase().trim(),
        password: f.pass,
        options: { emailRedirectTo: "https://metodosimple.ar", data: { nombre: f.nom, apellido: f.ape } }
      });

      if (authError) {
        setErr(authError.message.includes("already registered") ? "Ese email ya está registrado. Ingresá con tu contraseña." : authError.message);
        setLoading(false); return;
      }

      await apiUsuarios({
        action: "insert",
        fields: { email: f.email.toLowerCase().trim(), nombre: f.nom, apellido: f.ape, password_hash: f.pass, diseno }
      });

      go("pending", f.email.toLowerCase().trim());
    } catch (e) {
      setErr("Error: " + (e?.message || "No se pudo conectar."));
    }
    setLoading(false);
  }

  return (
    <div style={{ background: C.bg, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", padding: "2.5rem 2rem", fontFamily: "Georgia,serif", color: C.txt, overflowY: "auto" }}>
      <div style={logo}>SIMPLE</div>
      <div style={{ width: "100%", maxWidth: 420 }}>
        <div style={{ fontSize: "1.5rem", fontWeight: 300, textAlign: "center", marginBottom: ".4rem" }}>Crear cuenta</div>
        <div style={{ color: C.dim, textAlign: "center", marginBottom: "1.5rem", fontSize: ".9rem", lineHeight: 1.6 }}>Ingresá tus datos para calcular tu diseño.</div>
        <div style={{ border: "1px solid rgba(184,154,78,.2)", padding: "2.5rem", background: "rgba(255,255,255,.02)", borderRadius: 16 }}>
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
            <div><label style={lbl}>Fecha *</label><input style={{ ...inp, colorScheme: "dark" }} type="date" value={f.fecha} onChange={e => u("fecha", e.target.value)} /></div>
            <div><label style={lbl}>Hora *</label><input style={{ ...inp, colorScheme: "dark" }} type="time" value={f.hora} onChange={e => u("hora", e.target.value)} /></div>
          </div>
          <label style={lbl}>Lugar de nacimiento *</label>
          <CityInput value={f.lugar} onChange={v => u("lugar", v)} placeholder="Ciudad, País" />
          <label style={lbl}>Contraseña *</label>
          <Eye value={f.pass} onChange={e => u("pass", e.target.value)} />
          <div style={{ display: "flex", alignItems: "flex-start", gap: ".7rem", marginBottom: "1.2rem" }}>
            <input type="checkbox" id="tyc" checked={f.tyc} onChange={e => u("tyc", e.target.checked)}
              style={{ marginTop: ".2rem", accentColor: C.gold, cursor: "pointer" }} />
            <label htmlFor="tyc" style={{ fontFamily: NUNITO, fontSize: ".78rem", color: C.dim, lineHeight: 1.6, cursor: "pointer" }}>
              Acepto los <span style={{ color: C.gold }}>términos y condiciones</span> de uso de SIMPLE.
            </label>
          </div>
          <button onClick={ok} disabled={loading || !f.tyc} style={{ background: C.gold, color: C.bg, border: "none", borderRadius: 24, fontFamily: "monospace", fontSize: ".65rem", letterSpacing: ".3em", padding: ".85em 2em", cursor: loading ? "wait" : "pointer", textTransform: "uppercase", width: "100%", opacity: loading || !f.tyc ? 0.5 : 1 }}>
            {loading ? "Calculando tu diseño..." : "Registrarme"}
          </button>
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

function Login({ go, lang, setDynamicUser }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  async function ok() {
    if (!email || !pass) { setErr(lang === "en" ? "Please enter email and password." : "Completá email y contraseña."); return; }
    const emailClean = email.toLowerCase().trim();

    // ── Rate limiting ────────────────────────────────────────────────────────
    const RL_KEY = `simple_rl_${emailClean}`;
    const now = Date.now();
    const windowMs = 15 * 60 * 1000;
    const maxAttempts = 5;
    let rl = { count: 0, first: now };
    try { const raw = localStorage.getItem(RL_KEY); if (raw) rl = JSON.parse(raw); } catch {}
    if (now - rl.first > windowMs) { rl = { count: 0, first: now }; }
    if (rl.count >= maxAttempts) {
      const waitMin = Math.ceil((windowMs - (now - rl.first)) / 60000);
      setErr(lang === "en"
        ? `Too many attempts. Wait ${waitMin} minute${waitMin > 1 ? "s" : ""} and try again.`
        : `Demasiados intentos. Esperá ${waitMin} minuto${waitMin > 1 ? "s" : ""} e intentá de nuevo.`);
      return;
    }
    // ────────────────────────────────────────────────────────────────────────

    setLoading(true); setErr("");
    try {
      const { error: authError } = await supabase.auth.signInWithPassword({ email: emailClean, password: pass });

      if (authError) {
        try { localStorage.setItem(RL_KEY, JSON.stringify({ count: rl.count + 1, first: rl.first })); } catch {}
        if (authError.message.includes("Email not confirmed")) {
          setErr(lang === "en" ? "Please confirm your email first." : "Confirmá tu email antes de ingresar. Revisá tu bandeja de entrada.");
        } else {
          setErr(lang === "en" ? "Wrong email or password." : "Email o contraseña incorrectos.");
        }
        setLoading(false); return;
      }

      // Login exitoso — limpiar contador
      try { localStorage.removeItem(RL_KEY); } catch {}

      const users = await apiUsuarios({ action: "get", email: emailClean });
      if (!users || users.length === 0) { setErr(lang === "en" ? "User not found." : "Usuario no encontrado."); setLoading(false); return; }
      const user = users[0];
      setDynamicUser({ ...user.diseno, nombre: user.nombre, apellido: user.apellido, email: emailClean, rol: user.rol });

      try {
        const convs = await apiConversaciones({ action: "get", email: emailClean });
        if (Array.isArray(convs) && convs.length > 0) { go("chat", emailClean); } else { go("onboarding", emailClean); }
      } catch { go("onboarding", emailClean); }
    } catch {
      setErr(lang === "en" ? "Connection error. Try again." : "Error de conexión. Intentá de nuevo.");
    }
    setLoading(false);
  }

  return (
    <div style={{ background: C.bg, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", fontFamily: NUNITO, color: C.txt }}>
      <div style={logo}>SIMPLE</div>
      <div style={{ width: "100%", maxWidth: 420 }}>
        <div style={{ fontSize: "1.5rem", fontWeight: 300, textAlign: "center", marginBottom: ".4rem", fontFamily: GEORGIA }}>{lang === "en" ? "Sign in" : "Ingresar"}</div>
        <div style={{ color: C.dim, textAlign: "center", marginBottom: "1.5rem", fontSize: ".9rem" }}>{lang === "en" ? "Welcome back." : "Bienvenido de nuevo."}</div>
        <div style={{ border: "1px solid rgba(184,154,78,.2)", padding: "2.5rem", background: "rgba(255,255,255,.02)", borderRadius: 16 }}>
          {err && <div style={{ color: "#c06040", fontFamily: "monospace", fontSize: ".63rem", marginBottom: ".8rem", textAlign: "center" }}>{err}</div>}
          <label style={lbl}>Email</label>
          <input style={inp} type="email" placeholder="tu@email.com" value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === "Enter" && ok()} />
          <label style={lbl}>{lang === "en" ? "Password" : "Contraseña"}</label>
          <Eye value={pass} onChange={e => setPass(e.target.value)} placeholder={lang === "en" ? "Your password" : "Tu contraseña"} onKeyDown={e => e.key === "Enter" && ok()} />
          <div style={{ textAlign: "right", marginBottom: "1rem" }}>
            <button onClick={async () => {
              if (!email) { setErr(lang === "en" ? "Enter your email first." : "Ingresá tu email primero."); return; }
              const { error } = await supabase.auth.resetPasswordForEmail(email.toLowerCase().trim(), { redirectTo: "https://metodosimple.ar" });
              if (!error) setErr(lang === "en" ? "✓ Check your email for a reset link." : "✓ Te mandamos un link para resetear tu contraseña.");
              else setErr(error.message);
            }} style={{ color: C.gold, background: "none", border: "none", cursor: "pointer", fontFamily: "monospace", fontSize: ".55rem", letterSpacing: ".1em" }}>
              {lang === "en" ? "Forgot password?" : "¿Olvidaste tu contraseña?"}
            </button>
          </div>
          <button onClick={ok} disabled={loading} style={{ background: C.gold, color: C.bg, border: "none", borderRadius: 24, fontFamily: "monospace", fontSize: ".65rem", letterSpacing: ".3em", padding: ".85em 2em", cursor: loading ? "wait" : "pointer", textTransform: "uppercase", width: "100%", opacity: loading ? 0.7 : 1 }}>
            {loading ? "..." : (lang === "en" ? "Sign in" : "Ingresar")}
          </button>
        </div>
        <div style={{ textAlign: "center", margin: "1.2rem 0", color: C.dim, fontFamily: "monospace", fontSize: ".7rem" }}>
          {lang === "en" ? "No account? " : "¿No tenés cuenta? "}
          <button onClick={() => go("register")} style={{ color: C.gold, background: "none", border: "none", cursor: "pointer", fontFamily: "monospace", fontSize: ".63rem" }}>
            {lang === "en" ? "Sign up here" : "Registrate acá"}
          </button>
        </div>
      </div>
    </div>
  );
}

function Chat({ go, userEmail, lang, setLang, problema, desafios, setDesafios, setProblema, dynamicUser }) {
  const user = dynamicUser;
  const [darkModeUser, setDarkModeUser] = useState(true);
  const DC = darkModeUser
    ? { bg: "#080808", gold: "#b89a4e", txt: "#f0ebe0", dim: "rgba(240,235,224,0.45)" }
    : { bg: "#f5f0e8", gold: "#b89a4e", txt: "#1a1a1a", dim: "rgba(26,26,26,0.5)" };
  const [chatMode, setChatMode] = useState("general");
  const [allMsgs, setAllMsgs] = useState({ general: [], d1: [], d2: [], d3: [] });
  const [convIds, setConvIds] = useState({ general: null, d1: null, d2: null, d3: null });
  const [documentos, setDocumentos] = useState([]);
  const [docNombre, setDocNombre] = useState("");
  const [docTexto, setDocTexto] = useState("");
  const [docLoading, setDocLoading] = useState(false);
  const [docModo, setDocModo] = useState("pdf");
  const docFileRef = React.useRef(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [historial, setHistorial] = useState([]);
  const CHIPS = lang === "en" ? CHIPS_EN : CHIPS_ES;

  const msgs = allMsgs[chatMode];
  function setMsgs(newMsgs) {
    setAllMsgs(prev => ({ ...prev, [chatMode]: typeof newMsgs === "function" ? newMsgs(prev[chatMode]) : newMsgs }));
  }

  React.useEffect(() => {
    if (!userEmail) return;
    async function cargar() {
      try {
        const data = await apiConversaciones({ action: "get", email: userEmail });
        if (!Array.isArray(data)) return;
        setHistorial(data);
        ["general", "d1", "d2", "d3"].forEach(modo => {
          const conv = data.find(c => c.modo === modo);
          if (conv?.mensajes?.length > 0) {
            setAllMsgs(prev => ({ ...prev, [modo]: conv.mensajes }));
            setConvIds(prev => ({ ...prev, [modo]: conv.id }));
          }
        });
      } catch {}
      try {
        const docs = await apiDocumentos({ action: "get", email: userEmail });
        if (Array.isArray(docs)) setDocumentos(docs);
      } catch {}
    }
    cargar();
  }, [userEmail]);

  async function subirDocumento() {
    if (!docNombre.trim() || !docTexto.trim()) return;
    setDocLoading(true);
    try {
      const result = await apiDocumentos({
        action: "insert",
        fields: { usuario_email: userEmail, nombre: docNombre.trim(), contenido: docTexto.trim(), activo: true }
      });
      if (Array.isArray(result) && result[0]) {
        setDocumentos(prev => [...prev, result[0]]);
        setDocNombre(""); setDocTexto("");
      }
    } catch {}
    setDocLoading(false);
  }

  async function toggleDocumento(id, activo) {
    try {
      await apiDocumentos({ action: "update", id, fields: { activo: !activo } });
      setDocumentos(prev => prev.map(d => d.id === id ? { ...d, activo: !activo } : d));
    } catch {}
  }

  async function eliminarDocumento(id) {
    try {
      await apiDocumentos({ action: "delete", id });
      setDocumentos(prev => prev.filter(d => d.id !== id));
    } catch {}
  }

  async function handleDocPdf(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { alert("El PDF supera los 5MB."); return; }
    setDocLoading(true);
    if (!docNombre.trim()) setDocNombre(file.name.replace(".pdf", ""));
    try {
      const base64 = await new Promise((res, rej) => {
        const r = new FileReader();
        r.onload = () => res(r.result.split(",")[1]);
        r.onerror = rej;
        r.readAsDataURL(file);
      });
      const resp = await fetch("/api/chat", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514", max_tokens: 4000,
          messages: [{ role: "user", content: [
            { type: "document", source: { type: "base64", media_type: "application/pdf", data: base64 } },
            { type: "text", text: "Extraé todo el texto de este documento. Solo el texto, sin comentarios." }
          ]}]
        })
      });
      const data = await resp.json();
      setDocTexto(data.content?.[0]?.text || "");
    } catch { alert("No se pudo leer el PDF."); }
    setDocLoading(false);
    e.target.value = "";
  }

  async function guardarConversacion(mensajes) {
    try {
      const convId = convIds[chatMode];
      if (convId) {
        await apiConversaciones({ action: "update", id: convId, mensajes });
      } else {
        const result = await apiConversaciones({ action: "insert", email: userEmail, modo: chatMode, problema: problema || null, mensajes });
        if (Array.isArray(result) && result[0]?.id) {
          setConvIds(prev => ({ ...prev, [chatMode]: result[0].id }));
        }
      }
    } catch {}
  }

  function nuevaConversacion() {
    setAllMsgs(prev => ({ ...prev, [chatMode]: [] }));
    setConvIds(prev => ({ ...prev, [chatMode]: null }));
  }

  const EN_PROMPT = `You are a Human Design consultant specialized in the SIMPLE method, with 15 years of experience advising executives and entrepreneurs. Translate Human Design into practical, concrete guidance.
TONE: Direct, warm, no spiritual language. American English. No generic intros. Always end with a practical rule or action.
VOCABULARY — NEVER: vibrations, manifest, heal, soul mission, chakras, cosmic energy, auras.
STRUCTURE: 1) Anchor in their specific design 2) Practical consequence 3) Their specific trap/risk 4) One clear actionable.
For vague questions, ask ONE clarifying question first.`;

  const getDesafioIdx = () => chatMode === "d1" ? 0 : chatMode === "d2" ? 1 : chatMode === "d3" ? 2 : -1;
  const desafioActual = getDesafioIdx() >= 0 ? desafios?.[getDesafioIdx()] : null;
  const documentosActivos = documentos.filter(d => d.activo);
  const hoy = new Date().toLocaleDateString("es-AR", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  const contextoBase = problema ? `\nPROBLEMA ACTIVO: "${problema.raiz}". Área: ${problema.area}.` : "";
  const contextoDesafio = desafioActual ? `\nESTÁS TRABAJANDO ESPECÍFICAMENTE EL DESAFÍO: "${desafioActual.titulo}" — ${desafioActual.descripcion}.` : "";
  const contextoDocumentos = documentosActivos.length > 0
    ? `\n\nFECHA ACTUAL: ${hoy}\n\nDOCUMENTOS PERSONALES DEL USUARIO:\n${documentosActivos.map(d => `--- ${d.nombre} ---\n${d.contenido.slice(0, 4000)}`).join("\n\n")}\n\nInstrucci—n: si algún documento contiene información relevante para el período actual o el tema de la conversación, integraló naturalmente mencionando de qué documento proviene.`
    : "";
  const sys = (lang === "en" ? EN_PROMPT : SYSTEM_PROMPT) + "\nPERSON'S DESIGN: " + JSON.stringify(user) + contextoBase + contextoDesafio + contextoDocumentos;

  const chatContainerRef = React.useRef(null);
  const lastUserRef = React.useRef(null);
  const lastAssistantRef = React.useRef(null);

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
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1000, system: sys, messages: next })
      });
      const d = await r.json();
      const finalMsgs = [...next, { role: "assistant", content: d?.content?.[0]?.text || "Error." }];
      setMsgs(finalMsgs);
      await guardarConversacion(finalMsgs);
    } catch {
      setMsgs([...next, { role: "assistant", content: lang === "en" ? "Connection error." : "Error de conexión." }]);
    }
    setLoading(false);
  }

  return (
    <div style={{ background: DC.bg, minHeight: "100vh", display: "flex", flexDirection: "column", fontFamily: NUNITO, color: DC.txt }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&display=swap');
        @keyframes p{0%,80%,100%{opacity:.2;transform:scale(.8)}40%{opacity:1;transform:scale(1)}}
        .chat-scroll::-webkit-scrollbar { width: 4px; }
        textarea, input { color: ${darkModeUser ? "#f0ebe0" : "#1a1a1a"} !important; -webkit-text-fill-color: ${darkModeUser ? "#f0ebe0" : "#1a1a1a"} !important; caret-color: #b89a4e; }
        textarea::placeholder, input::placeholder { color: ${darkModeUser ? "rgba(240,235,224,.3)" : "rgba(26,26,26,.35)"} !important; -webkit-text-fill-color: ${darkModeUser ? "rgba(240,235,224,.3)" : "rgba(26,26,26,.35)"} !important; }
        .chat-scroll::-webkit-scrollbar-track { background: transparent; }
        .chat-scroll::-webkit-scrollbar-thumb { background: rgba(184,154,78,.25); border-radius: 2px; }
        .chat-scroll { scrollbar-width: thin; scrollbar-color: rgba(184,154,78,.25) transparent; }
        .tab-btn { background: none; border: none; cursor: pointer; font-family: monospace; font-size: .58rem; letter-spacing: .25em; text-transform: uppercase; padding: .5rem .9rem; color: ${darkModeUser ? "rgba(240,235,224,.4)" : "rgba(26,26,26,.45)"}; transition: color .2s; }
        .tab-btn:hover { color: #b89a4e; }
        .tab-btn.active { color: #b89a4e; border-bottom: 1px solid #b89a4e; }
        .tab-panel { padding: 1.2rem 2rem; border-bottom: 1px solid rgba(184,154,78,.1); background: ${darkModeUser ? "rgba(255,255,255,.02)" : "rgba(0,0,0,.03)"}; font-size: .88rem; line-height: 1.8; color: ${darkModeUser ? "rgba(240,235,224,.7)" : "rgba(26,26,26,.7)"}; font-family: ${NUNITO}; }
      `}</style>

      {/* Panel de desafíos */}
      {panelOpen && (
        <div style={{ position: "fixed", top: 0, right: 0, width: "min(380px, 90vw)", height: "100vh", background: "#0f0f0f", borderLeft: "1px solid rgba(184,154,78,.2)", zIndex: 100, display: "flex", flexDirection: "column", padding: "2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <div style={{ fontFamily: "monospace", fontSize: ".55rem", letterSpacing: ".3em", color: DC.gold, textTransform: "uppercase" }}>{lang === "en" ? "Active problem" : "Problema activo"}</div>
            <button onClick={() => setPanelOpen(false)} style={{ background: "none", border: "none", color: DC.dim, cursor: "pointer", fontSize: "1.2rem" }}>×</button>
          </div>
          {problema && (
            <>
              <div style={{ fontSize: ".9rem", lineHeight: 1.7, color: DC.txt, marginBottom: "1.5rem", padding: "1rem", border: "1px solid rgba(184,154,78,.15)", background: "rgba(184,154,78,.04)" }}>{problema.raiz}</div>
              <div style={{ fontFamily: "monospace", fontSize: ".5rem", letterSpacing: ".3em", color: DC.gold, textTransform: "uppercase", marginBottom: "1rem" }}>{lang === "en" ? "Your challenges" : "Tus desafíos"}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: ".8rem", flex: 1, overflowY: "auto" }}>
                <button onClick={() => { setChatMode("general"); setPanelOpen(false); }}
                  style={{ border: `1px solid ${chatMode === "general" ? DC.gold : "rgba(184,154,78,.2)"}`, padding: "1rem", background: chatMode === "general" ? "rgba(184,154,78,.08)" : "rgba(255,255,255,.02)", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ fontFamily: "monospace", fontSize: ".48rem", letterSpacing: ".25em", color: DC.gold, marginBottom: ".3rem", textTransform: "uppercase" }}>{lang === "en" ? "General chat" : "Chat general"}</div>
                  <div style={{ fontSize: ".85rem", color: DC.dim, lineHeight: 1.5 }}>{lang === "en" ? "Talk freely about any topic." : "Hablá libremente sobre cualquier tema."}</div>
                </button>
                {desafios?.map((d, i) => {
                  const mode = `d${i+1}`;
                  return (
                    <button key={i} onClick={() => { setChatMode(mode); setPanelOpen(false); }}
                      style={{ border: `1px solid ${chatMode === mode ? DC.gold : "rgba(184,154,78,.2)"}`, padding: "1rem", background: chatMode === mode ? "rgba(184,154,78,.08)" : "rgba(255,255,255,.02)", cursor: "pointer", textAlign: "left" }}>
                      <div style={{ fontFamily: "monospace", fontSize: ".48rem", letterSpacing: ".25em", color: DC.gold, marginBottom: ".3rem", textTransform: "uppercase" }}>{lang === "en" ? `Challenge ${i+1}` : `Desafío ${i+1}`}</div>
                      <div style={{ fontSize: ".88rem", fontWeight: 600, marginBottom: ".3rem", color: DC.txt }}>{d.titulo}</div>
                      <div style={{ fontSize: ".8rem", color: DC.dim, lineHeight: 1.5 }}>{d.descripcion}</div>
                    </button>
                  );
                })}
              </div>
              <button onClick={() => { go("onboarding"); setPanelOpen(false); }}
                style={{ marginTop: "1.2rem", background: "transparent", border: "1px solid rgba(184,154,78,.3)", color: DC.dim, fontFamily: "monospace", fontSize: ".55rem", letterSpacing: ".2em", padding: ".7em", cursor: "pointer", textTransform: "uppercase" }}>
                {lang === "en" ? "Change problem" : "Cambiar problema"}
              </button>
              <button onClick={() => { nuevaConversacion(); setPanelOpen(false); }}
                style={{ marginTop: ".5rem", background: "transparent", border: "1px solid rgba(184,154,78,.15)", color: DC.dim, fontFamily: "monospace", fontSize: ".55rem", letterSpacing: ".2em", padding: ".7em", cursor: "pointer", textTransform: "uppercase" }}>
                {lang === "en" ? "New conversation" : "Nueva conversación"}
              </button>
              {historial.length > 0 && (
                <div style={{ marginTop: "1.5rem" }}>
                  <div style={{ fontFamily: "monospace", fontSize: ".48rem", letterSpacing: ".3em", color: DC.gold, textTransform: "uppercase", marginBottom: ".8rem" }}>
                    {lang === "en" ? "Previous conversations" : "Conversaciones anteriores"}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: ".4rem", maxHeight: 180, overflowY: "auto" }}>
                    {historial.filter(c => c.mensajes?.length > 0).slice(0, 10).map((c, i) => (
                      <button key={i} onClick={() => {
                        setChatMode(c.modo);
                        setAllMsgs(prev => ({ ...prev, [c.modo]: c.mensajes }));
                        setConvIds(prev => ({ ...prev, [c.modo]: c.id }));
                        setPanelOpen(false);
                      }}
                        style={{ background: "transparent", border: "1px solid rgba(184,154,78,.1)", color: DC.dim, fontFamily: NUNITO, fontSize: ".75rem", padding: ".6em .8em", cursor: "pointer", textAlign: "left", borderRadius: 20 }}>
                        <div style={{ fontSize: ".65rem", color: "rgba(184,154,78,.5)", marginBottom: ".2rem" }}>
                          {new Date(c.updated_at).toLocaleDateString("es-AR", { day: "2-digit", month: "short" })} · {c.modo === "general" ? "General" : `Desafío ${c.modo.replace("d", "")}`}
                        </div>
                        <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {c.mensajes?.[0]?.content?.slice(0, 45)}...
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* Header */}
      <div style={{ padding: ".9rem 2rem", borderBottom: "1px solid rgba(184,154,78,.2)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
          <div style={{ ...logo, marginBottom: 0 }}>SIMPLE</div>
          <div style={{ fontFamily: NUNITO, fontSize: ".85rem", color: DC.dim }}>
            {lang === "en" ? "Hi, " : "Hola, "}<span style={{ color: DC.txt, fontWeight: 600 }}>{user?.nombre}</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button onClick={() => setDarkModeUser(v => !v)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 4, opacity: 0.8, display: "flex", alignItems: "center" }}>
            {darkModeUser ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={DC.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={DC.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
          <button onClick={() => go("welcome")} style={{ color: DC.gold, background: "none", border: "none", cursor: "pointer", fontFamily: "monospace", fontSize: ".6rem" }}>{lang === "en" ? "Sign out →" : "Salir →"}</button>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: "1px solid rgba(184,154,78,.15)", display: "flex", alignItems: "center", paddingLeft: "1rem", gap: ".2rem" }}>
        {[
          ["mi-diseno", lang === "en" ? "My Design" : "Mi diseño"],
          ["inspiracion", lang === "en" ? "Inspiration" : "Inspiración"],
          ["como-funciona", lang === "en" ? "How it works" : "Cómo funciona"],
          ["documentos", lang === "en" ? "My documents" : "Mis documentos"]
        ].map(([id, label]) => (
          <button key={id} className={`tab-btn${tab === id ? " active" : ""}`}
            onClick={() => setTab(tab === id ? null : id)}>
            {label}
          </button>
        ))}
        <div style={{ marginLeft: "auto", display: "flex", gap: ".3rem", paddingRight: "1rem" }}>
          {["es", "en"].map(l => (
            <button key={l} onClick={() => setLang(l)}
              style={{ background: lang === l ? "rgba(184,154,78,.15)" : "none", border: "1px solid rgba(184,154,78,.25)", color: lang === l ? DC.gold : DC.dim, fontFamily: "monospace", fontSize: ".55rem", letterSpacing: ".2em", padding: ".3em .7em", cursor: "pointer", textTransform: "uppercase" }}>
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Tab panels */}
      {tab === "mi-diseno" && (
        <div className="tab-panel">
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            {[
              [lang === "en" ? "Type" : "Tipo", user?.tipo],
              [lang === "en" ? "Authority" : "Autoridad", user?.autoridad],
              [lang === "en" ? "Profile" : "Perfil", user?.perfil],
              [lang === "en" ? "Strategy" : "Estrategia", user?.estrategia],
              [lang === "en" ? "Signature" : "Firma", user?.firma],
              [lang === "en" ? "Environment" : "Entorno", traducirEntorno(user?.variables?.entorno)],
              [lang === "en" ? "Motivation" : "Motivación", traducirMotivacion(user?.variables?.motivación)]
            ].map(([l, v]) => v && (
              <div key={l}>
                <div style={{ fontFamily: "monospace", fontSize: ".5rem", letterSpacing: ".3em", color: DC.gold, textTransform: "uppercase", marginBottom: 3 }}>{l}</div>
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
                style={{ fontFamily: NUNITO, fontSize: ".8rem", padding: ".4em .9em", border: "1px solid rgba(184,154,78,.25)", color: DC.dim, cursor: "pointer", background: "transparent", borderRadius: 20 }}
                onMouseEnter={e => { e.target.style.borderColor = DC.gold; e.target.style.color = "#d4b96a"; }}
                onMouseLeave={e => { e.target.style.borderColor = "rgba(184,154,78,.25)"; e.target.style.color = DC.dim; }}>
                {c}
              </button>
            ))}
          </div>
        </div>
      )}
      {tab === "como-funciona" && (
        <div className="tab-panel" style={{ maxWidth: 640, position: "relative" }}>
          <button onClick={() => setTab(null)} style={{ position: "absolute", top: 0, right: 0, background: "none", border: "none", color: DC.dim, cursor: "pointer", fontSize: "1.1rem" }}>×</button>
          {lang === "en" ? <>
            <p style={{ marginTop: 0 }}><span style={{ color: DC.gold }}>SIMPLE</span> is your personal Human Design consultant. Ask anything about how you make decisions, relate to others, manage your energy, or move forward in your work.</p>
            <p>No generic answers. Everything is based on your specific design — your type, authority, profile and centers.</p>
            <p style={{ marginBottom: 0 }}>The more context you give about your specific situation, the better the answer.</p>
          </> : <>
            <p style={{ marginTop: 0 }}><span style={{ color: DC.gold }}>SIMPLE</span> es tu consultor personal de Diseño Humano. Podés hacerle cualquier pregunta sobre cómo tomás decisiones, cómo te relacionás, cómo gestionás tu energía o cómo avanzar en tu trabajo.</p>
            <p>No da respuestas genéricas. Todo lo que te diga está basado en tu diseño específico — tu tipo, autoridad, perfil y centros.</p>
            <p style={{ marginBottom: 0 }}>Cuanto más contexto le des sobre tu situación concreta, mejor va a ser la respuesta.</p>
          </>}
        </div>
      )}
      {tab === "documentos" && (
        <div style={{ padding: "1.2rem 2rem", borderBottom: "1px solid rgba(184,154,78,.1)", background: darkModeUser ? "rgba(255,255,255,.02)" : "rgba(0,0,0,.03)", display: "flex", flexDirection: "column", gap: "1rem", maxHeight: "55vh", overflowY: "auto" }}>
          {documentos.length > 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
              <div style={{ fontFamily: "monospace", fontSize: ".45rem", letterSpacing: ".3em", color: DC.gold, textTransform: "uppercase", marginBottom: ".3rem" }}>
                {lang === "en" ? "Your documents" : "Tus documentos"} ({documentosActivos.length} {lang === "en" ? "active" : "activos"})
              </div>
              {documentos.map(d => (
                <div key={d.id} style={{ display: "flex", alignItems: "center", gap: ".6rem", padding: ".6rem .8rem", border: `1px solid ${d.activo ? "rgba(184,154,78,.3)" : "rgba(184,154,78,.1)"}`, borderRadius: 8, background: d.activo ? "rgba(184,154,78,.05)" : "transparent" }}>
                  <button onClick={() => toggleDocumento(d.id, d.activo)}
                    style={{ width: 18, height: 18, borderRadius: 4, border: `1px solid ${d.activo ? DC.gold : "rgba(184,154,78,.3)"}`, background: d.activo ? DC.gold : "transparent", cursor: "pointer", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".6rem", color: d.activo ? DC.bg : DC.dim }}>
                    {d.activo ? "✓" : ""}
                  </button>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: ".82rem", color: d.activo ? DC.txt : DC.dim, fontFamily: NUNITO, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{d.nombre}</div>
                    <div style={{ fontSize: ".68rem", color: DC.dim, fontFamily: "monospace" }}>{Math.round(d.contenido.length / 4)} {lang === "en" ? "words approx." : "palabras aprox."}</div>
                  </div>
                  <button onClick={() => eliminarDocumento(d.id)}
                    style={{ background: "none", border: "none", color: DC.dim, cursor: "pointer", fontSize: ".9rem", flexShrink: 0 }}>×</button>
                </div>
              ))}
            </div>
          )}
          <div style={{ borderTop: documentos.length > 0 ? "1px solid rgba(184,154,78,.1)" : "none", paddingTop: documentos.length > 0 ? "1rem" : 0 }}>
            <div style={{ fontFamily: "monospace", fontSize: ".45rem", letterSpacing: ".3em", color: DC.gold, textTransform: "uppercase", marginBottom: ".6rem" }}>
              {lang === "en" ? "Add document" : "Agregar documento"}
            </div>
            <div style={{ display: "flex", gap: ".4rem", marginBottom: ".7rem" }}>
              {["pdf", "texto"].map(m => (
                <button key={m} onClick={() => setDocModo(m)}
                  style={{ background: docModo === m ? "rgba(184,154,78,.15)" : "transparent", border: `1px solid ${docModo === m ? DC.gold : "rgba(184,154,78,.2)"}`, borderRadius: 20, color: docModo === m ? DC.gold : DC.dim, fontFamily: "monospace", fontSize: ".48rem", letterSpacing: ".15em", padding: ".3em .8em", cursor: "pointer", textTransform: "uppercase" }}>
                  {m === "pdf" ? "PDF" : (lang === "en" ? "Text" : "Texto")}
                </button>
              ))}
            </div>
            <input value={docNombre} onChange={e => setDocNombre(e.target.value)}
              placeholder={lang === "en" ? "Document name (e.g. Solar Return 2025)" : "Nombre del documento (ej: Revolución Solar 2025)"}
              style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(184,154,78,.2)", color: DC.txt, fontFamily: NUNITO, fontSize: ".82rem", padding: ".4rem 0", outline: "none", marginBottom: ".7rem", boxSizing: "border-box" }} />
            {docModo === "pdf" ? (
              <div>
                <input ref={docFileRef} type="file" accept=".pdf" onChange={handleDocPdf} style={{ display: "none" }} />
                <button onClick={() => docFileRef.current?.click()} disabled={docLoading}
                  style={{ width: "100%", border: "2px dashed rgba(184,154,78,.25)", borderRadius: 8, padding: ".8rem", background: "transparent", color: DC.dim, fontFamily: NUNITO, fontSize: ".8rem", cursor: docLoading ? "wait" : "pointer", textAlign: "center" }}>
                  {docLoading ? (lang === "en" ? "Reading PDF..." : "Leyendo PDF...") : (docTexto ? `✓ ${lang === "en" ? "PDF read — click Save" : "PDF leído — hacé clic en Guardar"}` : (lang === "en" ? "Click to select PDF" : "Hacé clic para seleccionar PDF"))}
                </button>
              </div>
            ) : (
              <textarea value={docTexto} onChange={e => setDocTexto(e.target.value)}
                placeholder={lang === "en" ? "Paste your document content here..." : "Pegá el contenido de tu documento acá..."}
                style={{ width: "100%", background: "transparent", border: "1px solid rgba(184,154,78,.2)", borderRadius: 8, color: DC.txt, fontFamily: NUNITO, fontSize: ".82rem", padding: ".6rem", outline: "none", resize: "vertical", lineHeight: 1.6, minHeight: 100, boxSizing: "border-box" }} />
            )}
            {docTexto && (
              <button onClick={subirDocumento} disabled={docLoading || !docNombre.trim()}
                style={{ marginTop: ".6rem", background: DC.gold, color: DC.bg, border: "none", borderRadius: 20, fontFamily: "monospace", fontSize: ".55rem", letterSpacing: ".2em", padding: ".6em 1.5em", cursor: docLoading || !docNombre.trim() ? "not-allowed" : "pointer", textTransform: "uppercase", opacity: docLoading || !docNombre.trim() ? 0.5 : 1 }}>
                {lang === "en" ? "Save document" : "Guardar documento"}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Chat area */}
      <div style={{ flex: 1, maxWidth: 900, margin: "0 auto", width: "100%", padding: "0 clamp(60px, 10vw, 150px)", display: "flex", flexDirection: "column" }}>
        <div ref={chatContainerRef} className="chat-scroll" style={{ flex: 1, padding: "1.8rem 0", paddingRight: "2rem", display: "flex", flexDirection: "column", gap: "1.8rem", overflowY: "auto", maxHeight: "58vh", minHeight: 180 }}>
          {msgs.length === 0 && (
            <div style={{ textAlign: "center", padding: "1.8rem 1rem", border: "1px solid rgba(184,154,78,.15)" }}>
              {desafioActual ? (
                <>
                  <div style={{ fontFamily: "monospace", fontSize: ".5rem", letterSpacing: ".3em", color: DC.gold, marginBottom: ".8rem", textTransform: "uppercase" }}>{lang === "en" ? `Challenge ${getDesafioIdx()+1}` : `Desafío ${getDesafioIdx()+1}`}</div>
                  <div style={{ fontSize: "1.3rem", fontWeight: 300, marginBottom: ".4rem", fontFamily: GEORGIA }}>{desafioActual.titulo}</div>
                  <div style={{ fontSize: ".9rem", color: DC.dim, marginBottom: "1.5rem", lineHeight: 1.6, maxWidth: 440, margin: "0 auto 1.5rem" }}>{desafioActual.descripcion}</div>
                  <div style={{ fontSize: ".8rem", color: DC.dim }}>{lang === "en" ? "Ask anything related to this challenge." : "Haceme preguntas relacionadas a este desafío."}</div>
                </>
              ) : (
                <>
                  <div style={{ fontSize: "1.9rem", fontWeight: 300, marginBottom: ".4rem", fontFamily: GEORGIA }}>
                    {lang === "en" ? "Hi, " : "Hola, "}<span style={{ color: DC.gold, fontStyle: "italic" }}>{user?.nombre}</span>
                  </div>
                  <div style={{ fontSize: ".9rem", color: DC.dim, marginBottom: "1.5rem", lineHeight: 1.6 }}>
                    {lang === "en"
                      ? "I'm an AI connected to your design. Every answer is based on your unique way of functioning — not generalities."
                      : "Soy una inteligencia artificial conectada a tu diseño. Cada respuesta está basada en tu forma única de funcionar — no en generalidades."}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", justifyContent: "center" }}>
                    {CHIPS.map(c => (
                      <button key={c} onClick={() => send(c)} style={{ fontFamily: "monospace", fontSize: ".6rem", padding: ".4em .85em", border: "1px solid rgba(184,154,78,.25)", color: DC.dim, cursor: "pointer", background: "transparent" }}
                        onMouseEnter={e => { e.target.style.borderColor = DC.gold; e.target.style.color = "#d4b96a"; }}
                        onMouseLeave={e => { e.target.style.borderColor = "rgba(184,154,78,.25)"; e.target.style.color = DC.dim; }}>
                        {c}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
          {msgs.map((m, i) => (
            <div key={i}
              ref={m.role === "assistant" && i === msgs.length - 1 ? lastAssistantRef : m.role === "user" && i === msgs.length - 1 ? lastUserRef : null}
              style={{ textAlign: m.role === "user" ? "right" : "left" }}>
              <div style={{ fontFamily: "monospace", fontSize: ".53rem", letterSpacing: ".3em", textTransform: "uppercase", marginBottom: ".3rem", color: m.role === "user" ? "rgba(240,235,224,.3)" : DC.gold }}>
                {m.role === "user" ? (lang === "en" ? "You" : "Vos") : "SIMPLE"}
              </div>
              {m.role === "assistant" ? (
                <div style={{ fontSize: "1rem", color: DC.txt, lineHeight: 1.85, fontFamily: GEORGIA }}
                  dangerouslySetInnerHTML={{ __html: md(m.content) }} />
              ) : (
                <div style={{ fontSize: "1rem", fontStyle: "italic", color: "rgba(240,235,224,.55)", lineHeight: 1.7, fontFamily: NUNITO }}
                  dangerouslySetInnerHTML={{ __html: md(m.content) }} />
              )}
            </div>
          ))}
          {loading && (
            <div>
              <div style={{ fontFamily: "monospace", fontSize: ".53rem", letterSpacing: ".3em", color: DC.gold, marginBottom: ".3rem" }}>SIMPLE</div>
              <div style={{ display: "flex", gap: 5 }}>
                {[0, 1, 2].map(i => <div key={i} style={{ width: 5, height: 5, background: DC.gold, borderRadius: "50%", animation: `p 1.4s ${i * .2}s infinite ease-in-out` }} />)}
              </div>
            </div>
          )}
        </div>
        <div style={{ padding: "1rem 0 1.5rem", borderTop: "1px solid rgba(184,154,78,.15)", display: "flex", gap: ".8rem", alignItems: "flex-end" }}>
          <textarea style={{ flex: 1, background: "transparent", border: "none", borderBottom: `1px solid ${DC.gold}40`, color: DC.txt, fontFamily: GEORGIA, fontSize: ".95rem", padding: ".6rem 0", outline: "none", resize: "none", minHeight: "2rem", lineHeight: 1.5 }}
            value={input} placeholder={lang === "en" ? "Ask your question..." : "Hacé tu pregunta..."}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }} rows={1} />
          <button onClick={() => send()} disabled={loading || !input.trim()} style={{ background: "transparent", border: "1px solid " + DC.gold, borderRadius: 20, color: DC.gold, fontFamily: "monospace", fontSize: ".6rem", letterSpacing: ".2em", padding: ".6em 1em", cursor: "pointer", textTransform: "uppercase", marginBottom: 2, opacity: loading || !input.trim() ? 0.3 : 1 }}>
            {lang === "en" ? "Send" : "Enviar"}
          </button>
        </div>
      </div>
      <div style={{ textAlign: "center", padding: ".6rem", fontFamily: "monospace", fontSize: ".5rem", color: darkModeUser ? "rgba(240,235,224,.15)" : "rgba(26,26,26,.3)", letterSpacing: ".15em" }}>
        SIMPLE es una herramienta creada y registrada por Fran Blanco. 2026
      </div>
    </div>
  );
}

const AREAS = [
  { id: "trabajo", icon: "💼", label: "Trabajo y carrera", en: "Work & career" },
  { id: "decisiones", icon: "🧭", label: "Decisiones importantes", en: "Important decisions" },
  { id: "vinculos", icon: "🤝", label: "Vínculos y relaciones", en: "Relationships" },
  { id: "energia", icon: "⚡", label: "Energía y bienestar", en: "Energy & wellbeing" },
  { id: "dinero", icon: "🌱", label: "Dinero y proyectos", en: "Money & projects" },
  { id: "direccion", icon: "🔭", label: "Dirección y propósito", en: "Direction & purpose" },
];

function Onboarding({ go, userEmail, lang, setProblema, setDesafios, dynamicUser }) {
  const user = dynamicUser;
  const [area, setArea] = useState(null);
  const [texto, setTexto] = useState("");
  const [loading, setLoading] = useState(false);
  const es = lang !== "en";

  async function entrar(saltar = false) {
    if (saltar || (!area && !texto)) {
      setProblema(null); setDesafios([]); go("chat"); return;
    }
    setLoading(true);
    try {
      const prompt = `El usuario es ${user?.tipo}, perfil ${user?.perfil}, autoridad ${user?.autoridad}, no-self theme: ${user?.no_self_theme}.
${area ? `Área: ${area}.` : ""} ${texto ? `Situación: "${texto}".` : ""}
Respondé SOLO con un JSON válido sin markdown:
{
  "problema_raiz": "máximo 2 oraciones, lenguaje cotidiano",
  "desafios": [
    {"titulo": "título corto", "descripcion": "una oración accionable"},
    {"titulo": "título corto", "descripcion": "una oración accionable"},
    {"titulo": "título corto", "descripcion": "una oración accionable"}
  ]
}`;
      const r = await fetch("/api/chat", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 400, system: "Respondé SOLO con JSON válido, sin markdown ni texto extra.", messages: [{ role: "user", content: prompt }] })
      });
      const d = await r.json();
      const parsed = JSON.parse((d?.content?.[0]?.text || "{}").replace(/```json|```/g, "").trim());
      setProblema({ area, texto, raiz: parsed.problema_raiz || "" });
      setDesafios((parsed.desafios || []).map((d, i) => ({ ...d, id: i + 1, estado: "activo" })));
    } catch {
      setProblema(area || texto ? { area, texto, raiz: "" } : null);
      setDesafios([]);
    }
    setLoading(false);
    go("chat");
  }

  const cardStyle = { width: "100%", maxWidth: 520, border: "1px solid rgba(184,154,78,.2)", padding: "2.5rem", background: "rgba(255,255,255,.02)", borderRadius: 16 };
  const btnPrimary = { background: C.gold, color: C.bg, border: "none", borderRadius: 24, fontFamily: "monospace", fontSize: ".65rem", letterSpacing: ".3em", padding: ".85em 2em", cursor: "pointer", textTransform: "uppercase", width: "100%", marginTop: "1.2rem" };
  const btnSecondary = { background: "transparent", color: C.dim, border: "1px solid rgba(184,154,78,.3)", fontFamily: "monospace", fontSize: ".63rem", letterSpacing: ".25em", padding: ".7em 2em", cursor: "pointer", textTransform: "uppercase", width: "100%", marginTop: ".6rem" };

  return (
    <div style={{ background: C.bg, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", fontFamily: NUNITO, color: C.txt }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&display=swap');`}</style>
      <div style={{ ...logo, marginBottom: "1.5rem" }}>SIMPLE</div>
      <div style={cardStyle}>
        <div style={{ fontSize: "1.4rem", fontWeight: 300, fontFamily: GEORGIA, marginBottom: ".4rem", lineHeight: 1.3 }}>
          {es ? `Hola, ${user?.nombre}.` : `Hi, ${user?.nombre}.`}
        </div>
        <div style={{ color: C.dim, fontSize: ".9rem", lineHeight: 1.7, marginBottom: "1.8rem" }}>
          {es ? "Podés empezar a chatear directamente, o especificar un tema para que las respuestas sean más específicas." : "You can start chatting directly, or specify a topic so answers are more specific."}
        </div>
        <div style={{ fontFamily: "monospace", fontSize: ".5rem", letterSpacing: ".3em", color: C.gold, textTransform: "uppercase", marginBottom: ".8rem" }}>
          {es ? "¿En qué área? (opcional)" : "Which area? (optional)"}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", marginBottom: "1.5rem" }}>
          {AREAS.map(a => (
            <button key={a.id} onClick={() => setArea(area === (es ? a.label : a.en) ? null : (es ? a.label : a.en))}
              style={{ background: area === (es ? a.label : a.en) ? "rgba(184,154,78,.15)" : "transparent", border: `1px solid ${area === (es ? a.label : a.en) ? C.gold : "rgba(184,154,78,.25)"}`, color: area === (es ? a.label : a.en) ? C.gold : C.dim, fontFamily: NUNITO, fontSize: ".78rem", padding: ".4em .8em", cursor: "pointer", borderRadius: 20 }}>
              {a.icon} {es ? a.label : a.en}
            </button>
          ))}
        </div>
        <div style={{ fontFamily: "monospace", fontSize: ".5rem", letterSpacing: ".3em", color: C.gold, textTransform: "uppercase", marginBottom: ".8rem" }}>
          {es ? "¿Para resolver qué? (opcional)" : "What do you want to work on? (optional)"}
        </div>
        <textarea
          style={{ width: "100%", background: "transparent", border: "1px solid rgba(184,154,78,.25)", color: C.txt, fontFamily: NUNITO, fontSize: ".9rem", padding: ".9rem", outline: "none", resize: "none", lineHeight: 1.7, minHeight: 90, boxSizing: "border-box" }}
          placeholder={es ? "Describí brevemente tu situación o lo que querés mejorar..." : "Briefly describe your situation or what you want to improve..."}
          value={texto} onChange={e => setTexto(e.target.value)} />
        <button onClick={() => entrar(false)} disabled={loading}
          style={{ ...btnPrimary, opacity: loading ? 0.6 : 1, cursor: loading ? "wait" : "pointer" }}>
          {loading ? (es ? "Preparando tu espacio..." : "Preparing your space...") : (es ? "Empezar" : "Start")}
        </button>
        <button onClick={() => entrar(true)} style={btnSecondary}>
          {es ? "Ir al chat directamente" : "Go straight to chat"}
        </button>
      </div>
      <div style={{ marginTop: "1.5rem", fontFamily: "monospace", fontSize: ".5rem", color: "rgba(240,235,224,.2)", letterSpacing: ".15em" }}>
        SIMPLE es una herramienta creada y registrada por Fran Blanco. 2026
      </div>
    </div>
  );
}

// ── Admin ─────────────────────────────────────────────────────────────────────
const ADMIN_EMAIL = "soyfranblanco@gmail.com";
const ADMIN_PASS = "soyadmin";

function EmpresaEditor({ usuario, gold, AC, onUpdate }) {
  const [editando, setEditando] = React.useState(false);
  const [valor, setValor] = React.useState(usuario?.empresa || "");
  async function guardar() {
    try {
      await apiUsuarios({ action: "update", email: usuario.email, fields: { empresa: valor } });
      onUpdate(valor);
      setEditando(false);
    } catch(e) { console.error("Error empresa:", e); }
  }
  if (!editando) return (
    <div onClick={() => setEditando(true)} style={{ cursor: "pointer", fontSize: ".8rem", color: valor ? AC.txt : AC.dim, padding: ".3rem 0", borderBottom: "1px solid rgba(184,154,78,.15)", minHeight: "1.8rem" }}>
      {valor || <span style={{ fontStyle: "italic", fontSize: ".75rem" }}>Agregar empresa...</span>}
    </div>
  );
  return (
    <div style={{ display: "flex", gap: ".4rem" }}>
      <input autoFocus value={valor} onChange={e => setValor(e.target.value)}
        onKeyDown={e => { if (e.key === "Enter") guardar(); if (e.key === "Escape") setEditando(false); }}
        style={{ flex: 1, background: "transparent", border: "none", borderBottom: `1px solid ${gold}`, color: AC.txt, fontFamily: "inherit", fontSize: ".8rem", padding: ".3rem 0", outline: "none" }}
        placeholder="Nombre de empresa..." />
      <button onClick={guardar} style={{ background: "none", border: "none", color: gold, cursor: "pointer", fontSize: ".7rem", fontFamily: "monospace" }}>✓</button>
      <button onClick={() => setEditando(false)} style={{ background: "none", border: "none", color: AC.dim, cursor: "pointer", fontSize: ".8rem" }}>×</button>
    </div>
  );
}

function AdminCityInput({ value, onChange, AC }) {
  const [sugerencias, setSugerencias] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const timer = React.useRef(null);

  async function buscar(q) {
    if (q.length < 3) { setSugerencias([]); return; }
    try {
      const r = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&limit=5&featuretype=city&accept-language=es`);
      const data = await r.json();
      setSugerencias(data.map(d => d.display_name));
    } catch { setSugerencias([]); }
  }

  function handleChange(e) {
    onChange(e.target.value);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => buscar(e.target.value), 400);
    setShow(true);
  }

  return (
    <div style={{ position: "relative", marginBottom: "1.2rem" }}>
      <input style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(184,154,78,.3)", color: AC.txt, fontFamily: NUNITO, fontSize: ".9rem", padding: ".5rem 0", outline: "none", boxSizing: "border-box" }}
        placeholder="Ciudad, País" value={value} onChange={handleChange}
        onBlur={() => setTimeout(() => setShow(false), 200)}
        onFocus={() => sugerencias.length > 0 && setShow(true)} />
      {show && sugerencias.length > 0 && (
        <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "#1a1a1a", border: "1px solid rgba(184,154,78,.3)", zIndex: 50, maxHeight: 200, overflowY: "auto" }}>
          {sugerencias.map((s, i) => (
            <div key={i} onClick={() => { onChange(s); setSugerencias([]); setShow(false); }}
              style={{ padding: ".7rem 1rem", fontSize: ".82rem", color: "rgba(240,235,224,.6)", cursor: "pointer", borderBottom: "1px solid rgba(184,154,78,.1)" }}
              onMouseEnter={e => e.target.style.color = "#b89a4e"}
              onMouseLeave={e => e.target.style.color = "rgba(240,235,224,.6)"}>
              {s}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [step, setStep] = useState("credentials"); // "credentials" | "code"
  const [code, setCode] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  async function submitCredentials() {
    if (email.toLowerCase().trim() !== ADMIN_EMAIL || pass !== ADMIN_PASS) {
      setErr("Credenciales incorrectas."); return;
    }
    setLoading(true); setErr("");
    try {
      const r = await fetch("/api/admin-auth", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "send-code" })
      });
      const data = await r.json();
      if (!r.ok) { setErr("Error al enviar el código: " + (data.error || r.status)); setLoading(false); return; }
      setStep("code");
    } catch { setErr("Error de conexión."); }
    setLoading(false);
  }

  async function submitCode() {
    if (!code || code.length !== 6) { setErr("Ingresá el código de 6 dígitos."); return; }
    setLoading(true); setErr("");
    try {
      const r = await fetch("/api/admin-auth", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "verify-code", code })
      });
      const data = await r.json();
      if (!r.ok) { setErr(data.error || "Código incorrecto."); setLoading(false); return; }
      onLogin();
    } catch { setErr("Error de conexión."); }
    setLoading(false);
  }

  return (
    <div style={{ background: C.bg, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: NUNITO, color: C.txt }}>
      <div style={{ width: "100%", maxWidth: 380, border: "1px solid rgba(184,154,78,.2)", padding: "2.5rem", background: "rgba(255,255,255,.02)", borderRadius: 16 }}>
        <div style={{ ...logo, marginBottom: "1.5rem" }}>SIMPLE</div>
        <div style={{ fontFamily: "monospace", fontSize: ".55rem", letterSpacing: ".3em", color: C.gold, marginBottom: "1.5rem" }}>ADMIN ACCESS</div>
        {err && <div style={{ color: "#c06040", fontFamily: "monospace", fontSize: ".63rem", marginBottom: ".8rem" }}>{err}</div>}

        {step === "credentials" ? <>
          <label style={lbl}>Email</label>
          <input style={inp} type="email" value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === "Enter" && submitCredentials()} />
          <label style={lbl}>Contraseña</label>
          <Eye value={pass} onChange={e => setPass(e.target.value)} onKeyDown={e => e.key === "Enter" && submitCredentials()} />
          <button onClick={submitCredentials} disabled={loading}
            style={{ background: C.gold, color: C.bg, border: "none", borderRadius: 24, fontFamily: "monospace", fontSize: ".65rem", letterSpacing: ".3em", padding: ".85em 2em", cursor: loading ? "wait" : "pointer", textTransform: "uppercase", width: "100%", marginTop: ".5rem", opacity: loading ? 0.6 : 1 }}>
            {loading ? "Enviando código..." : "Continuar"}
          </button>
        </> : <>
          <div style={{ color: C.dim, fontSize: ".82rem", fontFamily: NUNITO, lineHeight: 1.6, marginBottom: "1.5rem" }}>
            Te mandamos un código de 6 dígitos a <span style={{ color: C.gold }}>soyfranblanco@gmail.com</span>. Vence en 10 minutos.
          </div>
          <label style={lbl}>Código de verificación</label>
          <input style={{ ...inp, fontSize: "1.5rem", letterSpacing: ".4em", textAlign: "center" }}
            type="text" maxLength={6} placeholder="000000" value={code}
            onChange={e => setCode(e.target.value.replace(/\D/g, ""))}
            onKeyDown={e => e.key === "Enter" && submitCode()} />
          <button onClick={submitCode} disabled={loading || code.length !== 6}
            style={{ background: C.gold, color: C.bg, border: "none", borderRadius: 24, fontFamily: "monospace", fontSize: ".65rem", letterSpacing: ".3em", padding: ".85em 2em", cursor: loading || code.length !== 6 ? "not-allowed" : "pointer", textTransform: "uppercase", width: "100%", marginTop: ".5rem", opacity: loading || code.length !== 6 ? 0.5 : 1 }}>
            {loading ? "Verificando..." : "Ingresar"}
          </button>
          <button onClick={() => { setStep("credentials"); setCode(""); setErr(""); }}
            style={{ background: "none", border: "none", color: C.dim, cursor: "pointer", fontFamily: "monospace", fontSize: ".55rem", letterSpacing: ".1em", marginTop: ".8rem", width: "100%", textAlign: "center" }}>
            ← Volver
          </button>
        </>}
      </div>
    </div>
  );
}

function AdminListaConBusqueda({ usuarios, gold, AC, seleccionados, toggleSeleccion, seleccionar, setView, cargarConvEquipo }) {
  const [busqueda, setBusqueda] = React.useState("");
  const filtrados = busqueda.trim()
    ? usuarios.filter(u => {
        const q = busqueda.toLowerCase();
        return (u.nombre + " " + u.apellido).toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || (u.diseno?.tipo || "").toLowerCase().includes(q) || (u.empresa || "").toLowerCase().includes(q);
      })
    : usuarios;

  return (
    <div style={{ maxWidth: 800, margin: "2rem auto", padding: "0 2rem" }}>
      <div style={{ position: "relative", marginBottom: "1.2rem" }}>
        <svg style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", opacity: 0.4 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input value={busqueda} onChange={e => setBusqueda(e.target.value)} placeholder="Buscar por nombre, email o tipo..."
          style={{ width: "100%", background: AC.panelBg, border: "1px solid rgba(184,154,78,.2)", borderRadius: 24, color: AC.txt, fontFamily: NUNITO, fontSize: ".85rem", padding: ".65rem 1rem .65rem 2.5rem", outline: "none", boxSizing: "border-box" }} />
        {busqueda && <button onClick={() => setBusqueda("")} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: AC.dim, cursor: "pointer", fontSize: "1rem" }}>×</button>}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: ".8rem" }}>
        <div style={{ fontFamily: "monospace", fontSize: ".5rem", letterSpacing: ".3em", color: gold }}>
          {filtrados.length} USUARIO{filtrados.length !== 1 ? "S" : ""}{busqueda ? ` · "${busqueda}"` : ""}
        </div>
        {seleccionados.length >= 2 && (
          <button onClick={() => { setView("equipo"); setTimeout(() => cargarConvEquipo(), 50); }}
            style={{ background: gold, color: AC.bg, border: "none", borderRadius: 20, fontFamily: "monospace", fontSize: ".55rem", letterSpacing: ".2em", padding: ".5em 1.2em", cursor: "pointer", textTransform: "uppercase" }}>
            Analizar equipo ({seleccionados.length})
          </button>
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: ".6rem" }}>
        {filtrados.map((u, i) => {
          const estaSeleccionado = seleccionados.find(s => s.email === u.email);
          return (
            <div key={i} style={{ display: "flex", gap: ".8rem", alignItems: "stretch" }}>
              <button onClick={() => toggleSeleccion(u)}
                style={{ width: 36, flexShrink: 0, background: estaSeleccionado ? "rgba(184,154,78,.15)" : "transparent", border: `1px solid ${estaSeleccionado ? gold : "rgba(184,154,78,.2)"}`, color: estaSeleccionado ? gold : AC.dim, cursor: "pointer", fontSize: ".9rem", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
                {estaSeleccionado ? "✓" : "+"}
              </button>
              <button onClick={() => seleccionar(u)}
                style={{ flex: 1, background: AC.panelBg, border: "1px solid rgba(184,154,78,.15)", padding: "1.2rem 1.5rem", cursor: "pointer", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: 12 }}
                onMouseEnter={e => e.currentTarget.style.borderColor = gold}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(184,154,78,.15)"}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: ".5rem", flexWrap: "wrap", marginBottom: ".2rem" }}>
                    <div style={{ fontSize: ".95rem", fontWeight: 600, color: AC.txt }}>{u.nombre} {u.apellido}</div>
                    {u.empresa && <div style={{ fontFamily: "monospace", fontSize: ".45rem", letterSpacing: ".15em", color: AC.bg, background: gold, padding: ".2em .6em", borderRadius: 20, textTransform: "uppercase" }}>{u.empresa}</div>}
                  </div>
                  <div style={{ fontSize: ".78rem", color: AC.dim }}>{u.email}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "monospace", fontSize: ".55rem", color: gold }}>{u.diseno?.tipo}</div>
                  <div style={{ fontFamily: "monospace", fontSize: ".5rem", color: AC.dim }}>Perfil {u.diseno?.perfil}</div>
                </div>
              </button>
            </div>
          );
        })}
        {filtrados.length === 0 && (
          <div style={{ textAlign: "center", color: AC.dim, fontFamily: "monospace", fontSize: ".6rem", padding: "2rem", letterSpacing: ".2em" }}>SIN RESULTADOS</div>
        )}
      </div>
    </div>
  );
}

function AdminPanel() {
  const [authed, setAuthed] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [selected, setSelected] = useState(null);
  const [msgs, setMsgs] = useState([]);
  const [convId, setConvId] = useState(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [nota, setNota] = useState("");
  const [notaGuardada, setNotaGuardada] = useState("");
  const [view, setView] = useState("lista");
  const [panelVisible, setPanelVisible] = useState(true);
  const [seleccionados, setSeleccionados] = useState([]);
  const [nuevoUsuario, setNuevoUsuario] = useState({ nom: "", ape: "", email: "", fecha: "", hora: "", lugar: "", pass: "simple2026" });
  const [nuevoUsuarioErr, setNuevoUsuarioErr] = useState("");
  const [nuevoUsuarioLoading, setNuevoUsuarioLoading] = useState(false);
  const [nuevoUsuarioOk, setNuevoUsuarioOk] = useState(null); // { email, pass }
  const [teamMsgs, setTeamMsgs] = useState([]);
  const [teamConvId, setTeamConvId] = useState(null);
  const [teamInput, setTeamInput] = useState("");
  const [teamLoading, setTeamLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const chatEndRef = React.useRef(null);
  const lastUserMsgRef = React.useRef(null);
  const lastUserTeamMsgRef = React.useRef(null);
  const shouldScrollRef = React.useRef(false);
  const teamEndRef = React.useRef(null);

  const bg = darkMode ? "#080808" : "#f5f0e8";
  const gold = "#b89a4e";
  const AC = { bg, txt: darkMode ? "#f0ebe0" : "#1a1a1a", gold, dim: darkMode ? "rgba(240,235,224,0.45)" : "rgba(26,26,26,0.5)", panelBg: darkMode ? "#0f0f0f" : "#ede8df" };

  React.useEffect(() => {
    if (!authed) return;
    async function cargar() {
      const data = await apiUsuarios({ action: "get-all" });
      setUsuarios(Array.isArray(data) ? data : []);
    }
    cargar();
  }, [authed]);

  React.useEffect(() => {
    if (shouldScrollRef.current && lastUserMsgRef.current) {
      lastUserMsgRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [msgs, loading]);

  React.useEffect(() => {
    if (shouldScrollRef.current && lastUserTeamMsgRef.current) {
      lastUserTeamMsgRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [teamMsgs, teamLoading]);

  async function seleccionar(u) {
    setSelected(u); setMsgs([]); setConvId(null); setNota(""); setNotaGuardada(""); setView("chat");
    try {
      const data = await apiConversaciones({ action: "get", email: "admin::" + u.email });
      if (Array.isArray(data) && data.length > 0 && data[0].mensajes?.length > 0) {
        setMsgs(data[0].mensajes); setConvId(data[0].id);
      }
    } catch {}
  }

  async function guardarConvAdmin(mensajes, currentConvId) {
    try {
      const emailKey = "admin::" + selected.email;
      if (currentConvId) {
        await apiConversaciones({ action: "update", id: currentConvId, mensajes });
        return currentConvId;
      } else {
        const result = await apiConversaciones({ action: "insert", email: emailKey, modo: "admin", mensajes });
        if (Array.isArray(result) && result[0]?.id) return result[0].id;
      }
    } catch {}
    return currentConvId;
  }

  async function send() {
    if (!input.trim() || loading || !selected) return;
    const txt = input.trim(); setInput("");
    shouldScrollRef.current = true;
    const next = [...msgs, { role: "user", content: txt }];
    setMsgs(next); setLoading(true);
    const contextoNotas = notaGuardada ? `\n\nNOTAS PRIVADAS DEL CONSULTOR:\n${notaGuardada}` : "";
    const sys = SYSTEM_PROMPT + "\nDISEÑO DE LA PERSONA: " + JSON.stringify(selected.diseno) + "\nEres el asistente del consultor Fran Blanco." + contextoNotas;
    try {
      const r = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1000, system: sys, messages: next }) });
      const d = await r.json();
      const finalMsgs = [...next, { role: "assistant", content: d?.content?.[0]?.text || "Error." }];
      setMsgs(finalMsgs);
      const newId = await guardarConvAdmin(finalMsgs, convId);
      if (newId && !convId) setConvId(newId);
    } catch { setMsgs([...next, { role: "assistant", content: "Error de conexión." }]); }
    setLoading(false); shouldScrollRef.current = false;
  }

  function teamKey() { return "equipo::" + [...seleccionados].map(u => u.email).sort().join("|"); }

  async function cargarConvEquipo() {
    try {
      const data = await apiConversaciones({ action: "get", email: teamKey() });
      if (Array.isArray(data) && data[0]?.mensajes) { setTeamMsgs(data[0].mensajes); setTeamConvId(data[0].id); }
      else { setTeamMsgs([]); setTeamConvId(null); }
    } catch { setTeamMsgs([]); setTeamConvId(null); }
  }

  async function guardarConvEquipo(mensajes, currentId) {
    try {
      if (currentId) {
        await apiConversaciones({ action: "update", id: currentId, mensajes });
        return currentId;
      } else {
        const result = await apiConversaciones({ action: "insert", email: teamKey(), modo: "equipo", mensajes });
        if (Array.isArray(result) && result[0]?.id) return result[0].id;
      }
    } catch {}
    return currentId;
  }

  async function sendTeam() {
    if (!teamInput.trim() || teamLoading) return;
    const txt = teamInput.trim(); setTeamInput("");
    shouldScrollRef.current = true;
    const next = [...teamMsgs, { role: "user", content: txt }];
    setTeamMsgs(next); setTeamLoading(true);
    const perfiles = seleccionados.map((u, i) => `PERSONA ${i+1} — ${u.nombre} ${u.apellido}: ${JSON.stringify(u.diseno)}`).join("\n\n");
    const sys = `Sos un experto en Diseño Humano especializado en dinámicas de equipo.\n\nEQUIPO:\n${perfiles}\n\nAnalizá dinámicas, complementariedades y tensiones. Identificá roles naturales. Directo, sin jerga espiritual. Cerrá con algo accionable para el equipo.`;
    try {
      const r = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1200, system: sys, messages: next }) });
      const d = await r.json();
      const finalTeamMsgs = [...next, { role: "assistant", content: d?.content?.[0]?.text || "Error." }];
      setTeamMsgs(finalTeamMsgs);
      const newId = await guardarConvEquipo(finalTeamMsgs, teamConvId);
      if (newId && !teamConvId) setTeamConvId(newId);
    } catch { setTeamMsgs([...next, { role: "assistant", content: "Error de conexión." }]); }
    setTeamLoading(false); shouldScrollRef.current = false;
  }

  function toggleSeleccion(u) {
    setSeleccionados(prev => prev.find(s => s.email === u.email) ? prev.filter(s => s.email !== u.email) : prev.length < 8 ? [...prev, u] : prev);
  }

  const PanelToggle = ({ panelWidth }) => (
    <div style={{ position: "absolute", top: "50%", left: panelWidth - 1, transform: "translateY(-50%)", width: 20, height: 40, overflow: "hidden", zIndex: 30, pointerEvents: "none" }}>
      <button onClick={() => setPanelVisible(v => !v)}
        style={{ position: "absolute", top: 0, left: -20, width: 40, height: 40, borderRadius: "50%", background: AC.panelBg, border: "1px solid rgba(184,154,78,.35)", color: gold, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".65rem", paddingLeft: 22, pointerEvents: "auto", boxSizing: "border-box" }}>
        {panelVisible ? "◀" : "▶"}
      </button>
    </div>
  );

  const entornoES = selected?.diseno?.variables?.entorno ? (ENTORNOS_ES[selected.diseno.variables.entorno] || selected.diseno.variables.entorno) : null;

  if (!authed) return <AdminLogin onLogin={() => setAuthed(true)} />;

  return (
    <div style={{ background: AC.bg, minHeight: "100vh", fontFamily: NUNITO, color: AC.txt }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&display=swap'); @keyframes p{0%,80%,100%{opacity:.2;transform:scale(.8)}40%{opacity:1;transform:scale(1)}}`}</style>
      <div style={{ padding: "1rem 2rem", borderBottom: "1px solid rgba(184,154,78,.2)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div style={{ ...logo, marginBottom: 0 }}>SIMPLE</div>
          <div style={{ fontFamily: "monospace", fontSize: ".5rem", letterSpacing: ".3em", color: gold }}>ADMIN</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button onClick={() => setDarkMode(v => !v)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.1rem", opacity: 0.7 }}>
            {darkMode ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg> : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>}
          </button>
          {view === "lista" && (
            <button onClick={() => { setView("nuevo-usuario"); setNuevoUsuarioErr(""); setNuevoUsuarioOk(null); setNuevoUsuario({ nom: "", ape: "", email: "", fecha: "", hora: "", lugar: "", pass: "simple2026" }); }}
              style={{ background: "transparent", border: `1px solid ${gold}`, color: gold, borderRadius: 20, fontFamily: "monospace", fontSize: ".5rem", letterSpacing: ".2em", padding: ".4em 1em", cursor: "pointer", textTransform: "uppercase" }}>
              + Crear usuario
            </button>
          )}
          {(view === "chat" || view === "equipo" || view === "nuevo-usuario") && (
            <button onClick={() => { setView("lista"); setSeleccionados([]); setTeamMsgs([]); setTeamConvId(null); }} style={{ color: gold, background: "none", border: "none", cursor: "pointer", fontFamily: "monospace", fontSize: ".6rem" }}>← Volver</button>
          )}
        </div>
      </div>

      {view === "lista" && <AdminListaConBusqueda usuarios={usuarios} gold={gold} AC={AC} seleccionados={seleccionados} toggleSeleccion={toggleSeleccion} seleccionar={seleccionar} setView={setView} cargarConvEquipo={cargarConvEquipo} />}

      {view === "nuevo-usuario" && (
        <div style={{ maxWidth: 520, margin: "2rem auto", padding: "0 2rem" }}>
          <div style={{ fontFamily: GEORGIA, fontSize: "1.3rem", fontWeight: 300, color: AC.txt, marginBottom: ".4rem" }}>Crear usuario</div>
          <div style={{ color: AC.dim, fontSize: ".82rem", fontFamily: NUNITO, marginBottom: "1.5rem", lineHeight: 1.6 }}>
            El usuario se crea con email confirmado. Podés compartirle la contraseña provisoria para que ingrese.
          </div>
          {nuevoUsuarioOk ? (
            <div style={{ border: `1px solid rgba(184,154,78,.3)`, borderRadius: 16, padding: "2rem", background: "rgba(184,154,78,.05)", textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>✅</div>
              <div style={{ fontFamily: GEORGIA, fontSize: "1.1rem", color: AC.txt, marginBottom: ".8rem" }}>Usuario creado</div>
              <div style={{ color: AC.dim, fontFamily: NUNITO, fontSize: ".85rem", lineHeight: 1.8 }}>
                <strong style={{ color: AC.txt }}>{nuevoUsuarioOk.email}</strong><br />
                Contraseña provisoria: <span style={{ fontFamily: "monospace", color: gold, fontSize: "1rem", letterSpacing: ".1em" }}>{nuevoUsuarioOk.pass}</span>
              </div>
              <div style={{ marginTop: "1rem", fontFamily: "monospace", fontSize: ".5rem", color: AC.dim, letterSpacing: ".1em" }}>
                Guardá esta contraseña — no se vuelve a mostrar.
              </div>
              <button onClick={() => { setView("lista"); setNuevoUsuarioOk(null); }}
                style={{ marginTop: "1.5rem", background: gold, color: AC.bg, border: "none", borderRadius: 20, fontFamily: "monospace", fontSize: ".55rem", letterSpacing: ".2em", padding: ".6em 1.5em", cursor: "pointer", textTransform: "uppercase" }}>
                Volver a la lista
              </button>
            </div>
          ) : (
            <div style={{ border: `1px solid rgba(184,154,78,.2)`, borderRadius: 16, padding: "2rem", background: AC.panelBg }}>
              {nuevoUsuarioErr && <div style={{ color: "#c06040", fontFamily: "monospace", fontSize: ".63rem", marginBottom: ".8rem" }}>{nuevoUsuarioErr}</div>}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <div style={{ fontFamily: "monospace", fontSize: ".45rem", letterSpacing: ".3em", color: gold, textTransform: "uppercase", marginBottom: ".3rem" }}>Nombre *</div>
                  <input value={nuevoUsuario.nom} onChange={e => setNuevoUsuario(p => ({ ...p, nom: e.target.value }))}
                    placeholder="Nombre" style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(184,154,78,.3)", color: AC.txt, fontFamily: NUNITO, fontSize: ".9rem", padding: ".5rem 0", outline: "none", boxSizing: "border-box", marginBottom: "1.2rem" }} />
                </div>
                <div>
                  <div style={{ fontFamily: "monospace", fontSize: ".45rem", letterSpacing: ".3em", color: gold, textTransform: "uppercase", marginBottom: ".3rem" }}>Apellido *</div>
                  <input value={nuevoUsuario.ape} onChange={e => setNuevoUsuario(p => ({ ...p, ape: e.target.value }))}
                    placeholder="Apellido" style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(184,154,78,.3)", color: AC.txt, fontFamily: NUNITO, fontSize: ".9rem", padding: ".5rem 0", outline: "none", boxSizing: "border-box", marginBottom: "1.2rem" }} />
                </div>
              </div>
              <div style={{ fontFamily: "monospace", fontSize: ".45rem", letterSpacing: ".3em", color: gold, textTransform: "uppercase", marginBottom: ".3rem" }}>Email *</div>
              <input type="email" value={nuevoUsuario.email} onChange={e => setNuevoUsuario(p => ({ ...p, email: e.target.value }))}
                placeholder="usuario@email.com" style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(184,154,78,.3)", color: AC.txt, fontFamily: NUNITO, fontSize: ".9rem", padding: ".5rem 0", outline: "none", boxSizing: "border-box", marginBottom: "1.2rem" }} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <div style={{ fontFamily: "monospace", fontSize: ".45rem", letterSpacing: ".3em", color: gold, textTransform: "uppercase", marginBottom: ".3rem" }}>Fecha de nac. *</div>
                  <input type="date" value={nuevoUsuario.fecha} onChange={e => setNuevoUsuario(p => ({ ...p, fecha: e.target.value }))}
                    style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(184,154,78,.3)", color: AC.txt, fontFamily: NUNITO, fontSize: ".9rem", padding: ".5rem 0", outline: "none", boxSizing: "border-box", marginBottom: "1.2rem", colorScheme: "dark" }} />
                </div>
                <div>
                  <div style={{ fontFamily: "monospace", fontSize: ".45rem", letterSpacing: ".3em", color: gold, textTransform: "uppercase", marginBottom: ".3rem" }}>Hora aprox. *</div>
                  <input type="time" value={nuevoUsuario.hora} onChange={e => setNuevoUsuario(p => ({ ...p, hora: e.target.value }))}
                    style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(184,154,78,.3)", color: AC.txt, fontFamily: NUNITO, fontSize: ".9rem", padding: ".5rem 0", outline: "none", boxSizing: "border-box", marginBottom: "1.2rem", colorScheme: "dark" }} />
                </div>
              </div>
              <div style={{ fontFamily: "monospace", fontSize: ".45rem", letterSpacing: ".3em", color: gold, textTransform: "uppercase", marginBottom: ".3rem" }}>Ciudad de nacimiento *</div>
              <AdminCityInput value={nuevoUsuario.lugar} onChange={v => setNuevoUsuario(p => ({ ...p, lugar: v }))} AC={AC} />
              <div style={{ fontFamily: "monospace", fontSize: ".45rem", letterSpacing: ".3em", color: gold, textTransform: "uppercase", marginBottom: ".3rem" }}>Contraseña provisoria *</div>
              <input value={nuevoUsuario.pass} onChange={e => setNuevoUsuario(p => ({ ...p, pass: e.target.value }))}
                placeholder="Mínimo 6 caracteres" style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(184,154,78,.3)", color: AC.txt, fontFamily: NUNITO, fontSize: ".9rem", padding: ".5rem 0", outline: "none", boxSizing: "border-box", marginBottom: "1.5rem" }} />
              <button onClick={async () => {
                const { nom, ape, email, fecha, hora, lugar, pass } = nuevoUsuario;
                if (!nom || !ape || !email || !fecha || !hora || !lugar || !pass) { setNuevoUsuarioErr("Completá todos los campos."); return; }
                if (pass.length < 6) { setNuevoUsuarioErr("La contraseña debe tener al menos 6 caracteres."); return; }
                setNuevoUsuarioLoading(true); setNuevoUsuarioErr("");
                try {
                  const hdR = await fetch("/api/hd", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ nombre: nom, apellido: ape, birth_date: fecha, birth_time: hora, ciudad: lugar }) });
                  const diseno = await hdR.json();
                  if (diseno.error) { setNuevoUsuarioErr("Error al calcular el diseño: " + diseno.error); setNuevoUsuarioLoading(false); return; }
                  const r = await fetch("/api/admin-usuario", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ nombre: nom, apellido: ape, email: email.toLowerCase().trim(), password: pass, diseno }) });
                  const data = await r.json();
                  if (!r.ok) { setNuevoUsuarioErr("Error: " + (data.error || r.status)); setNuevoUsuarioLoading(false); return; }
                  setNuevoUsuarioOk({ email: email.toLowerCase().trim(), pass });
                  setUsuarios(prev => [...prev, { nombre: nom, apellido: ape, email: email.toLowerCase().trim(), diseno }]);
                } catch (e) { setNuevoUsuarioErr("Error de conexión: " + e.message); }
                setNuevoUsuarioLoading(false);
              }} disabled={nuevoUsuarioLoading}
                style={{ background: gold, color: AC.bg, border: "none", borderRadius: 24, fontFamily: "monospace", fontSize: ".6rem", letterSpacing: ".25em", padding: ".8em 2em", cursor: nuevoUsuarioLoading ? "wait" : "pointer", textTransform: "uppercase", width: "100%", opacity: nuevoUsuarioLoading ? 0.6 : 1 }}>
                {nuevoUsuarioLoading ? "Calculando diseño y creando usuario..." : "Crear usuario"}
              </button>
            </div>
          )}
        </div>
      )}

      {view === "equipo" && (
        <div style={{ display: "flex", height: "calc(100vh - 60px)", overflow: "hidden", position: "relative" }}>
          <PanelToggle panelWidth={panelVisible ? 260 : 0} />
          <div style={{ width: panelVisible ? 260 : 0, minWidth: 0, borderRight: panelVisible ? "1px solid rgba(184,154,78,.15)" : "none", overflowY: panelVisible ? "auto" : "hidden", flexShrink: 0, transition: "width .3s ease", background: AC.panelBg }}>
            <div style={{ width: 260, padding: "1.5rem", opacity: panelVisible ? 1 : 0, transition: "opacity .2s ease", pointerEvents: panelVisible ? "auto" : "none" }}>
              <div style={{ fontFamily: "monospace", fontSize: ".5rem", letterSpacing: ".3em", color: gold, textTransform: "uppercase", marginBottom: "1rem" }}>Equipo · {seleccionados.length} personas</div>
              {seleccionados.map((u, i) => (
                <div key={i} style={{ marginBottom: "1.2rem", paddingBottom: "1.2rem", borderBottom: "1px solid rgba(184,154,78,.1)" }}>
                  <div style={{ fontSize: ".9rem", fontWeight: 600, color: AC.txt, marginBottom: ".2rem" }}>{u.nombre} {u.apellido}</div>
                  <div style={{ fontFamily: "monospace", fontSize: ".5rem", color: gold }}>{u.diseno?.tipo} · {u.diseno?.perfil}</div>
                  <div style={{ fontSize: ".75rem", color: AC.dim, marginTop: ".2rem" }}>{u.diseno?.autoridad}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", background: AC.bg }}>
            <div style={{ flex: 1, padding: `1.5rem clamp(60px, 12vw, 170px)`, overflowY: "auto", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {teamMsgs.length === 0 && <div style={{ color: AC.dim, fontSize: ".85rem", textAlign: "center", marginTop: "2rem" }}>Preguntá sobre las dinámicas del equipo, roles naturales o tensiones.</div>}
              {teamMsgs.map((m, i) => (
                <div key={i} ref={m.role === "user" ? lastUserTeamMsgRef : null} style={{ textAlign: m.role === "user" ? "right" : "left" }}>
                  <div style={{ fontFamily: "monospace", fontSize: ".48rem", letterSpacing: ".3em", color: m.role === "user" ? AC.dim : gold, marginBottom: ".25rem", textTransform: "uppercase" }}>{m.role === "user" ? "Fran" : "SIMPLE"}</div>
                  <div style={{ fontSize: ".9rem", lineHeight: 1.85, color: m.role === "user" ? AC.dim : AC.txt, fontStyle: m.role === "user" ? "italic" : "normal", fontFamily: m.role === "assistant" ? GEORGIA : NUNITO }} dangerouslySetInnerHTML={{ __html: md(m.content) }} />
                </div>
              ))}
              {teamLoading && <div><div style={{ fontFamily: "monospace", fontSize: ".48rem", letterSpacing: ".3em", color: gold, marginBottom: ".25rem" }}>SIMPLE</div><div style={{ display: "flex", gap: 5 }}>{[0,1,2].map(i => <div key={i} style={{ width: 5, height: 5, background: gold, borderRadius: "50%", animation: `p 1.4s ${i*.2}s infinite ease-in-out` }} />)}</div></div>}
              <div ref={teamEndRef} />
            </div>
            <div style={{ padding: `1rem clamp(60px, 12vw, 170px)`, borderTop: "1px solid rgba(184,154,78,.15)", display: "flex", gap: ".8rem", alignItems: "flex-end" }}>
              <textarea value={teamInput} onChange={e => setTeamInput(e.target.value)} onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendTeam(); } }}
                style={{ flex: 1, background: "rgba(255,255,255,.02)", border: "1px solid rgba(184,154,78,.2)", borderRadius: 12, color: AC.txt, fontFamily: GEORGIA, fontSize: ".9rem", padding: ".8rem 1rem", outline: "none", resize: "none", lineHeight: 1.6, minHeight: 80, boxSizing: "border-box" }}
                placeholder="Preguntá sobre las dinámicas del equipo..." />
              <button onClick={sendTeam} disabled={teamLoading || !teamInput.trim()} style={{ background: "transparent", border: `1px solid ${gold}`, borderRadius: 20, color: gold, fontFamily: "monospace", fontSize: ".6rem", letterSpacing: ".2em", padding: ".6em 1.2em", cursor: "pointer", textTransform: "uppercase", opacity: teamLoading || !teamInput.trim() ? 0.3 : 1, alignSelf: "flex-end", marginBottom: 2 }}>Enviar</button>
            </div>
          </div>
        </div>
      )}

      {view === "chat" && selected && (
        <div style={{ display: "flex", height: "calc(100vh - 60px)", overflow: "hidden", position: "relative" }}>
          <PanelToggle panelWidth={panelVisible ? 300 : 0} />
          <div style={{ width: panelVisible ? 300 : 0, minWidth: 0, borderRight: panelVisible ? "1px solid rgba(184,154,78,.15)" : "none", overflowY: panelVisible ? "auto" : "hidden", flexShrink: 0, transition: "width .3s ease", background: AC.panelBg }}>
            <div style={{ width: 300, padding: "1.5rem", opacity: panelVisible ? 1 : 0, transition: "opacity .2s ease", pointerEvents: panelVisible ? "auto" : "none", boxSizing: "border-box" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 600, color: AC.txt }}>{selected.nombre} {selected.apellido}</div>
              <div style={{ fontSize: ".78rem", color: AC.dim, marginBottom: ".5rem" }}>{selected.email}</div>
              {[["Tipo", selected.diseno?.tipo], ["Autoridad", selected.diseno?.autoridad], ["Perfil", selected.diseno?.perfil], ["Estrategia", selected.diseno?.estrategia], ["Firma", selected.diseno?.firma], ["No-self", selected.diseno?.no_self_theme], ["Entorno", entornoES]].map(([l, v]) => v && (
                <div key={l} style={{ marginBottom: ".7rem" }}>
                  <div style={{ fontFamily: "monospace", fontSize: ".45rem", letterSpacing: ".3em", color: gold, textTransform: "uppercase", marginBottom: ".15rem" }}>{l}</div>
                  <div style={{ fontSize: ".82rem", color: AC.txt }}>{v}</div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid rgba(184,154,78,.15)", marginTop: ".5rem", paddingTop: "1rem" }}>
                <div style={{ fontFamily: "monospace", fontSize: ".45rem", letterSpacing: ".3em", color: gold, textTransform: "uppercase", marginBottom: ".4rem" }}>Empresa</div>
                <EmpresaEditor usuario={selected} gold={gold} AC={AC} onUpdate={(empresa) => { setUsuarios(prev => prev.map(u => u.email === selected.email ? { ...u, empresa } : u)); setSelected(prev => ({ ...prev, empresa })); }} />
                <div style={{ fontFamily: "monospace", fontSize: ".45rem", letterSpacing: ".3em", color: gold, textTransform: "uppercase", marginBottom: ".5rem", marginTop: "1rem" }}>Mis notas</div>
                <textarea value={nota} onChange={e => setNota(e.target.value)}
                  style={{ width: "100%", background: darkMode ? "rgba(255,255,255,.03)" : "rgba(0,0,0,.04)", border: "1px solid rgba(184,154,78,.2)", borderRadius: 12, color: AC.txt, fontFamily: NUNITO, fontSize: ".8rem", padding: ".7rem", outline: "none", resize: "vertical", lineHeight: 1.6, minHeight: 120, boxSizing: "border-box", marginBottom: ".5rem", display: "block" }}
                  placeholder="Anotá contexto sobre este cliente..." />
                <button onClick={() => setNotaGuardada(nota)}
                  style={{ background: nota === notaGuardada ? "rgba(184,154,78,.1)" : gold, color: nota === notaGuardada ? AC.dim : AC.bg, border: `1px solid ${gold}`, borderRadius: 20, fontFamily: "monospace", fontSize: ".5rem", letterSpacing: ".2em", padding: ".5em 1em", cursor: "pointer", textTransform: "uppercase", width: "100%", boxSizing: "border-box", display: "block" }}>
                  {nota === notaGuardada && notaGuardada ? "✓ Nota activa en el chat" : "Activar nota en el chat"}
                </button>
              </div>
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0, background: AC.bg }}>
            <div style={{ flex: 1, padding: `1.5rem clamp(60px, 12vw, 170px)`, overflowY: "auto", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {msgs.length === 0 && <div style={{ color: AC.dim, fontSize: ".85rem", textAlign: "center", marginTop: "2rem" }}>Chateá con el diseño de {selected.nombre}.</div>}
              {msgs.map((m, i) => (
                <div key={i} ref={m.role === "user" ? lastUserMsgRef : null} style={{ textAlign: m.role === "user" ? "right" : "left" }}>
                  <div style={{ fontFamily: "monospace", fontSize: ".48rem", letterSpacing: ".3em", color: m.role === "user" ? AC.dim : gold, marginBottom: ".25rem", textTransform: "uppercase" }}>{m.role === "user" ? "Fran" : "SIMPLE"}</div>
                  <div style={{ fontSize: ".9rem", lineHeight: 1.85, color: m.role === "user" ? AC.dim : AC.txt, fontStyle: m.role === "user" ? "italic" : "normal", fontFamily: m.role === "assistant" ? GEORGIA : NUNITO }} dangerouslySetInnerHTML={{ __html: md(m.content) }} />
                </div>
              ))}
              {loading && <div><div style={{ fontFamily: "monospace", fontSize: ".48rem", letterSpacing: ".3em", color: gold, marginBottom: ".25rem" }}>SIMPLE</div><div style={{ display: "flex", gap: 5 }}>{[0,1,2].map(i => <div key={i} style={{ width: 5, height: 5, background: gold, borderRadius: "50%", animation: `p 1.4s ${i*.2}s infinite ease-in-out` }} />)}</div></div>}
              <div ref={chatEndRef} />
            </div>
            <div style={{ padding: `1rem clamp(60px, 12vw, 170px)`, borderTop: "1px solid rgba(184,154,78,.15)", display: "flex", gap: ".8rem", alignItems: "flex-end" }}>
              <textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
                style={{ flex: 1, background: "rgba(255,255,255,.02)", border: "1px solid rgba(184,154,78,.2)", borderRadius: 12, color: AC.txt, fontFamily: GEORGIA, fontSize: ".9rem", padding: ".8rem 1rem", outline: "none", resize: "none", lineHeight: 1.6, minHeight: 80, maxHeight: 300, boxSizing: "border-box" }}
                placeholder={`Preguntá sobre el diseño de ${selected.nombre}...`} />
              <button onClick={send} disabled={loading || !input.trim()} style={{ background: "transparent", border: `1px solid ${gold}`, borderRadius: 20, color: gold, fontFamily: "monospace", fontSize: ".6rem", letterSpacing: ".2em", padding: ".6em 1.2em", cursor: "pointer", textTransform: "uppercase", opacity: loading || !input.trim() ? 0.3 : 1, alignSelf: "flex-end", marginBottom: 2 }}>Enviar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const isAdmin = window.location.pathname === "/admin";
  if (isAdmin) return <AdminPanel />;

  const [screen, setScreen] = useState("welcome");
  const [email, setEmail] = useState("");
  const [lang, setLang] = useState("es");
  const [problema, setProblema] = useState(null);
  const [desafios, setDesafios] = useState([]);
  const [dynamicUser, setDynamicUser] = useState(null);
  function go(s, e) { if (e) setEmail(e); setScreen(s); }
  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <style>{"*{box-sizing:border-box;margin:0;padding:0}body{background:#080808}input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px #080808 inset!important;-webkit-text-fill-color:#f0ebe0!important}"}</style>
      {screen === "welcome" && <Welcome go={go} lang={lang} setLang={setLang} />}
      {screen === "register" && <Register go={go} lang={lang} setDynamicUser={setDynamicUser} />}
      {screen === "pending" && <Pending email={email} go={go} lang={lang} />}
      {screen === "login" && <Login go={go} lang={lang} setDynamicUser={setDynamicUser} />}
      {screen === "onboarding" && <Onboarding go={go} userEmail={email} lang={lang} setProblema={setProblema} setDesafios={setDesafios} dynamicUser={dynamicUser} />}
      {screen === "chat" && <Chat go={go} userEmail={email} lang={lang} setLang={setLang} problema={problema} desafios={desafios} setDesafios={setDesafios} setProblema={setProblema} dynamicUser={dynamicUser} />}
    </div>
  );
}
