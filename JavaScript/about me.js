let profileCard = document.querySelector("#profile");
let originalPerfil = profileCard.innerHTML;
let aboutMe = document.querySelector(".aboutMe");

if(aboutMe) {
aboutMe.addEventListener("click", adentroVuelta);
}

function adentroVuelta() {
    seVeFoto = false
    console.log("adentroVuelta")

    profileCard.innerHTML = (
        `<div id="cambioProfile">
            <p class="aboutMeText">${(english)? jsonDataLanguage[0].aboutMeText : jsonDataLanguage[1].aboutMeText}</p>
            <button class="regresar">Regresar</button>
        </div>`
    )
    let regresar = document.querySelector(".regresar")
    regresar.addEventListener("click", goBack)

    aboutMe = document.querySelector(".aboutMe")
    aboutMe.addEventListener("click", goBack)
}

function goBack() {
    console.log("goBack")
    seVeFoto = true
    if (esBlanco) {
    profileCard.innerHTML = (`${originalPerfil}`)
    aboutMe.removeEventListener("click", goBack)
    } else {
    profileCard.innerHTML = (`${originalPerfil}`)
    cambioThemeABlanco("icon")
    aboutMe.removeEventListener("click", goBack)
    }
    let h31 = profileCard.querySelector(".ingenieria")
    let h32 = profileCard.querySelector(".abajoIngenieria")
    h31.innerText = ((english)? jsonDataLanguage[0].ingenieria : jsonDataLanguage[1].ingenieria)
    h32.innerText = ((english)? jsonDataLanguage[0].abajoIngenieria : jsonDataLanguage[1].abajoIngenieria)
}