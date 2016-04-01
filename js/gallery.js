(function() {


var logoHeader = [];
logoHeader[0] = "";
logoHeader[1] = "";
logoHeader[2] = "";
logoHeader[3] = "";
logoHeader[4] = "";
logoHeader[5] = "";

var logoDesc = [];
logoDesc[0] = "";
logoDesc[1] = "";
logoDesc[2] = "";
logoDesc[3] = "";
logoDesc[4] = "";
logoDesc[5] = "";




function initPhotos(){
	
	console.log("init fired");
	thumbnails = document.querySelectorAll(".thumbnailList li");
	clicked = document.querySelector(".thumbnailList li:first-child");
	mainPhoto = document.querySelector("#mainImage");
	logoHeading = document.querySelector("#logoDescription h3");
	logoDescription = document.querySelector("#logoDescription p");

	
	for (i=0; i<thumbnails.length; i++) {
		thumbnails[i].addEventListener("click", switchPhoto, true);
	}
	
}

function switchPhoto() {
	console.log("Picture Switched");
	
	clicked = this.id;
	mainPhoto.src = "images/logo" + this.id +".png";
	logoHeading.firstChild.nodeValue = logoHeader[this.id];
	logoDescription.firstChild.nodeValue = logoDesc[this.id];
}


window.addEventListener("load", initPhotos, false);

})();
