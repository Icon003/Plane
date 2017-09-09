<?php
require "dbConnection.php";
header("Access-Control-Allow-Origin: *");
?>

<?php
    $dataSaveNote = $_POST;
    
    $DataNote = $dataSaveNote['DataNote'];
    $TextNote = $dataSaveNote['TextNote'];
    
    $SaveNote = $db->prepare("UPDATE Notes SET TextNote = :TextNote WHERE NotesId = :DataNote");
    
    $SaveNote->bindParam(':DataNote',$DataNote);
    $SaveNote->bindParam(':TextNote',$TextNote);
    $SaveNote->execute();
?>