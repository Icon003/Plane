<?php
    require "dbConnection.php";
header("Access-Control-Allow-Origin: *");
?>

<?php

    $ShowStatisticsData = $_POST;
    
    $FindIdUsers = "SELECT UserId FROM Users WHERE Login = '{$_SESSION['logged_user']['Login']}'";
    
    $FindIdUsersOp = $db->query($FindIdUsers);
    $resultFindIdUsers = $FindIdUsersOp->fetch(PDO::FETCH_ASSOC);
    
    
    
    $StatisticsEntry = "SELECT COUNT(*) FROM Notes WHERE UserId = '{$resultFindIdUsers['UserId']}'";
    $StatisticsEntryOP = $db->query($StatisticsEntry);
    $resultStatisticsEntry = $StatisticsEntryOP->fetchAll(PDO::FETCH_ASSOC);
    
    print_r($resultStatisticsEntry);
//    $dataStatistics = array('Title' => $resultStatisticsEntry['TitleNote'], 'Type' => $ResultUpdateTitleNote['Type'], 'Status' => $ResultUpdateTitleNote['Status'], 'NotesId' => $ResultUpdateTitleNote['NotesId'], 'DateEnd' => $ResultUpdateTitleNote['DateEnd']);
//
//    echo json_encode($dataNote);
    
?>