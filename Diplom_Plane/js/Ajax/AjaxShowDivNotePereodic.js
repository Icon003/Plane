function ShowDivPereodicNotification(){
    $.ajax({
        url: "http://d0008482.atservers.net/ShowDivPereodicNotefication.php",
        type: "POST",
        data: {
            
        },
        dataType: "html",
        success: SuccsesShowDivPereodicNotification
    });
}

function SuccsesShowDivPereodicNotification(data){
    console.log(data);
    $(".ContainerPereodicNotification").html(data);
};