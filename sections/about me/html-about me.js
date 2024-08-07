function htmlAboutMe(bool) {
    let letterPlace;
    let picturePlace;
    let relative;
    let me = document.querySelector(".me");
    let sleep = (window.innerHeight < 500 || window.innerWidth < 800)? " sleep" : ""

    if(bool) {
        letterPlace = " mobile-abm";
        picturePlace = " mobile-pic";
        relative = "container"
        variableCSS("--section-rows", "4fr 6fr")
        variableCSS("--section-columns", "1fr")
        me.innerText = "ME"
        variableCSS("--main-rows", "7% 93%")  
    } else {
        letterPlace = "";
        picturePlace = "";
        relative = "container-pc"
        variableCSS("--section-rows", "1fr")
        variableCSS("--section-columns", "1fr .6fr")
        me.innerText = "ABOUT ME"
        variableCSS("--main-rows", "1fr 9fr")  
    }

    if(sleep === " sleep") {
        variableCSS("--section-rows", "0fr 1fr")
    } 

    const langNow = pagina.lang? 0 : 1;

        return(
            `
            <article class="about-me ${letterPlace}">
                <h1>Rubén López del Castillo</h1>
                <h2>${aboutMeText[langNow].h2}</h2>
                <p>${aboutMeText[langNow].p}</p>
                <div>
                    <a class="github" href="https://github.com/RuxCastillo"><img src="../../assets/${path}/icons/github.png" /></a>
                    <a class="gmail" href="mailto:rubenldc1412@gmail.com"><img src="./assets/${path}/icons/gmail.png" /></a>
                    <a class="linkedin" href="https://www.linkedin.com/in/ruben-l-1811402a4/"><img src="./assets/${path}/icons/linked.png" /></a>
                </div>
            </article>
            <div class="${relative}${sleep}">
                <img class="picture ${picturePlace}${sleep}" src="./sections/about me/img/Pic.png" />
            </div>
            `
        )
}

const aboutMeText = [
    {
        h2: "Software development engineering student with focus in Front-End.",
        p: "¡Welcome to my portfolio! Here you can see my projects/works. You can also see mini-projects that I've done from courses, I usually expand these projects give my own touch so they help me with more practice. I also invite you to check out my knowledge so you can see how I can contribute to your project/team."
    },
    {
        h2: "Estudiante de ingeniería en desarrollo de software con enfoque en Front-End.",
        p: "¡Bienvenidos a mi portafolio! Aquí podrán ver mis proyectos/trabajos. También podrán ver mini-proyectos que he realizado en cursos, suelo ampliar estos proyectos dándoles mi toque personal para que me ayuden con más práctica. También los invito a que revisen mis conocimientos para que puedan ver cómo puedo aportar a su proyecto/equipo."
    }
]