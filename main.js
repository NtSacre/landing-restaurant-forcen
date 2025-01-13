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
let nbrPersonne=document.querySelector('#nombre-personne')
let message=document.querySelector('#message');
let textRegex=/^[A-Za-zÀ-ÖØ-öø-ÿ'-\s]+$/;
let telRegex=/^[0-9]{9,}$/
let emailRegex=/^[a-z0-9-._]+@[a-z0-9-._]+\.[a-z0-9-._]{2,}$/

function fieldEmpty(field,event,errMsg){
    let isValid=true;
    let error=document.querySelector(field);
    error.innerHTML=errMsg;
    error.style.color='red';
    event.preventDefault();
    isValid=false;
}
reservation.addEventListener('submit',function(event){
    if(!noms.value.trim()){
        let err="Le nom ne doit pas contenir de chiffres";
        fieldEmpty('#name-rror',event,err);
        
    }else if(!textRegex.test(noms.value)){
        error=document.querySelector('#name-error');
        error.innerHTML="Le nom ne doit pas contenir de chiffres";
        error.style.color='red';
        error.style.display='block';
        reservation.setAttribute('hidden','hidden');
        event.preventDefault();
        isValid=false;
    }
  
    if(!telephone.value.trim()){
        let err="Le champ numero de telephone est requis"
        fieldEmpty('#tel-error',event,err);
    }else if(!telRegex.test(telephone.value)){
        error=document.querySelector('#tel-error');
        error.innerHTML="Le numero de telephone ne doit pas contenir de lettre et doit avoir au moins 9 chiffres";
        error.style.color='red';
        error.style.display='block';
        event.preventDefault();
        isValid=false;
    }
    if(isValid){
        let successMsg=document.querySelector('#reservation-success');
        successMsg.innerHTML="Votre reservation a ete pris en compte.";
        contactForm.setAttribute('hidden','hidden');
        successMsg.removeAttribute('hidden');
        successMsg.style.color='green';
        successMsg.style.display='block';
        
    }

});

//traitement du formulaire contact
let names=document.querySelector('#names');
let email=document.querySelector('#mail');
let contact=document.querySelector('#numero-tel');
let contactForm=document.querySelector('#contact-forms');

contactForm.addEventListener('submit',function(event){
    let isValid=true;
    if(!telRegex.test(contact.value)){
        error=document.querySelector('#contact-error');
        error.innerHTML="Le numero de telephone ne doit pas contenir de lettre et doit avoir au moins 9 chiffres";
        error.style.color='red';
        event.preventDefault();
        isValid=false;
    }
    if(!textRegex.test(names.value)){
        error=document.querySelector('#names-error');
        error.innerHTML="Le nom ne doit pas contenir de chiffres";
        error.style.color='red';
        event.preventDefault();
        isValid=false;
    }
    if(isValid){
        let successMsg=document.querySelector('#contact-success');
        successMsg.innerHTML="Merci de nous avoir contacté.";
        contactForm.setAttribute('hidden','hidden');
        successMsg.removeAttribute('hidden');
        successMsg.style.color='green';
        successMsg.style.display='block';
        event.preventDefault();
    }
});
