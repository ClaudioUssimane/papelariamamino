// Troque pelo número da papelaria, com indicativo e sem espaços (ex.: 258841234567)
var WHATSAPP="258861411182";
function link(t){return "https://wa.me/"+WHATSAPP+"?text="+encodeURIComponent(t)}
var wa=document.getElementById("wa");
if(wa&&WHATSAPP)wa.href=link("Olá, Papelaria Mamino!");
var f=document.getElementById("pedido");
if(f)f.addEventListener("submit",function(e){
  e.preventDefault();
  if(!WHATSAPP){alert("O número de WhatsApp ainda não foi configurado no ficheiro script.js.");return}
  var d=new FormData(f);
  var t="Olá, Papelaria Mamino! Sou "+d.get("nome")+". Preciso de: "+d.get("servico")+"."+(d.get("msg")?" Detalhes: "+d.get("msg"):"");
  window.open(link(t),"_blank","noopener");
});

document.documentElement.classList.add("js");
var els=document.querySelectorAll(".head,.card,.steps li,details,.owner>*,.contact .wrap>*");
els.forEach(function(el,i){el.classList.add("rv");el.style.setProperty("--d",(i%4)*0.1+"s")});
if("IntersectionObserver" in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});
  els.forEach(function(el){io.observe(el)});
}else{els.forEach(function(el){el.classList.add("in")})}
var hd=document.querySelector("header");
addEventListener("scroll",function(){hd.classList.toggle("on",scrollY>10)},{passive:true});

var cn=document.querySelectorAll(".cnt");
function run(el){
  var to=+el.dataset.to,pre=el.dataset.pre||"";
  if(matchMedia("(prefers-reduced-motion:reduce)").matches){el.textContent=pre+to;return}
  var t0=null;
  function step(t){if(!t0)t0=t;var p=Math.min((t-t0)/1800,1),e=1-Math.pow(1-p,3);el.textContent=pre+Math.round(to*e);if(p<1)requestAnimationFrame(step)}
  requestAnimationFrame(step);
}
if("IntersectionObserver" in window){
  var co=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){run(e.target);co.unobserve(e.target)}})},{threshold:.5});
  cn.forEach(function(el){el.textContent=(el.dataset.pre||"")+"0";co.observe(el)});
}
