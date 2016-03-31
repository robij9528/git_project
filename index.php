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



<script src="js/main.js"></script>	
<script src="js/vendor/jquery.js"></script>
<script src="js/foundation.min.js"></script>
<script>
      $(document).foundation();
</script>
</body>



</html>
