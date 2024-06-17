const foto = document.querySelector("#perfil-picture");

foto.addEventListener("click", alertFun);

function alertFun() {
    console.log("le diste click en la foto");
    enDondeEstamos = "inicio"
    console.log(enDondeEstamos)
    board.innerHTML = "";
}

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