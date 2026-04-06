// Cursor
const cur = document.getElementById('cur');
const ring = document.getElementById('curRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{ mx=e.clientX; my=e.clientY; cur.style.left=mx+'px'; cur.style.top=my+'px'; });
(function tick(){ rx+=(mx-rx)*0.1; ry+=(my-ry)*0.1; ring.style.left=rx+'px'; ring.style.top=ry+'px'; requestAnimationFrame(tick); })();
document.querySelectorAll('a,button,.lightbox-img').forEach(el=>{
  el.addEventListener('mouseenter',()=>{ cur.style.width='14px'; cur.style.height='14px'; ring.style.width='44px'; ring.style.height='44px'; ring.style.borderColor='var(--dark)'; });
  el.addEventListener('mouseleave',()=>{ cur.style.width='6px'; cur.style.height='6px'; ring.style.width='30px'; ring.style.height='30px'; ring.style.borderColor='var(--mid)'; });
});

// Nav scroll
const nav = document.getElementById('nav');
if(nav) window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>40));

// Reveal
const obs = new IntersectionObserver(entries=>entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); } }),{threshold:0.08});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
