class Observer {
    constructor(langBtn, themeBtn, sectionBtn, callbacks){
        this.lang = true
        this.theme = false
        this.device = this.startSize()

        this.langBtn = langBtn;
        this.themeBtn = themeBtn;

        if(callbacks) {
            this.isDark = callbacks.isDark;
            this.isEng = callbacks.isEng;
            this.isMobile = callbacks.isMobile;
            this.changeNotify = callbacks.changeNotify;
        }

        this.langBtn.addEventListener("click", this.changeLang);
        this.themeBtn.addEventListener("click", this.changeTheme);

        for(let li of sectionBtn) {
        li.addEventListener("click", this.selectedSection, li);
}
    }
    changeLang = () => {
        this.lang = !this.lang;
        this.isEng(this.lang);
    }
    changeTheme = () => {
        this.theme = !this.theme;
        this.isDark(this.theme);
    }
    changeDevice = () => {
        this.isMobile(this.device)
    }
    selectedSection = (str) => {
        this.changeNotify(str.srcElement.id)
    }
    startSize = () => {
        if(window.innerHeight - window.innerWidth > 0) return true;
        return false
    }
}


