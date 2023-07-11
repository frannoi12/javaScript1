const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declarer le tableau avec le nom de chaque images */
let images = ["./logo.jpg","./pic2.jpg","./pic3.jpg","./pic4.jpg","./pic5.jpg"]
/* Declarer le texte alternatif pour chaque fichier image */
let designation = ["ifnti"]
/* Boucler à travers les images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
