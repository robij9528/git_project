<?php
	function getSingle($tbl, $col, $id) {
		require_once('connect.php');
		$querySingle = "SELECT * FROM {$tbl} WHERE {$col} = {$id}";
		//echo $querySingle;
		$runSingle = mysqli_query($link, $querySingle);
		
		if($runSingle){
			return $runSingle;
		}
		else{
			$error = "This is not the movie you were looking for...";
			return $error;
		}
	}
 ?>