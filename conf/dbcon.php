<?php
	$hostname = "127.0.0.1";
	$username = "up";
	$password = "upload";
	$dbName = "webAtt";
	
	define('CLIENT_MULTI_RESULTS',131072);
	
	$conn=mysqli_connect($hostname,$username,$password,$dbName) or die("Could not connect: ".mysql_error());
	
	// or die("Could not connect: ".$conn->getMessage()."\n");
	//mysql_select_db($dbName,$conn) or die("Could not select database");
?>