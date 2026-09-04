/* ===========================================================
   ROUTE ROVER — Application Logic
   =========================================================== */

/* ---------------- DATA ---------------- */
const IMAGES = {
  tokyoTorii: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_4iha1GJEunaZ22PnSvql2HEEbn4LnylUi8Kfa5PhJi2TS7R2Hs6XZV7DeS_Gq6LNIyXhr21di-9RIj1YouV9eW3NWOghQvmrLbqGn6hdhJLQpKh9LG0cxcIX4cPogzl_KfOp57pQ6IJxLUeltbFAV_amjOvlhX612bvTy0B2VrR7YS1ISt1-AIVKLlwhtbGV0vY1cQm8hEYvIirPopYPBdGnTCiT6Ps2JbCRZ1dX-tOBUPHs73tBzA',
  shibuya: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoQRtZ-f0rNADPo8APM60EObotuB_jX9-Ixp8hVqn9LHe0XtAlFp50spgio0-Kfs15Zc6sjMelTViT7RT_b17A1Qqdm5I7epno-Cx6WcMJTl9n7sxLTx4YSMMmDcau2_nHIoco6bILpL3XY9hIpfpDZcP4V23W2rCzHka1dvAVg9PWa89I9mVORMQ8PaMDnx_9rWvei8Q0JiVAoHuwSoIhBeGfINpmnon5FqtoaVbhe8CvQOMNssJDPw',
  tokyoMap: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRblZtunu65w8Uv_K4oZpNFgNSc_sxRVTcomJ3V4mMjjvYeH9AdpGXnxkBddRxWUiY5Z__KCBgVLY7-00PZhWzva_xPUil9Cn1DR93RY94xscMgqS0QLTOJ61FiwRE-9FxanEfl4uqm8WH6wehGAS-RTQHSISFkR8TcnofIw9Y72J37bsIpmZRl55X_XhcfJqQ8Dw8e6ba4eD-__62WKJC97hoSNoT17GHmeciPSPfXGLUyNadAEFHQw',
  tokyoHero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaxDNwlchyKt-u86MvUQdMtVQwkBvUCCQ0CNHYaqQ9izXj9g6xhJEJXS9MlK9cZv-6ACoRS9VCE8hMguKl3zJdI2wPZJMwlypxH6oNlWIMahRnbtJgG4htLldZmT_8dti5kw1JCD3aw-8FweKNrjLs3xG0u5ECTNcGX44SeQLP8P4kwoYaaySwQAfB3-9zI39-CJ-FwpVV_PPZmpruXrfmDGajhdI9ypsRCgb-oHrNEUVTHPw_dengXg',
  santoriniHero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeRZKu5LuofFKGfYunP5uHdtjZ26HxaWnRO-0bQ5rdvvWlvgaG4t8wZLSuqUP9bLnZEouJuX5SYjlGXR5srcX6sbspVa0Zb2ZmQIfIStY9_Wes5m7NqbLs3eKKrWOxVTYwSWMgMzJ2MiINLs-hH59pC2EiOrGtOHJFQVwi70cw3hb8V5Lf9gRNqeqDpGlIbZ1EPMltOFYKHiG3Qe40LvUjypD7ikzkc1GfR-O_WCuWBQr5nazD_s5qgA',
  amalfiHero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBVlR_6QIJFQ5LRXjntpurVYiaAFyGsr-RNjxgitncY5fuueaSj9HwgjLjCa4a08Q0QxDElim0-4BC_xbMuTvCsK9W-YoluXHAhxbBIy2tO7l8mBtI1jWzg_oEeQw5Lf0IAULkMMPI1JsD8EfBNWICnqzS7lnBC1EAUWoV4WxAOEuQN0RL9xfxZUbN0UEhxVcYg6qh9jOO0AKa3RuFvcRhiqAcWebnEdzpQfcpTC_rEN15HC4pG1A3_g',
  heroBg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8svoK6x5N0Bykh0uCHEXE1p35nB3gPKUFrC3rbL8IknqPS2GZo_dUjsUOQINDjvfvPfYi5W-BZvuXlVvxmF5xKc2vbvSohIzxBzlcek9tRglJXTn5zf7OxbFjWiB0neAwxsXOHq0pavCTK2Y90Ga3Ne2hAIKWF7CIyb1GYheqiTQL9XlRrtCjPGI1TYwHfyloMoEiCI61dy0hZbHZLGNb-SoHDAOQwdscgXNXrqs96wI9nE-z2EnDxA'
};

const DESTINATIONS = [
  { name: "Santorini, Greece", days: "7 Days", from: "$1,200", tag: "Luxury", img: IMAGES.santoriniHero },
  { name: "Tokyo, Japan", days: "10 Days", from: "$2,100", tag: "Adventure", img: IMAGES.tokyoHero },
  { name: "Amalfi Coast, Italy", days: "5 Days", from: "$1,800", tag: "Relaxation", img: IMAGES.amalfiHero }
];

const INTERESTS = ["Adventure","Culture","Food","Nightlife","Relaxation","Nature"];
const STYLES = [
  { id: "solo", label: "Solo", icon: "person" },
  { id: "couple", label: "Couple", icon: "group" },
  { id: "family", label: "Family", icon: "family_restroom" },
  { id: "friends", label: "Friends", icon: "diversity_3" }
];

const CURATED_POOLS = {
  tokyo: {
    match: ["tokyo","japan"], img: IMAGES.tokyoHero, mapImg: IMAGES.tokyoMap,
    activities: [
      { title:"Meiji Shrine", desc:"Explore the serene forested grounds of the historic Shinto shrine.", category:"Attraction", time:"09:00", duration:"2h", img: IMAGES.tokyoTorii, ai:false },
      { title:"Shibuya Crossing", desc:"Experience the world's busiest intersection and surrounding shopping streets.", category:"Landmark", time:"11:30", duration:"2h", img: IMAGES.shibuya, ai:true },
      { title:"Tsukiji Outer Market", desc:"Sample fresh seafood and street food from the historic market stalls.", category:"Food", time:"09:00", duration:"2h", ai:false },
      { title:"Senso-ji Temple", desc:"Wander Asakusa's oldest temple and its bustling Nakamise shopping street.", category:"Culture", time:"10:00", duration:"2h", ai:false },
      { title:"teamLab Planets", desc:"Immersive digital art installations that blur art and technology.", category:"Adventure", time:"13:00", duration:"3h", ai:true },
      { title:"Golden Gai Bar Hopping", desc:"Tiny, atmospheric bars packed into narrow Shinjuku alleyways.", category:"Nightlife", time:"20:00", duration:"3h", ai:false },
      { title:"Shinjuku Gyoen", desc:"Stroll through one of Tokyo's most beautiful landscaped gardens.", category:"Nature", time:"09:00", duration:"2h", ai:false },
      { title:"Ginza Dining Walk", desc:"High-end shopping district with exceptional dining options.", category:"Food", time:"18:00", duration:"3h", ai:true }
    ]
  },
  santorini: {
    match: ["santorini","greece"], img: IMAGES.santoriniHero, mapImg: null,
    activities: [
      { title:"Oia Sunset Viewpoint", desc:"Watch the famous caldera sunset from the whitewashed village of Oia.", category:"Landmark", time:"18:00", duration:"2h", ai:true },
      { title:"Fira to Oia Caldera Hike", desc:"A scenic clifftop hike along the caldera rim with stunning views.", category:"Adventure", time:"09:00", duration:"4h", ai:false },
      { title:"Red Beach", desc:"Relax on the striking volcanic-red sands of this unique beach.", category:"Nature", time:"11:00", duration:"2h", ai:false },
      { title:"Santo Wines Tasting", desc:"Sample local Assyrtiko wines with caldera views.", category:"Food", time:"16:00", duration:"2h", ai:false },
      { title:"Akrotiri Archaeological Site", desc:"Explore the remarkably preserved Bronze Age Minoan settlement.", category:"Culture", time:"10:00", duration:"2h", ai:false },
      { title:"Catamaran Caldera Cruise", desc:"Sail past hot springs and volcanic islets with a sunset finish.", category:"Adventure", time:"12:00", duration:"5h", ai:true },
      { title:"Amoudi Bay Seafood Taverna", desc:"Fresh seafood at a cliffside fishing harbor below Oia.", category:"Food", time:"19:00", duration:"2h", ai:false }
    ]
  },
  amalfi: {
    match: ["amalfi","positano","italy"], img: IMAGES.amalfiHero, mapImg: null,
    activities: [
      { title:"Positano Cliffside Stroll", desc:"Wander the pastel-colored streets cascading down to the sea.", category:"Attraction", time:"10:00", duration:"3h", ai:false },
      { title:"Path of the Gods Hike", desc:"A dramatic coastal trail with sweeping Tyrrhenian Sea views.", category:"Adventure", time:"08:00", duration:"4h", ai:true },
      { title:"Villa Cimbrone Gardens", desc:"Ravello's romantic gardens overlooking the coastline.", category:"Culture", time:"14:00", duration:"2h", ai:false },
      { title:"Limoncello Tasting", desc:"Sample the region's signature lemon liqueur at a local producer.", category:"Food", time:"16:00", duration:"1h", ai:false },
      { title:"Boat Tour to Capri", desc:"Cruise to Capri's Blue Grotto and dramatic sea stacks.", category:"Adventure", time:"09:00", duration:"6h", ai:true },
      { title:"Amalfi Cathedral", desc:"Visit the striking Moorish-influenced cathedral in the town center.", category:"Culture", time:"11:00", duration:"1h", ai:false },
      { title:"Pizza-Making Class", desc:"Learn to make Neapolitan-style pizza with a local chef.", category:"Food", time:"18:00", duration:"2h", ai:false }
    ]
  }
};

const GENERIC_POOL = [
  { title:"Old Town Walking Tour", desc:"Get oriented with a guided stroll through the historic center.", category:"Attraction", ai:false },
  { title:"Signature Local Market", desc:"Browse stalls of local produce, crafts, and street food.", category:"Food", ai:false },
  { title:"Museum & Heritage District", desc:"Dive into the region's history and culture.", category:"Culture", ai:false },
  { title:"Sunset Viewpoint", desc:"Catch golden hour from the best vantage point in town.", category:"Landmark", ai:true },
  { title:"Adventure Excursion", desc:"An outdoor activity suited to the local landscape.", category:"Adventure", ai:false },
  { title:"Local Tasting Experience", desc:"Sample the destination's signature dishes and drinks.", category:"Food", ai:true },
  { title:"Evening Out", desc:"Explore where locals go after dark.", category:"Nightlife", ai:false },
  { title:"Nature Escape", desc:"A park, reserve, or scenic natural area nearby.", category:"Nature", ai:false }
];

const CATEGORY_ICONS = { Attraction:"directions_walk", Landmark:"local_activity", Food:"restaurant", Culture:"museum", Adventure:"hiking", Nightlife:"nightlife", Nature:"park" };

/* ---------------- STATE ---------------- */
var state = { origin:"", destination:"", dateStart:"", dateEnd:"", travelers:2, budget:2500, interests:[], style:"couple" };
var trip = null;
var activeFilter = "All";
var chatHistory = [];

/* ---------------- NAV ---------------- */
function goTo(view){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('view-'+view).classList.add('active');
  window.scrollTo({top:0, behavior:'instant'});
  document.querySelectorAll('.main-nav a').forEach(n=>n.classList.remove('active'));
  const map = {landing:'nav-discover', planner:'nav-planner', dashboard:'nav-trips'};
  if(map[view]) document.getElementById(map[view]).classList.add('active');
}
function openMyTrips(){ trip ? goTo('dashboard') : goTo('planner'); }
function startFromHero(){
  const dest = document.getElementById('hero-destination').value.trim();
  if(dest) document.getElementById('f-destination').value = dest;
  goTo('planner'); syncPreview();
}

/* ---------------- STATIC RENDER ---------------- */
function renderDestinationCards(){
  document.getElementById('destination-cards').innerHTML = DESTINATIONS.map(d => `
    <div class="dest-card" onclick="pickDestination('${d.name.replace(/'/g,"\\'")}')">
      <div class="img" style="background-image:url('${d.img}')"></div>
      <div class="veil"></div>
      <div class="dest-tag"><span class="material-symbols-outlined" style="font-size:15px">schedule</span> ${d.days}</div>
      <div class="dest-info">
        <h3>${d.name}</h3>
        <p>From ${d.from} <span class="dot"></span> ${d.tag}</p>
      </div>
    </div>`).join('');
}
function pickDestination(name){ document.getElementById('f-destination').value = name; goTo('planner'); syncPreview(); }

function renderInterestChips(){
  document.getElementById('interest-chips').innerHTML = INTERESTS.map(i => `
    <button type="button" class="chip" data-interest="${i}" onclick="toggleInterest('${i}')">${i}</button>`).join('');
}
function toggleInterest(i){
  const idx = state.interests.indexOf(i);
  if(idx>-1) state.interests.splice(idx,1); else state.interests.push(i);
  document.querySelectorAll('.chip').forEach(btn=>{
    if(btn.dataset.interest===i) btn.classList.toggle('active', state.interests.includes(i));
  });
  syncPreview();
}

function renderStyleButtons(){
  document.getElementById('style-buttons').innerHTML = STYLES.map(s => `
    <button type="button" class="style-btn" data-style="${s.id}" onclick="setStyle('${s.id}')">
      <span class="material-symbols-outlined">${s.icon}</span><span class="lbl">${s.label}</span>
    </button>`).join('');
  setStyle(state.style);
}
function setStyle(id){
  state.style = id;
  document.querySelectorAll('.style-btn').forEach(b=> b.classList.toggle('active', b.dataset.style===id));
}
function changeTravelers(delta){
  state.travelers = Math.max(1, state.travelers + delta);
  document.getElementById('traveler-count-label').textContent = state.travelers + (state.travelers===1 ? ' Traveler' : ' Travelers');
  syncPreview();
}

function findCurated(destText){
  const t = (destText||'').toLowerCase();
  for(const key in CURATED_POOLS){ if(CURATED_POOLS[key].match.some(m=>t.includes(m))) return CURATED_POOLS[key]; }
  return null;
}
function syncPreview(){
  const dest = document.getElementById('f-destination').value.trim();
  document.getElementById('preview-destination').textContent = dest || "Type a destination to preview";
  const ds = document.getElementById('f-date-start').value, de = document.getElementById('f-date-end').value;
  document.getElementById('preview-dates').textContent = (ds && de) ? `${fmtDate(ds)} - ${fmtDate(de)} (${dayCount(ds,de)} Days)` : "Select your dates";
  document.getElementById('preview-travelers').textContent = state.travelers + (state.travelers===1?' Traveler':' Travelers');
  document.getElementById('preview-interests').textContent = state.interests.length ? state.interests.join(', ') : "No interests selected";
  const curated = findCurated(dest);
  const img = document.getElementById('planner-preview-img');
  img.style.backgroundImage = curated ? `url('${curated.img}')` : '';
  const heroImg = document.getElementById('hero-bg-img');
  if(heroImg && !heroImg.style.backgroundImage) heroImg.style.backgroundImage = `url('${IMAGES.heroBg}')`;
}
function fmtDate(d){ if(!d) return ''; const dt = new Date(d+'T00:00:00'); return dt.toLocaleDateString('en-US',{month:'short',day:'numeric'}); }
function dayCount(a,b){ const ms = new Date(b+'T00:00:00') - new Date(a+'T00:00:00'); return Math.max(1, Math.round(ms/86400000)+1); }

/* ---------------- LOADING SCREEN CYCLES ---------------- */
const statusTexts = ["Analyzing interests...","Optimizing routes...","Finding the best local gems...","Calculating budget...","Checking local weather patterns...","Curating hidden experiences..."];
const funFacts = [
  "Did you know? Japan consists of over 6,800 islands, making it one of the most extensive island nations in the world.",
  "Travel Tip: Packing versatile clothing layers saves suitcase space and prepares you for unpredictable weather.",
  "Did you know? The Great Wall of China is not actually a single continuous wall, but a series of walls and fortifications.",
  "Insight: Taking a walking tour on your first day is the best way to orient yourself in a new city."
];
let statusIdx=0, factIdx=0, loadingIntervals=[];
function startLoadingCycles(){
  stopLoadingCycles();
  const statusContainer = document.getElementById('status-container');
  const factEl = document.getElementById('fact-text');
  loadingIntervals.push(setInterval(()=>{
    statusIdx=(statusIdx+1)%statusTexts.length;
    statusContainer.innerHTML = `<p>${statusTexts[statusIdx]}</p>`;
  },1100));
  loadingIntervals.push(setInterval(()=>{
    factIdx=(factIdx+1)%funFacts.length;
    setTimeout(()=>{ factEl.textContent = funFacts[factIdx]; },1400);
  },2800));
}
function stopLoadingCycles(){ loadingIntervals.forEach(clearInterval); loadingIntervals=[]; }

/* ---------------- GENERATE ITINERARY ---------------- */
async function generateItinerary(){
  const destination = document.getElementById('f-destination').value.trim();
  const err = document.getElementById('form-error');
  if(!destination){ err.classList.remove('hidden'); return; }
  err.classList.add('hidden');

  state.origin = document.getElementById('f-origin').value.trim();
  state.destination = destination;
  state.dateStart = document.getElementById('f-date-start').value;
  state.dateEnd = document.getElementById('f-date-end').value;
  state.budget = parseFloat(document.getElementById('f-budget').value) || 2500;

  const curated = findCurated(destination);
  document.getElementById('loading-bg').style.backgroundImage = `url('${curated ? curated.img : IMAGES.heroBg}')`;

  goTo('loading');
  startLoadingCycles();
  const startTime = Date.now();

  let aiResult = await callClaudeForItinerary(state).catch(()=>null);
  const elapsed = Date.now() - startTime;
  // Keep the loading screen brief — just enough to feel intentional, never a bottleneck.
  const minDelay = aiResult ? 900 : 650;
  if(elapsed < minDelay) await new Promise(r=>setTimeout(r, minDelay-elapsed));

  stopLoadingCycles();
  trip = buildTripObject(state, aiResult, curated);
  chatHistory = [];
  renderDashboard();
  goTo('dashboard');
  document.querySelector('.side-nav a[data-nav="timeline"]').click();
}

async function callClaudeForItinerary(s){
  const days = (s.dateStart && s.dateEnd) ? dayCount(s.dateStart,s.dateEnd) : 5;
  const prompt = `You are the itinerary engine for a travel app called Route Rover. Build a ${days}-day trip itinerary.
Origin: ${s.origin || "unspecified"}
Destination: ${s.destination}
Dates: ${s.dateStart || "unspecified"} to ${s.dateEnd || "unspecified"}
Travelers: ${s.travelers} (${s.style})
Budget: $${s.budget} total
Interests: ${s.interests.join(", ") || "general sightseeing"}

Return ONLY valid JSON (no markdown fences, no commentary) matching exactly this schema:
{
 "days": [
   { "label": "Day 1: <short theme>", "activities": [
      { "time": "HH:MM", "duration": "Xh", "title": "string", "description": "one sentence", "category": "Attraction|Landmark|Food|Culture|Adventure|Nightlife|Nature", "aiSuggested": true|false }
   ]}
 ],
 "packingList": ["string", "..."],
 "budgetTip": "one short sentence",
 "assistantIntro": "one short first-person sentence from the AI assistant about this trip's focus"
}
Include 2-4 activities per day. Keep descriptions to one sentence each. Make choices reflect the stated interests.`;

  const controller = new AbortController();
  const timeout = setTimeout(()=>controller.abort(), 6000); // never let a slow/unreachable network stall trip planning
  try {
    const resp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens: 1000, messages: [{ role: "user", content: prompt }] }),
      signal: controller.signal
    });
    if(!resp.ok) throw new Error("API error");
    const data = await resp.json();
    const textBlock = (data.content||[]).find(b=>b.type==="text");
    if(!textBlock) throw new Error("No text block");
    const clean = textBlock.text.replace(/```json|```/g,"").trim();
    return JSON.parse(clean);
  } finally {
    clearTimeout(timeout);
  }
}

function buildTripObject(s, aiResult, curated){
  const days = (s.dateStart && s.dateEnd) ? dayCount(s.dateStart,s.dateEnd) : (aiResult && aiResult.days ? aiResult.days.length : 5);
  let dayPlans;
  if(aiResult && aiResult.days && aiResult.days.length){
    dayPlans = aiResult.days.map((d,i)=>({
      label: d.label || `Day ${i+1}`,
      activities: (d.activities||[]).map(a=>({
        title: a.title, desc: a.description || a.desc || "", category: a.category || "Attraction",
        time: a.time || "10:00", duration: a.duration || "2h", ai: !!a.aiSuggested,
        img: curated ? pickImageForActivity(curated, a.title) : null
      }))
    }));
  } else {
    dayPlans = buildFallbackDays(days, s, curated);
  }
  const spent = Math.round(s.budget * 0.42);
  return {
    origin: s.origin, destination: s.destination, dateStart: s.dateStart, dateEnd: s.dateEnd,
    days, travelers: s.travelers, style: s.style, interests: s.interests.slice(),
    budget: s.budget, spent, remaining: s.budget - spent, dayPlans,
    packingList: (aiResult && aiResult.packingList) || buildFallbackPacking(s),
    budgetTip: (aiResult && aiResult.budgetTip) || "Book activities in advance to lock in better rates and avoid peak pricing.",
    assistantIntro: (aiResult && aiResult.assistantIntro) || `I'll prioritize ${s.interests.length ? s.interests.join(' and ').toLowerCase() : 'a well-rounded mix'} throughout your ${s.destination} trip.`,
    mapImg: curated ? curated.mapImg : null
  };
}
function pickImageForActivity(curated, title){
  const found = curated.activities.find(a=>a.title.toLowerCase()===String(title).toLowerCase());
  return found && found.img ? found.img : null;
}
function buildFallbackDays(days, s, curated){
  const pool = curated ? curated.activities : GENERIC_POOL;
  const out = []; let poolIdx = 0;
  for(let d=1; d<=days; d++){
    const acts = []; const perDay = 2 + (d % 2);
    for(let k=0; k<perDay; k++){
      const src = pool[poolIdx % pool.length]; poolIdx++;
      const hour = 9 + k*4;
      acts.push({ title: src.title, desc: src.desc, category: src.category,
        time: src.time || (String(hour).padStart(2,'0')+':00'), duration: src.duration || (2+ (k%2)) + 'h',
        ai: !!src.ai, img: src.img || null });
    }
    out.push({ label: `Day ${d}: Exploring ${s.destination.split(',')[0]}`, activities: acts });
  }
  return out;
}
function buildFallbackPacking(s){
  const base = ["Passport & travel documents","Phone charger & adapter","Comfortable walking shoes","Reusable water bottle"];
  if(s.interests.includes("Adventure")) base.push("Lightweight daypack","Moisture-wicking layers");
  if(s.interests.includes("Nature")) base.push("Sunscreen & insect repellent");
  if(s.interests.includes("Nightlife")) base.push("Evening outfit");
  if(s.interests.includes("Relaxation")) base.push("Swimwear");
  return base;
}

/* ---------------- DASHBOARD ---------------- */
function renderDashboard(){
  document.querySelectorAll('.side-nav a').forEach(n=>{
    n.onclick = ()=>{ setActiveNav(n); renderPanel(n.dataset.nav); };
  });
  const map = document.getElementById('dash-map-img');
  map.style.backgroundImage = trip.mapImg ? `url('${trip.mapImg}')` : '';
}
function setActiveNav(el){
  document.querySelectorAll('.side-nav a').forEach(n=>n.classList.remove('active'));
  el.classList.add('active');
}
function renderPanel(which){
  const panel = document.getElementById('dash-main-panel');
  const mapSection = document.getElementById('dash-map-panel');
  mapSection.style.display = (which==='timeline' || which==='map') ? '' : 'none';

  if(which === 'assistant'){ panel.innerHTML = assistantPanelHTML(); return; }
  if(which === 'packing'){ panel.innerHTML = packingPanelHTML(); return; }
  if(which === 'budget'){ panel.innerHTML = budgetPanelHTML(); requestAnimationFrame(animateBudgetBars); return; }
  panel.innerHTML = timelinePanelHTML();
  requestAnimationFrame(()=>{
    const bar = document.querySelector('.budget-bar');
    if(bar){ const pct = Math.min(100, Math.round((trip.spent/trip.budget)*100)); setTimeout(()=>{ bar.style.width = pct+'%'; },150); }
  });
}

function timelinePanelHTML(){
  const dateRange = (trip.dateStart && trip.dateEnd) ? `${fmtDate(trip.dateStart)} - ${fmtDate(trip.dateEnd)}` : `${trip.days} Days`;
  return `
  <p class="eyebrow">Boarding Pass</p>
  <h1 class="trip-title">${trip.destination.split(',')[0]} Adventure</h1>
  <p class="trip-sub">${dateRange} · ${trip.travelers} Traveler${trip.travelers===1?'':'s'} · ${trip.interests.join(', ')||'General'}</p>
  <div class="card budget-strip">
    <div class="budget-item"><p class="lbl">Total Budget</p><p class="val">$${trip.budget.toLocaleString()}</p></div>
    <div class="budget-track"><div class="budget-bar" style="width:0%"></div></div>
    <div class="budget-item"><p class="lbl">Spent</p><p class="val spent">$${trip.spent.toLocaleString()}</p></div>
    <div class="budget-item"><p class="lbl">Remaining</p><p class="val remain">$${trip.remaining.toLocaleString()}</p></div>
  </div>
  <div class="filter-row">
    ${["All",...Object.keys(CATEGORY_ICONS)].map(cat=>`
      <button class="filter-btn ${cat===activeFilter?'active':''}" data-filter="${cat}" onclick="setFilter('${cat}')">${cat}</button>`).join('')}
  </div>
  ${trip.dayPlans.map((d,i)=>dayBlockHTML(d,i+1)).join('')}
  `;
}
function dayBlockHTML(d, num){
  return `
  <div class="day-block">
    <h3 class="day-heading"><span class="day-num">${num}</span> ${d.label}</h3>
    <div class="day-activities">
      ${d.activities.map(a=>activityCardHTML(a)).join('')}
    </div>
  </div>`;
}
function activityCardHTML(a){
  const icon = CATEGORY_ICONS[a.category] || "explore";
  const thumb = a.img ? `<img src="${a.img}"/>` : `<span class="material-symbols-outlined">${icon}</span>`;
  return `
  <div class="activity-card ${a.ai?'ai':''}" data-category="${a.category}">
    <span class="activity-node"></span>
    <div class="activity-time"><div class="t">${a.time}</div><div class="d">${a.duration}</div></div>
    <div class="activity-thumb">${thumb}</div>
    <div class="activity-body">
      <div class="activity-title-row">
        <h4>${a.title}</h4>
        ${a.ai ? `<span class="ai-badge"><span class="material-symbols-outlined" style="font-size:12px">auto_awesome</span> AI Suggested</span>` : ''}
      </div>
      <p class="desc">${a.desc}</p>
      <span class="cat-tag"><span class="material-symbols-outlined">${icon}</span> ${a.category}</span>
    </div>
  </div>`;
}
function setFilter(cat){
  activeFilter = cat;
  document.querySelectorAll('.filter-btn').forEach(b=> b.classList.toggle('active', b.dataset.filter===cat));
  document.querySelectorAll('.activity-card').forEach(c=>{
    c.style.display = (cat==='All' || c.dataset.category===cat) ? 'flex' : 'none';
  });
}

function packingPanelHTML(){
  return `
  <p class="eyebrow">Packing List</p>
  <h1 class="trip-title" style="font-size:1.9rem;">Ready to go</h1>
  <p class="trip-sub">Generated for your ${trip.destination.split(',')[0]} trip based on your interests.</p>
  <div class="card panel-narrow checklist">
    ${trip.packingList.map(item=>`
      <label><input type="checkbox"/><span>${item}</span></label>`).join('')}
  </div>`;
}
function budgetPanelHTML(){
  const cats = ["Food","Attraction","Adventure","Landmark","Culture","Nightlife","Nature"];
  const allActs = trip.dayPlans.flatMap(d=>d.activities);
  const counts = {}; allActs.forEach(a=>{ counts[a.category] = (counts[a.category]||0)+1; });
  const totalActs = allActs.length || 1;
  return `
  <p class="eyebrow">Cost Breakdown</p>
  <h1 class="trip-title" style="font-size:1.9rem;">Budget</h1>
  <p class="trip-sub">${trip.budgetTip}</p>
  <div class="card panel-narrow stat-row">
    <div><p>Total Budget</p><p>$${trip.budget.toLocaleString()}</p></div>
    <div><p>Spent</p><p style="color:var(--accent-2)">$${trip.spent.toLocaleString()}</p></div>
    <div><p>Remaining</p><p style="color:var(--accent-3)">$${trip.remaining.toLocaleString()}</p></div>
  </div>
  <div class="card panel-narrow" style="margin-top:16px;">
    ${cats.filter(c=>counts[c]).map(c=>`
      <div class="cat-bar-row">
        <div class="top"><span>${c}</span><span>${counts[c]} activities</span></div>
        <div class="cat-bar-track"><div class="cat-bar-fill" data-target="${Math.round((counts[c]/totalActs)*100)}" style="width:0%"></div></div>
      </div>`).join('')}
  </div>`;
}
function animateBudgetBars(){
  document.querySelectorAll('.cat-bar-fill').forEach(b=>{ setTimeout(()=>{ b.style.width = b.dataset.target+'%'; },150); });
}
function assistantPanelHTML(){
  return `
  <p class="eyebrow">Co-Pilot</p>
  <h1 class="trip-title" style="font-size:1.9rem;">Trip Assistant</h1>
  <div class="card panel-narrow assistant-intro">
    <span class="material-symbols-outlined">smart_toy</span>
    <p>${trip.assistantIntro}</p>
  </div>
  <p class="trip-sub">Ask questions about your itinerary, swap an activity, or get local tips.</p>
  <button class="btn-accent" onclick="openAssistant()" style="width:fit-content;">
    <span class="material-symbols-outlined">chat</span> Open Chat
  </button>`;
}

/* ---------------- ASSISTANT CHAT ---------------- */
function openAssistant(){
  const modal = document.getElementById('assistant-modal');
  modal.classList.add('flex');
  if(chatHistory.length===0 && trip){ pushChatMessage('assistant', trip.assistantIntro); }
  renderChat();
}
function closeAssistant(){ document.getElementById('assistant-modal').classList.remove('flex'); }
function pushChatMessage(role, text){ chatHistory.push({role, text}); }
function renderChat(){
  const box = document.getElementById('chat-messages');
  box.innerHTML = chatHistory.map(m => `<div class="msg ${m.role}">${m.text}</div>`).join('');
  box.scrollTop = box.scrollHeight;
}
async function sendChat(){
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if(!text) return;
  input.value = '';
  pushChatMessage('user', text); renderChat();
  pushChatMessage('assistant', '…'); renderChat();

  try{
    const context = trip ? `Trip context: destination ${trip.destination}, ${trip.days} days, travelers ${trip.travelers}, interests ${trip.interests.join(', ')||'general'}, budget $${trip.budget}.` : "No trip generated yet.";
    const history = chatHistory.slice(0,-1).map(m=>`${m.role}: ${m.text}`).join('\n');
    const controller = new AbortController();
    const timeout = setTimeout(()=>controller.abort(), 6000);
    const resp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-6", max_tokens: 1000,
        messages: [{ role: "user", content: `You are Route Rover's friendly in-app trip assistant. ${context}\nConversation so far:\n${history}\nReply to the user's latest message in 2-4 short sentences, concrete and helpful.` }]
      }),
      signal: controller.signal
    });
    clearTimeout(timeout);
    if(!resp.ok) throw new Error("bad response");
    const data = await resp.json();
    const block = (data.content||[]).find(b=>b.type==='text');
    chatHistory[chatHistory.length-1] = { role:'assistant', text: block ? block.text.trim() : fallbackChatReply(text) };
  } catch(e){
    chatHistory[chatHistory.length-1] = { role:'assistant', text: fallbackChatReply(text) };
  }
  renderChat();
}
function fallbackChatReply(userText){
  if(!trip) return "Generate an itinerary first and I'll be able to help with the details!";
  return `Good question about "${userText}". Based on your ${trip.destination.split(',')[0]} trip and interest in ${trip.interests.join(', ')||'exploring the destination'}, I'd suggest keeping mornings for the must-see spots and evenings flexible for local recommendations.`;
}

/* ---------------- INIT ---------------- */
function init(){
  document.getElementById('hero-bg-img').style.backgroundImage = `url('${IMAGES.heroBg}')`;
  renderDestinationCards();
  renderInterestChips();
  renderStyleButtons();
  ['f-destination','f-date-start','f-date-end'].forEach(id=>{
    document.getElementById(id).addEventListener('input', syncPreview);
  });
  const today = new Date();
  const start = new Date(today.getTime() + 30*86400000);
  const end = new Date(today.getTime() + 37*86400000);
  document.getElementById('f-date-start').value = start.toISOString().slice(0,10);
  document.getElementById('f-date-end').value = end.toISOString().slice(0,10);
  toggleInterest('Adventure'); toggleInterest('Food');
  syncPreview();
  goTo('landing');
}
init();
