// /QuantEd/assets/js/project.js
const params = new URLSearchParams(location.search);
const id = Number(params.get('id') || 1);

async function getJSON(url){
  const r = await fetch(url, {cache:'no-store'});
  if(!r.ok) throw new Error('Failed to fetch '+url);
  return r.json();
}
const esc = s => (s||'').replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
const chip = t => `<span class="chip">${t}</span>`;

function wireTabs(){
  const tabs=[...document.querySelectorAll('.tabs button')];
  const panels=[...document.querySelectorAll('.panel')];
  tabs.forEach(b=>b.addEventListener('click',()=>{
    tabs.forEach(x=>x.classList.remove('active'));
    panels.forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    document.getElementById(b.dataset.tab).classList.add('active');
  }));
}

async function main(){
  const data = await getJSON('/QuantEd/data/projects.json');
  const p = data.find(d=>d.id===id);
  if(!p){ document.body.innerHTML = '<div class="container"><h1>Project not found</h1></div>'; return; }

  const header = document.getElementById('project');
  header.innerHTML = `
    <a class="btn" href="/QuantEd/">← Back</a>
    <h1 style="margin-top:10px">${esc(p.title)}</h1>
    <p class="muted">${esc(p.summary||'')}</p>
    <div class="meta">${(p.skills||[]).map(chip).join('')}</div>
    <div class="actions">
      ${p.report?`<a class="btn primary" href="${p.report}" target="_blank">Download Report (PDF)</a>`:''}
      ${p.repo?`<a class="btn" href="${p.repo}" target="_blank">View on GitHub</a>`:''}
    </div>
    ${p.impact?`<p style="margin-top:.6rem"><strong>Impact:</strong> ${esc(p.impact)}</p>`:''}
  `;

  document.getElementById('overview').innerHTML = `
    ${p.overview?`<p>${esc(p.overview)}</p>`:''}
    ${p.objective?`<p><strong>Objective:</strong> ${esc(p.objective)}</p>`:''}
    ${p.dataset?`<p><strong>Dataset:</strong> ${esc(p.dataset)}</p>`:''}
    ${p.metrics?`<p><strong>Key Metrics:</strong> ${esc(p.metrics)}</p>`:''}
  `;

  document.getElementById('methods').innerHTML =
    (p.methods && p.methods.length)
      ? `<ul>${p.methods.map(m=>`<li>${esc(m)}</li>`).join('')}</ul>`
      : '<p>No method notes yet.</p>';

  const results = document.getElementById('results');
  results.innerHTML = (p.images||[]).map(src=>`
    <figure class="figure"><img src="${src}" alt=""></figure>
  `).join('') || '<p>No result figures yet.</p>';

  const code = document.getElementById('code');
  async function raw(url){
    const txt = await fetch(url, {cache:'no-store'}).then(r=>r.text());
    return `<pre class="code">${esc(txt)}</pre>`;
  }
  try{
    if(p.readme_raw) code.innerHTML = await raw(p.readme_raw);
    else if(p.code_raw) code.innerHTML = await raw(p.code_raw);
    else code.innerHTML = '<p>Open the repository above to browse full code.</p>';
  }catch(e){
    code.innerHTML = '<p>Could not load embedded file (raw URL). Use GitHub link above.</p>';
  }

  wireTabs();
}
main().catch(e=>{
  document.body.innerHTML = `<div class="container"><h1>Error</h1><pre>${esc(String(e))}</pre></div>`;
});