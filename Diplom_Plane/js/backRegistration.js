$(document).ready(function() {
    var FormRegistration = $('.DivContainerRegistration');
    var FormAutorization = $('.DivContainerAuthorization');
    var back = $('.backArrow');   
    
back.click(function(){

        $(FormAutorization).removeClass('bounceIn');
        setTimeout(function(){    
        $(FormRegistration).css('display', 'none');
        },650);
//        $(FormRegistration).addClass('bounceOut');
//        $(FormRegistration).removeClass('bounceOut');
    
        setTimeout(function(){
        $(FormAutorization).css('display', 'flex');
            $(".MessageEr").css('display', 'none');
            $(".MessageErrorRegistration").css('display', 'none');
            $(".MessageRegistration").css('display', 'none');
        },650);
        $(FormAutorization).addClass('bounceIn');
        
    }); 
});