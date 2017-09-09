$('.ButtonShowAddPereodicNotification').click(function(){
//    
//    $('.ContainerAddPereodicNotification').css('width', '40%'); 
//    $('.ContainerAddPereodicNotification').css('visibility', 'visible'); 
//    $('.MainContainerPereodicNotification').css('width', '60%');
//    $('.ContainerAddPereodicNotification').fadeIn('300');
    $('.ButtonAddShowContainerPereodicNotification').fadeOut();
    $('.MainContainerPereodicNotification').slideUp('slow');
    $('.ContainerAddPereodicNotification').slideDown('slow');
    
    
    
    
});

$('.ButtonShowClosePereodicNotification').click(function(){
//    $('.ContainerAddPereodicNotification').css('visibility', 'hidden'); 
//    $('.ContainerAddPereodicNotification').css('width', '0%'); 
//    $('.ContainerAddPereodicNotification').fadeOut('300');
//    $('.MainContainerPereodicNotification').css('width', '100%');
    $('.ContainerAddPereodicNotification').slideUp('slow');
    $('.MainContainerPereodicNotification').slideDown('slow',function(){
        $('.ButtonAddShowContainerPereodicNotification').fadeIn();
    });
    
    
    
    
});