let modal= document.querySelectorAll(".modal")[0];
let modalC= document.querySelectorAll(".modal-container")[0];
let cerrar= document.querySelectorAll(".close")[0];
let abrir= document.querySelectorAll(".cta")[0];

let modal1= document.querySelectorAll(".modal1")[0];
let modalC1= document.querySelectorAll(".modal-container1")[0];
let cerrar1= document.querySelectorAll(".close1")[0];
let abrir1= document.querySelectorAll(".cta1")[0];

abrir.addEventListener("click",function(e){
    e.preventDefault();
    modalC.style.opacity="1";
    modalC.style.visibility="visible";
    modal.classList.toggle("modal-close")
})
cerrar.addEventListener("click",function(){
    modal.classList.toggle("modal-close");

    setTimeout(function(){

        modalC.style.opacity="0";
        modalC.style.visibility="hidden";
        

    },900)
})
abrir1.addEventListener("click",function(e){
    e.preventDefault();
    modalC1.style.opacity="1";
    modalC1.style.visibility="visible";
    modal1.classList.toggle("modal-close1")
})
cerrar1.addEventListener("click",function(){
    modal1.classList.toggle("modal-close1");

    setTimeout(function(){

        modalC1.style.opacity="0";
        modalC1.style.visibility="hidden";
        

    },900)
})