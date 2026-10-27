
const ORIENTATION = "0deg 90deg 0deg";

const CATEGORIES = [
  {
    id: "tickets",
    title: "MoMA Ticket from a College Class Field Trip - 04.15.2025 2:30 P.M.",
    blurb: "Torn at the gate, kept in a pocket.",
    paper: "yellow",
    tack: { x: "47%", y: "32%" },
    items: [
      {
        title: "Concert ticket",
        description: "This ticket was for a field trip for one of my favorite courses in undergrad, a class about waters. I remember feeling stressed about needing to choose a project topic, and my professor talked me through some options while we were at the museum. The class looked at this massive tapestry together and discussed how it connected to our work that semester. A museum, where I usually went to enjoy solitude, became a place for community here.",
        front: "models/moma-ticket-front.glb", 
        back: "models/moma-ticket-back.glb",
      }
      
    ]
  },
  {
    id: "letters",
    title: "NYCB Playbill and Ticket - 02.09.2024 8:00 P.M.",
    blurb: "Handwriting, postmarks, and stamps.",
    paper: "ruled",
    tack: { x: "50%", y: "15%" },
    items: [
      {
        title: "Program",
        description: "This is from a Lincoln Center performance of the New York City Ballet. Lincoln Center was right next door to my school for undergraduate, and I was always saving up to see a show. Since I couldn't afford much else, I usually got the last ring seats, but I soon found out that’s where the best view is. From up there, you can look straight down into the orchestra pit and watch the dancers arrange into formations. It turned out that what was a limitation of my budget was actually a vantage point. This specific show featured Megan Fairchild, who just retired, and having this ticket reminds me I was able to see part of her career.",
        front: "models/nycb-program-front.glb",
        back: "models/nycb-program-back.glb"
      },
      {
        title: "Ticket",
        description: "This is from a Lincoln Center performance of the New York City Ballet. Lincoln Center was right next door to my school for undergraduate, and I was always saving up to see a show. Since I couldn't afford much else, I usually got the last ring seats, but I soon found out that’s where the best view is. From up there, you can look straight down into the orchestra pit and watch the dancers arrange into formations. It turned out that what was a limitation of my budget was actually a vantage point. This specific show featured Megan Fairchild, who just retired, and having this ticket reminds me I was able to see part of her career.",
        front: "models/nycb-ticket-front.glb",
        back: "models/nycb-ticket-back.glb"
      }
    ]
  },
  {
    id: "flyers",
    title: "American Museum of Natural History Brochure and Tickets - 09.15.2025 11:50 A.M.",
    blurb: "Stapled to poles, then folded into pockets.",
    paper: "pink",
    tack: { x: "49%", y: "12%" },
    items: [
      {
        title: "Show flyer",
        description: "These are from the American Museum of Natural History when I was in undergrad. I went with friends who were visiting out of town. I loved visiting the museum on my own on the weekends. My favorite spot was the whale room. After a brutal week of classes, I’d sit on that bench and just let my mind wander. It was where I processed what I had learned in my classes and dreamt about what I would do after graduation. Seeing families there felt like a break from the intensity of college life. You might notice the brochure is folded up. This is one of my habits when I am focused at a museum of an arts performance. I don’t even notice until I leave, and I realize they are completely destroyed. The creases in this brochure are a sort of map of how absorbed I was in those moments.",
        front: "models/amnh-brochure-front.glb",
        back: "models/amnh-brochure-back.glb"
      }
    ]
  },
  {
    id: "receipts",
    title: "Griffith Observatory Ticket - 07.02.2024 5:15 P.M.",
    blurb: "Scribbles, lists, and proof of purchase.",
    paper: "index",
    tack: { x: "50%", y: "31%" },
    items: [
      {
        title: "Receipt",
        description: "I went to the Griffith Observatory with my family on a trip to California. I didn’t expect to enjoy it, but it became a highlight of the trip for me. The Foucault pendulum was very cool! I remember standing and looking at it for a while as we waited for our planetarium show. The planetarium show ended up being so cool, it started an era for me where I visited a lot of planetariums. It’s cool to think this ticket brought so many unexpected things my way. I learned all about the Foucault pendulum and realized how much I love going to planetariums.",
        front: "models/griffith-ticket-front.glb",
        back: "models/griffith-ticket-back.glb"
      }
    ]
  },
  {
    id: "maps",
    title: "The Met Brochure",
    blurb: "Unfolded once too often.",
    paper: "blue",
    tack: { x: "54%", y: "17%" },
    items: [
      {
        title: "Folded map",
        description: "The Met was one of my favorite places to visit on the weekends when I first moved to New York. I loved to get lost, see new and familiar works, and unplug from the outside world. I would spend hours in the museum before walking home through Central Park, another consistent part of the routine. I loved how this routine allowed me to escape the stress of school, see art, get my steps in, and see the sun all in one afternoon. You can also tell by the state of this brochure that I would fidget with these brochures as well, sometimes practically destroying them by the time I left the museum.",
        front: "models/met-front.glb",
        back: "models/met-back.glb"
      }
    ]
  },
  {
    id: "misc",
    title: "Lincoln Center Concert Ticket - 08.05.2026 7:00 P.M.",
    blurb: "Everything that didn’t fit anywhere else.",
    paper: "kraft",
    tack: { x: "40%", y: "35%" },
    items: [
      {
        title: "Lincoln Center Concert Ticket - 08.05.2026 7:00 P.M.",
        description: "This is a concert ticket for a performance of an original composition of music for piano, organ, and orchestra. I remember it was pouring rain that day, and I wasn’t sure if I really wanted to go to the concert. I was tired after work and wanted to go home. I decided I should go because I spent money on it. I picked up my ticket at will call and ate a snack in the lobby cafe. Later, when the music started, all my reluctance vanished. The sound of the organ transported me back to my childhood. I remember crying at how beautiful the music was. I was so glad I ended up going to the concert. It made my week.",
        glb: "models/lincolncenter-ticket.glb"
      }
    ]
  }
];

// The masking-tape title on the home page. Change left/top (% of the screen) to move it,
// rotate to tilt it, size to resize it. Or open index.html?edit and drag it.
const TITLE = { text: "Emily's Time Capsule", left: "2%", top: "2%", rotate: "-3deg", size: "clamp(1.5rem, 3.8vw, 2.6rem)" };

// How scans are rotated so they stand upright, like paper pinned to a board.
// Format: "roll pitch yaw". If a scan loads lying flat, sideways or upside down,
// try one of these: "0deg 90deg 0deg"  "0deg -90deg 0deg"  "0deg 90deg 180deg"  "90deg 90deg 0deg"

const app = document.getElementById("app");
const FRONT = "0deg 90deg auto";   // camera: straight on, level
const BACK = "180deg 90deg auto";
const TACKS = ["#c0392b", "#2f6fb5", "#e0a526", "#3f8f4f", "#8a4fa8"];
// Collage positions on the home board, as % of the screen. l/t/h = left, top, height (landscape).
// pl/pt/pw = left, top, width (portrait phones). Pieces may overlap; later ones sit on top.
const SLOTS = [
  { l: 0, t: 3, h: 60, pl: 0, pt: 0, pw: 50 }, { l: 29, t: 22, h: 62, pl: 48, pt: 6, pw: 50 },
  { l: 60, t: 0, h: 58, pl: 4, pt: 29, pw: 48 }, { l: 8, t: 44, h: 54, pl: 50, pt: 35, pw: 48 },
  { l: 40, t: 42, h: 58, pl: 0, pt: 56, pw: 50 }, { l: 70, t: 40, h: 58, pl: 48, pt: 60, pw: 50 }
];
const EDIT = new URLSearchParams(location.search).has("edit");
const pct = (v) => Math.round(Math.max(0, Math.min(1, v)) * 100) + "%";
function editNote(html) {
  let n = document.getElementById("edit-note");
  if (!n) { n = document.createElement("div"); n.id = "edit-note"; document.body.appendChild(n); }
  n.innerHTML = html;
}
const tackLine = (x, y) => `<code>tack: { x: "${x}", y: "${y}" }</code>`;

const jitter = (i, salt) => { const s = Math.sin((i + 1) * 12.9898 + salt * 78.233) * 43758.5453; return (s - Math.floor(s)) * 2 - 1; };
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

/* ---------------------------- home ---------------------------- */
function renderHome() {
  document.title = "The Ephemera Board";
  const pieces = CATEGORIES.map((c, i) => {
    const first = c.items[0];
    const s = SLOTS[i % SLOTS.length];
    const style = `--l:${(s.l + jitter(i, 2) * 2).toFixed(1)}%;--t:${(s.t + jitter(i, 3) * 2).toFixed(1)}%;--h:${s.h}%;--pl:${(s.pl + jitter(i, 6) * 1.5).toFixed(1)}%;--pt:${(s.pt + jitter(i, 7) * 1.5).toFixed(1)}%;--pw:${s.pw}%;--r:${(jitter(i, 1) * 8).toFixed(1)}deg`;
    const tack = c.tack || {};
    const media = c.thumb
      ? `<img src="${esc(c.thumb)}" alt="" onerror="this.closest('.piece').classList.add('missing')">`
      : `<model-viewer src="${esc(first.front || first.glb)}" orientation="${first.orientation || ORIENTATION}"
           camera-orbit="${FRONT}" interaction-prompt="none" shadow-intensity="0" exposure="1.05" loading="lazy" alt=""></model-viewer>`;
    return `<a class="piece" href="#/${c.id}" aria-label="${esc(c.title)}" style="${style}">
      ${media}<div class="ph">scan coming soon</div>
      <span class="tack" style="--c:${TACKS[i % TACKS.length]};--tack-x:${tack.x || "50%"};--tack-y:${tack.y || "6%"}"></span></a>`;
  }).join("");

  app.innerHTML = `<div class="scatter">${pieces}
    <h1 class="tape-wrap home-title" style="--tl:${TITLE.left};--tt:${TITLE.top};--tr:${TITLE.rotate};--ts:${TITLE.size}"><span class="tape">${esc(TITLE.text)}</span></h1></div>`;
  app.querySelectorAll(".piece").forEach((a, i) => {
    const mv = a.querySelector("model-viewer");
    if (mv) {
      mv.addEventListener("error", () => a.classList.add("missing"));
      a.addEventListener("mouseenter", () => (mv.cameraOrbit = "25deg 88deg auto")); // little turn on hover
      a.addEventListener("mouseleave", () => (mv.cameraOrbit = FRONT));
    }
    if (EDIT) a.addEventListener("click", (e) => {
      e.preventDefault();
      const x = pct(e.offsetX / a.offsetWidth), y = pct(e.offsetY / a.offsetHeight);
      const t = a.querySelector(".tack");
      t.style.setProperty("--tack-x", x); t.style.setProperty("--tack-y", y);
      editNote(`<b>Category “${esc(CATEGORIES[i].title)}”</b><br>Add to that category in app.js:${tackLine(x, y)}`);
    });
  });
  if (EDIT) {
    editNote("<b>Edit mode</b><br>Click an object to place its tack. Drag the title to move it. Then paste the line it shows into <code>app.js</code>.");
    const t = app.querySelector(".home-title"), box = app.querySelector(".scatter");
    t.style.pointerEvents = "auto"; t.style.cursor = "grab"; t.style.touchAction = "none";
    t.addEventListener("pointerdown", (e) => {
      const tr = t.getBoundingClientRect(), dx = e.clientX - tr.left, dy = e.clientY - tr.top;
      t.setPointerCapture(e.pointerId);
      const move = (m) => {
        const r = box.getBoundingClientRect();
        const left = pct((m.clientX - dx - r.left) / r.width), top = pct((m.clientY - dy - r.top) / r.height);
        t.style.setProperty("--tl", left); t.style.setProperty("--tt", top);
        editNote(`<b>Title position</b><br>In app.js, set:<code>left: "${left}", top: "${top}"</code>`);
      };
      t.addEventListener("pointermove", move);
      t.addEventListener("pointerup", () => t.removeEventListener("pointermove", move), { once: true });
    });
  }
  window.scrollTo(0, 0);
}

/* ------------------------- category view ------------------------- */
function renderCategory(cat) {
  document.title = `${cat.title} · The Ephemera Board`;
  const switcher = cat.items.map((it, i) =>
    `<li><button class="sw-btn" data-i="${i}" style="--r:${(jitter(i, 4) * 3).toFixed(1)}deg">${esc(it.title)}</button></li>`).join("");

  app.innerHTML = `
    <div class="view-head">
      <a class="tape-wrap back" href="#/"><span class="tape">‹ Back to the board</span></a>
      <h1 class="view-title"><span class="tape-wrap"><span class="tape">${esc(cat.title)}</span></span></h1>
      <p class="view-blurb">${esc(cat.blurb)}</p>
    </div>
    <div class="view-grid">
      <section class="view-main" aria-label="3D viewer">
        <div class="stage" id="stage">
          <model-viewer id="mv" camera-controls touch-action="pan-y" shadow-intensity="0" exposure="1.05"
            interaction-prompt="none" ar ar-modes="webxr scene-viewer quick-look" alt="3D scan of paper ephemera"></model-viewer>
           <div class="stage-msg" id="msg"></div>
        </div>
        <div class="controls">
          <button class="icon-btn" id="flip" type="button" aria-label="Flip the sheet over" title="Flip over" hidden>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v2M12 9v2M12 13v2M12 19v2"/><path d="M9.5 7H5.5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4z"/><path d="M14.5 7h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4z" class="fill"/></svg>
          </button>
          <button class="icon-btn" id="reset" type="button" aria-label="Reset the view" title="Reset view">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
          </button>
        </div>
      </section>
      <aside class="side">
        <article class="desc"><span class="tack"></span>
          <p id="d-text"></p>
        </article>
        ${cat.items.length > 1 ? `<ul class="pieces" aria-label="Pieces in this category">${switcher}</ul>` : ""}
      </aside>
    </div>`;

  const $ = (id) => document.getElementById(id);
  const stage = $("stage"), mv = $("mv"), msg = $("msg"), flipBtn = $("flip");
  let item = null, side = "front", busy = false;

  const showMsg = (h) => { msg.innerHTML = h; msg.classList.add("show"); };
  const hideMsg = () => msg.classList.remove("show");
  const twoSided = () => item.back || item.flip;
  const sideLabel = () => (twoSided() ? `Now showing: ${side}` : "");
  const defaultOrbit = () => (side === "back" && !item.back ? BACK : FRONT);

  // Resolves when the next model finishes loading (or after a safety timeout).
  const nextLoad = () => new Promise((done) => {
    const fin = () => { mv.removeEventListener("load", fin); done(); };
    mv.addEventListener("load", fin);
    setTimeout(fin, 6000);
  });

  function load(i) {
    item = cat.items[i]; side = "front"; hideMsg();
    mv.orientation = item.orientation || ORIENTATION;
    mv.src = item.front || item.glb;
    mv.cameraOrbit = FRONT;
    if (item.back) fetch(item.back).catch(() => {}); // warm the cache so the flip is instant
    $("d-text").textContent = item.description;
    flipBtn.hidden = !twoSided();
    app.querySelectorAll(".sw-btn").forEach((b) => b.setAttribute("aria-current", String(Number(b.dataset.i) === i)));
  }

  mv.addEventListener("error", () =>
    showMsg(`<p>Couldn’t load <code>${esc(mv.src || "")}</code>.<br>Check that the file is in the <code>models</code> folder and the name matches <code>app.js</code>.</p>`));
  mv.addEventListener("load", hideMsg);

  flipBtn.addEventListener("click", async () => {
    if (busy) return;
    busy = true;
    const next = side === "front" ? "back" : "front";
    stage.classList.add("out");            // 1. turn edge-on (invisible)
    await wait(290);
    side = next;
    if (item.back) {                        // 2. swap while hidden, and wait until it has loaded
      const ready = nextLoad();
      mv.src = next === "back" ? item.back : item.front;
      mv.cameraOrbit = FRONT;
      await ready;
    } else {
      mv.cameraOrbit = next === "back" ? BACK : FRONT;
      mv.jumpCameraToGoal();
    }
    // $("d-side").textContent = sideLabel();
    stage.classList.add("in");              // 3. start on the far edge, then turn to face us
    stage.classList.remove("out");
    void stage.offsetWidth;
    stage.classList.remove("in");
    await wait(300);
    busy = false;
  });

  $("reset").addEventListener("click", () => {
    mv.cameraOrbit = defaultOrbit(); mv.fieldOfView = "auto"; mv.cameraTarget = "auto auto auto";
  });
  app.querySelectorAll(".sw-btn").forEach((b) => b.addEventListener("click", () => load(Number(b.dataset.i))));

  load(0);
  window.scrollTo(0, 0);
}

/* ---------------------------- routing ---------------------------- */
function route() {
  const cat = CATEGORIES.find((c) => c.id === location.hash.replace(/^#\/?/, ""));
  const note = document.getElementById("edit-note");
  if (note) note.remove();
  cat ? renderCategory(cat) : renderHome();
}
window.addEventListener("hashchange", route);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && location.hash && location.hash !== "#/") location.hash = "#/";
});
route();