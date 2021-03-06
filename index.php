<?php 

 ?>


<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Movie Search</title>
<link rel="stylesheet" href="css/foundation.min.css"/>
<link href="css/reset.css" rel="stylesheet" type="text/css" media="screen">
<link href="css/main.css" rel="stylesheet" type="text/css" media="screen">
<link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Alegreya+Sans' rel='stylesheet' type='text/css'>

</head>


<body>

<section class="row pageTitle">
	<h2 class="hidden">Image Gallery</h2>
	<h2 class="text-center small-12 large-12 columns">Check out these new films that have just been released!</h2>
	<div class="large-4 small-12 columns mainImage">
		<img id="mainImage" src="images/mov0.jpg" alt="starwars">
	</div>
	<div class="small-12 large-8 columns movieDesc" id="movieDesc">
		<h2 id="movieTitle">Star Wars The Force Awakens</h2>
		<p id="moviePlot">Three decades after the defeat of the Galactic Empire, a new threat arises. The First Order attempts to rule the galaxy and only a ragtag group of heroes can stop them, along with the help of the Resistance.</p>
	</div>
</section>
<section class="row">
	<h2 class="hidden">Image thumbs</h2>
	<div class="large-12 small-12 columns thumbnails">
		<ul class="small-block-grid-3 large-block-grid-8">
			<li id="0"><a href="#"><img src="images/starwars_tfa_TH.jpg" alt="starwars thumb"></a></li>
			<li id="1"><a href="#"><img src="images/10_cloverfield_lane_TH.jpg" alt="10 cloverfield lane thumb"></a></li>
			<li id="2"><a href="#"><img src="images/deadpool_TH.jpg" alt="deadpool thumb"></a></li>
			<li id="3"><a href="#"><img src="images/revinant_TH.jpg" alt="revinant thumb"></a></li>
			<li id="4"><a href="#"><img src="images/room_TH.jpg" alt="room thumb"></a></li>
			<li id="5"><a href="#"><img src="images/spotlight_TH.jpg" alt="spotlight thumb"></a></li>
			<li id="6"><a href="#"><img src="images/the_witch_TH.jpg" alt="the witch thumb"></a></li>
			<li id="7"><a href="#"><img src="images/zootopia_TH.jpg" alt="zootopia thumb"></a></li>			
		</ul>
	</div>

</section>


<div>
	<form class="row">
		<div class="small-12 large-10 columns large-centered srchMovies">
			<h2>Search Movie</h2>
			<p>Search any movie in our database, click on the title to learn more.</p>
			<input id="srch" type="text" name="search" placeholder="search">
			<div class="movieCon row">			
				<div class="small-12 large-9 columns large-centered end">
					<ul>
						<li><a href="#" id="livesrch"></a></li>
						<li id="noRes"></li>
					</ul>
				</div>
			</div>
		</div>
	</form>
</div>

<!-- test! -->


<div class="row">
	<div class=" small-12 large-6 large-centered columns">
		<ul class="filterNav inline-list">
			<li><a href="index.php?filter=action">Action</a></li>
			<li><a href="index.php?filter=comedy">Comedy</a></li>
			<li><a href="index.php?filter=family">Family</a></li>
			<li><a href="index.php?filter=horror">Horror</a></li>
			<li><a href="index.php">All</a></li>
		</ul>
	</div>
</div>

<div class="row">
	<div class="small-12 large-12 columns">
		<div class="details"></div>
	</div>
</div>

<div class="row">
	<div class="small-12 large-12 columns">
		<ul class="movies large-block-grid-4 small-block-grid-2"></ul>
	</div>			
</div>



<script src="js/gallery.js"></script>	
<script src="js/main.js"></script>	
<script src="js/vendor/jquery.js"></script>
<script src="js/foundation.min.js"></script>
<script>
      $(document).foundation();
</script>
</body>



</html>
