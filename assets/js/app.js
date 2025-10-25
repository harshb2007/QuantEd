
const grid = document.getElementById('grid');
const searchInput = document.getElementById('search');
const sortSelect = document.getElementById('sort');
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

let DATA = [];

function render(list){
  grid.innerHTML = '';
  list.forEach(p => {
    const pid = String(p.id).padStart(2,'0');
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <span class="badge">#${pid}</span>
      <h3><a href="projects/${pid}/index.html">${p.title}</a></h3>
      <p>${p.summary}</p>
      <div class="badges">${(p.skills||[]).map(s => `<span class="badge">${s}</span>`).join('')}</div>
      <p style="color:#9aa4b2">${p.impact||''}</p>
      <div class="actions"><a class="primary" href="${p.repo}" target="_blank">View on GitHub</a><a href="projects/${pid}/index.html">Open Project</a></div>
    `;
    grid.appendChild(card);
  });
}

function searchAndSort(){
  const q = (searchInput.value || '').toLowerCase();
  let list = DATA.filter(p => (p.title + ' ' + p.summary + ' ' + (p.skills||[]).join(' ')).toLowerCase().includes(q));
  if(sortSelect.value === 'title'){
    list.sort((a,b)=> a.title.localeCompare(b.title));
  }else{
    list.sort((a,b)=> a.id - b.id);
  }
  render(list);
}

fetch('data/projects.json')
  .then(r=>r.json())
  .then(d=>{ DATA=d; searchAndSort(); });

searchInput.addEventListener('input', searchAndSort);
sortSelect.addEventListener('change', searchAndSort);
