<?php
    require "dbConnection.php";
header("Access-Control-Allow-Origin: *");
?>

<?php
    $dataDeletePereodicNotification = $_POST;
    
    $IdPereodicNotification = $dataDeletePereodicNotification['NumberPereodicNotification'];
    
    $DeletePereodicNotification = $db->prepare("DELETE FROM Periodic_Notification WHERE IdPereodicNotification = :IdPereodicNotification");
    
    $DeletePereodicNotification->bindParam(':IdPereodicNotification',$IdPereodicNotification);
    $DeletePereodicNotification->execute();
?>