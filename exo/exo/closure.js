/*function logging(debug){
    if(debug) {
        return alert;
    } else {
        return console.log;
    }
}


const affiche=logging(false);
affiche("hello");*/


/*let prenom = "Pierre";
//bio() a accès à let prenom (et à let age) mais pas à let hobbie
function bio(){
    let age = 29;
    //hobbies() a accès à let prenom et à let age (et à let hobbie)
    function hobbies(){
        let hobbie = "Trail";
        return prenom + ", " + age + " ans. Je fais du " + hobbie;
    }
    return hobbies();
}

alert(bio());*/

/*
function compteur() {
    let count = 0;
    return function() {
        return count++;
    };
}
let plusUn = compteur();

let plusUnBis = compteur();
alert(plusUn());
alert(plusUn());
alert(plusUn());
alert(plusUnBis());
alert(plusUnBis());
*/

/*const outer = function() {
    let a = "A Local variable"
    let inner = function() {
        alert(a)
    }
    window.fnc = inner
}
outer();
fnc();*/

/*let a = 12;
(function() {
    alert(a);
})();*/


/*let a = 5;
(function() {
    let z = 12;
    alert(a);
})();*/

/*let a = 10;
let x = (function() {
    let a = 12;
    return (function() {
        alert(a);
    });
})();

x();*/


/*let a = 10;
let x = (function() {
    let y = function() {
        let a = 12;
    };
    return function() {
        alert(a);
    }
})();
x();*/


/*let a = 10;
let x = (function() {
    (function() {
        a = 12; // <<< faites attention à cette ligne
    })();
    return (function() {
        alert(a);
    });
})();
x();*/



let a = 10;
(function() {
    let a = 15;
    window.x = function() {
        alert(a);
    }
})();
x();

























