let abrir = document.getElementById("abrir");
let abrir1 = document.getElementById("abrir1");
let abrir2 = document.getElementById("abrir2");

/*let cerrar = document.getElementById("cerrar");
let cerrar1 = document.getElementById("cerrar1");
let cerrar2 = document.getElementById("cerrar2");*/

let circulo = document.getElementById("circulo");
let circulo1 = document.getElementById("circulo1");
let circulo2 = document.getElementById("circulo2");

let contador = 0;
let enlace= document.querySelectorAll(".superponer")[0];
let enlace1= document.querySelectorAll(".superponer1")[0];
let enlace2= document.querySelectorAll(".superponer2")[0];


abrir.addEventListener("click", function(e){
    e.preventDefault();
    if(contador==0){
        circulo.className = ("circulo dos");
        contador=1;
        enlace.style.opacity="1";
        enlace.style.visibility="visible";
    }
})
abrir1.addEventListener("click", function(e){
    e.preventDefault();
    if(contador==0){
        circulo1.className = ("circulo dos");
        contador=1;
        enlace1.style.opacity="1";
        enlace1.style.visibility="visible";
    }
})
abrir2.addEventListener("click", function(e){
    e.preventDefault();
    if(contador==0){
        circulo2.className = ("circulo dos");
        contador=1;
        enlace2.style.opacity="1";
        enlace2.style.visibility="visible";
    }
})
enlace.addEventListener("click", function(e){
    e.preventDefault();
    if(contador==1){
        circulo.classList.remove("dos")
        circulo.className = ("circulo uno")
        contador=0;
        enlace.style.opacity="0";
        enlace.style.visibility="hidden";
    }
})
enlace1.addEventListener("click", function(e){
    e.preventDefault();
    if(contador==1){
        circulo1.classList.remove("dos")
        circulo1.className = ("circulo uno")
        contador=0;
        enlace1.style.opacity="0";
        enlace1.style.visibility="hidden";
    }
})
enlace2.addEventListener("click", function(e){
    e.preventDefault();
    if(contador==1){
        circulo2.classList.remove("dos")
        circulo2.className = ("circulo uno")
        contador=0;
        enlace2.style.opacity="0";
        enlace2.style.visibility="hidden";
    }
})