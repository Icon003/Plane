function ThemeColorAjax(){
    var Color = $('.Color').find('.ActiveDivColor').data('color');
//    alert(Color);
    
$.ajax({
    url: "http://d0008482.atservers.net/ThemeColor.php",
    type: "POST",
    data:{
        "Color":Color
    },
    dataType: "html",
    success: SuccesAjaxThemeColor
});
}

function SuccesAjaxThemeColor(data){
    UpdateThemeColorAjax();
};