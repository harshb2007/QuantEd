
// === QuantyZen tweak pack helper ===
(function(){
  // Force GitHub code links to open in a new tab
  document.querySelectorAll('a[href*="github.com"]').forEach(a => {
    if (/view on github/i.test(a.textContent) || /code/i.test(a.textContent)) {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener');
      a.classList.add('github-code', 'btn-github');
    }
  });

  // Make any element with id="backTop" sticky (or auto-create if none)
  function ensureStickyBack(){
    let back = document.getElementById('backTop');
    if(!back){
      back = document.createElement('a');
      back.id = 'backTop';
      back.href = 'index.html';
      back.innerHTML = '← Back';
      document.body.appendChild(back);
    }
    back.classList.add('sticky-back');
  }
  ensureStickyBack();
})();
