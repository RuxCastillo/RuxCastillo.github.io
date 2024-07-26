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



