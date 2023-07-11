/*let chaine = "Bonjour, je m'appelle Pierre et vous ?"
let masque1 = /Pierre/;
let masque2 = /[A-Z]/;


let masque3 = /[A-Z]/g;

//Rechercher "Pierre" dans let chaine et renvoie la corespondance
document.getElementById("p1").innerHTML ='Trouvé :' + chaine.search(masque1);
document.getElementById("p2").innerHTML ='Trouvé :' + chaine.match(masque2);
document.getElementById("p3").innerHTML ='Trouvé :' + chaine.match(masque3);
*/

/*let chaine = "Bonjour, je m'appelle Pierre et vous ?";

let masque1 = /Pierre/;

let masque2 = /e/;

let masque3 = /ou/g;

let masque4 =/[,]/;

let tab = chaine.split(masque4);


//let news = masque1.exec(chaine);
let news = masque1.test(chaine);*/


//console.log(news);


//document.getElementById("p1").innerHTML = news[0];
//document.getElementById("p1").innerHTML = news[0];
//document.getElementById("p1").innerHTML = tab[0];
//document.getElementById("p1").innerHTML = chaine.replace(masque1,"Nicolas");
//document.getElementById("p2").innerHTML = chaine.replace(masque2,"E");
//document.getElementById("p3").innerHTML = chaine.replace(masque3,"OU");


/*
let chaine = "Bonjour, je suis Willy. Mon /numéro/ est le [70-02-26-00]"
let masque1 = /[^aeiouy]/g;
let masque2 = /[oeiau\^]/i
//let masque2 = /j[aeiouy]/g;
//let masque3 = /j[aeiouy]/g;
//let masque4 = /[aeiouy][aeiouy]/g;

document.getElementById("p1").innerHTML = chaine.match(masque1);
document.getElementById("p2").innerHTML = chaine.match(masque2);


let chaine = "Bonjour, je m'appelle Pierre et vous ?"

let masque1 = /[aeiouy]/g;
let masque2 = /j[aeiouy]/g;
let masque3 = /[aeiouy][aeiouy]/g;
let masque4 = /je/g;
let masque5 = /j[aeiouy][aeiouy]/;
let masque6 = /[et]/;
let masque7 = /[ê]/g;
document.getElementById("p1").innerHTML = chaine.match(masque7);*/

// let chaine = " Bonjour, Je suis willy . Mon /numéro/ est le [70-02-26-00] 545444242 ";
// let chaine1 = "1032123352454545458";

// //1

// let masque = /[^aeiouy]/gi;
// let masque1 = /[aeiouy^]/gi;
// let masque2 = /[a-zA-Z]o/g;
// let masque3 = /[az-]/gi;
// let masque4 = /[a-z0-9-]/g;
// let masque5 = /[0-9\[\]]/g;
// let masque6 = /[\da-z]/g;
// let masque8 = /\d/g;
// let masque7 = /[^\w]/g;

// let masque01 = /\W/g;
// let masque0 = /^[A-Z].{10,}/g;
// let masque12 = /[\^|\$]/g;
// let masque10 = /[o|j]/g;
// let masque11 = /[Fadilou|Wiwayo]/g;
// let masque13 = /\d{10,10}$/g;


// document.getElementById("p1").innerHTML = chaine1.match(masque13);

// 5.1

//1

// Récupérer la chaîne de texte à partir du h1
// let texteH1 = document.querySelector("h5").innerText;

// let masque0 = /^\s+|\s+$/g;
// Supprimer les espaces blancs de début et de fin en utilisant une regex
// let texteNettoye = texteH1.replace('');

// document.getElementById("p1").innerHTML = texteH1.replace(masque0," ");


//2

// let masque1 = / {2,}/g;

// document.getElementById("p1").innerHTML = texteH1.replace(masque1," ");


//3

// let chaine1 = "Une chaine \n pas comme \n les autres .";

// let masque2 = /^\s*/gm;

// document.getElementById("p1").innerHTML = chaine1.replace(masque2," ");

// 5.2

// 1

// function verifierAdresseEmail(adresseEmail) {
//     let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(adresseEmail);
//   }
  


// let adresseEmail = "kjbfe@domaine.com";
// let estValide = verifierAdresseEmail(adresseEmail);

// if (estValide) {
//     console.log("Adresse e-mail valide");
// } else {
//     console.log("Adresse e-mail invalide");
// }
  

// let chaineEssaie = "Bonjour voici le nouveau er texte d'essai et bcdes et abc.";


// let masque1 = /er|t/g;
// let masque2 = /e(r|t)/g;
// let masque3 = /(ab)*c/g;
// let masque4 = /(ab)|(bc)d/g;
// const text = "<a><b><a><c><b><c>";
// let masque = /(<.>).*\1/g;

// document.getElementById("p1").innerHTML = text.match(masque);



// let chaine = "Bonjour, je suis Pierre et mon nom. est le [06-36-65-65-65]";


// let masque1 = /e(?=r)/g;
// let masque2 = /e(?!r)/g;
// let masque3 = /(?<=i)s/g;
// let masque4 = /(?<!i)s/g;


//document.getElementById("p1").innerHTML= chaine.match(masque4);



// function verifierAdresseEmail(adresseEmail) {
//     let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(adresseEmail);
// }

// let mailRecup = document.getElementById("emailInput");

// let mailRecuperer = mailRecup.value;

// let result = verifierAdresseEmail(mailRecuprer);

// if (result) {
//     document.getElementById("p4").innerHTML= "Adresse email est valide";
// } else {
//     document.getElementById("p4").innerHTML="Adresse email n'est pas valide"
// }

// function verifierAdresseEmail(adresseEmail) {
//     let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(adresseEmail);
//   }
  
//   let mailRecup = document.getElementById("emailInput");
  
//   mailRecup.addEventListener("keyup", function(event) {
//     // Vérifier si la touche "Entrée" a été pressée (code 13)
//     if (event.key === "Enter") {
//       event.preventDefault(); // Empêche le rechargement de la page
  
//       let mailRecuperer = mailRecup.value;
//       let result = verifierAdresseEmail(mailRecuperer);
//       let texte = document.getElementById("p4");
  
//       if (result) {
//         //console.log("c'est ok");
//         texte.textContent = "Adresse e-mail valide";
//       } else {
//         //console.log("nn pas bn");
//         texte.textContent = "Adresse e-mail invalide";
//       }
//     }
//   });
  


let texteH1 = document.querySelector("h5").innerText;
let leSplit = texteH1.split(",");
console.log(leSplit);

document.getElementById("p1").textContent = leSplit.join(", ");