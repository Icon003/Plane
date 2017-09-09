<?php
    require "dbConnection.php";
    header("Access-Control-Allow-Origin: *");
?>

<?php
//Присваиваем переменной всё что пришло от поста, а так же создаём массив ошибок.
    $dataAddNote = $_POST;
    $errorsAddNote = array();

//Проверяем на пустоту инпут заголовка.
    if(trim($dataAddNote['InputTitleNote']) == '')
    {
        $errorsAddNote[] = 'Введите заголовок!';
        
    }

//Проверяем на пустоту тип напоминания.
    if(trim($dataAddNote['InputTypeNote']) == 'Напоминание')
    {   

//Проверяем на пустоту дату и время напоминания.
        if(trim($dataAddNote['InputReminderDateNote']) == ''){
            
            $errorsAddNote[] = 'Выберите дату!';
        }
        if($dataAddNote['InputReminderDateNote'] < $dataAddNote['MinimymDate']){
            
            $errorsAddNote[] = 'Выбранна некоректная дата!';
        }
        if(trim($dataAddNote['InputReminderTimeNote']) == ''){
            
            $errorsAddNote[] = 'Введите время!';
        }
    }

//Проверяем на пустоту массив с ошибками, если он пустой добавляем запись.
    if(empty($errorsAddNote))
    {
        $FindIdUsers = "SELECT UserId FROM Users WHERE Login = '{$_SESSION['logged_user']['Login']}'";
        //$FindIdUsers = "SELECT UserId FROM Users WHERE Login = '{$dataAddNote['SettingInputLogin']}'";
        $FindIdUsersO= $db->query($FindIdUsers);
        $resultFindIdUsers = $FindIdUsersO->fetch(PDO::FETCH_ASSOC);
        
        $InputTitleNote = $dataAddNote['InputTitleNote'];    
        $InputTypeNote = $dataAddNote['InputTypeNote'];    
        $InputReminderDateNote = $dataAddNote['InputReminderDateNote'];    
        $InputReminderTimeNote = $dataAddNote['InputReminderTimeNote'];
        $CurrentTime = $dataAddNote['CurrentTime'];
        $resultFindIdUsersBd = $resultFindIdUsers['UserId'];

        $AddNote = $db->prepare("INSERT INTO Notes (UserId,TitleNote,Type, DateAndTimeStart,DateEnd,TimeEnd)
        VALUES (:resultFindIdUsersBd,:InputTitleNote,:InputTypeNote, :CurrentTime,:InputReminderDateNote,:InputReminderTimeNote)");
        
        
        $AddNote->bindParam(':InputTitleNote',$InputTitleNote);
        $AddNote->bindParam(':InputTypeNote',$InputTypeNote);
        $AddNote->bindParam(':InputReminderDateNote',$InputReminderDateNote);
        $AddNote->bindParam(':InputReminderTimeNote',$InputReminderTimeNote);
        $AddNote->bindParam(':InputReminderTimeNote',$InputReminderTimeNote);
        $AddNote->bindParam(':CurrentTime',$CurrentTime);
        $AddNote->bindParam(':resultFindIdUsersBd',$resultFindIdUsersBd);
        $AddNote->execute();
        $A = true;
        echo $A;
//Если нет тогда выводим ошибку.
    }else{
        $B = array_shift($errorsAddNote);
        echo json_encode($B);
    }
    
?>