//Accède au contenu HTML interne du div et le modifie
document.querySelector('div').innerHTML +=
    '<ul><li>Elément n°1</li><li>Elément n°2</li></ul>';

//Accède au HTML du 1er paragraphe du document et le modifie
document.querySelector('p').outerHTML = '<h2>Je suis un titre h2</h2>';

/*Accède au contenu textuel de l'élément avec un id='texte' et le modifie.
 *Les balises HTML vont ici être considérées comme du texte*/
document.getElementById('texte').textContent = '<span>Texte modifié</span>';

//Accède au texte visible de l'élément avec l'id = 'p2'
let texteVisible = document.getElementById('p2').innerText;
//Accède au texte (visible ou non) de l'élément avec l'id = 'p2'
let texteEntier = document.getElementById('p2').textContent;

//Affiche les résultats du dessus dans l'élément avec l'id = 'p3'
document.getElementById('p3').innerHTML =
    'Texte visible : ' + texteVisible + '<br>Texte complet : ' + texteEntier;


// Création de l'élément
let nouvelElement = document.createElement('div');

// Ajout de contenu ou d'attributs à l'élément
nouvelElement.textContent = 'Ceci est un nouvel élément';
nouvelElement.setAttribute('id', 'monElement');

// Ajout de l'élément au DOM
let conteneur = document.getElementById('p3');
conteneur.appendChild(nouvelElement);

const newElt = document.createElement("div");
newElt.textContent = "Voici le new Element";
let elt = document.getElementById("main");
elt.appendChild(newElt);
// Supprime l’élément newElt de l’élément elt
//elt.removeChild(newElt);

// Remplace l’élément newElt par un nouvel élément de type article

const article = document.createElement("div");
article.textContent = "Voici le new Article";

elt.replaceChild(document.createElement("article"), newElt);

//elt.appendChild(article);