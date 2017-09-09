<?php
    require "dbConnection.php";
header("Access-Control-Allow-Origin: *");
?>

<?php
    $dataAutorization2 = $_POST;
    $errorsAutorization2 = array();


        
    $SQLCheckLoginAutorization2 = "SELECT COUNT(*) FROM Users WHERE Login = '{$dataAutorization2['LoginLocalStorage']}'";
    $resultLoginAutorization2 = $db->query($SQLCheckLoginAutorization2);

    if ($resultLoginAutorization2->fetchColumn()) {
        
        $SQLCheckPasswodAutorization2 = "SELECT * FROM Users WHERE Login = '{$dataAutorization2['LoginLocalStorage']}'";
        $resultPasswodAutorization2= $db->query($SQLCheckPasswodAutorization2);
        $UserBD2 = $resultPasswodAutorization2->fetch(PDO::FETCH_ASSOC);
//        print_r ($UserBD2);
        if($dataAutorization2['PasswordLocalStorage'] == $UserBD2['Password'])
        {
            $_SESSION['logged_user'] = $UserBD2;
            
        }
        else{
             $errorsAutorization2[] = 'Пароль не верный!';
        }
    
    }else
    {
        $errorsAutorization2[] = 'Такого пользователя не существует!';
    }
    if(empty($errorsAutorization2) )
        {
            $A2 = 'true';
            echo json_encode($A2);

        }else
    {    
        $A2 = array_shift($errorsAutorization2);
        echo json_encode($A2);

    }
    
?>