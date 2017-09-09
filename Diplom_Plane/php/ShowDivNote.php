<?php
require "dbConnection.php";
header("Access-Control-Allow-Origin: *");
?>
<?php
    $dataShowDivNote = $_POST;
    
    $errorsShowDivNote = array();
    
    
    $FindIdUsers = "SELECT UserId FROM Users WHERE Login = '{$_SESSION['logged_user']['Login']}'";
    //$FindIdUsers = "SELECT UserId FROM Users WHERE Login = '{$dataShowDivNote['SettingInputLogin']}'";
    $FindIdUsersOP= $db->query($FindIdUsers);
    $resultFindIdUsers = $FindIdUsersOP->fetch(PDO::FETCH_ASSOC);
    
    
   
    $FindInfoNote = "SELECT * FROM Notes WHERE UserId = '{$resultFindIdUsers['UserId']}' AND Status ='В процессе' ORDER BY NotesId DESC";
    $FindInfoNoteOP= $db->query($FindInfoNote);
    $ResultFindInfoNoteOP = $FindInfoNoteOP->FETCHALL(PDO::FETCH_ASSOC);
    $count = count($ResultFindInfoNoteOP);
//    echo "<div class='col-md-12 ContainerNote'>";
    foreach($ResultFindInfoNoteOP as $arr){
        echo' <div data-id1="'.$arr['NotesId'].'" id="BlockNote" class="col-md-12 DivNote animated">';
            echo'<div class="col-md-12 CurrentTime">'.$arr['DateAndTimeStart'].'</div>';
            echo'<div class="col-md-12 DivTitleNote">'.$arr['TitleNote'].'</div>';
         //   echo '<div class="col-md-12 DivTextNote">'.$arr['TextNote'].'</div>';
            echo '<div class="col-md-12 DivHiddenButton">';
            echo '<div class="ContainerHiddenButtons col-md-12">';
            echo '<a  data-id2="'.$arr['NotesId'].'" class="HiddenButtonSettings"><div  data-id2="'.$arr['NotesId'].'" class="HiddenButtonSettings" href="#ModalUpdateTitleNote">Изменить<img src="../img/settingsNoteBlock.svg"></div></a>';
            echo '<a data-id3="'.$arr['NotesId'].'" class="HiddenButtonDelete"><div class="">Удалить<img src="../img/rubbish-bin.svg"></div></a>';
        echo '</div>
                        </div>
                    </div>';
    }
    echo "        <script>

             $(document).on('mouseenter','.DivNote', function(){
                $(this).find('.DivHiddenButton').slideDown();
            });
$(document).on('mouseleave','.DivNote', function(){
                $(this).find('.DivHiddenButton').slideUp();
            });

$('.DivNote').click(function() {
//AjaxShowTextNote();
SaveNoteAjax();

        $('.DivNote').removeClass('activesDivNote');
        $(this).addClass('activesDivNote');
});

        </script>";
//    echo "</div>";
    
?>