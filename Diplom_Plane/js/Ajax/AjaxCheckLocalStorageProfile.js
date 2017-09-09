function AjaxProfileLocalStorage(){
    var LoginLocalStorage = localStorage.getItem('Login');
    var PasswordLocalStorage = localStorage.getItem('Password');
    console.log(LoginLocalStorage);
    console.log(PasswordLocalStorage);
    
    $.ajax({
        url: "http://d0008482.atservers.net/AutorizationLocalStorage.php",
        type: "POST",
        data:{
        "LoginLocalStorage":LoginLocalStorage,
        "PasswordLocalStorage":PasswordLocalStorage
        },
        dataType: "html",
        success: SuccessAjaxProfileLocalStorage
    });
    }

    function SuccessAjaxProfileLocalStorage(data){
        console.log(data);
        var Bol = $.parseJSON(data);
        console.log(Bol);
        if(Bol == 'true'){
        win.close();
        nw.Window.open('../html/test.html', 
        {frame: false,focus: true, "width": 1280,"height": 720}, 
        function(new_win) {
    });
    }
    };
