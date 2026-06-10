// Typing Effect

const texts = [
"Beginner Web Developer",
"Frontend Developer",
"HTML CSS JavaScript Learner",
"Future Full Stack Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === texts.length){
count = 0;
}

currentText = texts[count];
letter = currentText.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){

setTimeout(()=>{
index = 0;
count++;
type();
},1500);

}
else{
setTimeout(type,100);
}

})();


// Scroll Reveal

const sections =
document.querySelectorAll(".section");

window.addEventListener("scroll",()=>{

sections.forEach(section=>{

const sectionTop =
section.getBoundingClientRect().top;

if(sectionTop <
window.innerHeight - 100){

section.classList.add("show");

}

});

});


// Skill Animation

const skillSection =
document.querySelector("#skills");

const progressBars =
document.querySelectorAll(".progress");

const counters =
document.querySelectorAll(".counter");

let started = false;

window.addEventListener("scroll",()=>{

if(
skillSection.getBoundingClientRect().top <
window.innerHeight - 100
&& !started
){

progressBars.forEach(bar=>{

bar.style.width =
bar.dataset.width + "%";

});

counters.forEach(counter=>{

let start = 0;

const end =
+counter.dataset.target;

const update = ()=>{

if(start < end){

start++;

counter.innerText =
start + "%";

requestAnimationFrame(update);

}

};

update();

});

started = true;

}

});


// Contact Form

document
.getElementById("contactForm")
.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Thank you! Your message has been sent successfully."
);

});