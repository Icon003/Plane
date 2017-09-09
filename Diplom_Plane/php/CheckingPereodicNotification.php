<?php
    require "dbConnection.php";
    header("Access-Control-Allow-Origin: *");
?>

<?php
    
    $DataCheckingPereodicNotification = $_POST;
    
    $SerchIdUsers = "SELECT UserId , Sound FROM Users WHERE Login ='{$_SESSION['logged_user']['Login']}'";
        $SerchIdUsersOP= $db->query($SerchIdUsers);
        $ResultSerchIdUsers = $SerchIdUsersOP->fetch(PDO::FETCH_ASSOC);
        
    $CheckingPeriodicNotification = "SELECT * FROM Periodic_Notification WHERE UserId = '{$ResultSerchIdUsers['UserId']}'";
        $CheckingPeriodicNotificationOP = $db->query($CheckingPeriodicNotification);
        $ResultCheckingPeriodicNotification = $CheckingPeriodicNotificationOP->FETCHALL(PDO::FETCH_ASSOC);
            $newArray = array();
            $count = 0;
            foreach($ResultCheckingPeriodicNotification as $arr){
                if($arr['Date'] == $DataCheckingPereodicNotification['CurrentDate']){
                    if($arr['Time'] <= $DataCheckingPereodicNotification['CurrentTime']){
                        $count++;
                        $newArray[] = array("Name" => $arr['NamePereodicNote'], "Sound" =>$ResultSerchIdUsers['Sound'], "IdNotification" => $arr['IdPereodicNotification']);
                    }
                }
            }
    echo json_encode($newArray);
//    echo ($count);
    
    
//    
        $CheckingPeriodicNotification2 = "SELECT * FROM Periodic_Notification WHERE UserId = '{$ResultSerchIdUsers['UserId']}'";
        $CheckingPeriodicNotificationOP2 = $db->query($CheckingPeriodicNotification2);
        $ResultCheckingPeriodicNotification2 = $CheckingPeriodicNotificationOP2->FETCHALL(PDO::FETCH_ASSOC);
//            $newArray = array();
//            $count = 0;
            foreach($ResultCheckingPeriodicNotification2 as $arr2){
                if($arr2['Date'] == $DataCheckingPereodicNotification['CurrentDate']){
                    if($arr2['Time'] <= $DataCheckingPereodicNotification['CurrentTime']){
                        if($arr2['Type'] == 'Год'){
                            $UpdateDate = new DateTime($arr2['Date']);
                            $interval = new DateInterval('P12M');
                            $UpdateDate->add($interval);
                            $UpdateDateResult = $UpdateDate->format('Y-m-d') . "\n";
                            
                            $UpdatePeriodicNotification = $db->prepare("UPDATE Periodic_Notification SET Date = :UpdateDateResult WHERE IdPereodicNotification = '{$arr2['IdPereodicNotification']}'");
                            $UpdatePeriodicNotification->bindParam(':UpdateDateResult',$UpdateDateResult);
                            $UpdatePeriodicNotification->execute();
                            
                        }else{
                            $UpdateDate = new DateTime($arr2['Date']);
                            $interval = new DateInterval('P1M');
                            $UpdateDate->add($interval);
                            $UpdateDateResult = $UpdateDate->format('Y-m-d') . "\n";
                            
                            $UpdatePeriodicNotification = $db->prepare("UPDATE Periodic_Notification SET Date = :UpdateDateResult WHERE IdPereodicNotification = '{$arr2['IdPereodicNotification']}'");
                            $UpdatePeriodicNotification->bindParam(':UpdateDateResult',$UpdateDateResult);
                            $UpdatePeriodicNotification->execute();
                        }
                    }
                }
            }
    
?>