function AjaxLogout(){
    
    $.ajax({
        url: "http://d0008482.atservers.net/Logout.php",
        type: "POST",
        data: {
        },
        dataType: "html",
        success: SuccesAjaxLogout
        });
}

function SuccesAjaxLogout(data){
    localStorage.removeItem('Login');
    localStorage.removeItem('Password');
    win.close();
//        $(".MessageOk").text(a);
        nw.Window.open('../html/login.html', 
        {frame: false,focus: true, "width": 1280,"height": 720}, 
        function(new_win) {
    });
}