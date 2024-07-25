class Observer {
    constructor(lang, theme, device, article, callbacks){
        this.lang = lang;
        this.theme = theme;
        this.device = device;
        this.article = article;

        if(callbacks) {
            this.isDark = callbacks.isDark;
            this.isEng = callbacks.isEng;
            this.isMobile = callbacks.isMobile;
            this.changeNotify = callbacks.changeNotify;
        }

        const lis = document.querySelectorAll("header li");
        
        for(let li of lis) {
        li.addEventListener("click", function() {pagina.selectedSection(li.innerText)});
}
    }
    changeLang() {
        this.lang = !this.lang;
        this.isEng(this.lang);
    }
    changeTheme() {
        this.theme = !this.theme;
        this.isDark(this.theme);
    }
    changeDevice() {
        console.log(this.device)
        this.device = !this.device;
        this.isMobile(this.device);
    }
    selectedSection(str) {
        this.article = str;
        this.changeNotify(this.article)
    }
}

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
    }
})

class Controladores {
    constructor(memory, newRequest, callbacks) {
        this.memory = memory;
        this.newRequest = newRequest;
        
        if(callbacks) {
            this.erase = callbacks.erase;
            this.action = callbacks.action;
            this.compare = callbacks.compare;
            this.save = callbacks.save;
        }
    }
    compare() {
        //comparar memory con request y determinar si hace falta hacer algo

    }
    save() {
        this.memory = this.newRequest;
    }
    erase() {
        //borrar las clases, o la seccion si se necesita
    }
    action() {
        //con lo que hay en memoria trabajar lo que haga falta
    }
}



