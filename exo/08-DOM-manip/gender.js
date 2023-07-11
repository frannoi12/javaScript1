//Écouter un évenement

let nameInput = document.getElementById("name");
let resName = document.getElementById("res-name");

nameInput.addEventListener("input",function(){
    resName.textContent = nameInput.value;
});

//Évenement de changement de choix sur l'élément gender
let genderSelect = document.getElementById("gender");
let resGender = document.getElementById("res-gender");

genderSelect.addEventListener("change",function(){
    resGender.textContent = genderSelect.value;
});

//Coordonnées de la souris à l'intérieur de #result

let resultDiv = document.getElementById("result");
let mouseX = document.getElementById("mouse-x");
let mouseY = document.getElementById("mouse-y");


resultDiv.addEventListener("mousemove",function(){
    let rect = resultDiv.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    mouseX.textContent=x;
    mouseY.textContent=y;
});