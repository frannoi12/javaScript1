class Book {
  constructor(mytitle, myauthor, mydescr, mypages,hasBeenread){
    this.title = mytitle;
    this.author = myauthor;
    this.description = mydescr;
    this.pages = mypages;
    this.currentPage = 0;
    this.read = hasBeenread;
  }

  readBook(page){
    //Vérifie que le nombre de page est exploitable
    if( page<1 || page>this.pages){
      return 0; //retourne une forme d'erreur
    }

    //met à jour le nombre de page lu
    this.currentPage = page;

    //si toutes les pages sont lues, 
    //il faut changer l'attribut read
    if( this.currentPage == this.pages){
      this.read = true;
    }

    //tout c'est bien passé
    return 1;
  }
}

const books = [];

//créons trois livres
for(let i=0; i<3; i++){
  let myBook = new Book("Mon livre numéro "+i, "Willy", "Il s'agit du livre numéro "+i, 50, false);
  books.push(myBook);
}

//Ne pas toucher au code si dessous.
const Liste = document.createElement("ul");

//Génération de la liste de livre
for(i in books){
	
	const item = document.createElement("li");
	item.id="item_"+i;
	
	const input = document.createElement("input");
	input.id="input_"+i
	input.setAttribute("type","number");
	
	const button = document.createElement("button");
	button.innerText="Click";
	button.id="button_"+i;

	//générons le contenu d'un livre
	book=books[i]
	generateItem(book,item,input,button);	
	
	Liste.append(item);
}

//Ajoutons notre liste à notre document
const mydiv = document.getElementById("livre");
if( Liste != null){
	mydiv.append(Liste)
}

//Ajoutons le addEventListener
for(i in books){
	const button = document.getElementById("button_"+i);
	const input = document.getElementById("input_"+i);
	const item  = document.getElementById("item_"+i);
	const book = books[i];
	
	button.addEventListener("click", function(){
		if(book.readBook(input.value)==1){
			generateItem(book,item,input,button);	
		}		
	});
}

//Fonction pour générer les items de la liste.
function generateItem(book,item,input,button){
	item.innerHTML= book.title + " by " + book.author + " ";		
	if(book.read==false){
		item.innerHTML += "- " + book.currentPage + "/"+book.pages + " ";	
		item.append(input);
		item.append(button);		
	} else {
		item.innerHTML += " - Lu"
	}		
}
