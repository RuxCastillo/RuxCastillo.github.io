const pagina = new Observer(true, false, false, "ABOUT ME", {
    isDark(bool) {
        console.log("cambio a " + bool + " el theme")
    },
    isEng(bool) {
        console.log("cambio a " + bool + " el lenguaje")
    },
    isMobile(bool) {
        console.log("cambio a " + bool + " el dispositivo")
    },
    changeNotify(str) {
        console.log("cambio la seccion a " + str)
        clean();
        if(str === "ABOUT ME") aboutMeSection();
        if(str === "KNOWLEDGE") knowledgeSection();
        if(str === "PROYECTS") proyectSection();
        if(str === "PRACTICE") practiceSection();
    }
});

query = (css) => {return document.querySelector(css)};
click = (elm, func) => {return elm.addEventListener("click", func)};
variableCSS = (vab, val) => {return document.documentElement.style.setProperty(vab, val)}
clean = () => {query("section").innerHTML = ""}
const section = query("section");

aboutMeSection()

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


