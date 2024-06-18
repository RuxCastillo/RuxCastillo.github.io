const pagina = document.querySelector("#body");

let = cualBase
let = loQueHabiaBoard

function abreMas(lugar, elId) {
    if (lugar === 'practica') {
        cualBase = jsonDataPractice[elId]
    }else if (lugar === 'certificados') {
        cualBase = jsonDataCertifications[elId]
    } else {
        cualBase = jsonDataWork[elId]
    }
    cambiandoElBoard(cualBase)
}

function cambiandoElBoard(placeholder) {
    loQueHabiaBoard = board.innerHTML
    board.innerHTML = (`
        <div id="newBoard">
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

















