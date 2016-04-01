(function() {


var movieHeader = [];
movieHeader[0] = "";
movieHeader[1] = "";
movieHeader[2] = "";
movieHeader[3] = "";
movieHeader[4] = "";
movieHeader[5] = "";

var movieDesc = [];
movieDesc[0] = "";
movieDesc[1] = "";
movieDesc[2] = "";
movieDesc[3] = "";
movieDesc[4] = "";
movieDesc[5] = "";




function initPhotos(){
	
	console.log("init fired");
	thumbnails = document.querySelectorAll(".thumbnailList li");
	clicked = document.querySelector(".thumbnailList li:first-child");
	mainPhoto = document.querySelector("#mainImage");
	logoHeading = document.querySelector("#movieDescription h3");
	movieDescription = document.querySelector("#movieDescription p");

	
	for (i=0; i<thumbnails.length; i++) {
		thumbnails[i].addEventListener("click", switchPhoto, true);
	}
	
}

function switchPhoto() {
	console.log("Picture Switched");
	
	clicked = this.id;
	mainPhoto.src = "images/movie" + this.id +".jpg";
	logoHeading.firstChild.nodeValue = movieHeader[this.id];
	movieDescription.firstChild.nodeValue = movieDesc[this.id];
}


window.addEventListener("load", initPhotos, false);

})();
