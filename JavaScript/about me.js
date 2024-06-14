let aboutMe = document.querySelector(".aboutMe");
let profileCard = document.querySelector("#profile");


aboutMe.addEventListener("click", vuelta);

function vuelta() {

    profileCard.innerHTML = `<button class="regresar">Regresar</button>`
    let regresar = document.querySelector(".regresar");
    regresar.addEventListener("click", goBack)

}

function goBack() {
    profileCard.innerHTML = (
                    `<img src="https://github.com/RuxCastillo/Img-host/blob/main/Perfil%20background%20transparent.png?raw=true" alt="perfil picture" id="perfil-picture" />
                    <div id="info">
                        <h1>Rubén López C.</h1>
                        <h3>Engineering Student in Software Development.</h3>
                        <h3>Full-Stack developer with focus in Front-End</h3>
                        <div class="div-icons">
                            <img id="icon" src="https://github.com/RuxCastillo/Img-host/blob/main/icons/javascript.png?raw=true" />
                            <img id="icon" src="https://github.com/RuxCastillo/Img-host/blob/main/icons/node.png?raw=true" />
                            <img id="icon" src="https://github.com/RuxCastillo/Img-host/blob/main/icons/react.png?raw=true" />
                            <img id="icon" src="https://github.com/RuxCastillo/Img-host/blob/main/icons/postgresql.png?raw=true" />
                            <img id="icon" src="https://github.com/RuxCastillo/Img-host/blob/main/icons/typescript.png?raw=true" />
                        </div>
                        <div class="div-icons">
                            <a href="https://www.linkedin.com/in/ruben-l-1811402a4/"><img id="icon" src="https://github.com/RuxCastillo/Img-host/blob/main/icons/linked-in.png?raw=true" /></a>
                            <a href="https://github.com/RuxCastillo"><img id="icon" src="https://github.com/RuxCastillo/Img-host/blob/main/icons/github.png?raw=true" /></a>
                            <a href="mailto:rubenldc1412@gmail.com?Subject=Estaba%20mirando%20tu%20perfil%20y%20queria%20contactarte."><img id="icon" src="https://github.com/RuxCastillo/Img-host/blob/main/gmail.png?raw=true" /></a>
                        </div>
                    </div>`)
}