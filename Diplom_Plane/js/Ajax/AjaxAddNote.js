function AddNoteAjax(){
//    Определяю переменные для отправки в PHP файл.
    var InputTitleNote = $('.AddNoteInputTitle').val();
    var InputTypeNote = $('input[name=TypeNote]:checked').val();
    var InputReminderDateNote = $('.ReminderDate').val();
    var InputReminderTimeNote = $('.ReminderTime').val();
    var SettingInputLogin = $('.SettingInputLogin').val();
//    Определяю переменные для отправки в PHP файл.


//Определяю дату создания заметки для последущей отправки в PHP файл.
    var CurrentData = new Date();
    var CurrentYear = CurrentData.getFullYear();
    var CurrentMonth = CurrentData.getMonth();
    var ReadyCurrentMonth;
    var MinimumMonth;
    var MinimumDay;
    var CurrentDay = CurrentData.getDate();
    var CurrentHour = CurrentData.getHours();
    var CurrentMinutes = CurrentData.getMinutes();
    var CurrentSeconds = CurrentData.getSeconds();
    
    switch (CurrentMonth)
    {
        case 0: ReadyCurrentMonth="января"; break;
        case 1: ReadyCurrentMonth="февраля"; break;
        case 2: ReadyCurrentMonth="марта"; break;
        case 3: ReadyCurrentMonth="апреля"; break;
        case 4: ReadyCurrentMonth="мая"; break;
        case 5: ReadyCurrentMonth="июня"; break;
        case 6: ReadyCurrentMonth="июля"; break;
        case 7: ReadyCurrentMonth="августа"; break;
        case 8: ReadyCurrentMonth="сентября"; break;
        case 9: ReadyCurrentMonth="октября"; break;
        case 10: ReadyCurrentMonth="ноября"; break;
        case 11: ReadyCurrentMonth="декабря"; break;
    }
    
        switch (CurrentMonth)
    {
        case 0: MinimumMonth="01"; break;
        case 1: MinimumMonth="02"; break;
        case 2: MinimumMonth="03"; break;
        case 3: MinimumMonth="04"; break;
        case 4: MinimumMonth="05"; break;
        case 5: MinimumMonth="06"; break;
        case 6: MinimumMonth="07"; break;
        case 7: MinimumMonth="08"; break;
        case 8: MinimumMonth="09"; break;
        case 9: MinimumMonth="10"; break;
        case 10: MinimumMonth="11"; break;
        case 11: MinimumMonth="12"; break;
    }
    
            switch (CurrentDay)
    {
        case 1: MinimumDay="01"; break;
        case 2: MinimumDay="02"; break;
        case 3: MinimumDay="03"; break;
        case 4: MinimumDay="04"; break;
        case 5: MinimumDay="05"; break;
        case 6: MinimumDay="06"; break;
        case 7: MinimumDay="07"; break;
        case 8: MinimumDay="08"; break;
        case 9: MinimumDay="09"; break;
        case 10: MinimumDay="10"; break;
        case 11: MinimumDay="11"; break;
        case 12: MinimumDay="12"; break;
        case 13: MinimumDay="13"; break;
        case 14: MinimumDay="14"; break;
        case 15: MinimumDay="15"; break;
        case 16: MinimumDay="16"; break;
        case 17: MinimumDay="17"; break;
        case 18: MinimumDay="18"; break;
        case 19: MinimumDay="19"; break;
        case 20: MinimumDay="20"; break;
        case 21: MinimumDay="21"; break;
        case 22: MinimumDay="22"; break;
        case 23: MinimumDay="23"; break;
        case 24: MinimumDay="24"; break;
        case 25: MinimumDay="25"; break;
        case 26: MinimumDay="26"; break;
        case 27: MinimumDay="27"; break;
        case 28: MinimumDay="28"; break;
        case 29: MinimumDay="29"; break;
        case 30: MinimumDay="30"; break;
        case 31: MinimumDay="31"; break;
    }
    
    var CurrentTime = (CurrentDay+" "+ReadyCurrentMonth+" "+CurrentYear+" "+CurrentHour+":"+CurrentMinutes+":"+CurrentSeconds);
    var MinimymDate = (CurrentYear+"-"+MinimumMonth+"-"+MinimumDay);
//Определяю дату создания заметки для последущей отправки в PHP файл.

//Функция Ajax для отправки данных в PHP файл.
    $.ajax({
        url:"http://d0008482.atservers.net/AddNote.php",
        type: "POST",
        data:{
            "InputTitleNote":InputTitleNote,
            "InputTypeNote":InputTypeNote,
            "InputReminderDateNote":InputReminderDateNote,
            "InputReminderTimeNote":InputReminderTimeNote,
            "CurrentTime":CurrentTime,
            "SettingInputLogin":SettingInputLogin,
            "CurrentTime":CurrentTime,
            "MinimymDate":MinimymDate
            
        },
        dataType: "html",
        success: SuccesAddNoteAjax
    });
//Функция Ajax для отправки данных в PHP файл.
}

//Функция вызываемая после успешного выполнения PHP файла
function SuccesAddNoteAjax(data){
    var ModalSettingBlur = $('#ModalSettingBlur'); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
    var ButtonCloseAddNote = $('.ButtonAddNote');
    
ShowDivNoteAjax();
    console.log(data);
if(data == true){
        var divAddNote = $('#ModalSettingAddNote');
        $(divAddNote).removeClass(' bounceIn'); 
        $(divAddNote).addClass('animated bounceOut');
        setTimeout(function(){
            $(divAddNote).css('display', 'none');
            ModalSettingBlur.fadeOut(400); // прячем пoдлoжку
        },650);
        $('.AddNoteInputTitle').val("");
        $('.ReminderDate').val("");
        $('.ReminderTime').val("");
        $(".DivErrorAddNote").text("");
    
}else{
//    console.log(data);
    var AddNoteMessage = $.parseJSON(data);
    $(".DivErrorAddNote").css('display', 'flex');
    $(".DivErrorAddNote").text(AddNoteMessage);
}
};

//Функция вызываемая после успешного выполнения PHP файла