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
// Supongamos que tienes un selector de idioma con id "selector-idioma"
var selectorIdioma = document.getElementById("lang");

// Carga el archivo JSON de traducciones
fetch("js/translations.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // Función para traducir los textos
    function traducir(idioma) {
      var traducciones = data[idioma]; // Obtiene las traducciones correspondientes al idioma seleccionado

      // Actualiza los textos en la página
      document.getElementById("hello").textContent = traducciones["welcome wey"];
      document.getElementById("mensaje").textContent = traducciones["hello"];
    }

    // Evento de cambio de idioma
    selectorIdioma.addEventListener("change", function() {
      var idiomaSeleccionado = selectorIdioma.value;
      traducir(idiomaSeleccionado);
    });
  });
