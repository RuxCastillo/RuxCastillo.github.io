//aqui van las variables globales para la toma de decisiones, estas se actualizan con el estado actual de la pagina
let esBlanco = true
let seVeFoto = true 
//cuadrosActivo falso es lineas
let cuadrosActivo = true
let english = true
let acabaAbrirPagina = true
let seAbrioMasInformación = false
let panelConfiguracion = false
let modoCel 
let barraLateral = false
let perfilAbiertoModoCel = false


function mensajeBienvenida() {
    encenderMensajedeBienvenida()
    acabaAbrirPagina = false
}

function encenderMensajedeBienvenida() {
    let board = document.querySelector("#board")
    htmlDeBienvenida()
}

function mostrarElMensajeDeBienvenidaDeNuevo() {
    acabaAbrirPagina = true
    mensajeBienvenida(acabaAbrirPagina)      
}

function regresaStringDependiendoTheme() {
    return esBlanco? "blanco" : "negro"
}

//estas tienen que ver con el mostrar los iconos en el color que deben
function agarrandoTodosIconos() {
    let allIconsHTML = document.querySelectorAll(".cambio")
    for(const variable of allIconsHTML) {
        const path = actualizarElPathDeLosIcons(variable.name)
        variable.setAttribute("src", path)
    }
}

function actualizarElPathDeLosIcons(nameImage) {
    return `./Img/${regresaStringDependiendoTheme()}/icons/${nameImage}.png`
}
//estas tienen que ver con la foto de perfil que sea la correcta y sobre el about me
function actualizarElPathFotoPerfil() {
    return `./Img/${regresaStringDependiendoTheme()}/Perfil.png`
}

function ponerFotoPerfil() {
    document.querySelector("#perfileImg").setAttribute("src", actualizarElPathFotoPerfil())
}

function verAboutMe() {
    if(modoCel) {
        seVeFoto = false
        document.querySelector("#board").innerHTML = htmlAboutMe()
        document.querySelector(".regresarBoton").addEventListener("click", goBack)
        
    } else {
        seVeFoto = false
        document.querySelector("#profile").innerHTML = htmlAboutMe()
        document.querySelector(".regresarBoton").addEventListener("click", goBack)
    }
}

function goBack() {
    if(modoCel) {
        seVeFoto = true
        document.querySelector("#board").innerHTML = originalHTMLProfileCard
        actualizarTodo()
    } else {
        seVeFoto = true
        document.querySelector("#profile").innerHTML = originalHTMLProfileCard
        actualizarTodo()
    }
}

function generarTarjeta(arr) {
    document.querySelector("#board").innerHTML = pushTarjeta(arr);
    barraLateral = false
    actualizarTodo()
}
//actualizando el background
function actualizandoElBackground() {
    document.querySelector("#body").style.backgroundImage = actualizarElPathBackground()
}

function actualizarElPathBackground() {
    return `url(../Img/${regresaStringDependiendoTheme()}/Fondo.jpg)`
}
//aqui voy a empezar a poner las funciones que tienen que ver con el cambio de tema

function actualizandoTexto() {
    document.querySelector("#body").style.color = (esBlanco? "black" : "white")
}

function solicitudCambioTheme() {
    if(esBlanco) {
        esBlanco = false
        actualizarTodo()
    } else {
        esBlanco = true
        actualizarTodo()
    }
}

//ahora vamos a cambiar el lenguaje
function solicitudCambioLenguaje() {
    if(english) {
        english = false
    }else {
        english = true
    }
    cambioDeLenguaje()
    elCuadrito()
}

function queJsonUsarParaLenguaje() {
    return english? jsonDataLanguage[0] : jsonDataLanguage[1]
}

function cambioDeLenguaje() {
    let objetoLenguaje = queJsonUsarParaLenguaje()

    for (let key in objetoLenguaje) {
        let elCambio = document.querySelector("." + key)
        if(elCambio) {
            elCambio.innerText = objetoLenguaje[key]
        }
    }
    cambioIconoLenguaje()
}

function cambioIconoLenguaje() {
    if(english) {
        document.querySelector("#language").name = "en"
        let change = actualizarElPathDeLosIcons(document.querySelector("#language").name)
        document.querySelector("#language").setAttribute("src", change)
    } else {
        document.querySelector("#language").name = "es"
        let change = actualizarElPathDeLosIcons(document.querySelector("#language").name)
        document.querySelector("#language").setAttribute("src", change)
    }
}

function abrePanel() {
    let configuracionImg = document.querySelector("#configuracion");
    let panel = document.querySelector("#panelAbierto");
    cambioIconoLenguaje()

    if(!panelConfiguracion) {
        let elColorF = (esBlanco?"rgba(32,32,33,255)" : "rgba(181,179,185,255)")
        let elBack = (esBlanco?  "rgba(208,210,213,255)" : "rgba(32,32,33,255)")
        console.log("clickeaste el div de configuracion")
        panel.style.border = `2px solid ${elColorF}`
        panel.style.borderTop = "none"
        panel.style.display = "grid"
        configuracionImg.style.border = `2px solid ${elColorF}`
        configuracionImg.style.borderBottom = "none"
        panelConfiguracion = true
        panel.style.backgroundColor = `${elBack}`
        configuracionImg.style.backgroundColor = `${elBack}`
    } else {
        cambioIconoLenguaje()
        panelConfiguracion = false
        panel.style.display = "none"
        configuracionImg.style.border = "none"
        panel.style.backgroundColor = ""
        configuracionImg.style.backgroundColor = ""
        

    }

}

let noRepeat = 0;
function numeroRandomParaCuadrito() {
    nume = english? 12 : 8;
    let numRandom = Math.floor(Math.random() * nume) + 1;
    while(noRepeat === numRandom) {
        numRandom = Math.floor(Math.random() * nume) + 1
    }
    noRepeat = numRandom
    return numRandom
}

function saberElPathDeCuadrito() {
    return  `./Img/${regresaStringDependiendoTheme()}/${(english)? "ingles" : "español"}/${numeroRandomParaCuadrito()}.png`
}

function elCuadrito() {
    document.querySelector("#phrase").setAttribute("src", saberElPathDeCuadrito())
}



function actualizarTodo() {
    actualizandoTexto()
    cambioDeLenguaje()
    agarrandoTodosIconos()
    actualizandoElBackground()
    seVeFoto? ponerFotoPerfil() : null
    seVeFoto? elCuadrito() : null
    loRelacionadoConCel()
    console.log(barraLateral, modoCel, perfilAbiertoModoCel)
    console.log("actualizartodo")
}

function estamosenModoCel() {
    if(window.innerWidth < 781) {
        modoCel = true
        
    } else {
        modoCel = false
    }
    console.log("estamosModoCel")
}

function loRelacionadoConCel() {
    estamosenModoCel()

    if(modoCel) {
        ponerLoDeLaDerecha() 
    }else {
        quitarLoDeLaDerecha();
    }
    console.log("lorelacionadoconcel")
}

function ponerLoDeLaDerecha() {
        if(!barraLateral) {
            esconderPerfil()
        }
        console.log("ponerlodeladerecha")
}

function quitarLoDeLaDerecha() {
    console.log("quitarlodeladerecha")
    document.querySelector("#profile").style.display = "grid"
    if(barraLateral) {
        barraLateral = false
        document.querySelector("#main").innerHTMl -= (
            `<div id="abrirPerfil" onclick="seeProfile()">
                <div><img src="../Img/flecha.png" /></div>
                <div id="seeProfile"><h3 id="miNombre">Rubén López C.</h3></div>
                <div><img src="./Img/flecha.png" /></div>
            </div>`
        )
    }
}

let guardadoPerfil = document.querySelector("#profile").innerHTML
function esconderPerfil() {
    if(!barraLateral) {
        barraLateral = true
        seVeFoto = false
        document.querySelector("#profile").style.display = "none"
        document.querySelector("#board").innerHTML += (
            `<div id="abrirPerfil" onclick="seeProfile()">
                <div><img src="../Img/flecha.png" /></div>
                <div id="seeProfile"><h3 id="miNombre">Rubén López C.</h3></div>
                <div><img src="./Img/flecha.png" /></div>
            </div>`
    )
}

console.log("esconderperfil")

}

function seeProfile() {
    if(!perfilAbiertoModoCel) {
        perfilAbiertoModoCel = true
        seVeFoto = true
        modoCel = true
        loDeLaDerecha = true
        console.log("abrir perfil")
        document.querySelector("#board").innerHTML = ""
        document.querySelector("#board").innerHTML = guardadoPerfil
        barraLateral = false
        actualizarTodo()
    }else {
        document.querySelector("#board").innerHTML = ""
        barraLateral = false
        perfilAbiertoModoCel = false
        esconderPerfil()
        console.log("esconderperfil")
    }
}


function temaDependeDeHora(hour) {
    if (hour < 9 || hour >= 20) {
        solicitudCambioTheme()
    }   
        return

}

function consiguiendoLaHoraActual() {
    let date = new Date()
    let hours = date.getHours()
    console.log(hours)
    temaDependeDeHora(hours)
}

consiguiendoLaHoraActual()

function abreMas(lugar, elId) {
    let cualBase
    if (lugar === 'practica') {
        cualBase = jsonDataPractice[elId]
    }else if (lugar === 'certificados') {
        cualBase = jsonDataCertifications[elId]
    } else {
        cualBase = jsonDataWork[elId]
    }
    cambiandoElBoard(cualBase)
}

let board = document.querySelector("#board")
let loQueHabiaBoard
function cambiandoElBoard(placeholder) {
    loQueHabiaBoard = board.innerHTML

    board.innerHTML = verMasHTML()
}

let elwidthactual = window.innerWidth
setInterval(mifuncion, 1000)
function mifuncion() {
    if(window.innerWidth === elwidthactual) {

    }else {
        window.addEventListener("resize", actualizarTodo())
        elwidthactual = window.innerWidth
        if(elwidthactual > 782) {
        document.querySelector("#board").innerHTML = ""
        }else {
            seeProfile()
        }
}
}