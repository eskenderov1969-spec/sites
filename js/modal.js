let currentSlide = 0;

let gallery = [];

const modalVideo =
document.getElementById("modalVideo");

const thumbs =
document.getElementById("galleryThumbs");

const prev =
document.getElementById("galleryPrev");

const next =
document.getElementById("galleryNext");

const modal=document.getElementById("projectModal");

const modalImage=document.getElementById("modalImage");

const modalTitle=document.getElementById("modalTitle");

const modalDescription=document.getElementById("modalDescription");

const modalTech=document.getElementById("modalTech");

const modalDemo=document.getElementById("modalDemo");

const modalGithub=document.getElementById("modalGithub");

const close=document.getElementById("closeProjectModal");

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("click",()=>{

modal.classList.add("active");

modalImage.src=card.dataset.image;

modalTitle.innerHTML=card.dataset.title;

modalDescription.innerHTML=card.dataset.description;

modalDemo.href=card.dataset.demo;

modalGithub.href=card.dataset.github;

modalTech.innerHTML="";

card.dataset.tech.split(",")

.forEach(item=>{

const span=document.createElement("span");

span.innerHTML=item;

modalTech.appendChild(span);

});

gsap.from(".project-modal-content",{

scale:.8,

opacity:0,

duration:.35

});

});

});

close.onclick=()=>{

modal.classList.remove("active");

};

modal.onclick=e=>{

if(e.target===modal){

modal.classList.remove("active");

}

};

window.addEventListener("keydown",e=>{

if(e.key==="Escape"){

modal.classList.remove("active");

}

});
function renderSlide(){

thumbs.innerHTML="";

modalVideo.style.display="none";

modalImage.style.display="block";

modalImage.src=gallery[currentSlide];

gallery.forEach((img,index)=>{

const thumb=document.createElement("img");

thumb.src=img;

if(index===currentSlide){

thumb.classList.add("active");

}

thumb.onclick=()=>{

currentSlide=index;

renderSlide();

};

thumbs.appendChild(thumb);

});

}
