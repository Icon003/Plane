<?php
    require "dbConnection.php";
    header("Access-Control-Allow-Origin: *");
?>

<?php

    $UpdateColorThemeCalendar = "SELECT ThemeColor FROM Users WHERE Login = '{$_SESSION['logged_user']['Login']}'";
    $UpdateColorThemeCalendarOP= $db->query($UpdateColorThemeCalendar);
    $resultUpdateColorThemeCalendar = $UpdateColorThemeCalendarOP->fetch(PDO::FETCH_ASSOC);

    echo json_encode($resultUpdateColorThemeCalendar['ThemeColor']);

?>