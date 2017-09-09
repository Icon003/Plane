function AjaxRestoreNote(){
    
    //Определяю дату создания заметки для последущей отправки в PHP файл.
    var CurrentData = new Date();
    var CurrentYear = CurrentData.getFullYear();
    var CurrentMonth = CurrentData.getMonth();
    var MinimumMonth;
    var MinimumDay;
    var CurrentDay = CurrentData.getDate();
    var CurrentHour = CurrentData.getHours();
    var CurrentMinutes = CurrentData.getMinutes();
    var CurrentSeconds = CurrentData.getSeconds();
    
    
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
    
    var MinimymDate = (CurrentYear+"-"+MinimumMonth+"-"+MinimumDay);
//Определяю дату создания заметки для последущей отправки в PHP файл.
    
    var idNote = $('.ContainerNote').find('.activesDivNote').data('id1');
    var RestoreDate = $('.ReminderRestoreDate').val(); 
    var RestoreTime = $('.ReminderRestoreTime').val();

    $.ajax({
        url: "http://d0008482.atservers.net/RestoreNote.php",
        type: "POST",
        data:{
            "idNote":idNote,  
            "RestoreDate":RestoreDate,  
            "RestoreTime":RestoreTime,  
            "MinimymDate":MinimymDate 
        },
        dataType: "html",
        success: SuccesRestoreNoteAjax
    });
};

function SuccesRestoreNoteAjax(data){
    
    console.log(data);
    if(data == true){
    var ModalRestoreBlur = $('#ModalSettingBlur');
    var ButtonCloseModalRestore = $('.ButtonCloseRestoreNote');
    var divModalRestore = $('#ModalRestore');
    
    $(divModalRestore).removeClass(' bounceIn'); 
    $(divModalRestore).addClass('animated bounceOut');
    setTimeout(function(){
        $(divModalRestore).css('display', 'none');
        ModalRestoreBlur.fadeOut(400); // прячем пoдлoжку
    },650);
    $('.ReminderRestoreDate').val('');
    $('.ReminderRestoreTime').val('');
    $(".DivErrorRestore").css('display', 'none');
    $(".DivErrorRestore").text('');
        ShowDivNoteAjax();
    
    }else{
        var RestoreNoteMessage = $.parseJSON(data);
        $(".DivErrorRestore").css('display', 'flex');
        $(".DivErrorRestore").text(RestoreNoteMessage);
    }
};