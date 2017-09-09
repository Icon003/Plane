$(document).ready(function(){
    
    $('.tabs_menu a').click(function(e) {
        e.preventDefault();
        $('.tabs_menu .actives').removeClass('actives');
        $(this).addClass('actives');
        var tab = $(this).attr('href');
//        var divC = $(this).attr('href');
//        $(divC).css('border-color', '#e74c3c');
        $('.ContentTabDiv').not(tab).css({'display':'none'});
        $('.ContentTabDivStart').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);
    });
});