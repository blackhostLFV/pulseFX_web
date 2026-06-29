const pairs=[['XAU/USD','2,418.60','+0.84%','up'],['BTC/USD','68,240.10','+1.92%','up'],['ETH/USD','3,512.40','-0.41%','down'],['EUR/USD','1.0842','+0.12%','up'],['GBP/USD','1.2718','-0.08%','down'],['US100','19,840.5','+0.66%','up'],['XAG/USD','31.18','-0.52%','down']];
let th='';for(let k=0;k<2;k++)pairs.forEach(p=>th+='<div class="tick-item"><span class="s">'+p[0]+'</span><b>'+p[1]+'</b><span class="'+p[3]+'">'+p[2]+'</span></div>');
document.getElementById('tick').innerHTML=th;
const coinsA=[['\u20BF','#F7931A'],['\u039E','#627EEA'],['\u25CE','#14F195'],['BNB','#F0B90B']];
const coinsB=[['Au','#E8B83B'],['\u20AE','#0098EA'],['\u20AE','#26A17B'],['ADA','#3468D1']];
function fillOrbit(id,arr,R){const el=document.getElementById(id);if(!el)return;let s='<div class="ring-line"></div>';arr.forEach((c,i)=>{const a=(360/arr.length)*i;s+='<div class="ocoin" style="--t:'+c[1]+';transform:rotateY('+a+'deg) translateZ('+R+'px)">'+c[0]+'</div>';});el.innerHTML=s;}
fillOrbit('orbitA',coinsA,158);fillOrbit('orbitB',coinsB,158);
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.sr').forEach(el=>io.observe(el));
function animate(el){const t=+el.dataset.count,sfx=el.dataset.suffix||'',dur=1400,st=performance.now();function s(n){const p=Math.min((n-st)/dur,1),e=1-Math.pow(1-p,3),v=Math.floor(t*e);el.textContent=(t>=1000?v.toLocaleString('es-CO'):v)+sfx;if(p<1)requestAnimationFrame(s)}requestAnimationFrame(s)}
const co=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){animate(e.target);co.unobserve(e.target)}}),{threshold:.5});
document.querySelectorAll('[data-count]').forEach(el=>co.observe(el));
document.querySelectorAll('.toggle button').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.toggle button').forEach(x=>x.classList.remove('on'));b.classList.add('on');const a=b.dataset.bill==='a';document.querySelectorAll('#membresias [data-m]').forEach(el=>{el.textContent=a?el.dataset.a:el.dataset.m;});}));
const _st=document.querySelector('.slider-track');if(_st){_st.innerHTML+=_st.innerHTML;}
const tabs=document.querySelectorAll('.tabitem');tabs.forEach(t=>t.addEventListener('click',()=>{tabs.forEach(x=>x.classList.remove('on'));t.classList.add('on');}));
const fan=document.getElementById('fan');
const scrolly=document.querySelector('.scrolly');
const sc=document.getElementById('sc'),sh=document.getElementById('sh'),sp=document.getElementById('sp'),dots=document.querySelectorAll('.dots i');
const copy=[['PASO 01 / 04','Conecta tu cuenta de broker aliado','Abres o mantienes tu cuenta en uno de los brokers aliados. Nada sale de tu control.'],['PASO 02 / 04','Copia la estrategia','Eliges la estrategia y se vincula a tu cuenta v\u00eda copy, seg\u00fan tu membres\u00eda.'],['PASO 03 / 04','Confirmado y conectado','La estrategia queda activa y operando sobre tu propia cuenta, con visibilidad total.'],['PASO 04 / 04','Tu posici\u00f3n est\u00e1 abierta','Sigues cada movimiento en tiempo real. El fee solo se cobra sobre beneficio neto nuevo.']];
let cur=-1;function setState(n){if(!Number.isInteger(n)||n<0||n>3)return;if(n===cur)return;cur=n;scrolly.dataset.state=n;sc.textContent=copy[n][0];sh.textContent=copy[n][1];sp.textContent=copy[n][2];dots.forEach((d,i)=>d.classList.toggle('on',i===n));}
setState(0);
const hpins=[...document.querySelectorAll('.hpin')].map(s=>({s,track:s.querySelector('.htrack'),bar:s.querySelector('.hbarfill')}));
function onScroll(){
  const y=window.scrollY;
  if(fan){const hp=Math.min(Math.max(y/520,0),1);fan.style.setProperty('--p',(0.25+0.75*hp).toFixed(3));}
  {const r=scrolly.getBoundingClientRect();const total=scrolly.offsetHeight-window.innerHeight;const p=Math.min(Math.max(-r.top,0),total)/total;setState(Math.min(3,Math.floor(p*3.999)));}
  hpins.forEach(h=>{const r=h.s.getBoundingClientRect();const total=h.s.offsetHeight-window.innerHeight;const p=Math.min(Math.max(-r.top,0),total)/total;const max=h.track.scrollWidth-h.track.parentElement.clientWidth;h.track.style.transform='translateX('+(-Math.max(0,max)*p)+'px)';if(h.bar)h.bar.style.width=(p*100)+'%';});
}
window.addEventListener('scroll',onScroll,{passive:true});window.addEventListener('resize',onScroll);onScroll();
