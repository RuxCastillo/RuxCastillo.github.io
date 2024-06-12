const foto = document.querySelector("#perfil-picture");

foto.addEventListener("click", alertFun);

function alertFun() {
    console.log("le diste click en la foto");
    board.innerHTML = "";
} 

const carta = document.querySelector(".card");
const work = document.querySelector(".work");

console.log(work);

// Aqui va el agregar los json que tengo.

const jsonFilePathWork = "./Data Base/works-projects.json";
const jsonFilePathCertifications = "./Data Base/certifications.json";
const jsonFilePathPractice = "./Data Base/practice.json";

let jsonDataWork = {};
let jsonDataCertifications = {};
let jsonDataPractice = {};

fetch(jsonFilePathWork)
    .then(response => {
        if (!response.ok) {
            throw new Error("Work: Error al cargar el archivo JSON");
        }
        return response.json();
    })
    .then(data => {
        jsonDataWork = data;
        console.log(jsonDataWork);
    })
    .catch(error => {
        console.error("Work: Hubo un problema con la operación de fetch:", error)
    });

fetch(jsonFilePathCertifications)
    .then(response => {
        if (!response.ok) {
            throw new Error("Certs: Error al cargar el archivo JSON");
        }
        return response.json();
    })
    .then(data => {
        jsonDataCertifications = data;
        console.log(jsonDataCertifications);
    })
    .catch(error => {
        console.error("Certs: Hubo un problema con la operación de fetch:", error)
    });

fetch(jsonFilePathPractice)
    .then(response => {
        if (!response.ok) {
            throw new Error("Practice: Error al cargar el archivo JSON");
        }
        return response.json();
    })
    .then(data => {
        jsonDataPractice = data;
        console.log(jsonDataPractice);
    })
    .catch(error => {
        console.error("Practice: Hubo un problema con la oepración de fetch:", error)
    });

// Aqui se acaba el traer las tarjetas.

const board = document.querySelector(".board");

const works = document.querySelector(".works-projects");

works.addEventListener(
    "click", 
    function () {
        generarTarjetas(jsonDataWork)
    }
    );

function generarTarjetas(arr) {
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