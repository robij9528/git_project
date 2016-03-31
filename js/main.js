// JavaScript Document

// Self Executing Anonymous Function - use this  Prevents Global Variables

(function() {

	console.log("Yep the SEAF Fired");


	(function() {
		"use strict";
		var req,
			url,
			path,
			movieLinks,
			build,
			srchInput = document.querySelector("#srch"),
			filterLinks = document.querySelectorAll(".filterNav a"),
			live = document.querySelector("#livesrch"),
			nores = document.querySelector("#noRes");

		function init() {
			url="admin/includes/getMovies.php";
			build='';
			path = "init";
			infoRequire(path);
		}
		

		function infoRequire(path) {
			
			if (window.XMLHttpRequest) {
				req = new XMLHttpRequest(); // creates subway car
			}else{
				req = new ActiveXObject("Microsoft.XMLHTTP"); // for IE 5 and IE 6
			}
			req.open("GET", url, true); // this creates the destination or the track
			req.send(); // moves on the track
			//JS will do many other things with a server then one thing like a server waiting for drinks they will do other things before they go and pickes up the drinks
			if (path === "liveSearch"){
				req.onreadystatechange = itemSearch; //state changes to know when it needs to retrieve data			
			}else{
				req.onreadystatechange = addItems;
			}


		}

		function addItems(){

			var con = document.querySelector(".movies"), details = document.querySelector(".details");

			if((req.readyState===4) || (req.status===200)) {
				var items = JSON.parse(req.responseText);

				if(items.length > 1) {
					con.innerHTML = "";
					build = "";
				
				for (var i=0;i<items.length; i++) {
					build = '<li><img src="images/'+items[i].movies_thumb+'" alt="'+items[i].movies_title +'">';
					build += '<h2>'+items[i].movies_title+'</h2>';
					build += items[i].movies_year+'<br>';
					//change the href details.php for the homework next week
					build += '<a href="index.php?id='+items[i].movies_id+'">more</a></li>';

					con.innerHTML += build;
				}
				movieLinks = document.querySelectorAll(".movies a");
				for(var j=0; j<movieLinks.length; j++){
					movieLinks[j].addEventListener("click", itemDetails, false);
				}
			}else{
				var dBuild;
				items.innerHTML="";
				dBuild = '<h2>'+items[0].movies_title+'</h2>',
				dBuild += '<p>'+items[0].movies_storyline+'</p>',
				dBuild += '<a href="index.php">Refresh</a>',
				details.innerHTML = dBuild;
			}

			}else{
				con.innerHTML = "sorry, there was a server error, please try again later.";
			}


		}
		
		
		function itemSearch(e) {
			if ((req.readyState===4) || (req.status===200)) {   //ready state is 4 or 200 and means its done
				var srchItems = JSON.parse(req.responseText);
				for(var i=0; i<srchItems.length; i++) {
					build += '<a href=\"details.php?id='+srchItems[i].movies_id+'\">'+srchItems[i].movies_title+'</a>',
					build += '<p>'+srchItems[i].movies_year+'</p>',
					build += '<img src="images/'+srchItems[i].movies_thumb+'"alt="'+srchItems[i].movies_title+'"><br><br>';
				}


				live.innerHTML = build;
				build = '';
			}				
		}

		
		
		function searchLive() {
			// Purpose of this function is to rewrite the URL to be passed the search query on the PHP side.
			var capture = srchInput.value;
			url="admin/includes/getMovies.php?srch="+capture;
			path = "liveSearch";
			infoRequire(path);

			if(capture.length===0){
				nores.style.display="block";
				nores.innerHTML = "No Results Found";
				live.style.display="none";

			}

			else{
				live.style.display="block";
				nores.style.display="none";
			}
		}

		function filterItems(evt) {
			evt.preventDefault();
			//console.log("Works");
			var str = evt.target.href;
			var arr = str.split("=");
			str = arr[1];
			if(str) {
				url = "admin/includes/getMovies.php?filter="+str;
			}else{
				url = "admin/includes/getMovies.php";
			}
			path = "filterItems";
			infoRequire(path);
		}

		function itemDetails(e) {
			//console.log("ITems Details");
			e.preventDefault();
			//console.log(e.target);
			var str = e.target.href;
			//console.log(str);
			var arr = str.split("=");
			//console.log(arr[1]);
			url = "admin/includes/getMovies.php?id="+arr[1];
			//console.log(url);
			path = "itemDetails";
			infoRequire(path);
		}		
		
		// Listeners

		for(var i=0; i<filterLinks.length; i++){
			filterLinks[i].addEventListener("click", filterItems, false);

		}

		window.addEventListener("load", init, false);
		srchInput.addEventListener("keyup", searchLive, false);
		
	})();

})();