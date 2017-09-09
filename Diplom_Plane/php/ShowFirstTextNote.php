<?php
    require "dbConnection.php";
header("Access-Control-Allow-Origin: *");
?>

<?php
    $dataShowTextFirstNote = $_POST;
    
    $FindTextFirstNote = "SELECT TextNote FROM Notes WHERE NotesId = '{$dataShowTextFirstNote['FirstNote']}'";
    $FindTextFirstNoteOP= $db->query($FindTextFirstNote);
    $resultFindTextFirstNote = $FindTextFirstNoteOP->fetch(PDO::FETCH_ASSOC);

    echo $resultFindTextFirstNote['TextNote'];
?>