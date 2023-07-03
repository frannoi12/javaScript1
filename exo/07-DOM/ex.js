console.log("coucou");

console.log("récupération de main-content", document.getElementById("main-content"));

console.log("récupération des éléments importants");
const  importants = document.getElementsByClassName("important");
for(elt of importants) {
	console.log(elt);
}
console.log("récupération des articles");
const articles = document.getElementsByTagName("article")
for(elt of articles) {
	console.log(elt);
}

console.log("récupération des li dans ul de classe important dans article");
const lesLi = document.querySelector("article ul.important > li");
console.log(lesLi);

console.log("le li suivant" , lesLi.nextElementSibling);

