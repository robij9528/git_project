(function() {


var movieHeader = [];
movieHeader[0] = "Star Wars The Force Awakens";
movieHeader[1] = "10 Cloverfield Lane";
movieHeader[2] = "Deadpool";
movieHeader[3] = "The Revenant";
movieHeader[4] = "Room";
movieHeader[5] = "Spotlight";
movieHeader[6] = "The Witch";
movieHeader[7] = "Zootopia";

var movieDesc = [];
movieDesc[0] = "Three decades after the defeat of the Galactic Empire, a new threat arises. The First Order attempts to rule the galaxy and only a ragtag group of heroes can stop them, along with the help of the Resistance.";
movieDesc[1] = "After getting in a car accident, a woman is held in a shelter with two men, who claim the outside world is affected by a widespread chemical attack.";
movieDesc[2] = "A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelerated healing powers, adopting the alter ego Deadpool.";
movieDesc[3] = "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.";
movieDesc[4] = "A kidnapped mother and son escape from a room in which they have endured imprisonment for the entirety of her son's life. Upon breaking free from its confines, they experience a dramatic homecoming; provoking insight into the depths of imagination and the extent of a mother's love.";
movieDesc[5] = "The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.";
movieDesc[6] = "A family in 1630s New England is torn apart by the forces of witchcraft, black magic and possession.";
movieDesc[7] = "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.";



function initPhotos(){
	
	console.log("init fired");
	thumbnails = document.querySelectorAll(".thumbnails li");
	clicked = document.querySelector(".thumbnails li:first-child");
	mainPhoto = document.querySelector("#mainImage");
	movieH = document.querySelector("#movieTitle");
	movieD = document.querySelector("#moviePlot");

	
	for (i=0; i<thumbnails.length; i++) {
		thumbnails[i].addEventListener("click", switchPhoto, true);
	}
	
}

function switchPhoto() {
	console.log("Picture Switched");
	
	clicked = this.id;
	mainPhoto.src = "images/movie" + this.id +".jpg";
	movieH.firstChild.nodeValue = movieHeader[this.id];
	movieD.firstChild.nodeValue = movieDesc[this.id];
}


window.addEventListener("load", initPhotos, false);

})();
