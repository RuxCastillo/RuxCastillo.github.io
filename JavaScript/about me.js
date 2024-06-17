let aboutMe = document.querySelector(".aboutMe");
let profileCard = document.querySelector("#profile");
const originalPerfil = profileCard.innerHTML;


aboutMe.addEventListener("click", vuelta);

function vuelta() {

    profileCard.innerHTML = (
        `<p class="aboutMeText">${(idiomaActual === "en")? jsonDataLanguage[0].aboutMeText : jsonDataLanguage[1].aboutMeText}</p>
        <button class="regresar">Regresar</button>`
    )

    let regresar = document.querySelector(".regresar");
    regresar.addEventListener("click", goBack)

}

function goBack() {
    if ( colorActual === "white") {
    profileCard.innerHTML = (`${originalPerfil}`)
    } else {
    profileCard.innerHTML = (`${originalPerfil}`)
    cambioThemeABlanco()

    }
}

function aboutMeLang() {
    
    
}