/*const myId = document.getElementById('main');
console.log(myId.innerHTML);
const outputElement = document.getElementById('output');
outputElement.innerHTML = myId.innerHTML;*/


//const contents = document.getElementsByClassName('content');
//const firstContent = contents[0];
//console.log(firstContent.innerHTML);
//const outputElement = document.getElementById('output');
//outputElement.innerHTML = contents[0].innerHTML;


//const articles = document.getElementsByTagName('article');
//const thirdArticle = articles[2];
//console.log(thirdArticle.innerHTML);
//const outputElement = document.getElementById('output');
//outputElement.innerHTML = articles[0].innerHTML;

//const elt = document.querySelectorAll("#myId p.article > a");
//console.log(elt[0].innerHTML);


const elt = document.getElementById('main');
console.log(elt.previousElementSibling/*elt.innerHTML*/);