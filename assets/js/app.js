// assets/js/app.js  (FULL FILE)

const grid = document.getElementById('grid');
const searchInput = document.getElementById('search');
const sortSelect = document.getElementById('sort');
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

let DATA = [];

function render(list){
  if (!grid) return;
  grid.innerHTML = '';
  list.forEach(p => {
    const pid = String(p.id).padStart(2,'0');

    // 🔒 make the GitHub URL safe (fix spaces & ampersands)
    const safeRepo = String(p.repo || "")
      .replace(/ /g, "%20")
      .replace(/&/g, "%26");

    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <span class="badge">#${pid}</span>
      <h3><a href="projects/${pid}/index.html">${p.title}</a></h3>
      <p>${p.summary}</p>
      <div class="badges">${(p.skills||[]).map(s => `<span class="badge">${s}</span>`).join('')}</div>
      <p style="color:#9aa4b2">${p.impact||''}</p>
      <div class="actions">
        <a class="primary" href="${safeRepo}" target="_blank" rel="noopener">View on GitHub</a>
        <a href="projects/${pid}/index.html">Open Project</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

function searchAndSort(){
  const q = (searchInput?.value || '').toLowerCase();
  let list = DATA.filter(p => (p.title + ' ' + p.summary + ' ' + (p.skills||[]).join(' ')).toLowerCase().includes(q));
  if (sortSelect?.value === 'title'){
    list.sort((a,b)=> a.title.localeCompare(b.title));
  } else {
    list.sort((a,b)=> a.id - b.id);
  }
  render(list);
}

// 🔁 cache-bust the JSON so updates take effect immediately
fetch('/QuantEd/data/projects.json?v=2')
  .then(r=>r.json())
  .then(d=>{ DATA = d; searchAndSort(); })
  .catch(err => {
    console.error('Failed to load projects.json', err);
  });

searchInput?.addEventListener('input', searchAndSort);
sortSelect?.addEventListener('change', searchAndSort);
