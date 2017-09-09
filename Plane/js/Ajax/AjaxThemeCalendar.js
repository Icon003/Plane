function ThemeColorCalendar(){
    
    $.ajax({
       
        url: "http://d0008482.atservers.net/ThemeColorCalendar.php",
        type: "POST",
        data: {},
        dataType: "html",
        success: SuccesAjaxThemeColorCalendar
        
    });
};

function SuccesAjaxThemeColorCalendar(data){
    console.log(data);
    var Color = $.parseJSON(data);
    var Blue = "../css/Theme/ThemeBlue.css";
    var Purple = "../css/Theme/ThemePurple.css";
    var Red = "../css/Theme/ThemeRed.css";
    var Green = "../css/Theme/ThemeGreen.css";
    
    if (Color == Blue ){
        $('.ThemeColorStyleCalendar').attr('href',"../css/Theme/CalendarStyleColorBlue.css");
    }else if (Color == Purple){
        $('.ThemeColorStyleCalendar').attr('href',"../css/Theme/CalendarStyleColorPurple.css");
    }else if (Color == Red){
        $('.ThemeColorStyleCalendar').attr('href',"../css/Theme/CalendarStyleColorRed.css");
    }else if (Color == Green){
        $('.ThemeColorStyleCalendar').attr('href',"../css/Theme/CalendarStyleColorGreen.css");
    }
};