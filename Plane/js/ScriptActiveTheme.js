$(document).ready(function(){
    
    var Color = $('.testcolor').val();
    $('.ActiveDivColor').removeClass('ActiveDivColor');
    $('.HoverDivColor[data-color="' +Color+ '"]').addClass('ActiveDivColor');

    });





