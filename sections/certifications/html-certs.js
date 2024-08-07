function htmlKnow(bool) {
    let mobileCerts = (bool)? "mobile-certs" : "";

    if(bool) {
        variableCSS("--certs-img", "none")
        variableCSS("--know-columns", "1fr")
    } else {
        variableCSS("--certs-img", "block")
        variableCSS("--know-columns", "1fr 3fr")
        
    }
    variableCSS("--section-columns", "1fr")
    variableCSS("--section-rows", "29rem")
    variableCSS("--section-auto-rows", "29rem")

    const langNow = pagina.lang? 0 : 1;

        let resultado = ""
        knowledge[langNow].forEach((cert) => {
            resultado += `
            <div class="know ${mobileCerts}">
                <img src="${cert.src}" />
                <h4>${cert.h4}</h4>
                <p>${cert.p}</p>
                 <div class="icons-certs">
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
        resultado += `<img src=../../assets/color/${icon}.png />`
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
            p: "This course was about exploring many parts of JavaScript both inside the browser and outside with node, as well as some projects in which they gave me knowledge about APIs, I learned a lot which has allowed me to improve a lot when writing code, in addition to understanding various parts of how to use Js to program web pages,",
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
            p: "Este curso fue explorar muchísimas partes de JavaScript tanto dentro del browser como afuera con node, además de algunos proyectos en los que me dieron conocimientos sobre APIs, aprendí muchísimo lo cual me ha permitido mejorar mucho al escribir código, además de entender varias partes de cómo usar Js para programar páginas web",
            img: ["Js", "Node", "API"]
        },
    ]]
