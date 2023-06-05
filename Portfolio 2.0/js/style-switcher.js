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
}

 /* ======================== typing animate ======================= */


function changeLanguage() {
  if (currentLanguage === "en") {
    currentLanguage = "es";
  } else {
    currentLanguage = "en";
  }

  loadTranslations();
}

document.getElementById("lang").addEventListener("click", changeLanguage);

loadTranslations();