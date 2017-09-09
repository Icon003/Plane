<?php
    require "dbConnection.php";
header("Access-Control-Allow-Origin: *");
?>

<?php
    $dataAutorization = $_POST;
    $errorsAutorization = array();
    //$newArray = array();
    
    $SQLCheckLoginAutorization = "SELECT COUNT(*) FROM Users WHERE Login = '{$dataAutorization['InputLoginAutorization']}'";
    $resultLoginAutorization = $db->query($SQLCheckLoginAutorization);

    if ($resultLoginAutorization->fetchColumn()) {
        
        $SQLCheckPasswodAutorization = "SELECT * FROM Users WHERE Login = '{$dataAutorization['InputLoginAutorization']}'";
        $resultPasswodAutorization= $db->query($SQLCheckPasswodAutorization);
        $UserBD = $resultPasswodAutorization->fetch(PDO::FETCH_ASSOC);

        if(password_verify($dataAutorization['InputPasswordAutorization'], $UserBD['Password'])
        ){
            $_SESSION['logged_user'] = $UserBD;


        }else{
             $errorsAutorization[] = 'Пароль не верный!';
        }
    
    }else
    {
        $errorsAutorization[] = 'Такого пользователя не существует!';
    }

    if(empty($errorsAutorization) )
    {
//        $A = 'Всё Хорошо';
//        echo json_encode($A);
                $newArray = array("Ok" => "true", "Login" => "{$_SESSION['logged_user']['Login']}", "Password" =>"{$_SESSION['logged_user']['Password']}");
            echo json_encode($newArray);
    }else
    {    
        $A = array_shift($errorsAutorization);
        echo json_encode($A);

    }
?>