const keyboardEvents = {
    on(e,callback){
        if(!e || typeof callback !== "function") return this;
        const isCtrlKey = e.indexOf('ctrl') > -1 ? true : false;
        if(e.indexOf('+') > -1){
            e = e.split('+')[1];
        }
        document.addEventListener('keydown',(event)=>{
            if(isCtrlKey && !event.ctrlKey) return
            if(event.key.toLocaleLowerCase() !== e.toLocaleLowerCase()) return
            callback();
        })
        return this;
    },
    onControl(e,callback){
        if(!e || typeof callback !== "function") return this;
        return this.on('ctrl+'+e,callback)
    }
}