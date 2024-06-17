const board = document.querySelector("#board");
const works = document.querySelector(".works-projects");
const certs = document.querySelector(".certifications");
const practice = document.querySelector(".practice");


practice.addEventListener(
    "click",
    function () {
        generarTarjeta(jsonDataPractice)
    });


works.addEventListener(
    "click", 
    function () {
        generarTarjeta(jsonDataWork)
    });

certs.addEventListener(
    "click",
    function () {
        generarTarjeta(jsonDataCertifications)
    });



function generarTarjeta(arr) {
    console.log(arr)
    board.innerHTML = "";
    board.innerHTML = pushTarjeta(arr);
}

function pushTarjeta(arr) {
    let resultado = "";
    let tarjetasWorkPractice = "";

    if (arr === jsonDataCertifications) {

    for (let i = arr.length -1; i >= 0; i--) {
        tarjetasWorkPractice = (
            `<div class="card">
                <div class="certs" onClick="abreMas('certificados', ${arr[i].id})">
                    <img class="certimg1" src="${arr[i].img}"/>
                    <h2 class="certh2">${arr[i].title}</h2>
                    <p class="certp">${arr[i].palabrasClave}</p>
                </div>
            </div>`
        )
    resultado += tarjetasWorkPractice;
    }

    }else {

    for (let i = arr.length -1; i >= 0; i--) {

        tarjetasWorkPractice = (
            `<div class="card">
                <div class="tarjeta">
                    <a href="${arr[i].pagina}" target="_blank">
                        <img src="${arr[i].img}" />
                    </a>
                    <h2>${arr[i].title}</h2>
                    <p>${arr[i].palabras}</p>
                    <button class="code-button"><a href="${arr[i].codeButton}" target="_blank">Ver Codigo</a></button>
                    <button onClick="abreMas('practica', ${arr[i].id})" class="ver-mas">Ver mas</button>
                </div>
            </div>`)
        resultado += tarjetasWorkPractice
    }
    }

    return resultado
}