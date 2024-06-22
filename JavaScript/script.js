//aqui van las variables globales para la toma de decisiones, estas se actualizan con el estado actual de la pagina

const estadoPagina = {
    esBlanco: "",
    english: "",
    modoCel: "",
    barraLateralExiste: "",
    perfilAbiertoModoCel: "",
}

obteniendoDatos()
console.log(estadoPagina)

function obteniendoDatos() {
    consiguiendoLaHoraActual()
    estadoPagina.english = true
    estamosenModoCel()
    estadoPagina.barraLateralExiste = (estadoPagina.modoCel)? true : false
    estadoPagina.perfilAbiertoModoCel = (estadoPagina.modoCel)? true : false
}



function regresaStringDependiendoTheme() {
    return estadoPagina.esBlanco? "blanco" : "negro"
}

//estas tienen que ver con el mostrar los iconos en el color que deben
function agarrandoTodosIconos() {
    let allIconsHTML = document.querySelectorAll(".cambio")
    for(const variable of allIconsHTML) {
        const path = Path.deLosIconos(variable.name)
        variable.setAttribute("src", path)
    }
}

function ponerFotoPerfil() {
    document.querySelector("#perfileImg").setAttribute("src", Path.fotoDePerfil())
}

function verAboutMe() {
    if(estadoPagina.modoCel) {
        document.querySelector("#board").innerHTML = htmlAboutMe()
        document.querySelector(".regresarBoton").addEventListener("click", goBack)
    } else {
        document.querySelector("#profile").innerHTML = htmlAboutMe()
        document.querySelector(".regresarBoton").addEventListener("click", goBack)
    }
}

function goBack() {
    if(estadoPagina.modoCel) {
        document.querySelector("#board").innerHTML = originalHTMLProfileCard
    } else {
        document.querySelector("#profile").innerHTML = originalHTMLProfileCard
    }
    actualizarTodo()
}

function generarTarjeta(arr) {
    document.querySelector("#board").innerHTML = pushTarjeta(arr);
    actualizarTodo()
}

//actualizando el background
function actualizandoElBackground() {
    document.querySelector("#body").style.backgroundImage = Path.background()
}

function actualizandoTexto() {
    document.querySelector("#body").style.color = (estadoPagina.esBlanco? "black" : "white")
}

function solicitudCambioTheme() {
    if(estadoPagina.esBlanco) {
        estadoPagina.esBlanco = false
    } else {
        estadoPagina.esBlanco = true
    }
    actualizarTodo()
}

//ahora vamos a cambiar el lenguaje
function solicitudCambioLenguaje() {
    if(estadoPagina.english) {
        estadoPagina.english = false
    }else {
        estadoPagina.english = true
    }
    cambioDeLenguaje()
    elCuadrito()
}

function queJsonUsarParaLenguaje() {
    return estadoPagina.english? enEs[0] : enEs[1]
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
    if(estadoPagina.english) {
        document.querySelector("#language").name = "en"
        let change = Path.deLosIconos(document.querySelector("#language").name)
        document.querySelector("#language").setAttribute("src", change)
    } else {
        document.querySelector("#language").name = "es"
        let change = Path.deLosIconos(document.querySelector("#language").name)
        document.querySelector("#language").setAttribute("src", change)
    }
}


let noRepeat = 0;
function numeroRandomParaCuadrito() {
    nume = estadoPagina.english? 12 : 8;
    let numRandom = Math.floor(Math.random() * nume) + 1;
    while(noRepeat === numRandom) {
        numRandom = Math.floor(Math.random() * nume) + 1
    }
    noRepeat = numRandom
    return numRandom
}

function elCuadrito() {
    document.querySelector("#phrase").setAttribute("src", Path.delCuadrito())
}

function actualizarTodo() {
    actualizandoTexto()
    cambioDeLenguaje()
    agarrandoTodosIconos()
    actualizandoElBackground()
    ponerFotoPerfil()
    elCuadrito()
    loRelacionadoConCel()
     if(estadoPagina.modoCel) {
        estadoPagina.barraLateralExiste = false
        esconderPerfil()
        
    } 
 
}

function estamosenModoCel() {
    if(window.innerWidth < 781) {
        estadoPagina.modoCel = true
    } else {
        estadoPagina.modoCel = false
    }
}

function loRelacionadoConCel() {
    estamosenModoCel()

    if(estadoPagina.modoCel) {
        ponerLoDeLaDerecha() 
    }else {
        quitarLoDeLaDerecha();
    }
    console.log("lorelacionadoconcel")
}

function ponerLoDeLaDerecha() {
        if(!estadoPagina.barraLateral) {
            esconderPerfil()
        }
        console.log("ponerlodeladerecha")
}

/* function quitarLoDeLaDerecha() {
    console.log("quitarlodeladerecha")
    if(estadoPagina.barraLateralExiste) {
    document.querySelector("#profile").style.display = "grid"
        estadoPagina.barraLateralExiste = false
        document.querySelector("#main").innerHTMl -= (
            `<div id="abrirPerfil" onclick="seeProfile()">
                <div id="seeProfile"><h3 id="miNombre">Rubén López C.</h3></div>
            </div>`
        )
    }
} */

let guardadoPerfil = document.querySelector("#profile").innerHTML
function esconderPerfil() {
    if(!estadoPagina.barraLateralExiste) {
        estadoPagina.barraLateralExiste = true
        document.querySelector("#profile").style.display = "none"
        document.querySelector("#board").innerHTML += (
            `<div id="abrirPerfil" onclick="seeProfile()">
                <div id="seeProfile"><h3 id="miNombre">Rubén López C.</h3></div>
            </div>`
    )
} else {
    
    document.querySelector("#profile").style.display = "grid"
console.log("esconderperfil")
}

}

function seeProfile() {
    if(!estadoPagina.perfilAbiertoModoCel) {
        estadoPagina.perfilAbiertoModoCel = true 
        estadoPagina.modoCel = true
        console.log("abrir perfil")
        document.querySelector("#board").innerHTML = ""
        document.querySelector("#board").innerHTML = guardadoPerfil
        estadoPagina.barraLateral = false
        actualizarTodo()
    }else {
        document.querySelector("#board").innerHTML = ""
        estadoPagina.barraLateral = false
        estadoPagina.perfilAbiertoModoCel = true 
        esconderPerfil()
        console.log("esconderperfil2")
    }
} 



//esto tiene que ver con el theme cuando se abre la pagina
function consiguiendoLaHoraActual() {
    let date = new Date()
    let hours = date.getHours()
    temaDependeDeHora(hours)
}
function temaDependeDeHora(hour) {
    estadoPagina.esBlanco = true
    console.log(estadoPagina.esBlanco)
    if (hour < 9 || hour >= 20) {
        solicitudCambioTheme()
    }   
}
//aqui cierra lo que tiene que ver con el theme cuando se cierra la pagina

function abreMas(lugar, elId) {
    let cualBase
    if (lugar === 'practica') {
        cualBase = practice[elId]
    }else if (lugar === 'certificados') {
        cualBase = certifications[elId]
    } else {
        cualBase = workProjects[elId]
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
            estadoPagina.perfilAbiertoModoCel = false
            seeProfile()
        }
}
}

window.addEventListener("load", iniciarProfile)

function iniciarProfile() {
    if(window.innerWidth < 782) {
        estadoPagina.perfilAbiertoModoCel = false
        seeProfile()
    }

}

const Path = {
    deLosIconos: function(nameImage) {
        return `./Img/${regresaStringDependiendoTheme()}/icons/${nameImage}.png`
    },
    fotoDePerfil: function() {
        return `./Img/${regresaStringDependiendoTheme()}/Perfil.png`
    },
    background: function() {
        return `url(../Img/${regresaStringDependiendoTheme()}/Fondo.jpg)`
    },
    delCuadrito: function() {
        return  `./Img/${regresaStringDependiendoTheme()}/${(estadoPagina.english)? "ingles" : "español"}/${numeroRandomParaCuadrito()}.png`
    }

}

if(estadoPagina.modoCel) {
    document.querySelector("#board").innerHTML = ""
    seeProfile()    
}else {
    generarTarjeta(certifications)
}















