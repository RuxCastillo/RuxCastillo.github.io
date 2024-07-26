function allSections(send) {

    const langNow = pagina.lang? 0 : 1;
    console.log(langNow)

    if(send === "aboutMe") {
        return(
            `
            <article class="about-me">
                <h1>Rubén López del Castillo</h1>
                <h2>${aboutMeText[langNow].h2}</h2>
                <p>${aboutMeText[langNow].p}</p>
                <div>
                    <a class="github" href="https://github.com/RuxCastillo"><img src="../Img/blanco/icons/github.png" /></a>
                    <a class="gmail" href"mailto:rubenldc1412@gmail.com"><img src="../Img/blanco/icons/gmail.png" /></a>
                </div>
            </article>
            <img  class="picture" src="../Img/Pic.png" />
            `
    )}

    if(send === "knowledge") {
        return(
            `
            <article class="know">
                <img src="${knowledge[langNow][0].src}" />
                <h3>${knowledge[langNow][0].h3}</h3>
                <p>${knowledge[langNow][0].p}</p>
                <div class="icons">
                    <img><img><img><img><img>
                </div>
            </article>
            `
        )
    }
    
}