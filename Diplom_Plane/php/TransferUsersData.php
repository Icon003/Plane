<?php
   require "dbConnection.php";
?>

<?php
    $LoginUsers = $_SESSION['logged_user']['Login'];
    $EmailUsers = $_SESSION['logged_user']['Email'];
    
    $data = array('Login' => $LoginUsers,'Email' => $EmailUsers);
    
    echo json_encode($data);
?>