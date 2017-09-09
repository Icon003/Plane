function ChekingNotification() {

    var Data = new Date();
    var Year = Data.getFullYear();
    var Month = Data.getMonth();
    var Day = Data.getDate();
    var Hour = Data.getHours();
    var Minutes = Data.getMinutes();
    var Seconds = Data.getSeconds();
    switch (Month) {
        case 0:
            fMonth = "01";
            break;
        case 1:
            fMonth = "02";
            break;
        case 2:
            fMonth = "03";
            break;
        case 3:
            fMonth = "04";
            break;
        case 4:
            fMonth = "05";
            break;
        case 5:
            fMonth = "06";
            break;
        case 6:
            fMonth = "07";
            break;
        case 7:
            fMonth = "08";
            break;
        case 8:
            fMonth = "09";
            break;
        case 9:
            fMonth = "10";
            break;
        case 10:
            fMonth = "11";
            break;
        case 11:
            fMonth = "12";
            break;
    }
    switch (Day) {
        case 1:
            fDay = "01";
            break;
        case 2:
            fDay = "02";
            break;
        case 3:
            fDay = "03";
            break;
        case 4:
            fDay = "04";
            break;
        case 5:
            fDay = "05";
            break;
        case 6:
            fDay = "06";
            break;
        case 7:
            fDay = "07";
            break;
        case 8:
            fDay = "08";
            break;
        case 9:
            fDay = "09";
            break;
        case 10:
            fDay = "10";
            break;
        case 11:
            fDay = "11";
            break;
        case 12:
            fDay = "12";
            break;
        case 13:
            fDay = "13";
            break;
        case 14:
            fDay = "14";
            break;
        case 15:
            fDay = "15";
            break;
        case 16:
            fDay = "16";
            break;
        case 17:
            fDay = "17";
            break;
        case 18:
            fDay = "18";
            break;
        case 19:
            fDay = "19";
            break;
        case 20:
            fDay = "20";
            break;
        case 21:
            fDay = "21";
            break;
        case 22:
            fDay = "22";
            break;
        case 23:
            fDay = "23";
            break;
        case 24:
            fDay = "24";
            break;
        case 25:
            fDay = "25";
            break;
        case 26:
            fDay = "26";
            break;
        case 27:
            fDay = "27";
            break;
        case 28:
            fDay = "28";
            break;
        case 29:
            fDay = "29";
            break;
        case 30:
            fDay = "30";
            break;
        case 31:
            fDay = "31";
            break;
    }

    var DataResult = (Year + "-" + fMonth + "-" + fDay);
    var TimeResult = (Hour + ":" + Minutes + ":" + Seconds);
//    console.log(DataResult);
    $.ajax({
        url: "http://d0008482.atservers.net/CheckingNotification.php",
        type: "POST",
        data: {
            "DataResult": DataResult,
            "TimeResult": TimeResult
        },
        dataType: "html",
        success: SuccesAjaxCheckingNotification
    });
}

function SuccesAjaxCheckingNotification(data) {
//    console.log(data);
    var obj = $.parseJSON(data);
    var CountNote = obj.length;
    console.log(obj[0].Sound);
    for (var i = 0; i < CountNote; i++) {

        var Title = obj[i].Title;
//        var Text = obj[i].Text;

        var options = {
            icon: "http://d0008482.atservers.net/notification.png",
//            body: Text,
        };

        var notification = new Notification(Title, options);
        notification.onclick = function () {
            document.getElementById("output").innerHTML += "Notification clicked";
        }

        notification.onshow = function () {
            // play sound on show
            var myAud = document.getElementById(obj[0].Sound);
            myAud.play();


            setTimeout(function () {
                notification.close();
            }, 10000);
        }
    }
};