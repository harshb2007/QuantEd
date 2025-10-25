async function loadProjects(){
  const res = await fetch('/data/projects.json', {cache:'no-store'});
  return await res.json();
}
function card(p){
  return `<div class="card">
    <div class="muted">#${p.id.toString().padStart(2,'0')}</div>
    <h3>${p.title}</h3>
    <p class="muted">${p.summary||''}</p>
    <div class="tags">${(p.skills||[]).map(s=>`<span class="tag">${s}</span>`).join('')}</div>
    <div class="actions">
      <a class="btn primary" href="/projects/project.html?id=${p.id}">Open Project</a>
      <a class="btn" target="_blank" href="${p.repo}">GitHub</a>
    </div>
  </div>`;
}
(async function(){
  const data = await loadProjects();
  const cards = document.getElementById('cards');
  const q = document.getElementById('q');
  const sort = document.getElementById('sort');
  function render(){
    let rows = data.slice();
    const term = (q.value||'').toLowerCase();
    if(term){
      rows = rows.filter(p =>
        (p.title||'').toLowerCase().includes(term) ||
        (p.summary||'').toLowerCase().includes(term) ||
        (p.skills||[]).join(' ').toLowerCase().includes(term)
      );
    }
    if(sort.value==='title'){ rows.sort((a,b)=>a.title.localeCompare(b.title)); }
    else { rows.sort((a,b)=>a.id-b.id); }
    cards.innerHTML = rows.map(card).join('');
  }
  q.addEventListener('input', render);
  sort.addEventListener('change', render);
  render();
})();