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

        document.querySelector(".theme").addEventListener("click", function() {pagina.changeTheme()});
        document.querySelector(".lang").addEventListener("click", function() {pagina.changeLang()})
        window.addEventListener("resize", function() {pagina.changeDevice()})

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
        if (window.innerWidth < 1150) {
        console.log("cambio el width de la pantalla")
        this.device = true;
        this.isMobile(this.device);
        } else {
            console.log("no cambio a mobile" + window.innerWidth)
            this.device = false
        }
    }
    selectedSection(str) {
        this.article = str;
        this.changeNotify(this.article)
    }
}



