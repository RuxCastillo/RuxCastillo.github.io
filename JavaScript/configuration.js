
//<div class="oldReddit"><div class="divdiv"><img id="reddit" class="cambio" src="./Img/icons/grid.png" /></div></div>
//<div class="white-black"><div class="divdiv"><img id="moon" class="cambio" src="./Img/icons/luna.png" /></div></div>
//<div class="ing-esp"><div class="divdiv"><img id="language" class="cambio" src="./Img/icons/en.png" /></div></div>

let configuracionImg = document.querySelector("#configuracion");
let configuracionDiv = document.querySelector(".configuration");
let panel = document.querySelector("#panelAbierto");
configuracionDiv.addEventListener("click", abrePanel)

function abrePanel() {

    if(!panelConfiguracion) {
        let elColorF = (esBlanco?"rgba(32,32,33,255)" : "rgba(181,179,185,255)")
        let elBack = (esBlanco?  "rgba(208,210,213,255)" : "rgba(32,32,33,255)")
        console.log("clickeaste el div de configuracion")
        panel.style.border = `2px solid ${elColorF}`
        panel.style.borderTop = "none"
        panel.style.display = "grid"
        configuracionImg.style.border = `2px solid ${elColorF}`
        configuracionImg.style.borderBottom = "none"
        panelConfiguracion = true
        panel.style.backgroundColor = `${elBack}`
        configuracionImg.style.backgroundColor = `${elBack}`
    } else {
        panelConfiguracion = false
        panel.style.display = "none"
        configuracionImg.style.border = "none"
        panel.style.backgroundColor = ""
        configuracionImg.style.backgroundColor = ""
        

    }




}