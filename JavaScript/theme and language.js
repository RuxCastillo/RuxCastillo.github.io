const theme = document.querySelector("#moon");
const language = document.querySelector("#language");
const body = document.querySelector("#body");
const imgProfile = document.querySelector("#profile > img")
const oldReddit = document.querySelector("#reddit")
const allIcons = document.getElementsByClassName("cambio")

theme.addEventListener("click", cambioTheme);
language.addEventListener("click", cambioLanguage);

function cambioTheme() {
    console.log(esBlanco)
    if (esBlanco) {
    cambioThemeABlanco("cambio")
    }else {
    cambioThemeANegro("cambio")
    }
}

function cambioThemeABlanco(placeholder) {
        const allIcons = document.getElementsByClassName(placeholder)
        esBlanco = false
        console.log("le diste click a cambio theme")
        body.style.backgroundImage = "url(../Img/darktheme.jpg)"
        imgProfile.setAttribute("src", "./Img/Perfilbackgroundtransparent2white.png")

        for (let j = 0; j < allIcons.length; j++) {
            elcambio = allIcons[j].getAttribute("src").slice(0, -4)
            elcambio += "white.png"
            allIcons[j].setAttribute("src", elcambio)
        }
        body.style.color = "white"
        elCuadrito()
}

function cambioThemeANegro(placeholder) {
        const allIcons = document.getElementsByClassName(placeholder)
        esBlanco = true
        imgProfile.setAttribute("src", "./Img/Perfilbackgroundtransparent2.png")

        for (let j = 0; j < allIcons.length; j++) {
        elcambio = allIcons[j].getAttribute("src").slice(0, -9)
        elcambio += ".png"
        allIcons[j].setAttribute("src", elcambio)
        }
        body.style.backgroundImage = "url(./Img/mamol%20fondo.jpg)"
        body.style.color = "black"
        elCuadrito()
    }

function cambioLanguage() {
    console.log("le diste click a cambio language")

    let str = (esBlanco)?  ".png" : "white.png"

    if (english) {
        english = false
        language.setAttribute("src", `./Img/icons/es${str}`)
    } else if (!english) {
        english = true
        language.setAttribute("src", `./Img/icons/en${str}`)
    }
    
    let queLang = (english)? jsonDataLanguage[0] : jsonDataLanguage[1];
    let queLangArray = Object.keys(queLang)
    let arrayValue = Object.values(queLang)

    for (let h = 0; h < queLangArray.length; h++) {

        if ( document.querySelector("." + queLangArray[h]) !== null) {

        let variable3 = document.querySelector("." + queLangArray[h])

        variable3.innerText = arrayValue[h]
        console.log(variable3)
        }
    }
    
    elCuadrito()
}

function temaActual() {
    return theme.getAttribute("src");

}