<?php
    require "dbConnection.php";
header("Access-Control-Allow-Origin: *");
?>

<?php
    $dataComplitedNote = $_POST;

    $IdNote = $dataComplitedNote['idNote'];

    $ComplitedNote = $db->prepare("UPDATE Notes SET Status = 'Выполнено' WHERE NotesId = :IdNote");
    
    $ComplitedNote->bindParam(':IdNote',$IdNote);
    $ComplitedNote->execute();
?>