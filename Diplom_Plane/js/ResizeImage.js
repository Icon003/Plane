$(document).on("click", ".block", function(){
    var WidthImage = $(this).width();
    var HeightImage = $(this).height();
    var ThisImage = $(this).attr("src");
//    alert(ThisImage);

    $(".SizeImageWidth").val(WidthImage);
    $(".SizeImageHeight").val(HeightImage);
    $(".ContainerSizeImage").attr("dataImage", ThisImage);
    $(".ContainerSizeImage").css("display", "flex");
    
});


var InputWidth = document.getElementById("LetterWidth");
var InputHeight = document.getElementById("LetterHeight");

$(".SizeImageWidth").on('input keyup', function() {
    var Data = $(".ContainerSizeImage").attr("dataImage");
    var Width = $(".SizeImageWidth").val();
    var Height = $(".SizeImageHeight").val();
    $("img[src='"+Data+"']").width(Width);
    $("img[src='"+Data+"']").height(Height);
});
$(".SizeImageHeight").on('input keyup', function() {
    var Data = $(".ContainerSizeImage").attr("dataImage");
    var Width = $(".SizeImageWidth").val();
    var Height = $(".SizeImageHeight").val();
    $("img[src='"+Data+"']").width(Width);
    $("img[src='"+Data+"']").height(Height);
});