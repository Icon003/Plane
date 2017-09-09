<?php
    require "dbConnection.php";
header("Access-Control-Allow-Origin: *");
?>

<?php
    $dataUpdateTitleNote = $_POST;
    $IdNote = $dataUpdateTitleNote['idNote'];
    $UpdateTitleNote = $db->prepare("SELECT * FROM Notes WHERE NotesId =:IdNote");
    $UpdateTitleNote->bindParam(':IdNote',$IdNote);
    $UpdateTitleNote->execute();
    
    $ResultUpdateTitleNote = $UpdateTitleNote->FETCH(PDO::FETCH_ASSOC);
    $dataNote = array('Title' => $ResultUpdateTitleNote['TitleNote'], 'Type' => $ResultUpdateTitleNote['Type'], 'Status' => $ResultUpdateTitleNote['Status'], 'NotesId' => $ResultUpdateTitleNote['NotesId'], 'DateEnd' => $ResultUpdateTitleNote['DateEnd']);

    echo json_encode($dataNote);
?>