<?php
    $host = 'by111.atservers.net';
    $dbname = 'user2027666_PlaneBD';
    $user = "Icon";
    $pass = 20031998;
    $db = new PDO("mysql:host=$host;dbname=$dbname",$user, $pass);
    $db->exec("set names utf8");
    session_start();


?>