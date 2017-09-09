function PrintNoteAjax(){
    var PrintIdNote = $('.ContainerNote').find('.activesDivNote').data('id1');
    
    $.ajax({
        url: "http://d0008482.atservers.net/PrintNote.php",
        type: "POST",
        data:{
            "PrintIdNote":PrintIdNote
        },
        dataType: "html",
        success: SuccesAjaxPrintNote
    });
};

function SuccesAjaxPrintNote(data){
    console.log(data);
    var InfoPrintNote = $.parseJSON(data);
    $('.TitleTypeNotePrint').text(InfoPrintNote.TitleNote);
    var TextPrintNote = $('.ContainerText').text();
    $('.TextNotePrint').text(TextPrintNote);
    $('.TypePrintNote').text(InfoPrintNote.Type);
    $('.DatePrintNote').text(InfoPrintNote.DateAndTimeStart);
};