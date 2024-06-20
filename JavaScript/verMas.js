function abreMas(lugar, elId) {
    if (lugar === 'practica') {
        let cualBase = jsonDataPractice[elId]
    }else if (lugar === 'certificados') {
        let cualBase = jsonDataCertifications[elId]
    } else {
        let cualBase = jsonDataWork[elId]
    }
    cambiandoElBoard(cualBase)
}

function cambiandoElBoard(placeholder) {
    let loQueHabiaBoard = board.innerHTML
    board.innerHTML = (
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

















