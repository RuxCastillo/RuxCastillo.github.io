
// Aqui va el agregar los json que tengo.

const jsonFilePathWork = "./Data Base/works-projects.json";
const jsonFilePathCertifications = "./Data Base/certifications.json";
const jsonFilePathPractice = "./Data Base/practice.json";
const jsonFileLanguage = "./Data Base/en-es.json";


let jsonDataWork = {}
let jsonDataCertifications = {}
let jsonDataPractice = {}
let jsonDataLanguage = {}

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
        console.error("Practice: Hubo un problema con la operación de fetch:", error)
    });


fetch(jsonFileLanguage)
    .then(response => {
        if (!response.ok) {
            throw new Error("Language: Error al cargar el archivo JSON");
        }
        return response.json();
    })
    .then(data => {
        jsonDataLanguage = data;
        console.log(jsonDataLanguage);
    })
    .catch(error => {
        console.error("Language: Hubo un problema con la operación de fetch:", error)
    });


// Aqui se acaba el traer las tarjetas.