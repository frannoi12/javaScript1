let parentClicks = 0 ;
let childClicks = 0 ;
const parent = document.getElementById("parent");
const enfant = document.getElementById("child");

parent.addEventListener('click',function(e){
	document.getElementById("parent-count").innerText=(++parentClicks) + '';
});

enfant.addEventListener('click',function(e){
	document.getElementById("child-count").innerText=(++childClicks) + '';
});
