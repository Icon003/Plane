<?php
    require "dbConnection.php";
    header("Access-Control-Allow-Origin: *");
?>

<?php
    $DataSound = $_POST;

    $Sound = $DataSound['Sound'];

    $UpdateSoundNotification = $db->prepare ("UPDATE Users SET Sound = :Sound WHERE Login = '{$_SESSION['logged_user']['Login']}'");
        
        
    $UpdateSoundNotification->bindParam(':Sound',$Sound);
    $UpdateSoundNotification->execute();
?>