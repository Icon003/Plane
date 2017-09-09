$(document).on('click', '.HiddenButtonSettings', function(){
	var idNote = $(this).data('id2');
    var ModalSettingBlur = $('#ModalSettingBlur'); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
    var ButtonCloseTitleNote = $('.ButtonCloseTitleNote');
//    event.preventDefault();
        var divUpdateTitleNote = $(this).attr('href');
        $(divUpdateTitleNote).removeClass('bounceOut');
        ModalSettingBlur.fadeIn(400,
        function(){
            $(divUpdateTitleNote).css('display', 'flex');
            $(divUpdateTitleNote).addClass('animated bounceIn')
        });
    
	$.ajax({
		url: "http://d0008482.atservers.net/UpdateTitleNote.php",
		type: "POST",
		data:{
			"idNote":idNote
		},
		dataType: "html",
		success: SuccesUpdateTitleNote
	});
});
function SuccesUpdateTitleNote(data){
    var DataNote = $.parseJSON(data);
    $('#TitleInputUpdateNote').val(DataNote.Title);
    $('#TypeInputUpdateNote').val(DataNote.Type);
    $('#StatusInputUpdateNote').val(DataNote.Status);    
//    $('#ModalUpdateTitleNote').data('idNote', DataNote.NotesId);
    $('#ModalUpdateTitleNote').attr('data-idNote', DataNote.NotesId);
    var Type = $('#TypeInputUpdateNote').val();
    if(Type == 'Записка'){
        $('.ButtonCompletedNote').css('display','none');
        $('.UpdatePlacebe').css('display','block');
    }else{
        $('.UpdatePlacebe').css('display','none');
        $('.ButtonCompletedNote').css('display','block');
        $('.ContainerDateUpdateTitleNote').css('display','flex');
        $('#DateInputUpdateNote').val(DataNote.DateEnd);
        console.log(DataNote.DateEnd);
        
    }
}