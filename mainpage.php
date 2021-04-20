<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Pain Link</title>
        <link rel="stylesheet" href="stylesheet/mainpage.css">
        <a href="logout.php"><button type="seeCalendar" class="btnlogout">Logout</button></a>
        <?php
        session_start();
        echo "<a>" . $_SESSION["loginuser"]. "</a>";
        ?>
    </head>
    <body>
        
        <canvas id="myChart" height="300" width="400"></canvas>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.min.js"></script>
        <div id="dateTime">
         <p>Date: <span id="datetime"></span></p>
        </div>

        <a href="calendar.html"><button type="seeCalendar" class="btn">Calendar</button></a>
        <a href="help.html"><button type="help" class="btn2">Help</button></a>
     
        <div class="triggers">
            <p>Possible triggers in pain could be: </p>
        </div>

        <footer class="footer">
            <p class="instructions">
                To enter data for a specific day, click the calendar button and then click
                which day you would like to input or edit.
                For questions, click the "Help" button or click 
                <a href="mailto:hrkimbro@go.olemiss.edu">
                here
                </a>
                to contact.
            </p>
        </footer>
    </body>
    <script src="scripts/mainpage.js"></script>

    <!--CENTER FLOAT BOTTOM-->

</html>