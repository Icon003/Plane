function ShowStatisticsAjax(){
    
    $.ajax({
        url: "http://d0008482.atservers.net/ShowStatistics.php",
        type: "POST",
        data:{
            
        },
        dataType: "html",
        success: SuccesShowStatisticsAjax
    });
}

function SuccesShowStatisticsAjax(data){
    
    console.log(data);
    
};