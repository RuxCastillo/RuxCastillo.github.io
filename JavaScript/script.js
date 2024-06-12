const foto = document.querySelector("#perfil-picture");

foto.addEventListener("click", alertFun);

function alertFun() {
    console.log("le diste click en la foto");
    board.innerHTML = "";
}