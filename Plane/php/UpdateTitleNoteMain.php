<?php
    require "dbConnection.php";
header("Access-Control-Allow-Origin: *");
?>

<?php
    $dataUpdateTitleNoteMain = $_POST;
    $errorsUpdateTitleNoteMain = array();

    if(trim($dataUpdateTitleNoteMain['Date']) == ''){
            
            $errorsUpdateTitleNoteMain[] = 'Выберите дату!';
        }
    if($dataUpdateTitleNoteMain['Date'] < $dataUpdateTitleNoteMain['MinimymDate']){

        $errorsUpdateTitleNoteMain[] = 'Выбранна некоректная дата!';
    
    }

    if(empty($errorsUpdateTitleNoteMain))
    {
    $IdNote = $dataUpdateTitleNoteMain['idNote'];
    $Title = $dataUpdateTitleNoteMain['Title'];
    $Date = $dataUpdateTitleNoteMain['Date'];

    $UpdateTitleNoteMain = $db->prepare("UPDATE Notes SET TitleNote = :Title, DateEnd = :Date WHERE NotesId = :IdNote");
    
    $UpdateTitleNoteMain->bindParam(':IdNote',$IdNote);
    $UpdateTitleNoteMain->bindParam(':Title',$Title);
    $UpdateTitleNoteMain->bindParam(':Date',$Date);
    $UpdateTitleNoteMain->execute();
        $A = true;
        echo $A;
    }else{
        $B = array_shift($errorsUpdateTitleNoteMain);
        echo json_encode($B);
    }
//    echo $IdNote;
//    echo $Title;
?>