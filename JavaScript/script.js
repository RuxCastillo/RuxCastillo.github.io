class Observer {
    constructor(lang, theme, device, callbacks){
        this.lang = lang;
        this.theme = theme;
        this.device = device;

        if(callbacks) {
            this.callbacks.isDark = isDark;
            this.callbacks.isEng = isEng;
            this.callbacks.isMobile = isMobile;
        }
    }
    changeLang() {
        lang = !this.lang;
        this.isDark(lang);
    }
    changeTheme() {
        theme = !this.theme;
        this.isDark(theme);
    }
    changeDevice() {
        device = !this.device;
        this.isMobile(device);
    }
}

class Articles {
    constructor(section, callback) {
        this.section = section

        if(callback) {
            this.callbacks.now = now;
        }
    }
    selectedSection(li) {
        section = li;
        this.changeNotify(section);
    }

}

const pagina = new Observer(true, false, false, {
    isDark(bool) {
        console.log("cambio a " + bool + " el theme")
    },
    isEng(bool) {
        console.log("cambio a " + bool + " el lenguaje")
    },
    isMobile(bool) {
        console.log("cambio a " + bool + " el dispositivo")
    }
})

const sections = new Articles("aboutMe", {
    changeNotify(li) {
        console.log("cambio la seccion a " + li)
    }
})
