function htmlKnow(bool) {

    if(bool) {

    } else {
        variableCSS("--section-columns", "1fr")
        variableCSS("--section-rows", "35%")
        variableCSS("--section-auto-rows", "35%")
    }

    const langNow = pagina.lang? 0 : 1;

        let resultado = ""
        knowledge[langNow].forEach((cert) => {
            resultado += `
            <div class="know">
                <img src="${cert.src}" />
                <h4>${cert.h4}</h4>
                <p>${cert.p}</p>
                <div class="icons">
                    ${icons(cert)}
                </div>
            </div> `
        })
        return resultado

}

function icons(obj) {
    let iterar = obj.img;
    if(!(iterar)) return;

    let resultado = ""
    iterar.forEach((icon) => {
        resultado += `<img src=../../assets/color/${icon}.png>`
    })

    return resultado
}
        
const knowledge = [
    [
        {
            src: "./sections/certifications/img/universidad.jpg",
            h4: "UVEG: Virtual University of the State of Guanajuato (in progress)",
            p: "I am currently a software development engineering student, I am 15% of the way through the total curriculum.",
            img: ["BD"]
        },
        {
            src: "./sections/certifications/img/freeCodeCamp.png",
            h4: "freeCodeCamp: Responsive Web Design",
            p: "I started learning HTML and CSS in this course. I did many projects that gradually became more difficult, both accompanied and solo projects, which are in the practice section. Among several topics, I learned about variables in CSS, Grid, Flexbox, responsive pages, accessibility in HTML, HTML forms, and HTML structure.",
            img: ["HTML", "CSS"]

        },
        {
            src: "./sections/certifications/img/2024 bootcamp Dra Angela Yu.jpeg",
            h4: "The Complete 2024 Web Development Bootcamp",
            p: "En este curso vi varios temas relacionados en a Js y aparte se me dieron ejemplos de aplicaciónes realjes usando los conocimientos que me dieron empece con ",
            img: ["HTML", "CSS","Bootstrap", "Diseño", "Js", "JQuery", "Node", "Git", "API", "BD", "PostgreSQL", "React"]
        },
        {
            src: "./sections/certifications/img/Js Bootcamp.png",
            h4: "The Modern Javascript Bootcamp Course",
            p: "I learned a lot about front end, I explored my knowledge in html, CSS and Js in more depth, I learned to use jQuery, Bootstrap, react. I was also introduced to topics such as web design, Git/GitHub and I had my first approach to the back end looking at topics such as node, express, npm, EJS, API, databases in general and I learned to use PostgreSQL, Authentication and security and at the end a bit of Web3.",
            img: ["Js", "Node", "API"]
        },
    ],
    [
        {
            src: "./sections/certifications/img/universidad.jpg",
            h4: "UVEG: Universidad Virtual del Estado de Guanajuato (en progreso)",
            p: "Actualmente soy estudiante de ingeniería de desarrollo de software, he cursado el 15% del total del plan de estudios.",
            img: ["BD"]
        },
        {
            src: "./sections/certifications/img/freeCodeCamp.png",
            h4: "freeCodeCamp: Diseño Web Responsivo",
            p: "Inicié aprendiendo HTML y CSS en este curso, hice muchos proyectos que poco a poco fueron más difíciles, tanto acompañado como proyectos solo, los cuales están en la sección de práctica, entre varios temas aprendí sobre variables en CSS, Grid, Flexbox, paginas responsivas, accesibilidad en HTML, forms HTML y estructura de HTML.",
            img: ["HTML", "CSS"]
        },
        {
            src: "./sections/certifications/img/2024 bootcamp Dra Angela Yu.jpeg",
            h4: "El Bootcamp de desarrollo web completo de 2024",    
            p: "Aprendí mucho sobre front end, exploré más a profundidad mis conocimientos en html, CSS y Js, aprendía usar jQuery, Bootstrap, react. Tambien me introdujeron en temas como el diseño web, Git/GitHub y tuve mi primer acercamiento con el back end viendo temas como node, express, npm, EJS, API, bases de datos en general y aprendí a usar PostgreSQL, Autenticación y seguridad y al final un poco de Web3",
            img: ["HTML", "CSS","Bootstrap", "Diseño", "Js", "JQuery", "Node", "Git", "API", "BD", "PostgreSQL", "React"]
        },
        {
            src: "./sections/certifications/img/Js Bootcamp.png",
            h4: "The Modern Javascript Bootcamp Course",
            p: "I learned a lot about front end, I explored my knowledge in html, CSS and Js in more depth, I learned to use jQuery, Bootstrap, react. I was also introduced to topics such as web design, Git/GitHub and I had my first approach to the back end looking at topics such as node, express, npm, EJS, API, databases in general and I learned to use PostgreSQL, Authentication and security and at the end a bit of Web3.",
            img: ["Js", "Node", "API"]
        },
    ]
]