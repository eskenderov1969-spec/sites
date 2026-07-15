/* ============================================
   THREE.JS SPACE
============================================ */

const canvas = document.getElementById("spaceCanvas");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(

60,

window.innerWidth / window.innerHeight,

0.1,

2000

);

camera.position.z = 18;

const renderer = new THREE.WebGLRenderer({

canvas,

alpha:true,

antialias:true

});

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(

window.innerWidth,

window.innerHeight

);

/* ============================================
STARFIELD
============================================ */

const starsGeometry = new THREE.BufferGeometry();

const starCount = 8000;

const positions = [];

for(let i=0;i<starCount;i++){

positions.push(

(Math.random()-0.5)*1000,

(Math.random()-0.5)*1000,

(Math.random()-0.5)*1000

);

}

starsGeometry.setAttribute(

"position",

new THREE.Float32BufferAttribute(

positions,

3

)

);

const starsMaterial = new THREE.PointsMaterial({

color:0xffffff,

size:1.3,

transparent:true,

opacity:.8

});

const stars = new THREE.Points(

starsGeometry,

starsMaterial

);

scene.add(stars);

/* ============================================
PLANET
============================================ */

const planetGeometry =

new THREE.SphereGeometry(

5,

128,

128

);

const planetMaterial =

new THREE.MeshStandardMaterial({

color:0x233cff,

roughness:.8,

metalness:.2

});

const planet =

new THREE.Mesh(

planetGeometry,

planetMaterial

);

scene.add(planet);

/* ============================================
LIGHTS
============================================ */

const ambientLight =

new THREE.AmbientLight(

0xffffff,

1

);

scene.add(ambientLight);

const pointLight =

new THREE.PointLight(

0x4f8cff,

5,

200

);

pointLight.position.set(

12,

8,

12

);

scene.add(pointLight);

/* ============================================
ATMOSPHERE
============================================ */

const glowGeometry =

new THREE.SphereGeometry(

5.5,

128,

128

);

const glowMaterial =

new THREE.MeshBasicMaterial({

color:0x4f8cff,

transparent:true,

opacity:.15,

side:THREE.BackSide

});

const glow =

new THREE.Mesh(

glowGeometry,

glowMaterial

);

scene.add(glow);
/* ============================================
   PLANET RINGS
============================================ */

const ringGeometry = new THREE.RingGeometry(6.8,8.5,128);

const ringMaterial = new THREE.MeshBasicMaterial({

    color:0x6ea8ff,

    transparent:true,

    opacity:.25,

    side:THREE.DoubleSide

});

const rings = new THREE.Mesh(

    ringGeometry,

    ringMaterial

);

rings.rotation.x=Math.PI/2.5;
rings.rotation.z=.5;

scene.add(rings);

/* ============================================
   COMETS
============================================ */

const cometGeometry=new THREE.SphereGeometry(.08,12,12);

const cometMaterial=new THREE.MeshBasicMaterial({

    color:0xffffff

});

const comets=[];

for(let i=0;i<25;i++){

    const comet=new THREE.Mesh(

        cometGeometry,

        cometMaterial

    );

    comet.position.set(

        (Math.random()-0.5)*400,

        (Math.random()-0.5)*250,

        (Math.random()-0.5)*200

    );

    comet.speed=.5+Math.random()*2;

    scene.add(comet);

    comets.push(comet);

}

/* ============================================
   NEBULA
============================================ */

const nebulaGeometry=new THREE.SphereGeometry(

    250,

    64,

    64

);

const nebulaMaterial=new THREE.MeshBasicMaterial({

    color:0x3b82f6,

    transparent:true,

    opacity:.03,

    side:THREE.BackSide

});

const nebula=new THREE.Mesh(

    nebulaGeometry,

    nebulaMaterial

);

scene.add(nebula);

/* ============================================
   MOUSE PARALLAX
============================================ */

let mouseX=0;
let mouseY=0;

window.addEventListener("mousemove",(e)=>{

    mouseX=(e.clientX/window.innerWidth-.5)*5;

    mouseY=(e.clientY/window.innerHeight-.5)*5;

});

/* ============================================
   RESIZE
============================================ */

window.addEventListener("resize",()=>{

    camera.aspect=window.innerWidth/window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(

        window.innerWidth,

        window.innerHeight

    );

});

/* ============================================
   ANIMATION
============================================ */

const clock=new THREE.Clock();

function animate(){

    requestAnimationFrame(animate);

    const t=clock.getElapsedTime();

    planet.rotation.y+=.002;

    planet.rotation.x=Math.sin(t*.4)*.05;

    glow.rotation.y-=.001;

    rings.rotation.z+=.0008;

    stars.rotation.y+=.00008;

    stars.rotation.x+=.00002;

    nebula.rotation.y-=.0002;

    camera.position.x+=(mouseX-camera.position.x)*.02;

    camera.position.y+=(-mouseY-camera.position.y)*.02;

    camera.lookAt(scene.position);

    comets.forEach(comet=>{

        comet.position.x-=comet.speed;

        comet.position.y-=comet.speed*.25;

        if(comet.position.x<-220){

            comet.position.x=220;

            comet.position.y=(Math.random()-.5)*250;

            comet.position.z=(Math.random()-.5)*200;

        }

    });

    renderer.render(scene,camera);

}

animate();
