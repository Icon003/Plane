function SaveNoteAjax(){
    var DataNote = $('.ContainerNote').find('.activesDivNote').data('id1');
    var TextNote = $('.ContainerText').html();
    
    $.ajax({
        url: "http://d0008482.atservers.net/SaveTextNote.php",
        type: "POST",
        beforeSend: function (){
                //Показать блок анимации
                $(".preloader").css('display','flex');
            },
        data:{
            "DataNote":DataNote,
            "TextNote":TextNote
        },
        dataType: "html",
        success: SuccesAjaxSaveNote
    });
}


function SuccesAjaxSaveNote(data){
    $(".preloader").css('display','none');
}