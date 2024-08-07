function htmlPractice(bool) {

    if(bool) {

    } else {
        variableCSS("--section-columns","repeat(5, 1fr)");
        variableCSS("--section-rows", "45%");
    }

    const langNow = pagina.lang? 0 : 1;

        let resultado = "";
        practice[langNow].forEach((practice) => {
            resultado += `
            <div class="practice">
                <a href="${practice.link}" target="_blank"><img src="${practice.src}" /></a>
                <h5>${practice.h5}</h5>
            </div>`
        })
        return resultado
}

const practice = [
    [   
        {
            src: "./sections/practice/img/1001.png",
            h5: "100 Days of CSS: Day 1 A tribute page",
            link: "https://ruxcastillo.github.io/Practice-Courses/Frontend/100%20days%20of%20CSS/Day%201%20A%20tribute%20page/"
        },        
        {
            src: "./sections/practice/img/timer.png",
            h5: "Making a timer with input from user",
            link: "https://ruxcastillo.github.io/Practice-Courses/Frontend/Timer/"
        },        
        {
            src: "./sections/practice/img/slides.png",
            h5: "50 days of Frontend: Day 1 Slides",
            link: "https://ruxcastillo.github.io/Practice-Courses/Frontend/50%20days%20udemy/Day%201%20Slides%20mio/"
        },
        {
            src: "./sections/practice/img/hover.png",
            h5: "100 days of CSS: Day 2 Hover Effect",
            link: "https://ruxcastillo.github.io/Practice-Courses/Frontend/100%20days%20of%20CSS/Day%202%20Hover%20Effect/"
        },
        {   src: "./sections/practice/img/simon dice.png",
            h5: "Practicing Js making a game of simon tell",
            link: "https://ruxcastillo.github.io/Practice-Courses/Frontend/Simon%20game/index.html"
        },
        {
            src: "./sections/practice/img/tinder perros.png",
            h5: "Practicing Bootstrap",
            link: "https://ruxcastillo.github.io/Practice-Courses/Frontend/Tinder%20para%20perros/index.html"
        },
        {
            src: "./sections/practice/img/drum kit.png",
            h5: "Practicing DOM and addEventListener",
            link: "https://ruxcastillo.github.io/Practice-Courses/Frontend/Drum%20kit%20game/index.html"
        },
        {
            src: "./sections/practice/img/dados.png",
            h5: "Making a game with dices",
            link: "https://ruxcastillo.github.io/Practice-Courses/Frontend/Dice%20game/dicee.html"
        },
        {
            src: "./sections/practice/img/painting.png",
            h5: "Practice of grid",
            link: "https://ruxcastillo.github.io/Practice-Courses/Frontend/Practice%20Grid%20Mondrian%20Painting/index.html",
        },
    ],
    [
        {
            src: "./sections/practice/img/timer.png",
            h5: "Haciendo un timer con input del usuario",
            link: "https://ruxcastillo.github.io/Practice-Courses/Frontend/Timer/index.html"
        },
        {
            src: "./sections/practice/img/slides.png",
            h5: "50 dias de webdev vanilla",
            link: "https://ruxcastillo.github.io/Practice-Courses/Frontend/Slides%20mio/index.html"
        },
        {
            src: "./sections/practice/img/hover.png",
            h5: "100 dias de CSS dia:",
            link: "https://ruxcastillo.github.io/Practice-Courses/Frontend/Hover/index.html"
        },
        {
            src: "./sections/practice/img/simon dice.png",
            h5: "Mejorando mis habilidades de Js haciendo un juego de simon dice",
            link: "https://ruxcastillo.github.io/Practice-Courses/Frontend/Simon%20game/index.html"
        },
        {
            src: "./sections/practice/img/tinder perros.png",
            h5: "Mejorando mis habilidades con bootstrap",
            link: "https://ruxcastillo.github.io/Practice-Courses/Frontend/Tinder%20para%20perros/index.html"
        },
        {
            src: "./sections/practice/img/drum kit.png",
            h5: "Practicando DOM y addEventListener",
            link: "https://ruxcastillo.github.io/Practice-Courses/Frontend/Drum%20kit%20game/index.html"
        },
        {
            src: "./sections/practice/img/dados.png",
            h5: "Practice haciendo juego de azar con dados",
            link: "https://ruxcastillo.github.io/Practice-Courses/Frontend/Dice%20game/dicee.html"
        },
        {
            src: "./sections/practice/img/painting.png",
            h5: "Practice grid with this project",
            link: "https://ruxcastillo.github.io/Practice-Courses/Frontend/Practice%20Grid%20Mondrian%20Painting/index.html",

        },
    ]
]