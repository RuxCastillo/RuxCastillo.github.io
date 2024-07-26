const pagina = new Observer(true, false, false, "About Me", {
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
    }
});

query = (css) => {return document.querySelector(css)};
click = (elm, func) => {return elm.addEventListener("click", func)};
variableCSS = (vab, val) => {return document.documentElement.style.setProperty(vab, val)}
clean = () => {query("section").innerHTML = ""}
const section = query("section");


knowledgeSection()

function aboutMeSection() {
    variableCSS("--section-columns", "1fr .6fr");
    variableCSS("--section-rows", "1fr");
    section.innerHTML = allSections("aboutMe");
}

function knowledgeSection() {
    let section = query("section")
    variableCSS("--section-columns", "1fr")
    variableCSS("--section-rows", "30%")
    variableCSS("--section-auto-rows", "30%")
    section.innerHTML = allSections("knowledge");
}




