let originalPerfil = "";

aboutMe.addEventListener("click", adentroVuelta);

function adentroVuelta() {
    let profileCard = document.querySelector("#profile");
    originalPerfil = profileCard.innerHTML;
    seVeFoto = false
    console.log("adentroVuelta")

    profileCard.innerHTML = (
        `<div id="cambioProfile">
            <div id="losP">
                <p class="aboutMeText1">${(english)? jsonDataLanguage[0].aboutMeText1 : jsonDataLanguage[1].aboutMeText1}</p>
                <p class="aboutMeText2">${(english)? jsonDataLanguage[0].aboutMeText2 : jsonDataLanguage[1].aboutMeText2}</p>
            </div>
            <button class="regresarBoton">Regresar</button>
        </div>`
    )
    let regresar = document.querySelector(".regresarBoton")
    regresar.addEventListener("click", goBack)
}

function goBack() {
    let aboutMe = document.querySelector(".aboutMe");
    console.log("goBack")
    seVeFoto = true
    if (esBlanco) {
    profileCard.innerHTML = (`${originalPerfil}`)
    } else {
    profileCard.innerHTML = (`${originalPerfil}`)
    cambioThemeABlanco("icon")
    }
    let h31 = profileCard.querySelector(".ingenieria")
    let h32 = profileCard.querySelector(".abajoIngenieria")
    h31.innerText = ((english)? jsonDataLanguage[0].ingenieria : jsonDataLanguage[1].ingenieria)
    h32.innerText = ((english)? jsonDataLanguage[0].abajoIngenieria : jsonDataLanguage[1].abajoIngenieria)
    aboutMe = document.querySelector(".aboutMe");
    aboutMe.addEventListener("click", adentroVuelta)
}