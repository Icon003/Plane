<?php
require "dbConnection.php";
header("Access-Control-Allow-Origin: *");
?>

<?php
    $data = $_POST;// Присваиваем переменной data все значения которые приходят из POST.
    $errors = array();// Создаём массив ошибок для их хранения.

    //проверка на пустоту поля логин.
    if(trim($data['InputLoginRegistration']) == '')
    {
        $errors[] = 'Введите логин!';
    }

    //Проверка на пустоту поля Email.
    if(trim($data['InputEmailRegistration']) == '')
    {
    $errors[] = 'Введите Email!';
    }

    if(preg_match('/^[а-яёА-ЯЁ\s\(\)]+$/',$data['InputLoginRegistration'])){
        $errors[] = 'Недопустимые символы в логине';
    }
    if(preg_match('/^[а-яёА-ЯЁ\s\(\)]+$/',$data['InputEmailRegistration'])){
        $errors[] = 'Недопустимые символы в Email';
    }
    if(preg_match('/^[а-яёА-ЯЁ\s\(\)]+$/',$data['InputPasswordRegistration'])){
        $errors[] = 'Недопустимые символы в пароле';
    }

    //Проверка на пустоту поля пароля.
    if($data['InputPasswordRegistration'] == '')
    {
    $errors[] = 'Введите пароль!';
    }

    //Проверка на сопадения повторно введённого пароля.
    if($data['InputRePasswordRegistration'] != $data['InputPasswordRegistration'])
    {
    $errors[] = 'Повторный пароль введён не верно!';
    }
    
    //Проверка на существование такого пользователя по логину.
    $SQLCheckLogin = "SELECT COUNT(*) FROM Users WHERE Login = '{$data['InputLoginRegistration']}'";
    $resultLogin = $db->query($SQLCheckLogin);

    if ($resultLogin->fetchColumn()) {
        $errors[] = 'Такой пользователь существует!';
    }

    //Проверка на существование такого пользователя по Email.
    $SQLCheckEmail = "SELECT COUNT(*) FROM Users WHERE Email = '{$data['InputEmailRegistration']}'";
    $resultEmail = $db->query($SQLCheckEmail);

    if ($resultEmail->fetchColumn()) {
        $errors[] = 'Такой пользователь существует!';
    }


    if(empty($errors) )
    {
        $LoginUserRegistration = $data['InputLoginRegistration'];
        $EmailUserRegistration = $data['InputEmailRegistration'];
        $ThemeColor = "../css/Theme/ThemeBlue.css";
        $PasswordUserRegistration = password_hash($data['InputPasswordRegistration'], PASSWORD_DEFAULT);
        
        $RegistrationDate = $db->prepare("INSERT INTO Users (Login,Email,Password,ThemeColor)
        VALUES (:InputLoginRegistration,:InputEmailRegistration,:InputPasswordRegistration,:ThemeColor)");
        
        $RegistrationDate->bindParam(':InputLoginRegistration',$LoginUserRegistration);
        $RegistrationDate->bindParam(':InputEmailRegistration',$EmailUserRegistration);
        $RegistrationDate->bindParam(':InputPasswordRegistration',$PasswordUserRegistration);
        $RegistrationDate->bindParam(':ThemeColor',$ThemeColor);
        $RegistrationDate->execute();
//        print_r($data);
//        echo '<div class="error">'.$_POST.'</div>';
        $A = 'Вы зарегистрированы';
        echo json_encode($A);
        
        //Всё идёт по плану регистрируем   
    }else
    {
        
        $A = array_shift($errors);
        echo json_encode($A);
    }
?>