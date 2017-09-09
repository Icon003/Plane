<?php
    require "dbConnection.php";
?>

<?php
    $dataShowTextNote = $_POST;
    $ScriptDragImage = '                     <script>
                        $(".block").click(function(){
                            $(".ContainerSizeImage").css("display", "flex");
                        });
                    </script>';
    $FindTextNote = "SELECT TextNote FROM Notes WHERE NotesId = '{$dataShowTextNote['idNote']}'";
    $FindTextNoteOP= $db->query($FindTextNote);
    $resultFindTextNote = $FindTextNoteOP->fetch(PDO::FETCH_ASSOC);

    echo $resultFindTextNote['TextNote'];
    echo $ScriptDragImage;
?>