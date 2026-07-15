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
