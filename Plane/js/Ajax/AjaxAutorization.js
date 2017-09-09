function AutorizationAjax(){
    var InputLoginAutorization = $('.InputLogin').val();
    var InputPasswordAutorization = $('.InputPassword').val();
    
$.ajax({
    url: "http://d0008482.atservers.net/Autorization.php",
    type: "POST",
    data:{
        "InputLoginAutorization":InputLoginAutorization,
        "InputPasswordAutorization":InputPasswordAutorization
    },
    dataType: "html",
    success: SuccesAjaxAutorization
});
}

function SuccesAjaxAutorization(data){
//    alert(data);
    console.log(data);
    var a = $.parseJSON(data);
    localStorage.setItem('Login', a.Login);
    localStorage.setItem('Password', a.Password);
    if(a.Ok == 'true'){
        win.close();
        nw.Window.open('../html/test.html', 
        {frame: false,focus: true, "width": 1280,"height": 720}, 
        function(new_win) {
    });
    }else{
        $(".MessageEr").css('display', 'flex');
        $(".TextMessageEr").text(a);
        
    }

    

    
    $('.InputLogin').val('');
    $('.InputPassword').val('');
    
};