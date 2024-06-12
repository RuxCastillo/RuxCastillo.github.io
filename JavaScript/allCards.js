const board = document.querySelector("#board");
const works = document.querySelector(".works-projects");
const certs = document.querySelector(".certifications");
const practice = document.querySelector(".practice");

practice.addEventListener(
    "click",
    function () {
        generarPractice(jsonDataPractice)
    });


works.addEventListener(
    "click", 
    function () {
        generarTarjetas(jsonDataWork)
    });

certs.addEventListener(
    "click",
    function () {
        generarCerts(jsonDataCertifications)
    });

function generarPractice(arr) {
    board.innerHTML = "";
    let resultado = "";

    const totalTarjetas = arr.length

    for (let i = 0; i < totalTarjetas; i++) {
        let addHTML = (
            `<div class="card">
                <div class="tarjeta">
                    <h2>${arr[i].title}</h2>
                    <img />
                    <p>${arr[i].palabrasclave}</p>
                    <button>Ver Codigo</button>
                    <button>Ver mas...</button>
                </div>
            </div>`
        )
        resultado += addHTML
    }
    console.log(resultado);
    board.innerHTML = resultado;
}

function generarCerts(arr) {
    board.innerHTML = "";
    let resultado = "";

    const totalTarjetas = arr.length

    for (let i = 0; i < totalTarjetas; i++) {
        let addHTML = (
            `<div class="card">
                <div class="certs">
                    <h2 class="certh2">${arr[i].title}</h2>
                    <img class="certimg1" src="${arr[i].img}"/>
                    <p class="certp">${arr[i].palabrasClave}</p>
                </div>
            </div>`
        )
    resultado += addHTML;
    }
    console.log(resultado);
    board.innerHTML = resultado;
}

function generarTarjetas(arr) {
    board.innerHTML = "";
    let resultado = "";

    const totalTarjetas = arr.length;

    for (let i = 0; i < totalTarjetas; i++) {
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
};