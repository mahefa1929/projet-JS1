function changetitle(){

document.getElementsByTagName("h1")[0].innerHTML = "Ce que j'ai appris à THP";
document.getElementsByClassName("lead text-muted")[0].innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}
changetitle();



function changeCallToActions(){
document.getElementsByClassName("btn btn-primary my-2")[0].innerHTML = "OK je veux tester !";
document.getElementsByClassName("btn btn-primary my-2")[0].href = "https://www.pole-emploi.fr/accueil/";
}
changeCallToActions();



function changeLogoName(){
let chg = document.getElementsByTagName("strong")[0].innerHTML = "The THP Experience";
document.getElementsByTagName("strong")[0].style.fontSize = "2em";
}
changeLogoName();



function deleteLastCards(){
	var cart = document.getElementsByClassName("col-md-4");
	for(let i = 0; i < 3; i++){
		var top = document.getElementsByClassName("row")[1];
		top.removeChild(cart[cart.length - 1]);
	}
}
deleteLastCards()



function populateImages(){
let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
for (let i = 0; i < 10; i++){
let pic = document.getElementsByClassName("card-img-top")[i];
pic.src = `${imagesArray[i]}`;

}
}


function changeCardsText(){
let cdt = document.getElementsByClassName("card-text");
let cct = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web","Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML","JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."];
for (let i = 0; i <= 2; i++){
cdt[i].textContent = `${cct[i]}`;
}
}
changeCardsText();



function changeViewButtons(){
let cvb = document.getElementsByClassName("btn-outline-secondary");
for (let i = 0; i <= 5; i++){
	cvb[i].classList.replace("btn-outline-secondary","btn-success");
}
}
changeViewButtons();


function ajoutDiv(){
let rr = document.getElementsByClassName("row")[1];
let contain = document.getElementsByClassName("container")[3];
let newDiv = document.createElement("div");
contain.appendChild(newDiv);
newDiv.classList.add("row");
let change = document.getElementsByClassName("col-md-4")[2];
newDiv.appendChild(change);

}
ajoutDiv();
populateImages();