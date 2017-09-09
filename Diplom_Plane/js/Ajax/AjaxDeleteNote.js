$(document).on('click', '.HiddenButtonDelete', function(){
    var idNote = $(this).data('id3');
    $.ajax({
        url: "http://d0008482.atservers.net/DeleteNote.php",
        type: "POST",
        data:{
            "idNote":idNote  
        },
        dataType: "html",
        success: SuccesDeleteNoteAjax
    });
});

function SuccesDeleteNoteAjax(data){
    ShowDivNoteAjax();
};