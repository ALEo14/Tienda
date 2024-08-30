const abrirMenuMobile = document.querySelector("#abrirMenuMobile");
const cerrarMenuMobile = document.querySelector("#cerrarMenuMobile");
const aside = document.querySelector("aside");


abrirMenuMobile.addEventListener("click", ()=>{
    aside.classList.add("asideVisible");
});
cerrarMenuMobile.addEventListener("click", ()=>{
    aside.classList.remove("asideVisible");
});