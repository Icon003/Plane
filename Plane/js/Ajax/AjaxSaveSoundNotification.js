function SoundNotificationAjax(){
    var Sound = $('.SoundContainer').find('.ActiveSound').data('sound');
//    alert(Color);
    
$.ajax({
    url: "http://d0008482.atservers.net/SoundNotification.php",
    type: "POST",
    data:{
        "Sound":Sound
    },
    dataType: "html",
    success: SuccesAjaxSoundNotification
});
}

function SuccesAjaxSoundNotification(data){
    UpdateThemeColorAjax();
};