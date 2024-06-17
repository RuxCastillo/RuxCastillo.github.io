const profileCard = document.querySelector("#profile");
const originalPerfil = profileCard.innerHTML;
const aboutMe = document.querySelector(".aboutMe");

queHaceAboutMe(seVeFoto)

function queHaceAboutMe(ph) {
    console.log("queHaceAboutMe", ph, aboutMe)
    if (ph) {
        console.log(aboutMe)
        aboutMe.addEventListener("click", vuelta);
    }else {
        aboutMe.addEventListener("click", goBack)
    }
}

function vuelta() {
    seVeFoto = false 

    let regresar = document.querySelector(".regresar");
    regresar.addEventListener("click", goBack)
    queHaceAboutMe(seVeFoto)
}

function adentroVuelta() {

    profileCard.innerHTML = (
        `<div id="cambioProfile">
            <p class="aboutMeText">${(english)? jsonDataLanguage[0].aboutMeText : jsonDataLanguage[1].aboutMeText}</p>
            <button class="regresar">Regresar</button>
        </div>`
    )

}

function goBack() {
    aboutMe.addEventListener("click", vuelta);
    if ( colorActual === "white") {
    profileCard.innerHTML = (`${originalPerfil}`)
    } else {
    profileCard.innerHTML = (`${originalPerfil}`)
    cambioThemeABlanco("icon")

    }
}