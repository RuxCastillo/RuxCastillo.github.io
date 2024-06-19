

//true es white
let esBlanco = true
//seVeFoto es true cuando se ve la foto
let seVeFoto = true 
//cuadrosActivo falso es lineas
let cuadrosActivo = true
//english si es true esta en ingles
let english = true
//acabaAbrirPagina solo esta true al inicio cuando se abre la pagina
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
    return esBlanco? "negro" : "blanco"
}

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















function actualizarTodo() {
    agarrandoTodosIconos()
    ponerFotoPerfil()

}












