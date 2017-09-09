<?php
    require "dbConnection.php";
header("Access-Control-Allow-Origin: *");
?>

<?php
    $dataDeleteNote = $_POST;
    
    $IdNote = $dataDeleteNote['idNote'];
    
    $DeleteNote = $db->prepare("DELETE FROM Notes WHERE NotesId = :IdNote");
    
    $DeleteNote->bindParam(':IdNote',$IdNote);
    $DeleteNote->execute();
?>