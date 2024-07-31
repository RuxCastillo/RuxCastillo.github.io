let isMobileStart = startSize()

const pagina = new Observer(true, false, isMobileStart, "ABOUT ME", {
    isDark() {
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
    isEng() {
        msg = (pagina.lang)? "es" : "en";
        query(".lang").setAttribute("src", `./assets/${path}/icons/${msg}.png`)
        pagina.changeNotify(pagina.article)
    },
    isMobile(bool) {
        if(bool) {
            body.classList.add("mobile-body")
        } else {
            body.classList.remove("mobile-body")
        }
        pagina.changeNotify(pagina.article)

    },
    changeNotify(str) {
        clean();
        pagina.article = str;
        if(str === "ME") aboutMeSection();
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
const body = query("body");

pagina.isMobile(pagina.device);
aboutMeSection()
setTimeout(() => {
    variableCSS("--animation-letters", "none")
    variableCSS("--animation-picture", "none")
    variableCSS("--display-icons", "visible")
}, 4000)

function aboutMeSection() {
    section.innerHTML = htmlAboutMe(pagina.device);
}

function knowledgeSection() {
    variableCSS("--section-columns", "1fr")
    variableCSS("--section-rows", "35%")
    variableCSS("--section-auto-rows", "35%")
    section.innerHTML = htmlKnow(pagina.device);
}

function proyectSection() {
    variableCSS("--section-columns", "1fr 1fr");
    variableCSS("--section-rows", "1fr");
    section.innerHTML = htmlpow(pagina.device);
}

function practiceSection() {
    variableCSS("--section-columns","repeat(5, 1fr)");
    variableCSS("--section-rows", "45%");
    section.innerHTML = htmlPractice(pagina.device);
}

function startSize() {
    if(window.innerHeight > 1150) {
        console.log("al inicio es false")
        return false 
    } else {
        console.log("al inicio es true")
        return true
    }
}

