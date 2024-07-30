const pagina = new Observer(true, false, false, "ABOUT ME", {
    isDark(bool) {
        if(pagina.theme) {
            path = "negro"
            variableCSS("--back-c", "gray")
            variableCSS("--text-c", "white")
            query(".theme").setAttribute("src", "./assets/negro/icons/sol.png")
        } else {
            path = "blanco"
            variableCSS("--back-c", "burlywood")
            variableCSS("--text-c", "black")
            query(".theme").setAttribute("src", "./assets/blanco/icons/luna.png")
        }
            query(".lang").setAttribute("src", `./assets/${path}/icons/${msg}.png`)

        pagina.changeNotify(pagina.article)
    },
    isEng(bool) {
        msg = (pagina.lang)? "es" : "en";
        query(".lang").setAttribute("src", `./assets/${path}/icons/${msg}.png`)
        pagina.changeNotify(pagina.article)
    },
    isMobile(bool) {
        console.log("cambio a " + bool + " el dispositivo")
    },
    changeNotify(str) {
        clean();
        pagina.article = str;
        if(str === "ABOUT ME") aboutMeSection();
        if(str === "KNOWLEDGE") knowledgeSection();
        if(str === "PRACTICE") practiceSection();
        if(str === "PROYECTS") proyectSection();
    }
});

let msg = (pagina.lang)? "es" : "en"
let path = (pagina.theme)? "negro" : "blanco";
query = (css) => {return document.querySelector(css)};
click = (elm, func) => {return elm.addEventListener("click", func)};
variableCSS = (vab, val) => {return document.documentElement.style.setProperty(vab, val)}
clean = () => {query("section").innerHTML = ""}
const section = query("section");

//aboutMeSection()
setTimeout(() => {
    document.querySelector(":root").style.setProperty("--animation-letters", "none")
    document.querySelector(":root").style.setProperty("--animation-picture", "none")
}, 7000)

function aboutMeSection() {
    variableCSS("--section-columns", "1fr .6fr");
    variableCSS("--section-rows", "1fr");
    section.innerHTML = htmlAboutMe();
}

function knowledgeSection() {
    variableCSS("--section-columns", "1fr")
    variableCSS("--section-rows", "35%")
    variableCSS("--section-auto-rows", "35%")
    section.innerHTML = htmlKnow();
}

function proyectSection() {
    variableCSS("--section-columns", "1fr 1fr");
    variableCSS("--section-rows", "1fr");
    section.innerHTML = htmlpow();
}

function practiceSection() {
    variableCSS("--section-columns","repeat(5, 1fr)");
    variableCSS("--section-rows", "45%");
    section.innerHTML = htmlPractice();
}


