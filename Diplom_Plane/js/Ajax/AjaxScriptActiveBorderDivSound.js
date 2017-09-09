$(document).ready(function(){
    $.ajax({
    url: "http://d0008482.atservers.net/AjaxScriptActiveBorderDivSound.php",
    type: "POST",
    data:{
    },
    dataType: "html",
    success: SuccesAjaxSoundNotificationBorderDiv
    });
});
function SuccesAjaxSoundNotificationBorderDiv(data){
    var Sound = $.parseJSON(data);
    $('.Sound .ActiveSound').removeClass('ActiveSound');
    $('.HoverDivSound[data-sound="'+Sound+'"]').addClass('ActiveSound');
}