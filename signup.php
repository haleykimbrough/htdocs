<?php
include("conn.php");
$uname = $_POST["email"];
$password = hash("sha512", $_POST["password"]);
$username = mysqli_real_escape_string($conn, $uname);

$sql =("SELECT * Users WHERE email = $username");
$result = mysqli_query($conn, $sql);
$count = mysqli_num_rows($result);

if($count == 0){
    $sql =("INSERT INTO `Users` (`email`, `password`) VALUES ('$username', '$password')");
    $result = mysqli_query($conn, $sql);
    if($result){
        // echo "done";
        header("location: login.php");
    }
}

else {
    echo "You already have an account with us"; 
}

?>