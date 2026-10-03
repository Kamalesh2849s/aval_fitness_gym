(()=>{
const L=[["index.html","Home"],["services.html","Services"],["about.html","About Us"],["gallery.html","Gallery"],["contact.html","Contact"]];
const cur=location.pathname.split("/").pop()||"index.html";
const links=L.map(([h,t])=>`<li><a href="${h}"${h===cur?' aria-current="page"':""}>${t}</a></li>`).join("");
document.getElementById("site-header").innerHTML=`<nav class="wrap nav" aria-label="Main"><a class="logo" href="index.html">AVAL FITNESS &amp; GYM</a><button id="menu" aria-expanded="false" aria-controls="nl" aria-label="Toggle menu"><i class="fa-solid fa-bars"></i></button><ul id="nl">${links}</ul></nav>`;
document.getElementById("site-footer").innerHTML=`<div class="wrap fg"><div><a class="logo" href="index.html">AVAL FITNESS &amp; GYM</a><p>Demo address (not a real location),<br>Komarapalayam, Tamil Nadu</p><p><i class="fa-solid fa-phone"></i> Demo mobile: +91 00000 00000</p></div><div><h3>Explore</h3><ul>${links}</ul></div><div><h3>Follow</h3><ul><li><!-- TODO: replace # with the verified official Instagram URL --><a href="#" aria-label="Instagram (link to be added)"><i class="fa-brands fa-instagram"></i> Instagram</a></li></ul></div></div><p class="copy">&copy; ${new Date().getFullYear()} Aval Fitness &amp; Gym</p>`;
const hd=document.getElementById("site-header"),m=document.getElementById("menu"),nl=document.getElementById("nl"),top=document.getElementById("top");
const close=()=>{nl.classList.remove("open");m.setAttribute("aria-expanded","false")};
m.onclick=()=>m.setAttribute("aria-expanded",nl.classList.toggle("open"));
nl.onclick=e=>{if(e.target.closest("a"))close()};
document.addEventListener("click",e=>{if(!hd.contains(e.target))close()});
addEventListener("scroll",()=>{hd.classList.toggle("s",scrollY>20);top.classList.toggle("on",scrollY>500)},{passive:true});
top.onclick=()=>scrollTo({top:0,behavior:"smooth"});
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
addEventListener("error",e=>{const i=e.target;if(i.tagName==="IMG"&&!i.dataset.f&&i.id!==""+"lbimg"){i.dataset.f=1;const d=document.createElement("div");d.className="fb";d.setAttribute("role","img");d.setAttribute("aria-label",i.alt||"Image unavailable");d.innerHTML='<i class="fa-solid fa-dumbbell"></i>';i.replaceWith(d)}},true);
const lb=document.getElementById("lb");
if(lb){const li=lb.querySelector("img");li.id="lbimg";let opener;
const shut=()=>{lb.hidden=true;opener&&opener.focus()};
document.querySelectorAll(".gi").forEach(b=>b.onclick=()=>{opener=b;li.src=b.dataset.full;li.alt=b.getAttribute("aria-label");lb.hidden=false;document.getElementById("lbx").focus()});
document.getElementById("lbx").onclick=shut;lb.onclick=e=>{if(e.target===lb)shut()};
addEventListener("keydown",e=>{if(e.key==="Escape"&&!lb.hidden)shut()})}
addEventListener("keydown",e=>{if(e.key==="Escape")close()});
const f=document.getElementById("cf");
if(f){const R={n:v=>v.trim().length<2&&"Enter your name.",p:v=>!/^(\+91[\s-]?)?[6-9]\d{9}$/.test(v.replace(/\s/g,""))&&"Enter a valid 10-digit Indian mobile number.",e:v=>!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)&&"Enter a valid email address.",m:v=>v.trim().length<10&&"Message must be at least 10 characters."};
f.onsubmit=e=>{e.preventDefault();let bad=0;
for(const k in R){const i=f.elements[k],er=R[k](i.value);f.querySelector(`[data-for=${k}]`).textContent=er||"";i.classList.toggle("bad",!!er);i.setAttribute("aria-invalid",!!er);if(er&&!bad){i.focus();bad=1}}
const ok=document.getElementById("ok");ok.hidden=!!bad;
if(!bad){ok.textContent="Demo only: this form is not delivered anywhere without a backend. Demo mobile number: +91 00000 00000.";f.reset()}}}
})();
