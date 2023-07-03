let winSize='width=500, height=500';
let coord = navigator.geolocation.getCurrentPosition(update)

document.getElementById('b1').addEventListener("click",openWindow);
document.getElementById('b2').addEventListener("click",closeWindow);
document.getElementById('b3').addEventListener("click",resizeToWindow);
document.getElementById('b4').addEventListener("click",resizeByWindow);
document.getElementById('b7').addEventListener("click",navigue);
//document.getElementById('b8').addEventListener("click",update);

function openWindow(){
	fenetre = window.open("tailleNav.html",'',winSize);
}

function resizeToWindow(){
	fenetre.resizeTo(800,800);
}

function resizeByWindow(){
	fenetre.resizeBy(-300,-200);
}

function closeWindow(){
	fenetre.close();
}

function navigue() {
  var NAV = navigator;
  document.getElementById("Language").innerHTML = NAV.language;
  document.getElementById("platform").innerHTML = NAV.platform;
  document.getElementById("cookieEnabled").innerHTML = NAV.cookieEnabled ? 'Activé' : 'Désactivé';
  document.getElementById("geolocation").innerHTML = NAV.geolocation ? 'Prise en charge' : 'Non prise en charge';
}


function update(pos){
	document.getElementById('longitude').innerHTML=pos.coords.longitude;
	document.getElementById('latitude').innerHTML=pos.coords.latitude;
}

let longitude=window.location;
document.getElementById('protocole').innerHTML="HOST"+longitude;
console.log(document.location);
console.log(window.location);



