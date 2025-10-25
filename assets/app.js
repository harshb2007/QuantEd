
async function load() {
  const res = await fetch('data/projects.json'); 
  const items = await res.json();
  const grid = document.querySelector('#grid');
  const search = document.querySelector('#search');
  const sort = document.querySelector('#sort');
  function render(list){
    grid.innerHTML='';
    list.forEach(p=>{
      const el = document.createElement('a');
      el.className='card'; el.href = p.page;
      el.innerHTML = `<span class="small">#${p.id.toString().padStart(2,'0')}</span>
        <h3>${p.title}</h3>
        <p class="small">${p.summary}</p>`;
      grid.appendChild(el);
    });
  }
  function apply(){
    let q = search.value.toLowerCase();
    let list = items.filter(p=> (p.title + ' ' + p.skills.join(' ') + ' ' + p.summary).toLowerCase().includes(q));
    if(sort.value==='id') list.sort((a,b)=>a.id-b.id);
    if(sort.value==='title') list.sort((a,b)=>a.title.localeCompare(b.title));
    render(list);
  }
  search.addEventListener('input',apply); sort.addEventListener('change',apply);
  render(items);
}
load();
