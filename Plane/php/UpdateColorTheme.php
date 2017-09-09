<?php
    require "dbConnection.php";
    header("Access-Control-Allow-Origin: *");
?>

<?php
//    $UpdateColorTheme = $db->prepare("SELECT * FROM Users WHERE Login = '{$_SESSION['logged_user']['Login']}'");
//    $resultUpdateColorTheme = $UpdateColorTheme->fetchAll(PDO::FETCH_ASSOC);
    $UpdateColorTheme = "SELECT * FROM Users WHERE Login = '{$_SESSION['logged_user']['Login']}'";
    $UpdateColorThemeOP= $db->query($UpdateColorTheme);
    $resultUpdateColorTheme = $UpdateColorThemeOP->fetch(PDO::FETCH_ASSOC);

    echo $resultUpdateColorTheme['ThemeColor'];
?>