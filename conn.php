<?php
//turing
//$conn =  mysqli_connect("localhost", "hrkimbro", "olemiss2021", "hrkimbro");
//Localhost
$conn =  mysqli_connect("localhost", "root", "root", "hrkimbro");

//check connect
if ($conn -> connect_errno) {
    echo "Failed to connect to MySQL: " . $conn -> connect_error;
    exit(); 
}

?>