const foto = document.querySelector("#perfil-picture");

foto.addEventListener("click", alertFun);

function alertFun() {
    console.log("le diste click en la foto");
} 

const carta = document.querySelector(".card");
const work = document.querySelector(".work");

console.log(work);


const jsonFilePath = "./Data Base/works-projects.json";

let jsonDataWork = {};

fetch(jsonFilePath)
    .then(response => {
        if (!response.ok) {
            throw new Error("Error al cargar el archivo JSON");
        }
        return response.json();
    })
    .then(data => {
        jsonDataWork = data;
        console.log(jsonDataWork);
    })
    .catch(error => {
        console.error("Hubo un problema con la oepración de fetch:", error)
    });



