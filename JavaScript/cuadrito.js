
function lenguajeActual(idioma) {
    return ((idioma)? "ingles" : "español")
}

let noRepeat = 0;
function numeroRandom() {
    nume = english? 12 : 8;
    let numRandom = Math.floor(Math.random() * nume) + 1;

    while(noRepeat === numRandom) {
        console.log("fue repetido", numRandom, noRepeat)
        numRandom = Math.floor(Math.random() * nume) + 1
    }

    noRepeat = numRandom
    return numRandom
}

function queColor(colorActual) {
    return ((colorActual)? "fondo blanco" : "fondo negro")
}

function elegirCarpeta() {
    path =  `./Img/esquina/${lenguajeActual(english)}/${queColor(esBlanco)}/${numeroRandom()}.png`
    console.log(path)
    return path 
}

function elCuadrito() {
    let cuadri = document.querySelector("#phrase")
    cuadri.setAttribute("src", elegirCarpeta())
}

elCuadrito()

