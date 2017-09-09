<?php
    require "dbConnection.php";
    header("Access-Control-Allow-Origin: *");
?>
<?php
    $DataThemeColor = $_POST;

    $Color = $DataThemeColor['Color'];

    $UpdateThemeColor = $db->prepare ("UPDATE Users SET ThemeColor = :ThemeColor WHERE Login = '{$_SESSION['logged_user']['Login']}'");
        
        
    $UpdateThemeColor->bindParam(':ThemeColor',$Color);
    $UpdateThemeColor->execute();
?>