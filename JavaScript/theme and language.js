const theme = document.querySelector("#moon");
const language = document.querySelector("#language");
const body = document.querySelector("#body");
const imgProfile = document.querySelector("#profile img")
const oldReddit = document.querySelector("#reddit")
const allIcons = document.getElementsByClassName("cambio")
let colorActual = "white";
let idiomaActual = "en";



theme.addEventListener("click", cambioTheme);
language.addEventListener("click", cambioLanguage);


function cambioTheme() {
    console.log(colorActual)

    if ( colorActual === "white") {
        colorActual = "black"    
        console.log("le diste click a cambio theme")
        body.style.backgroundImage = "url(../Img/darktheme.jpg)"

        for (let j = 0; j < allIcons.length; j++) {
        elcambio = allIcons[j].getAttribute("src").slice(0, -4)
        elcambio += "white.png"
        console.log(elcambio)
        allIcons[j].setAttribute("src", elcambio)
        }

        body.style.color = "white"
       
    } else {
        colorActual = "white"

        for (let j = 0; j < allIcons.length; j++) {
        elcambio = allIcons[j].getAttribute("src").slice(0, -9)
        elcambio += ".png"
        console.log(elcambio)
        allIcons[j].setAttribute("src", elcambio)
        }
        body.style.backgroundImage = "url(./Img/mamol%20fondo.jpg"
        body.style.color = "black"
    }
}

function cambioLanguage() {
    console.log("le diste click a cambio language")
    let arreglandoColor = colorActual;

    let str = (arreglandoColor === "white")?  ".png" : "white.png"
    console.log(arreglandoColor)

    if (idiomaActual === "en") {
        idiomaActual = "es"
        language.setAttribute("src", `./Img/icons/es${str}`)
    } else {
        idiomaActual = "en"
        language.setAttribute("src", `./Img/icons/en${str}`)
    }

}

function temaActual() {
    return theme.getAttribute("src");

}