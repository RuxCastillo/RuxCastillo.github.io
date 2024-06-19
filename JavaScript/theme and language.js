const body = document.querySelector("#body");
const oldReddit = document.querySelector("#reddit")
const allIcons = document.getElementsByClassName("cambio")

function cambioTheme() {
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
        let imgProfile = document.querySelector("#perfileImg")
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
        let imgProfile = document.querySelector("#perfileImg")
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
    let str = (esBlanco)?  ".png" : "white.png"

    if (english) {
        english = false
        language.setAttribute("src", `./Img/icons/es${str}`)
    } else if (!english) {
        english = true
        language.setAttribute("src", `./Img/icons/en${str}`)
    }
    
    let queLang = queJsonUsarParaLenguaje()
    let queLangArray = Object.keys(queLang)
    let arrayValue = Object.values(queLang)

    for (let h = 0; h < queLangArray.length; h++) {
        if ( document.querySelector("." + queLangArray[h]) !== null) {
            let variable3 = document.querySelector("." + queLangArray[h])
            variable3.innerText = arrayValue[h]
        }
    }
    elCuadrito()
}

function queJsonUsarParaLenguaje() {
    return (english? jsonDataLanguage[0] : jsonDataLanguage[1])
}

function cambiandoBackground() {
    esBlanco? 
}