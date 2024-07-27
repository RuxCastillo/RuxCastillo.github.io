function htmlAboutMe() {
    const langNow = pagina.lang? 0 : 1;

        return(
            `
            <article class="about-me">
                <h1>Rubén López del Castillo</h1>
                <h2>${aboutMeText[langNow].h2}</h2>
                <p>${aboutMeText[langNow].p}</p>
                <div>
                    <a class="github" href="https://github.com/RuxCastillo"><img src="../../assets/blanco/icons/github.png" /></a>
                    <a class="gmail" href="mailto:rubenldc1412@gmail.com"><img src="./assets/blanco/icons/gmail.png" /></a>
                    <a class="linkedin" href="https://www.linkedin.com/in/ruben-l-1811402a4/"><img src="./assets/blanco/icons/linked.png" /></a>
                </div>
            </article>
            <img  class="picture" src="./sections/about me/img/Pic.png" />
            `
        )

}

const aboutMeText = [
    {
        h2: "Software development engineering student with focus in Front-End.",
        p: "¡Welcome to my portfolio! Here you can see my projects/works. You can also see mini-projects that I've done from courses, I usually expand this projects give my own touch so they help me with more practice. I also invite you to check out my knowledge so you can see how I can contribute to your project/team."
    },
    {
        h2: "hola",
        p: "hola"

    }
]