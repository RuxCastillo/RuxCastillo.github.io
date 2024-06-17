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
    cambioThemeABlanco("cambio")
    }else {
    cambioThemeANegro("cambio")
    }
}

function cambioThemeABlanco(placeholder) {
        const allIcons = document.getElementsByClassName(placeholder)
        colorActual = "black"    
        console.log("le diste click a cambio theme")
        body.style.backgroundImage = "url(../Img/darktheme.jpg)"

        for (let j = 0; j < allIcons.length; j++) {
        elcambio = allIcons[j].getAttribute("src").slice(0, -4)
        elcambio += "white.png"
        allIcons[j].setAttribute("src", elcambio)

        body.style.color = "white"
    }
}

function cambioThemeANegro(placeholder) {
        const allIcons = document.getElementsByClassName(placeholder)
        colorActual = "white"

        for (let j = 0; j < allIcons.length; j++) {
        elcambio = allIcons[j].getAttribute("src").slice(0, -9)
        elcambio += ".png"
        allIcons[j].setAttribute("src", elcambio)
        }
        body.style.backgroundImage = "url(./Img/mamol%20fondo.jpg"
        body.style.color = "black"
    }


function cambioLanguage() {
    console.log("le diste click a cambio language")
    let arreglandoColor = colorActual;

    let str = (arreglandoColor === "white")?  ".png" : "white.png"

    if (idiomaActual === "en") {
        idiomaActual = "es"
        language.setAttribute("src", `./Img/icons/es${str}`)
    } else if (idiomaActual === "es") {
        idiomaActual = "en"
        language.setAttribute("src", `./Img/icons/en${str}`)
    }
    
    let queLang = (idiomaActual === "en")? jsonDataLanguage[0] : jsonDataLanguage[1];

    let queLangArray = Object.keys(queLang)
    let arrayValue = Object.values(queLang)

    for (let h = 0; h < queLangArray.length; h++) {

        if ( document.querySelector("." + queLangArray[h]) !== null) {

        let variable3 = document.querySelector("." + queLangArray[h])

        console.log(arrayValue[h])

        variable3.innerText = arrayValue[h]
        console.log(variable3)

        }


    }
}

function temaActual() {
    return theme.getAttribute("src");

}