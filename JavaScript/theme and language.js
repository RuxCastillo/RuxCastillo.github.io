const theme = document.querySelector("#moon");
const language = document.querySelector("#language");
const body = document.querySelector("#body");
let colorActual = "white";


theme.addEventListener("click", cambioTheme);
language.addEventListener("click", cambioLanguage);


function cambioTheme() {
    console.log(colorActual)

    if ( colorActual === "white") {
        colorActual = "black"    
        console.log("le diste click a cambio theme")
        theme.setAttribute("src", "./Img/icons/sun.png")
        body.style.backgroundImage = "url(../Img/darktheme.jpg"
        body.style.color = "white"
       
    } else {
        colorActual = "white"
        theme.setAttribute("src", "./Img/icons/luna.png")
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