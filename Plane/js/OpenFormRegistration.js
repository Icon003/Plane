$(document).ready(function() {
    var FormRegistration = $('.DivContainerRegistration');
    var FormAutorization = $('.DivContainerAuthorization');
    var ARegistration = $('#ARegistration');
    
    ARegistration.click( function(event){
        $(FormRegistration).removeClass('bounceIn');
        setTimeout(function(){
        $(FormAutorization).css('display', 'none');
        },650);
//        $(FormAutorization).addClass('bounceOut');
//        $(FormAutorization).removeClass('bounceOut');
        setTimeout(function(){
        $(FormRegistration).css('display', 'flex');
        },650);
        $(FormRegistration).addClass('bounceIn');

     });
    
});
