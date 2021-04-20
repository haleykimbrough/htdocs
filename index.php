<?php
//include(conn.php);
include_once "session.php";
?>

<!DOCTYPE html>
<html>
    <head>
        <!--link css and tab title-->
        <meta charset="utf-8">
        <title>Pain Link</title>
        <link rel="stylesheet" href="stylesheet/painlinkstyles.css">
    </head>
    <body>
        <h1>Pain Link</h1>
        <div class="accountStuff">
            <a href="login.php"><button type="login" class="btn">Login</button></a>
            <a href="createAccount.php"><button type="createAccount" class="btn">Create Account</button></a>
    
        </div>

        <footer id="footer">
            <p class="questions">
                Pain Link is a pain tracking website for patients in pain management. You enter various data every day and view your pain levels
                on a chart for up to nine previous days. Along with this, Pain Link provides you with possible causes for your spikes in pain.
                For a detailed list of features and how-to's, create an account and click on the "Help" tab.
                For questions or concerns, click  
                <a href="mailto:hrkimbro@go.olemiss.edu">
                here
                </a>
                to send an email.
            </p>
        </footer>
      

    </body>


</html>
