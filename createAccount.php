<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Pain Link</title>
        <link rel="stylesheet" href="stylesheet/createaccountstyles.css">
    </head>
    <body>
        <section>
            <header>Create Account</header>
            <div class="panel panel-default">
                <div class="panel-body">
                    <form data-create-account="form" action="signup.php" method="post">
                        <div class="form-group">
                            <!--<label id="emailInput">Create Account</label>-->
                            <input class="form-control" type="email" name="email" id="emailAddress" value placeholder="Email" required>
                        </div>
                            <div class="form-group">
                                <label for="passwordInput"></label>
                                <input type="password" class="form-control" name="password" id="createPassword" value placeholder="Password" required/>
                                <button type="createAccount" class="btn btn">Create Account</button>  
                            </div>
                    </form>
                </div>
            </div>
        </section>

    </body>



</html>