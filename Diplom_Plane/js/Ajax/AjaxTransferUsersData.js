function AjaxTransferUsersData(){
    //Функция Ajax для отправки данных в PHP файл.
$.ajax({
   url: "http://d0008482.atservers.net/TransferUsersData.php",
    type: "POST",
    data:{},
    dataType: "html",
    success: SuccesAjaxTransferUsersData
});
//Функция Ajax для отправки данных в PHP файл.
}


function SuccesAjaxTransferUsersData(data){
    
    var UserData = $.parseJSON(data);
    $('.SettingInputLogin').val(UserData.Login);
    $('.SettingInputEmail').val(UserData.Email);
//    alert (UserData);
};