<?php
    require "dbConnection.php";
    header("Access-Control-Allow-Origin: *");
?>

<?php
    $DataCheckNotification = $_POST;

    $SerchIdUsers = "SELECT UserId FROM Users WHERE Login ='{$_SESSION['logged_user']['Login']}'";
        $SerchIdUsersOP= $db->query($SerchIdUsers);
        $ResultSerchIdUsers = $SerchIdUsersOP->fetch(PDO::FETCH_ASSOC);

    $SerchSoundUsers = "SELECT Sound FROM Users WHERE Login ='{$_SESSION['logged_user']['Login']}'";
        $SerchSoundUsersOP= $db->query($SerchSoundUsers);
        $ResultSerchSoundUsers = $SerchSoundUsersOP->fetch(PDO::FETCH_ASSOC);

    $CheckingNotification = "SELECT * FROM Notes WHERE Type = 'Напоминание' AND Status = 'В процессе' AND UserId = '{$ResultSerchIdUsers['UserId']}'";
        $CheckingNotificationOP= $db->query($CheckingNotification);
        $ResultCheckingNotification = $CheckingNotificationOP->FETCHALL(PDO::FETCH_ASSOC);
        $count = count($ResultFindInfoNoteOP);
        $count = 0;
        $newArray = array();
        foreach($ResultCheckingNotification as $arr){
            if($arr['DateEnd'] == $DataCheckNotification['DataResult']){
                if($arr['TimeEnd'] <= $DataCheckNotification['TimeResult']){
                    $count++;
                    $newArray[] = array("Title" => $arr['TitleNote'], "Text" =>$arr['TextNote'], "Sound" =>$ResultSerchSoundUsers['Sound']);
                    
                }
            }
            
        }

echo json_encode($newArray);
//$dataNotification = array('Title' => 'Заголовок', 'DateEnd' => '25');
//echo json_encode($dataNotification);

?>