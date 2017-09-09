//Функция изменения шрифта
function SetToFont () {
    var Font = $("#SelectFont option:selected").val();

    document.execCommand ('fontName', false, Font);
}



//Функция размера шрифта
function SetToFontSize () {
    var FontSize = $("#SelectFontSize option:selected").val();
    var FontSize2 = $("#SelectFontSize option:selected").text();
    document.execCommand ('fontSize', false, FontSize);
//    $(".ContainerText").css("font-size", FontSize2+'px');
}



//Функция жирного шрифта
function SetToBold () {
    document.execCommand ('bold', false, null);
}



//Функция курсивного шрифта
function SetToItalic () {
    document.execCommand ('italic', false, null);
}



//Функция подчёркнутого шрифта
function SetToUnderline () {
    document.execCommand ('underline', false, null);
}



//Функция выделения текста
function SetToHiliteColor () {
    document.execCommand ('hiliteColor', false, '#3498db');
}

//Функция очищения форматирования
function RemoveFormatText () {
    document.execCommand ('removeFormat', false, null);
}



//Функция заголовков
function SetToHeading () {
    var H = $("#SelectH option:selected").val();
    alert (H);
    document.execCommand ('formatBlock', false, H);
}



//Функция выравнивания по левому краю
function SetToJustifyLeft () {
    document.execCommand ('justifyLeft', false, null);
}

//Функция выравнивания по правому краю
function SetToJustifyRight () {
    document.execCommand ('justifyRight', false, null);
}

//Функция выравнивания по центру
function SetToJustifyCenter () {
    document.execCommand ('justifyCenter', false, null);
}

function SetToInsertLink () {
//    var OPS = $("#OPS").val();
//    alert (OPS);
    document.execCommand ('createLink', false, 'https://developer.mozilla.org/ru/docs/Web/API/Document/execCommand');
}





//Функция выравнивания по левому краю
function SetToInsertImage () {
    var OPS = $("#OPS").val();
    alert (OPS);
    document.execCommand ('insertImage', false, "OPS");
}
    