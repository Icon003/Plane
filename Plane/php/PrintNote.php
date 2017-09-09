<?php
    require "dbConnection.php";
    header("Access-Control-Allow-Origin: *");
?>

<?php
    $dataPrintInfoNote = $_POST;
    
    $InfoPrintNote = "SELECT * FROM Notes WHERE NotesId ='{$dataPrintInfoNote['PrintIdNote']}'";

    $InfoPrintNoteOP= $db->query($InfoPrintNote);

    $ResultInfoPrintNote = $InfoPrintNoteOP->FETCH(PDO::FETCH_ASSOC);
    

    $data = array('Type' => $ResultInfoPrintNote['Type'], 'DateAndTimeStart' => $ResultInfoPrintNote['DateAndTimeStart'], 'TextNote' => $ResultInfoPrintNote['TextNote'], 'TitleNote' => $ResultInfoPrintNote['TitleNote']);
    
    echo json_encode($data);
?>