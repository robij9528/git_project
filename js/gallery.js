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
movieDesc[0] = "sav";
movieDesc[1] = "asdf";
movieDesc[2] = "fsadfs";
movieDesc[3] = "ff";
movieDesc[4] = "fdsf";
movieDesc[5] = "fsdfd";
movieDesc[6] = "sfdsdf";
movieDesc[7] = "sdfaef";



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
