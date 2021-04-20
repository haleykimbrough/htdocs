<?php
//include(conn.php);
include_once "session.php";
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Pain Link</title>
        <link rel="stylesheet" href="stylesheet/login.css">
    </head>
    <body>
        <section>
            <header>Login</header>
            <!-- <div class="panel panel-default"> -->
                <!-- <div class="panel-body"> -->
                    <!-- <form data-create-account="form"> -->
                    <form id="loginInfo" method="POST" action="signin.php">
                        <div class="form-group">
                            <input type="email" class="form-control" name="email" id="userUsername" value placeholder="Username" required>
                            <input type="password" class="form-control" name="password" id="enterPassword" value placeholder="Password" required>
                            <input type="submit" class="submitting" value="Submit" id="login-submit">
                        </div>
                    </form> 
                    <!-- </form> -->
                <!-- </div> -->
            <!-- </div> -->
        </section>
        <!-- <div class="accountStuff">
            <a href="mainpage.html"><button id="createAccount" class="btn btn">Login</button></a>    
        </div> -->

    </body>



</html>