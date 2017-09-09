function RegistrationAjax(){
//    Определяю переменные для отправки в PHP файл.
    var InputLoginRegistration = $('.InputLoginRegistration').val();
    var InputEmailRegistration = $('.InputEmailRegistration').val();
    var InputPasswordRegistration = $('.InputPasswordRegistration').val();
    var InputRePasswordRegistration = $('.InputRePasswordRegistration').val();
//    Определяю переменные для отправки в PHP файл.



//Функция Ajax для отправки данных в PHP файл.
$.ajax({
   url: "http://d0008482.atservers.net/Registration.php",
    type: "POST",
    data:{
        "InputLoginRegistration":InputLoginRegistration,
        "InputEmailRegistration":InputEmailRegistration,
        "InputPasswordRegistration":InputPasswordRegistration,
        "InputRePasswordRegistration":InputRePasswordRegistration
    },
    dataType: "html",
    success: SuccesAjaxRegistration
});
//Функция Ajax для отправки данных в PHP файл.
}



//Функция вызываемая после успешного выполнения PHP файла
function SuccesAjaxRegistration(data){

    var RegistrationMessage = $.parseJSON(data);
    
    if(RegistrationMessage == 'Вы зарегистрированы'){
        $(".MessageErrorRegistration").css('display', 'none');
        $(".MessageRegistration").css('display', 'flex');
        $(".TextMessageRegistration").text(RegistrationMessage);
    }else{
        $(".MessageRegistration").css('display', 'none');
        $(".MessageErrorRegistration").css('display', 'flex');
        $(".TextMessageErrorRegistration").text(RegistrationMessage);
    }
    
    
    $('.InputLoginRegistration').val('');
    $('.InputEmailRegistration').val('');
    $('.InputPasswordRegistration').val('');
    $('.InputRePasswordRegistration').val('');
}
//Функция вызываемая после успешного выполнения PHP файла