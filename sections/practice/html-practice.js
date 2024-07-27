function htmlPractice(send) {
    const langNow = pagina.lang? 0 : 1;

        let resultado = "";
        practice[langNow].forEach((practice) => {
            resultado += `
            <div class="practice">
                <img src="${practice.src}
                <h5>${practice.h5}</h5>
                <p>${practice.p}</p>
            </div>`
        })
        return resultado
}

const practice = [
    [
        {
            src: "./img/",
            h5: "Node",
            p: "basic ejs englis"
        }
    ],
    [
        {
            src: "./img/",
            h5: "Nodees",
            p: "españolbasic ejs englis"
        }
    ]
]