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

    },
    isEng(bool) {
        msg = (pagina.lang)? "es" : "en";
        query(".lang").setAttribute("src", `./assets/${path}/icons/${msg}.png`)
        pagina.changeNotify(pagina.article)
    },
    isMobile(bool) {
        if(bool) {
            console.log("cambio a " + bool + " el dispositivo")
            variableCSS("--section-rows", "1fr 1fr")
            variableCSS("--section-columns", "1fr")
            let val = document.querySelectorAll("head link")
            console.log(val)
            val.forEach((x) => {x = outerHTML = ""})
            console.log(val)
            document.querySelector("head").innerHTML += "modo cel"

        } else {
            variableCSS("--section-rows", "1fr")
            variableCSS("--section-columns", "1fr 1fr")
            document.querySelectorAll("head link").outerHTML = ""
            document.querySelector("head").innerHTML += "modo pc"
        }

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

aboutMeSection()
setTimeout(() => {
    variableCSS("--animation-letters", "none")
    variableCSS("--animation-picture", "none")
    variableCSS("--display-icons", "visible")
}, 4000)

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


