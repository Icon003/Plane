$(document).ready(function() {
    var Input = $('.ContainerDate, .ContainerTime');
    var Select1 = $("#TypeNote1");
    var Select2 = $("#TypeNote2");

//    $(Select).on()(function(){
    $(Select1).click(function() {
        $(Input).slideUp("slow"); 
        
});
    
        $(Select2).click(function() {  
            $(Input).slideDown("slow");
});

});