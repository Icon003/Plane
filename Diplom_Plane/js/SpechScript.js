var Spech = new webkitSpeechRecognition();
Spech.interimResults = true;
Spech.lang = 'ru-Ru';

Spech.onresult = function (event){
    var result = event.results[event.resultIndex];
    if(result.isFinal){
        alert ('Вы сказали:' + result[0].transctipt);
        
    }
};

function Speech(){
    Spech.start();
}