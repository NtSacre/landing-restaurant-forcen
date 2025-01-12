document.getElementById("menu-burger").addEventListener("click", function(){
const nav = document.getElementById("navi-links");
nav.classList.toggle("active");

});

const openButton=document.getElementById('openButton');
const closeButton=document.getElementById('closeButton');
const popup=document.getElementById('popup');
const popupOverlay=document.getElementById('popupOverlay');

function openMenuPopup(){
    popup.style.display='block';
    popupOverlay.style.display='block';
}

function closeMenuPopup(){
    popup.style.display='none';
    popupOverlay.style.display='none';
}

openButton.addEventListener('click',openMenuPopup);
closeButton.addEventListener('click',closeMenuPopup);

const leftArrow=document.querySelector('#left-arrow');
const rightArrow=document.querySelector('#right-arrow');
const testimonialContainer=document.querySelector('#testimonial-container');

leftArrow.addEventListener('click',scrollLeft);

rightArrow.addEventListener('click',scrollRight);
function scrollLeft(){
    testimonialContainer.scrollBy(
        {
            left: -415,
            behavior:'smooth'
        }
    );
    console.log('gauche execute');
}
function scrollRight(){
    testimonialContainer.scrollBy(
        {
            left:415,
            behavior: 'smooth'
        }
    );
    console.log('droite execute');
}

console.log(leftArrow,rightArrow,testimonialContainer)

//traitement du formulaire de reservation
let reservation=document.querySelector('#reservation-form');
let noms=document.querySelector('#noms');
let date=document.querySelector('#date');
let telephone=document.querySelector('#telephone');
let message=document.querySelector('#message');
console.log(reservation,noms,date,telephone,message);