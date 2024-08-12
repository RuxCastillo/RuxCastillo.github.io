const language = document.querySelector(".lang")
const theme = document.querySelector(".theme")
const sectionsBtn = document.querySelectorAll(".art")

const pagina = new Observer(language, theme, sectionsBtn, {
    isDark() {
        if(pagina.theme) {
            path = "negro"
            variableCSS("--text-c", "white")
            query(".theme").setAttribute("src", "./assets/negro/icons/sol.png")
            variableCSS("--background-i", `url("./assets/negro/Fondo.jpg")`);
            variableCSS("--border-main", "3px solid white");
        } else {
            path = "blanco"
            variableCSS("--text-c", "black")
            query(".theme").setAttribute("src", "./assets/blanco/icons/luna.png")
            variableCSS("--background-i", `url("./assets/blanco/Fondo.jpg")`);
            variableCSS("--border-main", "3px solid black");
        }
            query(".lang").setAttribute("src", `./assets/${path}/icons/${msg}.png`)
            pagina.changeNotify(pagina.article)
    },
    isEng() {
        query(".lang").setAttribute("src", `./assets/${path}/icons/${msg}.png`)
        pagina.changeNotify(pagina.article)
    },
    isMobile() {
        if(pagina.startSize()) {
            html.classList.add("html-mobile")
            body.classList.add("mobile-body")
            pagina.device = true
        } else {
            html.classList.remove("html-mobile")
            body.classList.remove("mobile-body")
            pagina.device = false
        }
        pagina.changeNotify(pagina.article)
    },
    changeNotify(str) {
        section.innerHTML = "";
        removeClassFromSection()
        pagina.article = str;

        if(str === "knowledge") {
            section.innerHTML = htmlKnow(pagina.device);
        } else if (str === "practice") {
            section.innerHTML = htmlPractice(pagina.device);
        } else if (str === "proyects") {
            section.innerHTML = htmlpow(pagina.device);
        } else {
            section.innerHTML = htmlAboutMe(pagina.device);
        }
    }
});

let msg = (pagina.lang)? "es" : "en"
let path = (pagina.theme)? "negro" : "blanco";
query = (css) => {return document.querySelector(css)};
variableCSS = (vab, val) => {return document.documentElement.style.setProperty(vab, val)}
const html = query("html");
const section = query("section");
const body = query("body");


window.addEventListener("resize", function() {pagina.changeDevice()})
pagina.changeNotify()

function removeClassFromSection(agregar) {
    section.classList = "";
    section.classList.add(agregar)
}


