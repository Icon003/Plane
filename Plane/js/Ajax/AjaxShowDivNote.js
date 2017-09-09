function ShowDivNoteAjax(){
    var SettingInputLogin = $('.SettingInputLogin').val();
    
    $.ajax({
        url: "http://d0008482.atservers.net/ShowDivNote.php",
        type: "POST",
        data:{
            "SettingInputLogin":SettingInputLogin
        },
        dataType: "html",
        success: SuccesAjaxShowDivNote
    });
    
}
function SuccesAjaxShowDivNote(data){
    
    $(".ContainerNote").html(data);
//    console.log(data);
    ShowFirstTextNoteAjax();
    $('.InfoTextNote').text("Текущие");
    $('.ContainerNote').css('background-color','');
};