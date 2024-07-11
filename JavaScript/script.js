    class EstadoActualPagina {
        constructor(isWhite, isEng, isPc, isPictureDisplay, callback) {
            this.isWhite = isWhite;
            this.isEng = isEng;
            this.isPc = isPc;
            this.isPictureDisplay = isPictureDisplay;
            this.notificationTheme = callback.notificationTheme;
            this.notificationDevice = callback.notificationDevice;
            this.notificationLang = callback.notificationLang;
        }
        themeChange() {
            this.isWhite = !this.isWhite;
            this.notificationTheme();
        }
        langChange() {
            this.isEng = !this.isEng;
            this.notificationLang();
        }
        deviceChange() {
            this.isPc = !this.isPc;
            this.notificationDevice();
        }
    }    

    let theme = true;
    function firstTheme() {
        let date = new Date()
        let hour = date.getHours()
        if(hour > 20 || hour < 11) {
            theme = false; 
        } 
    }

    let device = true;
    function firstWidth() {
        if(window.innerWidth < 781) {
            device = false;
        }
    } 


    firstTheme();
    firstWidth();
    const pagina = new EstadoActualPagina(theme, true, device, true, {
    notificationTheme() {
        console.log("ha cambiado el theme")
    },
    notificationDevice() {
        console.log("ha cambiado el dispositivo")
    },
    notificationLang() {
        console.log("ha cambiado el lenguaje")
    }
    })
    console.log(pagina);

    function changeTheme() {
        let colorNow = (pagina.isWhite)? "blanco" : "negro";
        let langNow = (pagina.isEng)? "ingles" : "español";

    }

    document.querySelector(".ing-esp").addEventListener("click", solicitudLang);
    document.querySelector("white-black").addEventListener("click", solicitudTheme);

















    const estadoPagina = {
        esBlanco: true,
        english: true,
        modoCel: "",
        barraLateralExiste: "",
        perfilAbiertoModoCel: "",
    }

    estamosenModoCel()
    estadoPagina.barraLateralExiste = (estadoPagina.modoCel)? true : false
    estadoPagina.perfilAbiertoModoCel = (estadoPagina.modoCel)? true : false

    function regresaStringDependiendoTheme() {
        return estadoPagina.esBlanco? "blanco" : "negro"
    }

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
    } else {
        document.querySelector("#profile").innerHTML = htmlAboutMe()
    }
    document.querySelector(".regresarBoton").addEventListener("click", goBack)
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
    if(estadoPagina.english === true) {
        estadoPagina.english = false
    }else if (estadoPagina.english === false) {
        estadoPagina.english = true
    }
    cambioDeLenguaje()
    elCuadrito()
    generarTarjeta(guradandoUltimoPush)
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
    actualizarTodo()
    
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

    loRelacionadoConCel()
     if(estadoPagina.modoCel) {
        estadoPagina.barraLateralExiste = false
        esconderPerfil()
        document.querySelector("#profile").style.display = "none"
    } else {
        document.querySelector("#profile").style.display = "grid"
    }
    actualizandoTexto()
    agarrandoTodosIconos()
    actualizandoElBackground()
    ponerFotoPerfil()
    elCuadrito()    
} 
function loRelacionadoConCel() {
    estamosenModoCel()

    if(estadoPagina.modoCel) {
        ponerLoDeLaDerecha() 
    }else {
        //quitarLoDeLaDerecha();
    }
}

function ponerLoDeLaDerecha() {
        if(!estadoPagina.barraLateral) {
            esconderPerfil()
        }
}

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
    }
}

function seeProfile() {
    if(!estadoPagina.perfilAbiertoModoCel) {
        estadoPagina.perfilAbiertoModoCel = true 
        document.querySelector("#board").innerHTML = ""
        document.querySelector("#board").innerHTML = guardadoPerfil
        estadoPagina.barraLateral = false
        actualizarTodo()
    }else {
        document.querySelector("#board").innerHTML = ""
        esconderPerfil()
    }
} 

//aqui cierra lo que tiene que ver con el theme cuando se cierra la pagina

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















