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
