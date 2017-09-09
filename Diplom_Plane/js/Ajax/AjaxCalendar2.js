$(".ButtonYearMinus").click(function(){
    $('.Day').find('.NoteCalendar').html('');
    var Year = $(".TextYear").text();
    var a = parseInt(Year);
    var YearComplite = Year-1;
    $(".TextYear").text(YearComplite);
    var Year = $('.TextYear').text();
    var Mounth = $('.Bottom').find('.ActiveTabMounth').data('mounth');
    var DayMounth = new Date(Year, Mounth,0).getDate();
    $('.NumberDay').removeClass('ActiveNumberDay');
        var DataTK = new Date();
        var YearTK = DataTK.getFullYear();
        var MonthTK = DataTK.getMonth();
        var DayTK = DataTK.getDate();
        switch (MonthTK)
        {
          case 0: fMonth="01"; break;
          case 1: fMonth="02"; break;
          case 2: fMonth="03"; break;
          case 3: fMonth="04"; break;
          case 4: fMonth="05"; break;
          case 5: fMonth="06"; break;
          case 6: fMonth="07"; break;
          case 7: fMonth="08"; break;
          case 8: fMonth="09"; break;
          case 9: fMonth="10"; break;
          case 10: fMonth="11"; break;
          case 11: fMonth="12"; break;
        }
var DayNedMounth = Mounth-1;
var weekday = new Array(7);
weekday[0] =  "Вс";
weekday[1] = "Пн";
weekday[2] = "Вт";
weekday[3] = "Ср";
weekday[4] = "Чт";
weekday[5] = "Пт";
weekday[6] = "Сб";
var count = 0;
        $(".Day").each(
            function FindDay(indexTr) {
            var Data = $('.OneContainerDay').find(this).data('day');
                                count++;
                var d = new Date(Year, DayNedMounth,count);
                var n = weekday[d.getDay()];
                $(this).find('.NumberDay').text(count + '  ' + n);
                if(n == "Вс"){
                    
                    $(this).css('background-color','rgba(231, 76, 60, 0.19)');
                }else if(n == "Сб"){
                    $(this).css('background-color','rgba(231, 76, 60, 0.19)');
                    
                }else{
                    $(this).css('background-color','#fff');
                    
                }
            if(Data>DayMounth){
                $(this).css('display','none');
            }else{
                $(this).css('display','flex');
            }
            if(YearTK == Year){
                if(fMonth == Mounth){    
                    if(Data == DayTK){
                        $(this).find('.NumberDay').addClass('ActiveNumberDay');
                        }
                    }
                }
            }
        );
$.ajax({
    url: "http://d0008482.atservers.net/Calendar.php",
    type: "POST",
    data:{
    },
    dataType: "html",
    success: SuccesAjaxCalendar
});  
function SuccesAjaxCalendar(data){
    console.log(data);
    var obj = $.parseJSON(data);
    var Count =  obj.length;
    for(var i = 0; i < Count; i++){
        var TitleN = obj[i].Title;
        var YearN = obj[i].Year;
        var MounthN = obj[i].Mounth;
        var DayN = obj[i].Day;
        var TimeN = obj[i].Time;
        if(Year == YearN){
            if(Mounth == MounthN){
                $(".Day").each(
                    function FindDay2() {
                    var ThisDay = $('.OneContainerDay').find(this).data('dayphp');
                        if(ThisDay == DayN){
                            var A = (TitleN+'  '+YearN+'-'+MounthN+'-'+DayN+'  '+TimeN);
                                $(this).find('.NoteCalendar').append('<div title="'+A+'" data-toggle="tooltip" data-placement="bottom" class="TitleNoteCalendar"><img src="/img/notifications-button.svg"></div>');
                                $('[data-toggle="tooltip"]').tooltip(); 
                        }
                    }
                );
            }
        }
    }
}
});