function COOKIEAjax(){
    var InputLoginAutorization = $('.InputLogin').val();
    var InputPasswordAutorization = $('.InputPassword').val();
$.ajax({
//    url: "../php/Autorization.php",
    url: "http://d0008482.atservers.net/Cuci.php",
//    url: "http://d0008482.atservers.net/php/AjaxAutorization.php",
    type: "POST",
    data:{
    },
    dataType: "html",
    success: SuccesAjaxCOOKIE
});
}

function SuccesAjaxCOOKIE(data){
//    alert(data);
    var Login = $.parseJSON(data);
    alert (Login);

};