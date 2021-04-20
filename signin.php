<?php
session_start();
include("conn.php");
$uname = $_POST["email"];
$password = hash("sha512", $_POST["password"]);
$username = mysqli_real_escape_string($conn, $uname);

$sql = "SELECT * FROM Users WHERE `email` = '$uname' and `password` = '$password'";
$result = mysqli_query($conn, $sql);
//echo $result;
$count = mysqli_num_rows($result);

if($count == 1){
    $_SESSION['loginuser'] = $uname;
    header("location: mainpage.php");
}

else {
    echo "Error your email/password is wrong"; 
}
?>