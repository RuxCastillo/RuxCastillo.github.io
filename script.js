const pagina = new Observer(true, false, false, "ABOUT ME", {
    isDark() {
        if(pagina.theme) {
            path = "negro"
            variableCSS("--back-c", "gray")
            variableCSS("--text-c", "white")
            query(".theme").setAttribute("src", "./assets/negro/icons/sol.png")
            variableCSS("--background-i", `url("./assets/negro/Fondo.jpg")`);
            variableCSS("--border-main", "3px solid white");
        } else {
            path = "blanco"
            variableCSS("--back-c", "burlywood")
            variableCSS("--text-c", "black")
            query(".theme").setAttribute("src", "./assets/blanco/icons/luna.png")
            variableCSS("--background-i", `url("./assets/blanco/Fondo.jpg")`);
            variableCSS("--border-main", "3px solid black");
        }
            query(".lang").setAttribute("src", `./assets/${path}/icons/${msg}.png`)
            pagina.changeNotify(pagina.article)
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
        section.innerHTML = "";
        pagina.article = str;

        if(str === "KNOWLEDGE") {
            section.innerHTML = htmlKnow(pagina.device);
        } else if (str === "PRACTICE") {
            section.innerHTML = htmlPractice(pagina.device);
        } else if (str === "PROYECTS") {
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
const section = query("section");
const body = query("body");
let firstAnimation = false;

pagina.changeDevice()
pagina.changeNotify()

setTimeout(() => {
    variableCSS("--animation-letters", "none")
    variableCSS("--animation-picture", "none")
    variableCSS("--display-icons", "visible")
}, 4000)

function startSize() {
    if(window.innerHeight > 1150) return true;
    return false
}

