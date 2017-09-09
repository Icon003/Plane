             $(document).on('mouseenter','.HoverDivColor', function(){
                $(this).css('background-color', 'rgba(0, 0, 0, 0.45)');
            });
            $(document).on('mouseleave','.HoverDivColor', function(){
                $(this).css('background-color', 'rgba(255, 254, 254, 0)');
            });
            
            $('.HoverDivColor').click(function(){
//                e.preventDefault();
                $('.Color .ActiveDivColor').removeClass('ActiveDivColor');
                $(this).addClass('ActiveDivColor');
            });