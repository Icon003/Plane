<?php
    require "dbConnection.php";
    $dataNewPassword = $_POST;
    $errorsNewPassword = array();
    if(password_verify($dataNewPassword['SettingInputPasswod'], $_SESSION['logged_user']['Password'])
    ){
        $NewPassword = password_hash($dataNewPassword['InputNewPassword'], PASSWORD_DEFAULT);
        $User = $_SESSION['logged_user']['Login'];
        
        $SQLNewPassword = $db->prepare ("UPDATE Users SET Password = :NewPasswordUser WHERE Login = :User");
        
        $SQLNewPassword->bindParam(':NewPasswordUser',$NewPassword);
        $SQLNewPassword->bindParam(':User',$User);
        $SQLNewPassword->execute();
        
    }else{
        $errorsNewPassword[] = 'Неверно введённый пароль!';
    }

    if(empty($errorsNewPassword) )
    {
        echo '<div class="DivMessage"><img src="img/checked.svg">Пароль изменён</div>';
    }else{
        
        echo '<div class="DivError"><img src="img/caution-sign.svg">'.array_shift($errorsNewPassword).'</div>';
    }
?>