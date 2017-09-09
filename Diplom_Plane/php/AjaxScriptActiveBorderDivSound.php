<?php
    require "dbConnection.php";
    header("Access-Control-Allow-Origin: *");
?>

<?php
    $UpdateSoundNotification = "SELECT Sound FROM Users WHERE Login = '{$_SESSION['logged_user']['Login']}'";
    $UpdateSoundNotificationOP= $db->query($UpdateSoundNotification);
    $resultUpdateSoundNotification = $UpdateSoundNotificationOP->fetch(PDO::FETCH_ASSOC);
    
echo json_encode($resultUpdateSoundNotification['Sound']);
?>