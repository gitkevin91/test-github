let boton= document.querySelector("button")
boton.addEventListener("click",function () {
    console.log("click funcionando")
    boton.textContent="el boton funciona"
    boton.style.backgroundColor="blue"
})