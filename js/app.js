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
