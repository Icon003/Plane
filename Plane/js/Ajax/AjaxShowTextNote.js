$(document).on('click', '.DivNote', function(){
    var idNote = $(this).data('id1');
    $.ajax({
        url: "http://d0008482.atservers.net/ShowTextNote.php",
        type: "POST",
        data:{
            "idNote":idNote  
        },
        dataType: "html",
        success: SuccesShowTextNoteAjax
    });
});

function SuccesShowTextNoteAjax(data){
    console.log(data);
//    $(".ContainerText").html(data);
    $(".ContainerText").html(data);
//    SaveNoteAjax();
};