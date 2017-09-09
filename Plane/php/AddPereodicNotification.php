<?php
    require "dbConnection.php";
    header("Access-Control-Allow-Origin: *");
?>

<?php
//Присваиваем переменной всё что пришло от поста, а так же создаём массив ошибок.
    $dataAddPereodicNotification = $_POST;
    $errorsAddPereodicNotification = array();

//Проверяем на пустоту инпут заголовка.
    if(trim($dataAddPereodicNotification['NamePereodicNotification']) == '')
    {
        $errorsAddPereodicNotification[] = 'Введите название!';
        
    }
//Проверяем на пустоту дату и время напоминания.
        if(trim($dataAddPereodicNotification['DatePereodicNotification']) == ''){
            
            $errorsAddPereodicNotification[] = 'Выберите дату!';
        }
        if($dataAddPereodicNotification['DatePereodicNotification'] < $dataAddPereodicNotification['MinimymDate']){
            
            $errorsAddPereodicNotification[] = 'Выбранна некоректная дата!';
        }
        if(trim($dataAddPereodicNotification['TimePereodicNotification']) == ''){
            
            $errorsAddPereodicNotification[] = 'Введите время!';
        }

//Проверяем на пустоту массив с ошибками, если он пустой добавляем запись.
    if(empty($errorsAddPereodicNotification))
    {
        $FindIdUsers = "SELECT UserId FROM Users WHERE Login = '{$_SESSION['logged_user']['Login']}'";
        //$FindIdUsers = "SELECT UserId FROM Users WHERE Login = '{$dataAddNote['SettingInputLogin']}'";
        $FindIdUsersO= $db->query($FindIdUsers);
        $resultFindIdUsers = $FindIdUsersO->fetch(PDO::FETCH_ASSOC);
        
        $NamePereodicNotification = $dataAddPereodicNotification['NamePereodicNotification'];    
        $TypePereodicNotification = $dataAddPereodicNotification['TypePereodicNotification'];    
        $DatePereodicNotification = $dataAddPereodicNotification['DatePereodicNotification'];    
        $TimePereodicNotification = $dataAddPereodicNotification['TimePereodicNotification'];
        $resultFindIdUsersBd = $resultFindIdUsers['UserId'];
        
        $AddPereodicNotification = $db->prepare("INSERT INTO Periodic_Notification (UserId,NamePereodicNote,Date, Time,Type)
        VALUES (:ResultFindIdUsersBd,:NamePereodicNotification,:DatePereodicNotification, :TimePereodicNotification,:TypePereodicNotification)");
        
        
        $AddPereodicNotification->bindParam(':NamePereodicNotification',$NamePereodicNotification);
        $AddPereodicNotification->bindParam(':TypePereodicNotification',$TypePereodicNotification);
        $AddPereodicNotification->bindParam(':DatePereodicNotification',$DatePereodicNotification);
        $AddPereodicNotification->bindParam(':TimePereodicNotification',$TimePereodicNotification);
        $AddPereodicNotification->bindParam(':ResultFindIdUsersBd',$resultFindIdUsersBd);
        $AddPereodicNotification->execute();
        $A = true;
        echo $A;
//Если нет тогда выводим ошибку.
    }else{
        $B = array_shift($errorsAddPereodicNotification);
        echo json_encode($B);
    }
    
?>