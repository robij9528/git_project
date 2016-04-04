(function() {


var movieHeader = [];
movieHeader[0] = "Star Wars The Force Awakens";
movieHeader[1] = "10 Cloverfield Lane";
movieHeader[2] = "Deadpool";
movieHeader[3] = "Revinant";
movieHeader[4] = "Room";
movieHeader[5] = "Spotlight";
movieHeader[6] = "The Witch";
movieHeader[7] = "Zootopia";

var movieDesc = [];
movieDesc[0] = "";
movieDesc[1] = "";
movieDesc[2] = "";
movieDesc[3] = "";
movieDesc[4] = "";
movieDesc[5] = "";
movieDesc[6] = "";
movieDesc[7] = "";



function initPhotos(){
	
	console.log("init fired");
	thumbnails = document.querySelectorAll(".thumbnails li");
	clicked = document.querySelector(".thumbnails li:first-child");
	mainPhoto = document.querySelector("#mainImage");
	movieHeader  = document.querySelector(".movieDesc h2");
	movieDesc = document.querySelector(".movieDesc p");

	
	for (i=0; i<thumbnails.length; i++) {
		thumbnails[i].addEventListener("click", switchPhoto, true);
	}
	
}

function switchPhoto() {
	console.log("Picture Switched");
	
	clicked = this.id;
	mainPhoto.src = "images/movie" + this.id +".jpg";
	movieHeader.firstChild.nodeValue = movieHeader[this.id];
	movieDesc.firstChild.nodeValue = movieDesc[this.id];
}


window.addEventListener("load", initPhotos, false);

})();
