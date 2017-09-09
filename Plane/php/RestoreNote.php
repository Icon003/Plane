<?php
    require "dbConnection.php";
    header("Access-Control-Allow-Origin: *");
?>

<?php
    $dataRestoreNote = $_POST;
    $errorsRestore = array();

    if(trim($dataRestoreNote['RestoreDate']) == ''){
        
        $errorsRestore[] = 'Выберите дату!';
    }
    if($dataRestoreNote['RestoreDate'] < $dataRestoreNote['MinimymDate']){
        
        $errorsRestore[] = 'Выбранна некоректная дата!';
    }
    if(trim($dataRestoreNote['RestoreTime']) == ''){
            
        $errorsRestore[] = 'Введите время!';
    }

    if(empty($errorsRestore)){
    $IdNote = $dataRestoreNote['idNote'];
    $DateEnd = $dataRestoreNote['RestoreDate'];
    $TimeEnd = $dataRestoreNote['RestoreTime'];

    $RestoreNote = $db->prepare("UPDATE Notes SET Status = 'В процессе', DateEnd = :DateEnd, TimeEnd = :TimeEnd WHERE NotesId = :IdNote");
    
    $RestoreNote->bindParam(':IdNote',$IdNote);
    $RestoreNote->bindParam(':DateEnd',$DateEnd);
    $RestoreNote->bindParam(':TimeEnd',$TimeEnd);
    $RestoreNote->execute();
    $A = true;
    echo $A;
    }else{
        $Error = array_shift($errorsRestore);
        echo json_encode($Error);
    }
//    echo $IdNote;
//    echo $Title;
?>