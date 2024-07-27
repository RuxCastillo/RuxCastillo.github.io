function allSections(send) {
    const langNow = pagina.lang? 0 : 1;

    if(send === "aboutMe") {
        return(
            `
            <article class="about-me">
                <h1>Rubén López del Castillo</h1>
                <h2>${aboutMeText[langNow].h2}</h2>
                <p>${aboutMeText[langNow].p}</p>
                <div>
                    <a class="github" href="https://github.com/RuxCastillo"><img src="../Img/blanco/icons/github.png" /></a>
                    <a class="gmail" href="mailto:rubenldc1412@gmail.com"><img src="../Img/blanco/icons/gmail.png" /></a>
                    <a class="linkedin" href="https://www.linkedin.com/in/ruben-l-1811402a4/"><img src="../Img/blanco/icons/linked.png" /></a>
                </div>
            </article>
            <img  class="picture" src="../Img/Pic.png" />
            `
    )}

    if(send === "knowledge") {
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

    if(send === "proyects") {
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

    if(send === "practice") {
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
}