// cargar las vistas previas (iframes) solo cuando son visibles
  const frames = document.querySelectorAll('.preview-frame');
  const frameObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const frame = entry.target;
        if (!frame.src) frame.src = frame.dataset.src;
        frameObs.unobserve(frame);
      }
    });
  }, { threshold: .1, rootMargin: '200px' });
  frames.forEach(f => frameObs.observe(f));

  // scroll reveal
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); } });
  },{threshold:.15});
  els.forEach(el=>obs.observe(el));

  // hero terminal reveal immediately
  document.getElementById('term').classList.add('in');

  // copy email
  const copyBtn = document.getElementById('copy-email');
  copyBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText('rafaelrh.dev@gmail.com').then(()=>{
      const original = copyBtn.textContent;
      copyBtn.textContent = '¡Copiado!';
      setTimeout(()=>{ copyBtn.textContent = original; }, 1800);
    });
  });