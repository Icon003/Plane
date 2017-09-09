function AjaxComplitedNote(){
    var idNote = $('.ContainerNote').find('.activesDivNote').data('id1');
    
$.ajax({
		url: "http://d0008482.atservers.net/ComplitedNote.php",
		type: "POST",
		data:{
			"idNote":idNote
		},
		dataType: "html",
		success: SuccesComplitedNote
	});
}

function SuccesComplitedNote(data){
        var divAddNote = $('#ModalUpdateTitleNote');
        var ModalSettingBlur = $('#ModalSettingBlur'); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
        ShowDivNoteAjax();
        $(divAddNote).removeClass(' bounceIn'); 
        $(divAddNote).addClass('animated bounceOut');
        setTimeout(function(){
            $(divAddNote).css('display', 'none');
            ModalSettingBlur.fadeOut(400); // прячем пoдлoжку
        },650);
        console.log(data);
}