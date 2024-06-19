//aqui van las variables globales para la toma de decisiones, estas se actualizan con el estado actual de la pagina
let esBlanco = true
let seVeFoto = true 
//cuadrosActivo falso es lineas
let cuadrosActivo = true
let english = true
let acabaAbrirPagina = true
let seAbrioMasInformación = false
let panelConfiguracion = false

function mensajeBienvenida(bool) {
    bool? encenderMensajedeBienvenida() : null
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
    seVeFoto = false
    document.querySelector("#profile").innerHTML = htmlAboutMe()
    document.querySelector(".regresarBoton").addEventListener("click", goBack)
}

function goBack() {
    seVeFoto = true
    document.querySelector("#profile").innerHTML = originalHTMLProfileCard
    actualizarTodo()
}

function generarTarjeta(arr) {
    document.querySelector("#board").innerHTML = pushTarjeta(arr);
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
        cambioDeLenguaje()
    }else {
        english = true
        cambioDeLenguaje()
    }
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










function actualizarTodo() {
    cambioDeLenguaje()
    agarrandoTodosIconos()
    seVeFoto? ponerFotoPerfil() : null
    actualizandoElBackground()
    actualizandoTexto()
}












