function UpdateThemeColorAjax(){
    
$.ajax({
    url: "http://d0008482.atservers.net/UpdateColorTheme.php",
    type: "POST",
    data:{
    },
    dataType: "html",
    success: SuccesAjaxUpdateThemeColor
});
}

function SuccesAjaxUpdateThemeColor(data){
    $('.ThemeColorStyle').attr('href',data);
    $('.testcolor').val(data);
};