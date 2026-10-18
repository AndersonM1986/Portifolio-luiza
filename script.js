(()=>{
  'use strict';
  const menuButton=document.querySelector('#menuToggle');
  const menu=document.querySelector('#mobileNav');
  const closeMenu=()=>{if(!menu||!menuButton)return;menu.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menu')};
  if(menuButton&&menu){menuButton.addEventListener('click',()=>{const expanded=menuButton.getAttribute('aria-expanded')==='true';menu.hidden=expanded;menuButton.setAttribute('aria-expanded',String(!expanded));menuButton.setAttribute('aria-label',expanded?'Abrir menu':'Fechar menu')});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});document.addEventListener('click',e=>{if(!menu.hidden&&!menu.contains(e.target)&&!menuButton.contains(e.target))closeMenu()})}
  const year=document.querySelector('#year');if(year)year.textContent=String(new Date().getFullYear());
  const bar=document.querySelector('#readingProgress');
  if(bar){let ticking=false;const update=()=>{const range=document.documentElement.scrollHeight-innerHeight;bar.style.width=(range>0?Math.max(0,Math.min(100,scrollY/range*100)):0)+'%';ticking=false};addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(update);ticking=true}},{passive:true});addEventListener('resize',update);update()}
  if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('js-motion');const blocks=document.querySelectorAll('[data-reveal]');const observer=new IntersectionObserver((entries,ob)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');ob.unobserve(e.target)}})},{threshold:0.08,rootMargin:'0px 0px 40px 0px'});blocks.forEach(el=>observer.observe(el))}
})();
