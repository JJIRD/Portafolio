/* ======================== typing animate ======================= */
var typed = new Typed(".typing", {
    strings:["Web Designer","","Web Developer","Graphic Designer","YouTuber"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})
/* ======================== Aside ======================= */
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length;
      for(let i=0; i<totalNavList; i++)
      {
        const a=navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            this.classList.add("active")
        })
      }