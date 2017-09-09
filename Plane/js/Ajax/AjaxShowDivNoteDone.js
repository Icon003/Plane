function ShowDivNoteDoneAjax(){
    var SettingInputLogin = $('.SettingInputLogin').val();
    
    $.ajax({
        url: "http://d0008482.atservers.net/ShowDivNoteDone.php",
        type: "POST",
        data:{
            "SettingInputLogin":SettingInputLogin
        },
        dataType: "html",
        success: SuccesAjaxShowDivNoteDone
    });
    
}
function SuccesAjaxShowDivNoteDone(data){
    
    $(".ContainerNote").html(data);
//    console.log(data);
    ShowFirstTextNoteAjax();
    $('.InfoTextNote').text("Выполненные");
    $('.ContainerNote').css('background-color','#d9d9d9');
};

