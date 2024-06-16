let aboutMe = document.querySelector(".aboutMe");
let profileCard = document.querySelector("#profile");
const originalPerfil = profileCard.innerHTML;


aboutMe.addEventListener("click", vuelta);

function vuelta() {

    profileCard.innerHTML = `<button class="regresar">Regresar</button>`
    let regresar = document.querySelector(".regresar");
    regresar.addEventListener("click", goBack)

}

function goBack() {
    profileCard.innerHTML = (
                    `${originalPerfil}`)
}