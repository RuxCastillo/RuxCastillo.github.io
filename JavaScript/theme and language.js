const theme = document.querySelector("#moon");
const language = document.querySelector("#language");
const body = document.querySelector("#body");
const imgProfile = document.querySelector("#profile img")
let colorActual = "white";


theme.addEventListener("click", cambioTheme);
language.addEventListener("click", cambioLanguage);


function cambioTheme() {
    console.log(colorActual)

    if ( colorActual === "white") {
        colorActual = "black"    
        console.log("le diste click a cambio theme")
        theme.setAttribute("src", "./Img/icons/sun.png")
        language.setAttribute("src", "./Img/icons/enwhite.png")
        imgProfile.setAttribute("src", "./Img/Perfilbackgroundtransparent2.png")
        body.style.backgroundImage = "url(../Img/darktheme.jpg"

        body.style.color = "white"
       
    } else {
        colorActual = "white"
        theme.setAttribute("src", "./Img/icons/luna.png")
        language.setAttribute("src", "./Img/icons/idioma.png")
        imgProfile.setAttribute("src", "./Img/Perfilbackgroundtransparent3.png")
        body.style.backgroundImage = "url(./Img/mamol%20fondo.jpg"
        body.style.color = "black"
    }
}

function cambioLanguage() {
    console.log("le diste click a cambio language")
}

function temaActual() {
    return theme.getAttribute("src");
}