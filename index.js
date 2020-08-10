var i = 0;
var tag = document.getElementById("text");
var html = document.getElementById("text").innerHTML;
var attr = tag.setAttribute("data", html);
var txt = tag.getAttribute("data");
var speed = 50;

function typeWriter() {
  if (i <= txt.length) {
    document.getElementById("text").innerHTML = txt.slice(0 , i + 1);
    i++;
    setTimeout(typeWriter, speed);
  }
    //console.log(document.getElementById("text").innerHTML);
}

typeWriter();
const header = document.querySelector(".header");
window.addEventListener("scroll",()=>{
header.classList.toggle("change", window.scrollY > 0)
})

const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
if (window.pageYOffset > 300) { // Show backToTopButton
if(!backToTopButton.classList.contains("btnEntrance")) {
  backToTopButton.classList.remove("btnExit");
  backToTopButton.classList.add("btnEntrance");
  backToTopButton.style.display = "block";
}
}
else { // Hide backToTopButton
if(backToTopButton.classList.contains("btnEntrance")) {
  backToTopButton.classList.remove("btnEntrance");
  backToTopButton.classList.add("btnExit");
  setTimeout(function() {
    backToTopButton.style.display = "none";
  }, 250);
}
}
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

// function backToTop() {
//   window.scrollTo(0, 0);
// }

function smoothScrollBackToTop() {
const targetPosition = 0;
const startPosition = window.pageYOffset;
const distance = targetPosition - startPosition;
const duration = 750;
let start = null;

window.requestAnimationFrame(step);

function step(timestamp) {
if (!start) start = timestamp;
const progress = timestamp - start;
window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
if (progress < duration) window.requestAnimationFrame(step);
}
}

function easeInOutCubic(t, b, c, d) {
t /= d/2;
if (t < 1) return c/2*t*t*t + b;
t -= 2;
return c/2*(t*t*t + 2) + b;
};