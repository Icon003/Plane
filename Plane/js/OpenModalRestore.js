$(document).on('click', '.HiddenButtonRestore', function(){
    var ModalRestoreBlur = $('#ModalSettingBlur');
    var OpenModalRestore = $('.HiddenButtonRestore');
    var ButtonCloseModalRestore = $('.ButtonCloseRestoreNote');
    var divModalRestore = $('#ModalRestore');

        $(divModalRestore).removeClass('bounceOut');
        ModalRestoreBlur.fadeIn(400,
        function(){
            $(divModalRestore).css('display', 'flex');
            $(divModalRestore).addClass('animated bounceIn')
        });
});

$(document).ready(function (){
    var ModalRestoreBlur = $('#ModalSettingBlur');
    var OpenModalRestore = $('.HiddenButtonRestore');
    var ButtonCloseModalRestore = $('.ButtonCloseRestoreNote');
    var divModalRestore = $('#ModalRestore');
    
        ButtonCloseModalRestore.click( function(){ // лoвим клик пo крестику или oверлэю
        var divModalRestore = $(this).attr('href');
        $(divModalRestore).removeClass(' bounceIn'); 
        $(divModalRestore).addClass('animated bounceOut');
        setTimeout(function(){
            $(divModalRestore).css('display', 'none');
            ModalRestoreBlur.fadeOut(400); // прячем пoдлoжку
        },650);
     });
});