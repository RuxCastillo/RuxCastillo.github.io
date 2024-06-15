const theme = document.querySelector("#moon");
const language = document.querySelector("#language");
const body = document.querySelector("#body");

theme.addEventListener("click", cambioTheme);
language.addEventListener("click", cambioLanguage);


function cambioTheme() {
    console.log("le diste click a cambio theme")
    theme.setAttribute("src", "./Img/icons/sun.png")
    body.style.backgroundImage = "url(../Img/darktheme.jpg"
    body.style.color = "white"
    console.log(fondo)
}

function cambioLanguage() {
    console.log("le diste click a cambio language")
}