$('.HoverDivSound').click(function(){
    $('.Sound .ActiveSound').removeClass('ActiveSound');
    $(this).addClass('ActiveSound');
    var Sound = $(this).data('sound');
    var Audio = document.getElementById(Sound);
    Audio.play();
});