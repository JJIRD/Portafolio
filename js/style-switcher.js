/* ========================== toggler style switcher ========================== */
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
//hide style switcher on scroll
window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/* ========================== theme colors ========================== */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) 
{
    alternateStyles.forEach((style)=>{
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled")
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}
/* ========================== theme ligth and dark mode ========================== */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () =>{
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})

/* ========================== Multi language ========================== */
let currentLanguage = "es";
let translations;

function loadTranslations() {
  fetch(`js/${currentLanguage}.json`)
    .then(response => response.json())
    .then(data => {
      translations = data;
      //opacar id buttonIcon por d1 segundo
      updateText();

      var typed = new Typed(".typing", {
        strings:["Web Designer","","Web Developer","Graphic Designer","YouTuber"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    })
    .catch(error => console.error(error));
}
function updateText() {
    document.getElementById("idiomas").innerHTML = translations.idiomas + "<span>" + translations.Grado + "</span>";
    document.getElementById("trabajo1").innerHTML = translations.trabajo1;
    document.getElementById("experiencia").innerHTML = translations.experiencia;
    document.getElementById("estudios").innerHTML = translations.estudios;
    document.getElementById("servicio").innerHTML = translations.servicios;
    document.getElementById("porta").innerHTML = translations.portafolio;
    document.getElementById("proyectos").innerHTML = translations.proyectos;

    document.getElementById("contactame").innerHTML = translations.contactame;
    document.getElementById("preguntas").innerHTML = translations.preguntas;
    document.getElementById("Asus").innerHTML = translations.Asus;
    document.getElementById("callme").innerHTML = translations.callme;
    document.getElementById("sitio").innerHTML = translations.website2;
    document.getElementById("oficina").innerHTML = translations.oficina;  
    document.getElementById("send").innerHTML = translations.send;  
    document.getElementById("respuesta").innerHTML = translations.respuesta;
    document.getElementById("cname").placeholder = translations.cname;
    document.getElementById("correob").placeholder = translations.correob;
    document.getElementById("csubject").placeholder = translations.csubject;
    document.getElementById("cmensaje").placeholder = translations.cmensaje;
    document.getElementById("cenviar").innerHTML = translations.cenviar;
     /* ======================== aside ======================= */
    document.getElementById("inicio").innerHTML = "<i class='" + translations.homeIcon + "'></i>" + translations.inicio;
    document.getElementById("inicio").href = "#home";
    document.getElementById("sobreMi").innerHTML = "<i class='" + translations.sobreMiIcon + "'></i>" + translations.sobreMi;
    document.getElementById("sobreMi").href = "#about";
    document.getElementById("servicios").innerHTML = "<i class='" + translations.serviciosIcon + "'></i>" + translations.servicios;
    document.getElementById("portafolio").innerHTML = "<i class='" + translations.portafolioIcon + "'></i>" + translations.portafolio;
    document.getElementById("contacto").innerHTML = "<i class='" + translations.contactoIcon + "'></i>" + translations.contacto;
    /* ======================== Inicio ======================= */
    document.getElementById("greeting").innerHTML = translations.greeting + " <span class='span'>" + translations.name + "</span>"
    document.getElementById("hola").innerHTML = translations.io + " <span class='typing'>" + translations.io1 + "</span>";
    document.getElementById("descargar").innerHTML = translations.dl;
    document.getElementById("sobreMi1").innerHTML = translations.sobreMi1;
    /* ======================== Sobre mi ======================= */
    document.getElementById("Hacerca").innerHTML = translations.Hacerca;
    document.getElementById("presente").innerHTML = translations.presente + " <span>" + translations.trabajo + "</span>";
    document.getElementById("detalles").innerHTML = translations.detalles;
    document.getElementById("edad").innerHTML = translations.edad + " <span>22</span>";;
    document.getElementById("cumpleanos").innerHTML = translations.cumpleanos + "<span> 16 sep 1996</span>";
    document.getElementById("website").innerHTML = translations.website + "<span> www.devignacio.cf</span>";
    document.getElementById("telefono").innerHTML = translations.telefono + "<span>+505 88642203</span>";
    document.getElementById("ciudad").innerHTML = translations.ciudad +" <span> Diriamba - Nicaragua</span>";
    document.getElementById("free").innerHTML = translations.free;
    document.getElementById("correo").innerHTML = translations.correo;
    document.getElementById("correoa").innerHTML = translations.correoa;

}

 /* ======================== typing animate ======================= */


function changeLanguage() {
  if (currentLanguage === "en") {
    currentLanguage = "es";
    document.getElementById("buttonIcon").style.opacity = 0.5;
    setTimeout(function(){ document.getElementById("buttonIcon").style.opacity = 1; }, 100);
  } else {
    currentLanguage = "en";
    document.getElementById("buttonIcon").style.opacity = 0.5;
    setTimeout(function(){ document.getElementById("buttonIcon").style.opacity = 1; }, 100);
  }

  loadTranslations();
}

document.getElementById("lang").addEventListener("click", changeLanguage);

loadTranslations();