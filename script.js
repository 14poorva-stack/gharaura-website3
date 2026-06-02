 tailwind.config = { darkMode: "class", theme: { extend: { "colors": { "surface-tint": "#665d52", "sand-surface": "#E5DED1", "on-tertiary-fixed-variant": "#4a463d", "on-surface": "#1a1c1a", "tertiary-fixed-dim": "#ccc6ba", "surface-bright": "#faf9f6", "secondary-container": "#efe0d2", "primary-fixed-dim": "#d1c5b7", "outline-variant": "#cfc5bb", "on-error-container": "#93000a", "on-error": "#ffffff", "surface-variant": "#e3e2e0", "surface-dim": "#dbdad7", "on-secondary": "#ffffff", "secondary-fixed-dim": "#d2c4b7", "on-secondary-fixed": "#211a12", "background": "#faf9f6", "taupe-detail": "#A69B8F", "ivory-base": "#FAF9F6", "on-surface-variant": "#4c463f", "tertiary-fixed": "#e8e2d5", "surface-container-lowest": "#ffffff", "secondary": "#675d52", "error": "#ba1a1a", "earth-ink": "#322C28", "on-primary-fixed-variant": "#4e453b", "secondary-fixed": "#efe0d2", "surface": "#faf9f6", "primary": "#4e463b", "outline": "#7d766e", "on-tertiary-fixed": "#1e1b14", "error-container": "#ffdad6", "tertiary": "#4a463d", "primary-container": "#665d52", "tertiary-container": "#625e54", "surface-container-low": "#f4f3f1", "surface-container-high": "#e9e8e5", "on-primary-fixed": "#211b12", "on-secondary-container": "#6d6358", "on-background": "#1a1c1a", "on-primary-container": "#e3d7c9", "inverse-surface": "#2f312f", "on-tertiary-container": "#ded8cb", "inverse-primary": "#d1c5b7", "on-primary": "#ffffff", "inverse-on-surface": "#f2f1ee", "on-secondary-fixed-variant": "#4e453b", "surface-container": "#efeeeb", "primary-fixed": "#eee0d2", "surface-container-highest": "#e3e2e0", "on-tertiary": "#ffffff" }, "borderRadius": { "DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem" }, "spacing": { "section-gap-md": "64px", "margin-mobile": "24px", "unit": "8px", "gutter": "32px", "section-gap-lg": "128px", "base-unit": "8px", "container-max": "1440px", "margin-desktop": "80px" }, "fontFamily": { "headline-sm": ["EB Garamond"], "body-md": ["Inter"], "body-lg": ["Inter"], "headline-md": ["EB Garamond"], "display-lg-mobile": ["EB Garamond"], "label-caps": ["Inter"], "display-lg": ["EB Garamond"] }, "fontSize": { "headline-sm": ["28px", {"lineHeight": "36px", "fontWeight": "400"}], "body-md": ["16px", {"lineHeight": "28px", "fontWeight": "400"}], "body-lg": ["18px", {"lineHeight": "32px", "letterSpacing": "0.01em", "fontWeight": "400"}], "headline-md": ["40px", {"lineHeight": "48px", "fontWeight": "400"}], "display-lg-mobile": ["48px", {"lineHeight": "52px", "letterSpacing": "-0.01em", "fontWeight": "400"}], "label-caps": ["12px", {"lineHeight": "16px", "letterSpacing": "0.1em", "fontWeight": "500"}], "display-lg": ["84px", {"lineHeight": "92px", "letterSpacing": "-0.02em", "fontWeight": "400"}] } }, }, } 
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add('show');
}
});
});
document.querySelectorAll('.fade-up').forEach(el=>{
observer.observe(el);
});
window.addEventListener("load", ()=>{
setTimeout(()=>{
document.getElementById("loader").style.opacity="0";
setTimeout(()=>{
document.getElementById("loader").style.display="none";
},1000);
},1800);
});
function toggleMenu(){
const menu=document.getElementById("mobileMenu");
if(menu.style.display==="flex"){
menu.style.display="none";
}else{
menu.style.display="flex";
}
}
const cursor=document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);
document.addEventListener("mousemove",e=>{
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
});
const form=document.getElementById("inquiryForm");
if(form){
form.addEventListener("submit",()=>{
setTimeout(()=>{
const popup=document.getElementById("successPopup");
popup.style.display="block";
setTimeout(()=>{
popup.style.display="none";
},3000);
},500);
});
}
function openKitchenPopup(){
document.getElementById('kitchenPopup').style.display='flex';
}
function closeKitchenPopup(){
document.getElementById('kitchenPopup').style.display='none';
}
function openWardrobePopup(){
document.getElementById('wardrobePopup').style.display='flex';
}
function closeWardrobePopup(){
document.getElementById('wardrobePopup').style.display='none';
}
function calculateKitchen(){
const size = parseInt(document.getElementById('kitchenSize').value);
const finish = parseFloat(document.getElementById('kitchenFinish').value);
const total = Math.round(size * finish);
document.getElementById('kitchenResult').innerHTML =
'Estimated Cost: ₹' + total.toLocaleString('en-IN');
}
function calculateWardrobe(){
const size = parseInt(document.getElementById('wardrobeSize').value);
const finish = parseFloat(document.getElementById('wardrobeFinish').value);
const total = Math.round(size * finish);
document.getElementById('wardrobeResult').innerHTML =
'Estimated Cost: ₹' + total.toLocaleString('en-IN');
}
window.addEventListener('load', function(){
const title = document.querySelector('.hero-animated-title');
if(title){
const words = title.querySelectorAll('.word');
words.forEach((word,index)=>{
word.style.opacity='0';
word.style.animation='none';
setTimeout(()=>{
word.style.animation = `wordReveal 0.9s forwards`;
word.style.animationDelay = `${index * 0.45}s`;
},100);
});
}
});
window.addEventListener('load', ()=>{
const stats=document.querySelectorAll('.stats-card');
const observer=new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
stats.forEach((card,index)=>{
setTimeout(()=>{
card.classList.add('animate');
}, index * 450);
});
}
});
},{threshold:0.3});
const section=document.querySelector('.stats-card');
if(section){
observer.observe(section);
}
});
const counters=document.querySelectorAll('.stats-number');
const counterObserver=new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
const counter=entry.target;
const target=+counter.getAttribute('data-target');
let current=0;
const increment=target/60;
const updateCounter=()=>{
current+=increment;
if(current<target){
counter.innerText=target===45
? Math.ceil(current)
: Math.ceil(current)+'+';
requestAnimationFrame(updateCounter);
}else{
counter.innerText=target===45
? target
: target + '+';
}
};
updateCounter();
counterObserver.unobserve(counter);
}
});
},{threshold:0.5});
counters.forEach(counter=>{
counterObserver.observe(counter);
});
document.addEventListener("DOMContentLoaded", function(){
const projectBtns = document.querySelectorAll(
'.floating-project-btn, .projects-float-btn, .mobile-project-btn, a[href="#projects-section"]'
);
projectBtns.forEach(btn=>{
btn.addEventListener("click", function(e){
e.preventDefault();
const section = document.getElementById("projects-section");
if(section){
section.scrollIntoView({
behavior:"smooth",
block:"start"
});
}
});
});
});
document.addEventListener("DOMContentLoaded", function(){
const projectsSection = document.getElementById("projects-section");
const navButtons = Array.from(document.querySelectorAll("a, button, div"));
navButtons.forEach((btn)=>{
const txt = (btn.innerText || "").trim().toLowerCase();
if(txt === "projects"){
btn.style.cursor = "pointer";
btn.addEventListener("click", function(e){
e.preventDefault();
if(projectsSection){
projectsSection.scrollIntoView({
behavior:"smooth",
block:"start"
});
}
});
}
});
});
document.addEventListener("DOMContentLoaded", function(){
const serviceCards = document.querySelectorAll('.gh-service-card');
const observer = new IntersectionObserver((entries)=>{ entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add('animate-service'); } });
},{ threshold:0.15
});
serviceCards.forEach(card=>{ observer.observe(card);
});
});
function closeGhPopup(){ document.getElementById('gh-popup-overlay').style.display='none';
}
window.addEventListener('load', function(){ setTimeout(function(){ var popup = document.getElementById('gh-popup-overlay'); if(popup){ popup.style.display='flex'; } }, 3500);
});
(function(){
function cleanDuplicateNav(){ const targets = Array.from(document.querySelectorAll('div,span,p,a,nav')); targets.forEach(el => { const txt = (el.innerText || '') .replace(/\s+/g,'') .trim() .toUpperCase(); if( txt === 'HOMEPROJECTSSERVICESMORE' || txt.includes('HOMEPROJECTSSERVICESMORE') ){ el.style.display = 'none'; el.remove(); } });
}
document.addEventListener('DOMContentLoaded', cleanDuplicateNav);
setTimeout(cleanDuplicateNav, 500);
setTimeout(cleanDuplicateNav, 1500);
setTimeout(cleanDuplicateNav, 3000);
const observer = new MutationObserver(cleanDuplicateNav);
observer.observe(document.body,{ childList:true, subtree:true
});
})();
document.addEventListener('DOMContentLoaded', function(){ document.querySelectorAll('a[href^="#"]').forEach(function(link){ link.addEventListener('click', function(e){ const href = this.getAttribute('href'); if(!href || href === '#') return; const target = document.querySelector(href); if(target){ e.preventDefault(); const y = target.getBoundingClientRect().top + window.pageYOffset - 70; window.scrollTo({ top: y, behavior: 'smooth' }); } }); });
});
document.addEventListener('DOMContentLoaded', function(){
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item=>{
const btn = item.querySelector('.faq-question');
btn.addEventListener('click', ()=>{
item.classList.toggle('active');
});
});
});
document.addEventListener("DOMContentLoaded", function(){ const consultationButtons = document.querySelectorAll('a[href="#consultation-form"]'); consultationButtons.forEach(function(btn){ btn.addEventListener("click", function(e){ const target = document.getElementById("consultation-form"); if(target){ e.preventDefault(); target.scrollIntoView({ behavior:"smooth", block:"start" }); } }); });
});
/* ======================================
   PREMIUM INTELLIGENT NAV
====================================== */
(function(){
let lastScrollTop = 0;
const bottomNav = document.querySelector('.bottom-nav-gh');
window.addEventListener('scroll', function(){
const st = window.pageYOffset || document.documentElement.scrollTop;
if(bottomNav){
if(st > lastScrollTop && st > 120){
bottomNav.classList.add('nav-hidden');
}else{
bottomNav.classList.remove('nav-hidden');
}
}
lastScrollTop = st <= 0 ? 0 : st;
}, { passive:true });
})();
/* intelligent dock */
(function(){
let lastScrollTop = 0;
const bottomNav = document.querySelector('.bottom-nav-gh');
window.addEventListener('scroll', function(){
const st = window.pageYOffset || document.documentElement.scrollTop;
if(bottomNav){
if(st > lastScrollTop && st > 120){
bottomNav.classList.add('nav-hidden');
}else{
bottomNav.classList.remove('nav-hidden');
}
}
lastScrollTop = st <= 0 ? 0 : st;
}, { passive:true });
})();
