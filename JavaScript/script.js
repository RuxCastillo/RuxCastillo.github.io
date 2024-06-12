const foto = document.querySelector("#perfil-picture");

foto.addEventListener("click", alertFun);

function alertFun() {
    console.log("le diste click en la foto");
    board.innerHTML = "";
} 

const carta = document.querySelector(".card");
const work = document.querySelector(".work");

console.log(work);


const board = document.querySelector(".board");

const works = document.querySelector(".works-projects");

works.addEventListener(
    "click", 
    function () {
        generarTarjetas(jsonDataWork)
    }
    );

function generarTarjetas(arr) {
    board.innerHTML = "";
    let resultado = "";

    const totalTarjetas = arr.length;

    for (let i = 0; i < arr.length; i++) {
        let addHTML = (
            `<div class="card ${i}">
                <div class="tarjeta ${i}">
                    <h2>${arr[i].title}</h2>
                    <img />
                    <p>${arr[i].palabrasclave}</p>
                    <button>Ver Codigo</button>
                    <button>Ver mas...</button>
                </div>
            </div>`

        )

        resultado += addHTML;
    }

    console.log(resultado)
    board.innerHTML = resultado;
}