function htmlKnow() {
    const langNow = pagina.lang? 0 : 1;

        let resultado = ""
        knowledge[langNow].forEach((cert) => {
            resultado += `
            <div class="know">
                <img src="${cert.src}" />
                <h4>${cert.h4}</h4>
                <p>${cert.p}</p>
                <div class="icons">
                    <img><img><img><img><img>
                </div>
            </div> `
        })
        return resultado
}


const knowledge = [
    [
        {
            src: "./sections/certifications/img/universidad.jpg",
            h4: "UVEG: Universidad Virtual del Estado de Guanajuato (in progress)",
            p: "I am currently a software development engineering student, I am 15% of the way through the total curriculum.",
        },
        {
            src: "./sections/certifications/img/freeCodeCamp.png",
            h4: "UVEG: Universidad Virtual del Estado de Guanajuato (in progress)",
            p: "I am currently a software development engineering student, I am 15% of the way through the total curriculum.",
        }
    ],
    [
        {
            src: "./sections/certifications/img/universidad.jpg",
            h4: "UVEG: Universidad Virtual del Estado de Guanajuato (in progress)",
            p: "español",
        }
    ]
]