function ShowFirstTextNoteAjax(){
    
    var FirstNote = $('.ContainerNote').find(':first-child').data('id1');
    
        $.ajax({
        url: "http://d0008482.atservers.net/ShowFirstTextNote.php",
        type: "POST",
        data:{
            "FirstNote":FirstNote  
        },
        dataType: "html",
        success: SuccesShowFirstTextNoteAjax
    });
}

function SuccesShowFirstTextNoteAjax(data){
    $(".ContainerText").html(data);
    var FirstNote = $('.ContainerNote').find('.DivNote:first').addClass('activesDivNote');
//    console.log(data);
};
