// LOADER


window.onload=function(){

gsap.to("#loader",{

opacity:0,

duration:1,

delay:1,

onComplete(){

document.querySelector("#loader").remove();

}

});


gsap.from(".hero-content>*",{

y:80,

opacity:0,

duration:1,

stagger:.2

});


};




// THREE SPACE


const canvas=document.querySelector("#space");


const scene=new THREE.Scene();


const camera=new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);


const renderer=new THREE.WebGLRenderer({
canvas,
alpha:true
});


renderer.setSize(
window.innerWidth,
window.innerHeight
);



camera.position.z=5;



const geometry=new THREE.BufferGeometry();


const count=3000;


const positions=[];


for(let i=0;i<count;i++){

positions.push(

(Math.random()-0.5)*20,

(Math.random()-0.5)*20,

(Math.random()-0.5)*20

);

}


geometry.setAttribute(
"position",
new THREE.Float32BufferAttribute(
positions,
3
)
);



const material=new THREE.PointsMaterial({

color:0xffffff,

size:0.02

});


const stars=new THREE.Points(
geometry,
material
);


scene.add(stars);



function animate(){

requestAnimationFrame(animate);


stars.rotation.y+=0.0008;

stars.rotation.x+=0.0003;


renderer.render(
scene,
camera
);

}


animate();





window.addEventListener(
"resize",
()=>{

camera.aspect=
window.innerWidth/window.innerHeight;


camera.updateProjectionMatrix();


renderer.setSize(
window.innerWidth,
window.innerHeight
);


});
/* =========================================================
   ESKENDEROV SPACE
   app.js
========================================================= */

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   PRELOADER
========================================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    gsap.to(loader, {

        opacity: 0,

        duration: 1,

        delay: 1,

        onComplete() {

            loader.style.display = "none";

        }

    });

});

/* =========================================================
   CURSOR
========================================================= */

const cursor = document.getElementById("cursor");

const cursorBlur = document.getElementById("cursorBlur");

document.addEventListener("mousemove", e => {

    gsap.to(cursor, {

        x: e.clientX,

        y: e.clientY,

        duration: .05

    });

    gsap.to(cursorBlur, {

        x: e.clientX,

        y: e.clientY,

        duration: .25

    });

});

/* =========================================================
   MAGNET BUTTONS
========================================================= */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mousemove", e => {

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;

        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(button, {

            x: x * .25,

            y: y * .25,

            duration: .3

        });

    });

    button.addEventListener("mouseleave", () => {

        gsap.to(button, {

            x: 0,

            y: 0,

            duration: .4

        });

    });

});

/* =========================================================
   NAVBAR
========================================================= */

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 40) {

        header.style.background = "rgba(5,8,22,.88)";
        header.style.boxShadow = "0 20px 40px rgba(0,0,0,.25)";

    } else {

        header.style.background = "rgba(10,15,30,.45)";
        header.style.boxShadow = "none";

    }

});

/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton = document.getElementById("menuButton");

const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});

mobileMenu.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});

/* =========================================================
   HERO ANIMATION
========================================================= */

gsap.from(".hero-subtitle", {

    y: 40,

    opacity: 0,

    duration: .8

});

gsap.from(".hero h1", {

    y: 60,

    opacity: 0,

    duration: 1,

    delay: .2

});

gsap.from(".hero-text", {

    y: 40,

    opacity: 0,

    duration: 1,

    delay: .4

});

gsap.from(".hero-buttons", {

    y: 40,

    opacity: 0,

    duration: 1,

    delay: .6

});

gsap.from("#planetContainer", {

    scale: .7,

    opacity: 0,

    duration: 1.5,

    delay: .3,

    ease: "back.out(1.7)"

});
/* =========================================================
   SCROLL REVEAL
========================================================= */

document.querySelectorAll("section").forEach(section => {

    gsap.from(section, {

        scrollTrigger: {

            trigger: section,

            start: "top 80%"

        },

        y: 80,

        opacity: 0,

        duration: 1,

        ease: "power3.out"

    });

});

/* =========================================================
   3D TILT PROJECT CARDS
========================================================= */

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - .5) * -12;

        const rotateY = ((x / rect.width) - .5) * 12;

        gsap.to(card, {

            rotateX,

            rotateY,

            transformPerspective: 1000,

            duration: .35

        });

    });

    card.addEventListener("mouseleave", () => {

        gsap.to(card, {

            rotateX: 0,

            rotateY: 0,

            duration: .45

        });

    });

});

/* =========================================================
   THEME SWITCHER
========================================================= */

const themeSwitcher = document.getElementById("themeSwitcher");

const themes = [

    {
        bg: "#050816",
        bg2: "#0b1024",
        blue: "#3b82f6",
        purple: "#8b5cf6",
        pink: "#ec4899"
    },

    {
        bg: "#08121f",
        bg2: "#102a43",
        blue: "#06b6d4",
        purple: "#2563eb",
        pink: "#22d3ee"
    },

    {
        bg: "#111827",
        bg2: "#1f2937",
        blue: "#10b981",
        purple: "#059669",
        pink: "#34d399"
    },

    {
        bg: "#1a1026",
        bg2: "#2d1b46",
        blue: "#a855f7",
        purple: "#7c3aed",
        pink: "#ec4899"
    },

    {
        bg: "#1a0f0a",
        bg2: "#2c1810",
        blue: "#f97316",
        purple: "#ea580c",
        pink: "#fb923c"
    }

];

let currentTheme = 0;

themeSwitcher.addEventListener("click", () => {

    currentTheme++;

    if (currentTheme >= themes.length) {

        currentTheme = 0;

    }

    const t = themes[currentTheme];

    document.documentElement.style.setProperty("--bg", t.bg);
    document.documentElement.style.setProperty("--bg2", t.bg2);
    document.documentElement.style.setProperty("--blue", t.blue);
    document.documentElement.style.setProperty("--purple", t.purple);
    document.documentElement.style.setProperty("--pink", t.pink);

});

/* =========================================================
   LIGHTBOX
========================================================= */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

document.querySelectorAll(".project-image img").forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImage.src = image.src;

    });

});

lightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

/* =========================================================
   ACTIVE MENU
========================================================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});
