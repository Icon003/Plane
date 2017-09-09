$(document).on('click' , ".ButtonDeleteNotePereodicImg", function(){
    var NumberPereodicNotification = $(this).attr('data-id1');
    alert(NumberPereodicNotification);
    $.ajax({
        url: "http://d0008482.atservers.net/DeletePereodicNotification.php",
        type: "POST",
        data:{
            "NumberPereodicNotification":NumberPereodicNotification
        },
        dataType: "html",
        success: SuccsesAjaxDeletePereodicNotification
    });
});
function SuccsesAjaxDeletePereodicNotification(){
    ShowDivPereodicNotification();
}