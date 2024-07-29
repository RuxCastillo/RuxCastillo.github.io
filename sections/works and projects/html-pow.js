function htmlpow() {
    const langNow = pagina.lang? 0 : 1;

        let resultado = "";
        proyects[langNow].forEach((pow) => {
            resultado += `
            <div class="proyects">
                <img src="${pow.src}" />
                <h3>${pow.h3}</h3>
                <p>${pow.p}</p>
            </div>`
        })
        return resultado
}


const proyects = [
    [
        {
            src: "./img/1project.png",
            h3: "AnkiQuestions",
            p: "Aqui va la descripcion de Ankiquestions en ingles"
        },
        {
            src: "./img/1project.png",
            h3: "FixUp Electronics",
            p: "EspañolAqui va la descripcion de Ankiquestions en ingles"
        }
    ]
]