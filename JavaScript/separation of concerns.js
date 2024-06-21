function htmlDeBienvenida() {
    return (
        `<div class="bienvenida">
            <h2>${english? jsonDataLanguage[0].todaviaNoHagoEsto : jsonDataLanguage[1].todaviaNoHagoEsto }></h2>
            <p>${queJsonUsarParaLenguaje().todaviaNoHagoEsto}</p>
            //aqui arriba va mensaje de que la pagina esta hecha a mano como static para poder aprender lo mas que pueda, asi como que le hice muchos detalles para aprender y la hice con mucho cariño.
        </div>`
    )
}

function htmlAboutMe() {
    return (
        `<div id="cambioProfile">
            <div id="losP">
                <p class="aboutMeText1">${(english)? jsonDataLanguage[0].aboutMeText1 : jsonDataLanguage[1].aboutMeText1}</p>
                <p class="aboutMeText2">${(english)? jsonDataLanguage[0].aboutMeText2 : jsonDataLanguage[1].aboutMeText2}</p>
            </div>
            <button class="regresarBoton">Regresar</button>
        </div>`
    )
}

const originalHTMLProfileCard = document.querySelector("#profile").innerHTML

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

        }else if (arr === jsonDataWork) {
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
        } else {

            for (let i = arr.length - 1; i >= 0; i--) {

                tarjetasWorkPractice = (
                    `<div class="card">
                        <div class="tarjetaPractice">
                            <a href="${arr[i].codeButton}" target="_blank">
                                <img id="PracticeImg" src="${arr[i].img}" />
                            </a>
                            <h2 class="h2Practice">${arr[i].title}</h2>
                            <p class="pPractice">${arr[i].palabras}</p>
                        </div>
                    </div>`)
                resultado += tarjetasWorkPractice
            }
    }

    return resultado
} 

function verMasHTML() {
        return (
            `<div id="newBoard">
                <div onClick="board.innerHTML = loQueHabiaBoard"></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>`
        )
}
