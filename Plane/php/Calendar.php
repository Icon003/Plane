<?php
    require "dbConnection.php";
    header("Access-Control-Allow-Origin: *");
?>

<?php
    $DataCalendar = $_POST;
    $newArray = array();
    
    $SerchIdUsers = "SELECT UserId FROM Users WHERE Login ='{$_SESSION['logged_user']['Login']}'";
        $SerchIdUsersQuery = $db->query($SerchIdUsers);
            $ResultSerchIdUsers = $SerchIdUsersQuery->fetch(PDO::FETCH_ASSOC);

    $NotesCalendar = "SELECT * FROM Notes WHERE Type = 'Напоминание' AND Status = 'В процессе' AND UserId = '{$ResultSerchIdUsers['UserId']}'";
        $NotesCalendarQuery = $db->query($NotesCalendar);
            $ResultNotesCalendar = $NotesCalendarQuery->FETCHALL(PDO::FETCH_ASSOC);
                foreach($ResultNotesCalendar as $arr){
                    $Date = $arr['DateEnd'];
                    list($Year, $Mounth, $Day) = explode('-', trim($Date, '-'));
                    $newArray[] = array("Title" => $arr['TitleNote'], "Year" =>$Year, "Mounth" =>$Mounth, "Day" =>$Day, "Time" =>$arr['TimeEnd']);
                }
echo json_encode($newArray);
?>