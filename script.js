const language = document.querySelector(".lang")
const theme = document.querySelector(".theme")
const sectionsBtn = document.querySelectorAll(".art")
const html = query("html");
const section = query("section");
const body = query("body");

const pagina = new Observer(language, theme, sectionsBtn, {
    isDark() {
        if(pagina.theme) {
            variableCSS("--text-c", "white")
            variableCSS("--border-main", "3px solid white");
            variableCSS("--background-image", "radial-gradient(#9c9c9c,#1f1f1f 80%)")
            variableCSS("--background-c", "#000")
            variableCSS("--contorno", "5px 5px 10px rgb(247,247,274,.6")
            query(".lang").setAttribute("fill", "white")
            query(".theme").setAttribute("fill", "white")
        } else {
            variableCSS("--text-c", "black")
            variableCSS("--border-main", "3px solid black");
            variableCSS("--background-image", "radial-gradient(#f7f7f7, #9c9c9c 80%)")
            variableCSS("--background-c", "#f7f7f7")
            variableCSS("--contorno", "5px 5px 10px rgb(0,0,0,.6")
            query(".lang").setAttribute("fill", "black")
            query(".theme").setAttribute("fill", "black")
        }
    },
    isEng() {
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

        variableCSS("--body-maxh", "90rem")
        variableCSS("--body-maxw", "170rem")

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

query = (css) => {return document.querySelector(css)};
variableCSS = (vab, val) => {return document.documentElement.style.setProperty(vab, val)}

window.addEventListener("resize", function() {pagina.changeDevice()})
pagina.changeNotify()

function removeClassFromSection(agregar) {
    section.classList = "";
    section.classList.add(agregar)
}


