<?php 

require_once('admin/includes/function.php');

	if(isset($_GET['id'])){
			$tbl = "tbl_movies";
			$col = "movies_id";
			$id = $_GET['id'];
			$getMov = getSingle($tbl, $col, $id);
		}else{
			echo "try again";
		}
 ?>

 <html>
 <head>
 	<meta charset="utf-8">
	<title>About the Movie</title>
	<link rel="stylesheet" href="css/foundation.min.css"/>
	<link href="css/reset.css" rel="stylesheet" type="text/css" media="screen">
	<link href="css/main.css" rel="stylesheet" type="text/css" media="screen">
	<link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
 </head>
 <body>

 

 <div class="row deets">
 	<h2>About the Movie</h2>
	<div class="small-12 large-12 columns detailsPage">
		<?php 

			if(!is_string($getMov)) {
				while($row = mysqli_fetch_array($getMov)) {
					echo "<h2>{$row['movies_title']}</h2>";
					echo "<img class=\"small-8 large-3 small-offset-2 large-offset-0 columns small-centered\" src=\"images/{$row['movies_thumb']}\" alt=\"{$row['movies_title']}\"/>";
					echo "<p class=\"small-12 large-9 columns\">{$row['movies_storyline']}</p>";
				}
			}else{
				echo "<p>{$getMov}</p>";
			}

		 ?>
	</div>
	 <a class="small-12 large-12 columns" href="index.php">Back</a>
 </div>




	
<script src="js/vendor/jquery.js"></script>
<script src="js/foundation.min.js"></script>
<script>
      $(document).foundation();
</script>
 </body>
 </html>