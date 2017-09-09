function NewPasswordAjax(){
    
    var InputNewPassword = $('.InputNewPasssword').val();
    var SettingInputLogin = $('.SettingInputLogin').val();
    var SettingInputPasswod = $('.SettingInputPasswod').val();

$.ajax({
    url: "http://d0008482.atservers.net/NewPassword.php",
    type: "POST",
    data:{
        "InputNewPassword":InputNewPassword,  
        "SettingInputLogin":SettingInputLogin,  
        "SettingInputPasswod":SettingInputPasswod  
    },
    dataType: "html",
    success: SuccesAjaxNewPassword
});
}
function SuccesAjaxNewPassword(data){
//    alert ('Опа');
    $(".DivMessage").html(data);
//    $(".DivError").html(data);
    console.log(data);
}
