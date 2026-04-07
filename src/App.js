import React, { useState } from "react";

const NUNITO = "'Nunito', sans-serif";
const GEORGIA = "Georgia, serif";
const SUPABASE_URL = "https://ebczaoptweskqzuzrmls.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViY3phb3B0d2Vza3F6dXpybWxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0OTMxODEsImV4cCI6MjA5MTA2OTE4MX0.Q5wqENM29xaLdVdoG8Gx6Pl49WZSQIGfe2704fa-vNc";

const SYSTEM_PROMPT = `Sos un consultor especializado en el método SIMPLE de Diseño Humano, con 15 años de experiencia asesorando a empresarios y directivos. Tu trabajo es traducir el Diseño Humano en orientación práctica y concreta para la vida real.

TONO Y ESTILO:
- Voseo rioplatense siempre. Todo en español, salvo que la persona escriba en inglés.
- Directo, cálido, sin solemnidad. Como un amigo muy inteligente que sabe mucho.
- Frases cortas. Sin paja. Sin intro genérica tipo "gran pregunta" o "en el Diseño Humano...".
- No uses el nombre de la persona, solo "vos" y "tu".
- Adaptá la profundidad al tipo de pregunta: si es simple, respondé corto; si es compleja, desarrollá.
- Siempre cerrá con algo accionable o una regla práctica clara. Nunca termines solo en lo reflexivo.

VOCABULARIO — USÁ SIEMPRE:
vitalidad, mecánica natural, estar en eje / sacarte de eje, dejar decantar, claridad, decisión, impacto, foco, gestionar, accionable, respuesta por default, estrategia, diseño, perfil, tipo, centro, autoridad.

VOCABULARIO — USÁ CON CRITERIO (solo cuando suena natural):
arrancar, bajada práctica, en caliente, ola emocional, decantar, no hay verdad en el ahora.

VOCABULARIO — NUNCA:
- Lunfardo: laburo, posta, quilombo, fiaca, piola, copado, berretín, chabón, zarpado, "re" como intensificador.
- Autoayuda espiritual: vibrar, vibración, manifestar, manifestación, sanar, sanación, propósito de vida, misión de alma, despertar, expandir tu conciencia, anclar esa energía, integrar tu sombra, auras, chakras, encarnación, energías cósmicas.
- Metáforas confusas o coloquiales que no se entiendan con claridad.

CÓMO USAR EL DISEÑO HUMANO:
- Siempre anclá tu respuesta en el tipo, autoridad, perfil o centros — pero traducilo a consecuencias prácticas, nunca como clase teórica.
- Nombrá los conceptos de DH (Generador, Sacral, perfil 4/6, etc.) para que la persona aprenda su lenguaje. Pero siempre explicá qué significa en términos concretos.
- Puertas y canales: mencionarlos SOLO si la persona pregunta por detalles técnicos.
- Para entornos, usá siempre los nombres en español: Cuevas, Montañas, Valles, Costas, Mercados, Cocinas.

ESTRUCTURA DE UNA BUENA RESPUESTA:
1. Anclá en el diseño específico de la persona (tipo + autoridad + perfil)
2. Explicá la consecuencia práctica concreta — qué pasa cuando lo aplica y qué pasa cuando no
3. Incluí el riesgo o trampa específica de su diseño ("ojo con esto")
4. Cerrá con una regla práctica o accionable claro

CÓMO RESPONDER SEGÚN EL TIPO DE PREGUNTA:
- Pregunta genérica (ej: "¿cómo tomo mejores decisiones?"): hacé UNA pregunta de contexto antes de responder.
- Pregunta específica con contexto: respondé directo, anclado en su diseño.
- Pregunta sobre decisiones: explicá su autoridad como mecanismo concreto + regla de oro práctica.
- Pregunta sobre vínculos: usá perfil y tipo para describir su patrón natural + cómo gestionarlo.
- Pregunta sobre liderazgo o equipos: estrategia y autoridad como base + qué hacer con cada tipo de vínculo.
- Pregunta sobre energía o agotamiento: usá centros definidos + relación con su firma y no-self theme.
- Pregunta sobre propósito o dirección: usá perfil y tipo sin sonar a autoayuda.

AUTORIDADES — CÓMO EXPLICARLAS EN TÉRMINOS PRÁCTICOS:
- Sacral: la respuesta está en el cuerpo, no en la mente. Sí = expansión, no = contracción. Decidís antes de pensar.
- Emocional: no hay verdad en el ahora. Dejá decantar la ola. Si después de tiempo sentís calma neutra, ese es el camino. Si te presionan a decidir rápido, tu respuesta por default es "no".
- Esplénica: intuición instantánea que no se repite. Es un susurro, no un grito. Si lo ignorás, después sabés que era correcto.
- Ego: decidís desde lo que genuinamente querés, no desde lo que deberías querer.
- Self/G: esperás tener claridad sobre la dirección antes de moverte. La claridad llega sola, no se fuerza.

LÍMITES:
- Si la pregunta no tiene que ver con DH ni con desarrollo personal o profesional, decí amablemente que no es tu área.
- No hagas diagnósticos médicos ni de salud mental.
- Si falta contexto, preguntá antes de responder.

PERSONALIZACIÓN POR DISEÑO — estas reglas se aplican de forma sutil y natural, nunca mecánica ni condescendiente:

NO-SELF THEME (señal de que la persona está fuera de eje):
- Frustración: cuando la detectás en el tono de la pregunta, nombrála directamente. "Eso que sentís es la señal de que algo en este proceso va contra tu mecánica natural."
- Amargura: si hay resignación o sensación de que las oportunidades no llegan, recordale que su estrategia es esperar la invitación correcta, no buscar activamente.
- Enojo: si hay impulsividad o queja de resistencia del entorno, preguntá si informó sus movimientos antes de actuar.
- Decepción: si hay sensación de que las cosas no resultaron como esperaba, explorá si inició desde la mente o esperó respuesta real.

MOTIVACIÓN (motor detrás de sus decisiones — usalo para enmarcar las sugerencias):
- Esperanza: hablale desde las posibilidades futuras. "Esto puede abrirte..."
- Inocencia: no lo sobrecargues de análisis. Sugería probar con ligereza.
- Deseo: preguntá siempre si genuinamente quiere algo antes de sugerir cómo lograrlo.
- Necesidad: se activa con problemas concretos. Dale soluciones específicas, no marcos generales.
- Culpa: si detectás que actúa por obligación, ayudalo a distinguir qué es suyo y qué es expectativa ajena.
- Miedo: no lo empujés. Acompañá desde la claridad de lo que ya tiene.

CRUZ DE ENCARNACIÓN (contexto de vida):
- Right Angle: su camino es personal, no busca impacto masivo. No lo presiones con preguntas de legado o escala.
- Left Angle: sus encuentros con otros la definen. Cuando hables de oportunidades, anclalas en vínculos y contextos específicos.
- Juxtaposition: tiene un solo camino posible. Ayudalo a aceptar su naturaleza sin resistirla, no a buscar alternativas.

DEFINICIÓN (cómo procesa la realidad):
- Simple: consistente y predecible. No necesita mucho tiempo para decidir si su autoridad es clara.
- Doble: puede verse contradictoria. Normalizá que tenga dos naturalezas que coexisten.
- Triple: necesita más tiempo y contexto. No la apures. Sus decisiones maduran despacio.

LÍNEAS DE PERFIL (adaptar el estilo de entrega, no el contenido):
- Línea 1: necesita fundamentos. Dale el marco antes de la sugerencia.
- Línea 2: aprende solo. Sugerí en lugar de instruir. Dejale espacio.
- Línea 3: aprende del error. Cuando pregunte sobre fracasos o frustraciones, recordale que probar es su método. No en cada respuesta — solo cuando sea relevante o muestre autocrítica.
- Línea 4: confía en su red. Cuando evalúe oportunidades, preguntá quién de su entorno cercano está involucrado.
- Línea 5: carga con expectativas ajenas. Ayudalo a separar lo que otros esperan de lo que él realmente quiere.
- Línea 6: proceso de largo plazo. No lo presiones con resultados inmediatos. Su madurez llega en etapas.

CENTROS INDEFINIDOS CLAVE (vulnerabilidades a nombrar solo cuando sean relevantes):
- G indefinido: identidad fluida. No lo encasilles. Ayudalo a encontrar claridad en el contexto, no en definiciones fijas.
- Ego indefinido: tiende a sobre-comprometerse para demostrar valor. Nunca lo presiones a comprometerse. Ayudalo a evaluar desde sus ganas reales.
- Emocional indefinido: absorbe el estado emocional del entorno. Cuando esté confundido, preguntá si lo que siente es suyo o del contexto.
- Cabeza indefinida: se llena de preguntas ajenas. Anclaló en sus preguntas propias, no en las de los demás.`;


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
  "gonzalo@chatcenter.net": {
    nombre: "Gonzalo Ezequiel", apellido: "Baez Veglia", tipo: "Manifestador", autoridad: "Emocional (Plexo Solar)", perfil: "5/1",
    estrategia: "Informar antes de actuar", firma: "Paz", no_self_theme: "Enojo", definicion: "Simple",
    centros: { Ajna: "defined", Bazo: "defined", G: "undefined", Sacral: "undefined", Emocional: "defined", Cabeza: "defined", Garganta: "defined", Raiz: "undefined", Corazon: "defined" },
    canales_definidos: ["26-44", "40-37", "64-47", "11-56", "35-36"],
    variables: { perspectiva: "Perspective 3", motivación: "Hope", digestión: "Cold", entorno: "Mountains" },
    cruz_encarnacion: { tipo: "Left Angle" },
    fecha_nacimiento: "1979-02-28", lugar_nacimiento: "Córdoba, Argentina"
  },
  "nico@becoming.com.ar": {
    nombre: "Nicolás", apellido: "Pimentel", tipo: "Generador Manifestante", autoridad: "Emocional (Plexo Solar)", perfil: "6/3",
    estrategia: "Responder y luego informar", firma: "Satisfacción/Paz", no_self_theme: "Frustración/Enojo", definicion: "Simple",
    centros: { Raiz: "defined", G: "undefined", Ajna: "undefined", Bazo: "defined", Cabeza: "undefined", Garganta: "defined", Corazon: "undefined", Emocional: "defined", Sacral: "defined" },
    canales_definidos: ["20-34", "12-22", "18-58", "42-53"],
    variables: { perspectiva: "Perspective 4", digestión: "Calm", entorno: "Valleys", motivación: "Innocence" },
    cruz_encarnacion: { tipo: "Left Angle" },
    fecha_nacimiento: "1975-03-13", lugar_nacimiento: "Buenos Aires, Argentina"
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
  return t.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#d4b96a">$1</strong>').replace(/\n/g, "<br/>");
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
          <button onClick={() => go("register")} style={{ background: C.gold, color: C.bg, border: "none", fontFamily: "monospace", fontSize: ".65rem", letterSpacing: ".3em", padding: ".85em 2em", cursor: "pointer", textTransform: "uppercase", width: "100%" }}>
            {lang === "en" ? "Create my account" : "Crear mi cuenta"}
          </button>
          <button onClick={() => go("login")} style={{ background: "transparent", color: C.dim, border: "1px solid rgba(184,154,78,.3)", fontFamily: "monospace", fontSize: ".65rem", letterSpacing: ".3em", padding: ".85em 2em", cursor: "pointer", textTransform: "uppercase", width: "100%" }}>
            {lang === "en" ? "I already have an account" : "Ya tengo cuenta"}
          </button>
        </div>
      </div>
      <div style={{ position: "fixed", bottom: "2rem", fontFamily: "monospace", fontSize: ".55rem", color: "rgba(240,235,224,.2)", letterSpacing: ".15em", textAlign: "center" }}>
        {lang === "en" ? "SIMPLE · 2026  No generic answers. Designed for you." : "SIMPLE · 2026  Sin respuestas genéricas. Diseñado a tu medida."}
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
  const [f, setF] = useState({ nom: "", ape: "", email: "", tel: "", fecha: "", hora: "", lugar: "", pass: "" });
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const u = (k, v) => setF(p => ({ ...p, [k]: v }));

  async function ok() {
    if (!f.nom || !f.ape || !f.email || !f.fecha || !f.hora || !f.lugar || !f.pass) {
      setErr("Completá todos los campos obligatorios."); return;
    }
    setLoading(true);
    setErr("");
    try {
      // 1. Calcular diseño
      const r = await fetch("/api/hd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre: f.nom, apellido: f.ape, birth_date: f.fecha, birth_time: f.hora, ciudad: f.lugar })
      });
      const diseno = await r.json();
      if (diseno.error) { setErr("Error al calcular tu diseño: " + diseno.error); setLoading(false); return; }

      // 2. Guardar en Supabase directamente
      const dbR = await fetch("https://ebczaoptweskqzuzrmls.supabase.co/rest/v1/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": SUPABASE_KEY,
          "Authorization": `Bearer ${SUPABASE_KEY}`,
          "Prefer": "return=minimal"
        },
        body: JSON.stringify({
          email: f.email.toLowerCase().trim(),
          nombre: f.nom,
          apellido: f.ape,
          password_hash: f.pass,
          diseno: diseno
        })
      });

      if (!dbR.ok) {
        const dbErr = await dbR.json().catch(() => ({}));
        if (dbErr.message?.includes("duplicate") || dbErr.code === "23505") {
          setErr("Ese email ya está registrado. Ingresá con tu contraseña."); setLoading(false); return;
        }
        setErr("Error al crear la cuenta: " + (dbErr.message || dbErr.error || dbR.status)); setLoading(false); return;
      }

      setDynamicUser({ ...diseno, email: f.email.toLowerCase().trim() });
      go("onboarding", f.email.toLowerCase().trim());
    } catch (e) {
      setErr("Error: " + (e?.message || "No se pudo conectar con el servidor."));
    }
    setLoading(false);
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
            <div><label style={lbl}>Fecha *</label><input style={{ ...inp, colorScheme: "dark" }} type="date" value={f.fecha} onChange={e => u("fecha", e.target.value)} /></div>
            <div><label style={lbl}>Hora *</label><input style={{ ...inp, colorScheme: "dark" }} type="time" value={f.hora} onChange={e => u("hora", e.target.value)} /></div>
          </div>
          <label style={lbl}>Lugar de nacimiento *</label>
          <CityInput value={f.lugar} onChange={v => u("lugar", v)} placeholder="Ciudad, País" />
          <label style={lbl}>Contraseña *</label>
          <Eye value={f.pass} onChange={e => u("pass", e.target.value)} />
          <div style={{ display: "flex", alignItems: "flex-start", gap: ".7rem", marginBottom: "1.2rem" }}>
            <input type="checkbox" id="tyc" checked={f.tyc || false} onChange={e => u("tyc", e.target.checked)}
              style={{ marginTop: ".2rem", accentColor: C.gold, cursor: "pointer" }} />
            <label htmlFor="tyc" style={{ fontFamily: NUNITO, fontSize: ".78rem", color: C.dim, lineHeight: 1.6, cursor: "pointer" }}>
              Acepto los <span style={{ color: C.gold }}>términos y condiciones</span> de uso de SIMPLE. Esta herramienta es orientativa y no reemplaza el consejo profesional.
            </label>
          </div>
          <button onClick={ok} disabled={loading || !f.tyc} style={{ background: C.gold, color: C.bg, border: "none", fontFamily: "monospace", fontSize: ".65rem", letterSpacing: ".3em", padding: ".85em 2em", cursor: loading ? "wait" : "pointer", textTransform: "uppercase", width: "100%", opacity: loading || !f.tyc ? 0.5 : 1 }}>
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

    // Primero intentar usuarios hardcodeados (demo)
    const demoUser = USERS[emailClean];
    if (demoUser && pass === "demo") {
      go("onboarding", emailClean);
      return;
    }

    // Luego intentar Supabase
    setLoading(true);
    setErr("");
    try {
      const r = await fetch(`https://ebczaoptweskqzuzrmls.supabase.co/rest/v1/usuarios?email=eq.${encodeURIComponent(emailClean)}&select=*`, {
        headers: {
          "apikey": SUPABASE_KEY,
          "Authorization": `Bearer ${SUPABASE_KEY}`
        }
      });
      const users = await r.json();
      if (!users || users.length === 0) {
        setErr(lang === "en" ? "Email not found." : "Email no encontrado."); setLoading(false); return;
      }
      const user = users[0];
      if (user.password_hash !== pass) {
        setErr(lang === "en" ? "Wrong password." : "Contraseña incorrecta."); setLoading(false); return;
      }
      setDynamicUser({ ...user.diseno, email: emailClean, rol: user.rol });
      
      // Verificar si tiene conversaciones previas para saltar el onboarding
      try {
        const convR = await fetch(`https://ebczaoptweskqzuzrmls.supabase.co/rest/v1/conversaciones?usuario_email=eq.${encodeURIComponent(emailClean)}&limit=1`, {
          headers: {
            "apikey": SUPABASE_KEY,
            "Authorization": `Bearer ${SUPABASE_KEY}`
          }
        });
        const convs = await convR.json();
        if (Array.isArray(convs) && convs.length > 0) {
          go("chat", emailClean); // Ya usó la app antes → directo al chat
        } else {
          go("onboarding", emailClean); // Primera vez → onboarding
        }
      } catch {
        go("onboarding", emailClean);
      }
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
        <div style={{ border: "1px solid rgba(184,154,78,.2)", padding: "2.5rem", background: "rgba(255,255,255,.02)" }}>
          {err && <div style={{ color: "#c06040", fontFamily: "monospace", fontSize: ".63rem", marginBottom: ".8rem", textAlign: "center" }}>{err}</div>}
          <label style={lbl}>Email</label>
          <input style={inp} type="email" placeholder="tu@email.com" value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === "Enter" && ok()} />
          <label style={lbl}>{lang === "en" ? "Password" : "Contraseña"}</label>
          <Eye value={pass} onChange={e => setPass(e.target.value)} placeholder={lang === "en" ? "Your password" : "Tu contraseña"} onKeyDown={e => e.key === "Enter" && ok()} />
          <button onClick={ok} disabled={loading} style={{ background: C.gold, color: C.bg, border: "none", fontFamily: "monospace", fontSize: ".65rem", letterSpacing: ".3em", padding: ".85em 2em", cursor: loading ? "wait" : "pointer", textTransform: "uppercase", width: "100%", opacity: loading ? 0.7 : 1 }}>
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

async function dbFetch(endpoint, options = {}) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`,
      "Prefer": "return=representation",
      ...options.headers
    }
  });
  return res.json().catch(() => ({}));
}

function Chat({ go, userEmail, lang, setLang, problema, desafios, setDesafios, setProblema, dynamicUser }) {
  const user = dynamicUser || USERS[userEmail] || USERS["soyfranblanco@gmail.com"];
  const [chatMode, setChatMode] = useState("general");
  const [allMsgs, setAllMsgs] = useState({ general: [], d1: [], d2: [], d3: [] });
  const [convIds, setConvIds] = useState({ general: null, d1: null, d2: null, d3: null });
  const [historial, setHistorial] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const baseChips = lang === "en" ? CHIPS_EN : CHIPS_ES;
  const CHIPS = problema?.texto
    ? [lang === "en" ? `How do I work on: "${problema.texto.slice(0, 40)}${problema.texto.length > 40 ? "..." : ""}"?` : `¿Cómo trabajo esto: "${problema.texto.slice(0, 40)}${problema.texto.length > 40 ? "..." : ""}"?`, ...baseChips]
    : baseChips;

  const msgs = allMsgs[chatMode];
  function setMsgs(newMsgs) {
    setAllMsgs(prev => ({ ...prev, [chatMode]: typeof newMsgs === "function" ? newMsgs(prev[chatMode]) : newMsgs }));
  }

  // Cargar conversación activa y historial al entrar
  React.useEffect(() => {
    if (!userEmail) return;
    async function cargarConversaciones() {
      try {
        const data = await dbFetch(`conversaciones?usuario_email=eq.${encodeURIComponent(userEmail)}&order=updated_at.desc&limit=20`);
        if (!Array.isArray(data)) return;
        setHistorial(data);
        // Cargar la más reciente de cada modo
        ["general", "d1", "d2", "d3"].forEach(modo => {
          const conv = data.find(c => c.modo === modo);
          if (conv?.mensajes?.length > 0) {
            setAllMsgs(prev => ({ ...prev, [modo]: conv.mensajes }));
            setConvIds(prev => ({ ...prev, [modo]: conv.id }));
          }
        });
      } catch {}
    }
    cargarConversaciones();
  }, [userEmail]);

  // Guardar conversación en Supabase después de cada respuesta
  async function guardarConversacion(mensajes) {
    try {
      const convId = convIds[chatMode];
      if (convId) {
        await dbFetch(`conversaciones?id=eq.${convId}`, {
          method: "PATCH",
          body: JSON.stringify({ mensajes, updated_at: new Date().toISOString() })
        });
      } else {
        const result = await dbFetch("conversaciones", {
          method: "POST",
          body: JSON.stringify({
            usuario_email: userEmail,
            modo: chatMode,
            problema: problema || null,
            mensajes
          })
        });
        if (Array.isArray(result) && result[0]?.id) {
          setConvIds(prev => ({ ...prev, [chatMode]: result[0].id }));
        }
      }
    } catch {}
  }

  async function nuevaConversacion() {
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

  const contextoBase = problema ? `\nPROBLEMA ACTIVO: "${problema.raiz}". Área: ${problema.area}.` : "";
  const contextoDesafio = desafioActual ? `\nESTÁS TRABAJANDO ESPECÍFICAMENTE EL DESAFÍO: "${desafioActual.titulo}" — ${desafioActual.descripcion}. Enfocá todas tus respuestas en ayudar a la persona a avanzar en este desafío concreto.` : "";
  const sys = (lang === "en" ? EN_PROMPT : SYSTEM_PROMPT) + "\nPERSON'S DESIGN: " + JSON.stringify(user) + contextoBase + contextoDesafio;

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
      const finalMsgs = [...next, { role: "assistant", content: d?.content?.[0]?.text || "Error." }];
      setMsgs(finalMsgs);
      await guardarConversacion(finalMsgs);
    } catch {
      setMsgs([...next, { role: "assistant", content: lang === "en" ? "Connection error." : "Error de conexión." }]);
    }
    setLoading(false);
  }

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

      {/* Panel de desafíos */}
      {panelOpen && (
        <div style={{ position: "fixed", top: 0, right: 0, width: "min(380px, 90vw)", height: "100vh", background: "#0f0f0f", borderLeft: "1px solid rgba(184,154,78,.2)", zIndex: 100, display: "flex", flexDirection: "column", padding: "2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <div style={{ fontFamily: "monospace", fontSize: ".55rem", letterSpacing: ".3em", color: C.gold, textTransform: "uppercase" }}>{lang === "en" ? "Active problem" : "Problema activo"}</div>
            <button onClick={() => setPanelOpen(false)} style={{ background: "none", border: "none", color: C.dim, cursor: "pointer", fontSize: "1.2rem" }}>×</button>
          </div>
          {problema && (
            <>
              <div style={{ fontSize: ".9rem", lineHeight: 1.7, color: C.txt, marginBottom: "1.5rem", padding: "1rem", border: "1px solid rgba(184,154,78,.15)", background: "rgba(184,154,78,.04)" }}>{problema.raiz}</div>
              <div style={{ fontFamily: "monospace", fontSize: ".5rem", letterSpacing: ".3em", color: C.gold, textTransform: "uppercase", marginBottom: "1rem" }}>{lang === "en" ? "Your challenges" : "Tus desafíos"}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: ".8rem", flex: 1, overflowY: "auto" }}>
                {/* General chat option */}
                <button onClick={() => { setChatMode("general"); setPanelOpen(false); }}
                  style={{ border: `1px solid ${chatMode === "general" ? C.gold : "rgba(184,154,78,.2)"}`, padding: "1rem", background: chatMode === "general" ? "rgba(184,154,78,.08)" : "rgba(255,255,255,.02)", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ fontFamily: "monospace", fontSize: ".48rem", letterSpacing: ".25em", color: C.gold, marginBottom: ".3rem", textTransform: "uppercase" }}>{lang === "en" ? "General chat" : "Chat general"}</div>
                  <div style={{ fontSize: ".85rem", color: C.dim, lineHeight: 1.5 }}>{lang === "en" ? "Talk freely about any topic." : "Hablá libremente sobre cualquier tema."}</div>
                </button>
                {desafios?.map((d, i) => {
                  const mode = `d${i+1}`;
                  return (
                    <button key={i} onClick={() => { setChatMode(mode); setPanelOpen(false); }}
                      style={{ border: `1px solid ${chatMode === mode ? C.gold : "rgba(184,154,78,.2)"}`, padding: "1rem", background: chatMode === mode ? "rgba(184,154,78,.08)" : "rgba(255,255,255,.02)", cursor: "pointer", textAlign: "left" }}>
                      <div style={{ fontFamily: "monospace", fontSize: ".48rem", letterSpacing: ".25em", color: C.gold, marginBottom: ".3rem", textTransform: "uppercase" }}>{lang === "en" ? `Challenge ${i+1}` : `Desafío ${i+1}`}</div>
                      <div style={{ fontSize: ".88rem", fontWeight: 600, marginBottom: ".3rem", color: C.txt }}>{d.titulo}</div>
                      <div style={{ fontSize: ".8rem", color: C.dim, lineHeight: 1.5 }}>{d.descripcion}</div>
                    </button>
                  );
                })}
              </div>
              <button onClick={() => { go("onboarding"); setPanelOpen(false); }}
                style={{ marginTop: "1.2rem", background: "transparent", border: "1px solid rgba(184,154,78,.3)", color: C.dim, fontFamily: "monospace", fontSize: ".55rem", letterSpacing: ".2em", padding: ".7em", cursor: "pointer", textTransform: "uppercase" }}>
                {lang === "en" ? "Change problem" : "Cambiar problema"}
              </button>
              <button onClick={() => { nuevaConversacion(); setPanelOpen(false); }}
                style={{ marginTop: ".5rem", background: "transparent", border: "1px solid rgba(184,154,78,.15)", color: C.dim, fontFamily: "monospace", fontSize: ".55rem", letterSpacing: ".2em", padding: ".7em", cursor: "pointer", textTransform: "uppercase" }}>
                {lang === "en" ? "New conversation" : "Nueva conversación"}
              </button>
              {historial.length > 0 && (
                <div style={{ marginTop: "1.5rem" }}>
                  <div style={{ fontFamily: "monospace", fontSize: ".48rem", letterSpacing: ".3em", color: C.gold, textTransform: "uppercase", marginBottom: ".8rem" }}>
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
                        style={{ background: "transparent", border: "1px solid rgba(184,154,78,.1)", color: C.dim, fontFamily: NUNITO, fontSize: ".75rem", padding: ".6em .8em", cursor: "pointer", textAlign: "left", borderRadius: 2 }}>
                        <div style={{ fontSize: ".65rem", color: "rgba(184,154,78,.5)", marginBottom: ".2rem" }}>
                          {new Date(c.updated_at).toLocaleDateString("es-AR", { day: "2-digit", month: "short" })} · {c.modo === "general" ? (lang === "en" ? "General" : "General") : `Desafío ${c.modo.replace("d", "")}`}
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
          <div style={{ fontFamily: NUNITO, fontSize: ".85rem", color: C.dim }}>
            {lang === "en" ? "Hi, " : "Hola, "}<span style={{ color: C.txt, fontWeight: 600 }}>{user.nombre}</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button onClick={() => setPanelOpen(true)} style={{ color: C.dim, background: "none", border: "1px solid rgba(184,154,78,.2)", cursor: "pointer", fontFamily: "monospace", fontSize: ".55rem", letterSpacing: ".2em", padding: ".35em .8em" }}>☰</button>
          <button onClick={() => go("welcome")} style={{ color: C.gold, background: "none", border: "none", cursor: "pointer", fontFamily: "monospace", fontSize: ".6rem" }}>{lang === "en" ? "Sign out →" : "Salir →"}</button>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: "1px solid rgba(184,154,78,.15)", display: "flex", alignItems: "center", paddingLeft: "1rem", gap: ".2rem" }}>
        {[
          ["mi-diseno", lang === "en" ? "My Design" : "Mi diseño"],
          ["inspiracion", lang === "en" ? "Inspiration" : "Inspiración"],
          ["como-funciona", lang === "en" ? "How it works" : "Cómo funciona"]
        ].map(([id, label]) => (
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
            {[
              [lang === "en" ? "Type" : "Tipo", user.tipo],
              [lang === "en" ? "Authority" : "Autoridad", user.autoridad],
              [lang === "en" ? "Profile" : "Perfil", user.perfil],
              [lang === "en" ? "Strategy" : "Estrategia", user.estrategia],
              [lang === "en" ? "Signature" : "Firma", user.firma],
              [lang === "en" ? "Environment" : "Entorno", traducirEntorno(user.variables?.entorno)],
              [lang === "en" ? "Motivation" : "Motivación", traducirMotivacion(user.variables?.motivación)]
            ].map(([l, v]) => (
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
          {lang === "en" ? <>
            <p style={{ marginTop: 0 }}><strong style={{ color: C.gold }}>SIMPLE</strong> is your personal Human Design consultant. Ask anything about how you make decisions, relate to others, manage your energy, or move forward in your work.</p>
            <p>No generic answers. Everything is based on your specific design — your type, authority, profile and centers.</p>
            <p style={{ marginBottom: 0 }}>The more context you give about your specific situation, the better the answer. You don't need to know anything about Human Design to use it.</p>
          </> : <>
            <p style={{ marginTop: 0 }}><strong style={{ color: C.gold }}>SIMPLE</strong> es tu consultor personal de Diseño Humano. Podés hacerle cualquier pregunta sobre cómo tomás decisiones, cómo te relacionás, cómo gestionás tu energía o cómo avanzar en tu trabajo.</p>
            <p>No da respuestas genéricas. Todo lo que te diga está basado en tu diseño específico — tu tipo, autoridad, perfil y centros.</p>
            <p style={{ marginBottom: 0 }}>Cuanto más contexto le des sobre tu situación concreta, mejor va a ser la respuesta. No hace falta que sepas nada de Diseño Humano para usarlo.</p>
          </>}
        </div>
      )}
      <div style={{ flex: 1, maxWidth: 760, margin: "0 auto", width: "100%", padding: "0 1.5rem", display: "flex", flexDirection: "column" }}>
        <div ref={chatContainerRef} style={{ flex: 1, padding: "1.8rem 0", paddingRight: "1rem", display: "flex", flexDirection: "column", gap: "1.8rem", overflowY: "auto", maxHeight: "58vh", minHeight: 180 }}>
          {msgs.length === 0 && (
            <div style={{ textAlign: "center", padding: "1.8rem 1rem", border: "1px solid rgba(184,154,78,.15)" }}>
              {desafioActual ? (
                <>
                  <div style={{ fontFamily: "monospace", fontSize: ".5rem", letterSpacing: ".3em", color: C.gold, marginBottom: ".8rem", textTransform: "uppercase" }}>{lang === "en" ? `Challenge ${getDesafioIdx()+1}` : `Desafío ${getDesafioIdx()+1}`}</div>
                  <div style={{ fontSize: "1.3rem", fontWeight: 300, marginBottom: ".4rem", fontFamily: GEORGIA }}>{desafioActual.titulo}</div>
                  <div style={{ fontSize: ".9rem", color: C.dim, marginBottom: "1.5rem", lineHeight: 1.6, maxWidth: 440, margin: "0 auto 1.5rem" }}>{desafioActual.descripcion}</div>
                  <div style={{ fontSize: ".8rem", color: C.dim }}>{lang === "en" ? "Ask anything related to this challenge." : "Haceme preguntas relacionadas a este desafío."}</div>
                </>
              ) : (
                <>
                  <div style={{ fontSize: "1.9rem", fontWeight: 300, marginBottom: ".4rem", fontFamily: GEORGIA }}>
                    {lang === "en" ? "Hi, " : "Hola, "}<span style={{ color: C.gold, fontStyle: "italic" }}>{user.nombre}</span>
                  </div>
                  <div style={{ fontSize: ".9rem", color: C.dim, marginBottom: "1.5rem", lineHeight: 1.6 }}>
                    {lang === "en" ? "I'm an AI connected to your design. Every answer is based on your unique way of functioning — not generalities. What I don't know for certain, I don't make up." : "Soy una inteligencia artificial conectada a tu diseño. Cada respuesta está basada en tu forma única de funcionar — no en generalidades. Lo que no sé con certeza, no lo invento."}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", justifyContent: "center" }}>
                    {CHIPS.map(c => (
                      <button key={c} onClick={() => send(c)} style={{ fontFamily: "monospace", fontSize: ".6rem", padding: ".4em .85em", border: "1px solid rgba(184,154,78,.25)", color: C.dim, cursor: "pointer", background: "transparent" }}
                        onMouseEnter={e => { e.target.style.borderColor = C.gold; e.target.style.color = "#d4b96a"; }}
                        onMouseLeave={e => { e.target.style.borderColor = "rgba(184,154,78,.25)"; e.target.style.color = C.dim; }}>
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
              <div style={{ fontFamily: "monospace", fontSize: ".53rem", letterSpacing: ".3em", textTransform: "uppercase", marginBottom: ".3rem", color: m.role === "user" ? "rgba(240,235,224,.3)" : C.gold }}>
                {m.role === "user" ? (lang === "en" ? "You" : "Vos") : "SIMPLE"}
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
          <textarea style={{ flex: 1, background: "transparent", border: "none", borderBottom: "1px solid rgba(184,154,78,.25)", color: C.txt, fontFamily: NUNITO, fontSize: ".95rem", padding: ".6rem 0", outline: "none", resize: "none", minHeight: "2rem", lineHeight: 1.5 }}
            value={input} placeholder={lang === "en" ? "Ask your question..." : "Hacé tu pregunta..."}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }} rows={1} />
          <button onClick={() => send()} disabled={loading || !input.trim()} style={{ background: "transparent", border: "1px solid " + C.gold, color: C.gold, fontFamily: "monospace", fontSize: ".6rem", letterSpacing: ".2em", padding: ".6em 1em", cursor: "pointer", textTransform: "uppercase", marginBottom: 2, opacity: loading || !input.trim() ? 0.3 : 1 }}>
            {lang === "en" ? "Send" : "Enviar"}
          </button>
        </div>
      </div>
      <div style={{ textAlign: "center", padding: ".6rem", fontFamily: "monospace", fontSize: ".5rem", color: "rgba(240,235,224,.15)", letterSpacing: ".15em" }}>
        {lang === "en" ? "SIMPLE · 2026  No generic answers. Designed for you." : "SIMPLE · 2026  Sin respuestas genéricas. Diseñado a tu medida."}
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
  const user = dynamicUser || USERS[userEmail] || USERS["soyfranblanco@gmail.com"];
  const [area, setArea] = useState(null);
  const [texto, setTexto] = useState("");
  const [loading, setLoading] = useState(false);
  const es = lang !== "en";

  async function entrar(saltar = false) {
    if (saltar || (!area && !texto)) {
      setProblema(null);
      setDesafios([]);
      go("chat");
      return;
    }
    setLoading(true);
    try {
      const prompt = `El usuario es ${user.tipo}, perfil ${user.perfil}, autoridad ${user.autoridad}, centros: ${JSON.stringify(user.centros)}, no-self theme: ${user.no_self_theme}, motivación: ${user.variables?.motivación}.
${area ? `Área: ${area}.` : ""} ${texto ? `Situación: "${texto}".` : ""}
Respondé SOLO con un JSON válido sin markdown:
{
  "problema_raiz": "máximo 2 oraciones, lenguaje cotidiano, formulado como propuesta tentativa ('Podría ser que...', 'Lo que describís suena a...')",
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

  const cardStyle = { width: "100%", maxWidth: 520, border: "1px solid rgba(184,154,78,.2)", padding: "2.5rem", background: "rgba(255,255,255,.02)" };
  const btnPrimary = { background: C.gold, color: C.bg, border: "none", fontFamily: "monospace", fontSize: ".65rem", letterSpacing: ".3em", padding: ".85em 2em", cursor: "pointer", textTransform: "uppercase", width: "100%", marginTop: "1.2rem" };
  const btnSecondary = { background: "transparent", color: C.dim, border: "1px solid rgba(184,154,78,.3)", fontFamily: "monospace", fontSize: ".63rem", letterSpacing: ".25em", padding: ".7em 2em", cursor: "pointer", textTransform: "uppercase", width: "100%", marginTop: ".6rem" };

  return (
    <div style={{ background: C.bg, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", fontFamily: NUNITO, color: C.txt }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&display=swap');`}</style>
      <div style={{ ...logo, marginBottom: "1.5rem" }}>SIMPLE</div>

      <div style={cardStyle}>
        <div style={{ fontSize: "1.4rem", fontWeight: 300, fontFamily: GEORGIA, marginBottom: ".4rem", lineHeight: 1.3 }}>
          {es ? `Hola, ${user.nombre}.` : `Hi, ${user.nombre}.`}
        </div>
        <div style={{ color: C.dim, fontSize: ".9rem", lineHeight: 1.7, marginBottom: "1.8rem" }}>
          {es ? "Podés empezar a chatear directamente, o especificar un tema en el cual enfocarte para que las respuestas sean bien específicas." : "You can start chatting directly, or specify a topic to focus on so answers are more specific."}
        </div>

        {/* Área opcional */}
        <div style={{ fontFamily: "monospace", fontSize: ".5rem", letterSpacing: ".3em", color: C.gold, textTransform: "uppercase", marginBottom: ".8rem" }}>
          {es ? "¿En qué área? (opcional)" : "Which area? (optional)"}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", marginBottom: "1.5rem" }}>
          {AREAS.map(a => (
            <button key={a.id} onClick={() => setArea(area === (es ? a.label : a.en) ? null : (es ? a.label : a.en))}
              style={{ background: area === (es ? a.label : a.en) ? "rgba(184,154,78,.15)" : "transparent", border: `1px solid ${area === (es ? a.label : a.en) ? C.gold : "rgba(184,154,78,.25)"}`, color: area === (es ? a.label : a.en) ? C.gold : C.dim, fontFamily: NUNITO, fontSize: ".78rem", padding: ".4em .8em", cursor: "pointer", borderRadius: 2 }}>
              {a.icon} {es ? a.label : a.en}
            </button>
          ))}
        </div>

        {/* Problema opcional */}
        <div style={{ fontFamily: "monospace", fontSize: ".5rem", letterSpacing: ".3em", color: C.gold, textTransform: "uppercase", marginBottom: ".8rem" }}>
          {es ? "¿Para resolver qué? (opcional)" : "What do you want to work on? (optional)"}
        </div>
        <textarea
          style={{ width: "100%", background: "transparent", border: "1px solid rgba(184,154,78,.25)", color: C.txt, fontFamily: NUNITO, fontSize: ".9rem", padding: ".9rem", outline: "none", resize: "none", lineHeight: 1.7, minHeight: 90, boxSizing: "border-box", marginBottom: "0" }}
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
        SIMPLE · 2026
      </div>
    </div>
  );
}

const ADMIN_EMAIL = "soyfranblanco@gmail.com";
const ADMIN_PASS = "soyadmin";

function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");

  function ok() {
    if (email.toLowerCase().trim() === ADMIN_EMAIL && pass === ADMIN_PASS) {
      onLogin();
    } else {
      setErr("Credenciales incorrectas.");
    }
  }

  return (
    <div style={{ background: C.bg, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: NUNITO, color: C.txt }}>
      <div style={{ width: "100%", maxWidth: 380, border: "1px solid rgba(184,154,78,.2)", padding: "2.5rem", background: "rgba(255,255,255,.02)" }}>
        <div style={{ ...logo, marginBottom: "1.5rem" }}>SIMPLE</div>
        <div style={{ fontFamily: "monospace", fontSize: ".55rem", letterSpacing: ".3em", color: C.gold, marginBottom: "1.5rem" }}>ADMIN ACCESS</div>
        {err && <div style={{ color: "#c06040", fontFamily: "monospace", fontSize: ".63rem", marginBottom: ".8rem" }}>{err}</div>}
        <label style={lbl}>Email</label>
        <input style={inp} type="email" value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === "Enter" && ok()} />
        <label style={lbl}>Contraseña</label>
        <Eye value={pass} onChange={e => setPass(e.target.value)} onKeyDown={e => e.key === "Enter" && ok()} />
        <button onClick={ok} style={{ background: C.gold, color: C.bg, border: "none", fontFamily: "monospace", fontSize: ".65rem", letterSpacing: ".3em", padding: ".85em 2em", cursor: "pointer", textTransform: "uppercase", width: "100%", marginTop: ".5rem" }}>
          Ingresar
        </button>
      </div>
    </div>
  );
}

function AdminPanel() {
  const [authed, setAuthed] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [selected, setSelected] = useState(null);
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [nota, setNota] = useState("");
  const [notas, setNotas] = useState({});
  const [view, setView] = useState("lista"); // "lista" | "chat"

  React.useEffect(() => {
    if (!authed) return;
    async function cargar() {
      const r = await fetch(`${SUPABASE_URL}/rest/v1/usuarios?select=email,nombre,apellido,diseno,created_at&order=created_at.desc`, {
        headers: { "apikey": SUPABASE_KEY, "Authorization": `Bearer ${SUPABASE_KEY}` }
      });
      const data = await r.json();
      setUsuarios(Array.isArray(data) ? data : []);
    }
    cargar();
  }, [authed]);

  async function seleccionar(u) {
    setSelected(u);
    setMsgs([]);
    setView("chat");
    // Cargar notas guardadas
    const notaGuardada = notas[u.email] || "";
    setNota(notaGuardada);
  }

  async function send() {
    if (!input.trim() || loading || !selected) return;
    const txt = input.trim();
    setInput("");
    const next = [...msgs, { role: "user", content: txt }];
    setMsgs(next);
    setLoading(true);
    const sys = SYSTEM_PROMPT + "\nDISEÑO DE LA PERSONA CON QUIEN ESTÁS TRABAJANDO: " + JSON.stringify(selected.diseno) + "\nEres el asistente del consultor Fran Blanco. Estás ayudando a Fran a preparar o analizar el perfil de este cliente.";
    try {
      const r = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1000, system: sys, messages: next })
      });
      const d = await r.json();
      setMsgs([...next, { role: "assistant", content: d?.content?.[0]?.text || "Error." }]);
    } catch {
      setMsgs([...next, { role: "assistant", content: "Error de conexión." }]);
    }
    setLoading(false);
  }

  function guardarNota() {
    setNotas(prev => ({ ...prev, [selected.email]: nota }));
    alert("Nota guardada.");
  }

  if (!authed) return <AdminLogin onLogin={() => setAuthed(true)} />;

  const s = { background: C.bg, minHeight: "100vh", fontFamily: NUNITO, color: C.txt };
  const header = { padding: "1rem 2rem", borderBottom: "1px solid rgba(184,154,78,.2)", display: "flex", alignItems: "center", justifyContent: "space-between" };

  return (
    <div style={s}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&display=swap');`}</style>
      <div style={header}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div style={{ ...logo, marginBottom: 0 }}>SIMPLE</div>
          <div style={{ fontFamily: "monospace", fontSize: ".5rem", letterSpacing: ".3em", color: C.gold }}>ADMIN</div>
        </div>
        {view === "chat" && (
          <button onClick={() => setView("lista")} style={{ color: C.gold, background: "none", border: "none", cursor: "pointer", fontFamily: "monospace", fontSize: ".6rem" }}>← Volver</button>
        )}
      </div>

      {view === "lista" && (
        <div style={{ maxWidth: 800, margin: "2rem auto", padding: "0 2rem" }}>
          <div style={{ fontFamily: "monospace", fontSize: ".5rem", letterSpacing: ".3em", color: C.gold, marginBottom: "1.2rem" }}>
            {usuarios.length} USUARIO{usuarios.length !== 1 ? "S" : ""}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: ".6rem" }}>
            {usuarios.map((u, i) => (
              <button key={i} onClick={() => seleccionar(u)}
                style={{ background: "rgba(255,255,255,.02)", border: "1px solid rgba(184,154,78,.15)", padding: "1.2rem 1.5rem", cursor: "pointer", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = C.gold}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(184,154,78,.15)"}>
                <div>
                  <div style={{ fontSize: ".95rem", fontWeight: 600, color: C.txt, marginBottom: ".2rem" }}>{u.nombre} {u.apellido}</div>
                  <div style={{ fontSize: ".78rem", color: C.dim }}>{u.email}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "monospace", fontSize: ".55rem", color: C.gold }}>{u.diseno?.tipo}</div>
                  <div style={{ fontFamily: "monospace", fontSize: ".5rem", color: C.dim }}>Perfil {u.diseno?.perfil}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {view === "chat" && selected && (
        <div style={{ display: "flex", height: "calc(100vh - 60px)" }}>
          {/* Panel izquierdo — info del cliente */}
          <div style={{ width: 280, borderRight: "1px solid rgba(184,154,78,.15)", padding: "1.5rem", overflowY: "auto", flexShrink: 0 }}>
            <div style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: ".3rem" }}>{selected.nombre} {selected.apellido}</div>
            <div style={{ fontSize: ".78rem", color: C.dim, marginBottom: "1.2rem" }}>{selected.email}</div>
            {[["Tipo", selected.diseno?.tipo], ["Autoridad", selected.diseno?.autoridad], ["Perfil", selected.diseno?.perfil], ["Estrategia", selected.diseno?.estrategia], ["Firma", selected.diseno?.firma], ["No-self", selected.diseno?.no_self_theme]].map(([l, v]) => v && (
              <div key={l} style={{ marginBottom: ".7rem" }}>
                <div style={{ fontFamily: "monospace", fontSize: ".45rem", letterSpacing: ".3em", color: C.gold, textTransform: "uppercase", marginBottom: ".15rem" }}>{l}</div>
                <div style={{ fontSize: ".82rem" }}>{v}</div>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(184,154,78,.15)", marginTop: "1.2rem", paddingTop: "1.2rem" }}>
              <div style={{ fontFamily: "monospace", fontSize: ".45rem", letterSpacing: ".3em", color: C.gold, textTransform: "uppercase", marginBottom: ".5rem" }}>Mis notas</div>
              <textarea value={nota} onChange={e => setNota(e.target.value)}
                style={{ width: "100%", background: "rgba(255,255,255,.03)", border: "1px solid rgba(184,154,78,.2)", color: C.txt, fontFamily: NUNITO, fontSize: ".8rem", padding: ".7rem", outline: "none", resize: "none", lineHeight: 1.6, minHeight: 100, boxSizing: "border-box", marginBottom: ".5rem" }}
                placeholder="Notas privadas sobre este cliente..." />
              <button onClick={guardarNota} style={{ background: "transparent", border: "1px solid rgba(184,154,78,.3)", color: C.gold, fontFamily: "monospace", fontSize: ".5rem", letterSpacing: ".2em", padding: ".5em 1em", cursor: "pointer", textTransform: "uppercase", width: "100%" }}>
                Guardar nota
              </button>
            </div>
          </div>

          {/* Chat */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <div style={{ flex: 1, padding: "1.5rem", overflowY: "auto", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {msgs.length === 0 && (
                <div style={{ color: C.dim, fontSize: ".85rem", textAlign: "center", marginTop: "2rem" }}>
                  Chateá con el diseño de {selected.nombre}. Las respuestas están basadas en su perfil completo.
                </div>
              )}
              {msgs.map((m, i) => (
                <div key={i} style={{ textAlign: m.role === "user" ? "right" : "left" }}>
                  <div style={{ fontFamily: "monospace", fontSize: ".48rem", letterSpacing: ".3em", color: m.role === "user" ? C.dim : C.gold, marginBottom: ".25rem", textTransform: "uppercase" }}>
                    {m.role === "user" ? "Fran" : "SIMPLE"}
                  </div>
                  <div style={{ fontSize: ".9rem", lineHeight: 1.8, color: m.role === "user" ? "rgba(240,235,224,.6)" : C.txt, fontStyle: m.role === "user" ? "italic" : "normal" }}
                    dangerouslySetInnerHTML={{ __html: md(m.content) }} />
                </div>
              ))}
              {loading && (
                <div>
                  <div style={{ fontFamily: "monospace", fontSize: ".48rem", letterSpacing: ".3em", color: C.gold, marginBottom: ".25rem" }}>SIMPLE</div>
                  <div style={{ display: "flex", gap: 5 }}>
                    {[0,1,2].map(i => <div key={i} style={{ width: 5, height: 5, background: C.gold, borderRadius: "50%", animation: `p 1.4s ${i*.2}s infinite ease-in-out` }} />)}
                  </div>
                </div>
              )}
            </div>
            <div style={{ padding: "1rem 1.5rem", borderTop: "1px solid rgba(184,154,78,.15)", display: "flex", gap: ".8rem" }}>
              <textarea value={input} onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
                style={{ flex: 1, background: "transparent", border: "none", borderBottom: "1px solid rgba(184,154,78,.25)", color: C.txt, fontFamily: NUNITO, fontSize: ".9rem", padding: ".5rem 0", outline: "none", resize: "none", lineHeight: 1.5 }}
                placeholder={`Preguntá sobre el diseño de ${selected.nombre}...`} rows={1} />
              <button onClick={send} disabled={loading || !input.trim()}
                style={{ background: "transparent", border: "1px solid " + C.gold, color: C.gold, fontFamily: "monospace", fontSize: ".6rem", letterSpacing: ".2em", padding: ".6em 1em", cursor: "pointer", textTransform: "uppercase", opacity: loading || !input.trim() ? 0.3 : 1 }}>
                Enviar
              </button>
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
      <style>{"*{box-sizing:border-box;margin:0;padding:0}body{background:#080808}input,textarea{color:#f0ebe0!important;-webkit-text-fill-color:#f0ebe0!important;caret-color:#b89a4e}input::placeholder,textarea::placeholder{color:rgba(240,235,224,.3)!important;-webkit-text-fill-color:rgba(240,235,224,.3)!important}input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px #080808 inset!important;-webkit-text-fill-color:#f0ebe0!important}"}</style>
      {screen === "welcome" && <Welcome go={go} lang={lang} setLang={setLang} />}
      {screen === "register" && <Register go={go} lang={lang} setDynamicUser={setDynamicUser} />}
      {screen === "pending" && <Pending email={email} go={go} lang={lang} />}
      {screen === "login" && <Login go={go} lang={lang} setDynamicUser={setDynamicUser} />}
      {screen === "onboarding" && <Onboarding go={go} userEmail={email} lang={lang} setProblema={setProblema} setDesafios={setDesafios} dynamicUser={dynamicUser} />}
      {screen === "chat" && <Chat go={go} userEmail={email} lang={lang} setLang={setLang} problema={problema} desafios={desafios} setDesafios={setDesafios} setProblema={setProblema} dynamicUser={dynamicUser} />}
    </div>
  );
}
