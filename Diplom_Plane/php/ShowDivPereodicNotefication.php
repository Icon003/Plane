<?php
require "dbConnection.php";
header("Access-Control-Allow-Origin: *");
?>

<?php

    $dataShowDivPereodicNote = $_POST;
    
    $errorsShowDivPereodicNote = array();
    
    $FindIdUsers = "SELECT UserId FROM Users WHERE Login = '{$_SESSION['logged_user']['Login']}'";
    //$FindIdUsers = "SELECT UserId FROM Users WHERE Login = '{$dataShowDivNote['SettingInputLogin']}'";
    $FindIdUsersOP= $db->query($FindIdUsers);
    $resultFindIdUsers = $FindIdUsersOP->fetch(PDO::FETCH_ASSOC);
    
    
    
    $FindInfoPereodicNote = "SELECT * FROM Periodic_Notification WHERE UserId = '{$resultFindIdUsers['UserId']}' ORDER BY IdPereodicNotification DESC";
    $FindInfoPereodicNoteOP= $db->query($FindInfoPereodicNote);
    $ResultFindInfoPereodicNoteOP = $FindInfoPereodicNoteOP->FETCHALL(PDO::FETCH_ASSOC);
    $count = count($ResultFindInfoPereodicNoteOP);
    echo "<div class='col-md-12 ContainerNote'>";
    foreach($ResultFindInfoPereodicNoteOP as $arr){
        echo '<div class="col-md-12 BlockNotePeriodic">';
            echo '<div  class="col-md-12 ButtonDeleteNotePereodic"><img class="ButtonDeleteNotePereodicImg" data-id1="'.$arr['IdPereodicNotification'].'" src="/img/rubbish-bin.svg"></div>';
            echo '<div class="col-md-12 TitleBlockNotePereodic">'.$arr['NamePereodicNote'].'</div>';
            echo '<div class="col-md-12 ContainerDateAndPereodicNotePereodic">';
                echo '<div class="col-md-6 PereodiclockNotePereodic">Каждый: '.$arr['Type'].'</div>';
                echo '<div class="col-md-6 DateBlockNotePereodic">'.$arr['Date'].'/'.$arr['Time'].'</div>
                </div>
            </div>';
    }

echo '<script>$(".ButtonDeleteNotePereodicImg").on("click" , function(){
    var NumberPereodicNotification = $(this).attr("data-id1");
    alert(NumberPereodicNotification);
});</script>';

//    echo($FindInfoPereodicNote);
?>