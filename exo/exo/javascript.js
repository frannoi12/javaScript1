function logging(debug){
    if(debug) {
        return alert;
    } else {
        return consol.log;
    }
}

const affiche=logging(true);
affiche("hello");
//ggjjrjr
