'use strict';

//zmienna zawierająca adrs do strony losowo generującej jokes
var url = 'http://api.icndb.com/jokes/random';

//odpapalmy funkcję getJoke przy załadowaniu strony
document.addEventListener('DOMContentLoaded', function() {
    getJoke();
});
//odpapalmy funkcję getJoke przy naciśnięciu przycisku
var button = document.getElementById('get-joke');
button.addEventListener('click', function(){
  getJoke();
});

var paragraph = document.getElementById('joke');

function getJoke() {
    var xhr = new XMLHttpRequest();//nowa instancja obiektu XMLHttpRequest
    xhr.open('GET', url);//otwieramy połączenie z adresem zawartym w zmiennej url
    xhr.addEventListener('load', function(){//nasłuchujemy odpiwiedzi serwera
      var response = JSON.parse(xhr.response);//dostajemy od serwera odpowiedź w formacie JSON - tutaj parsujemy ją na obiekt JS
      paragraph.innerHTML = response.value.joke;//klucz do wartości odpowiedzi serwera
    });
    xhr.send();//wysyłamy zapytanie do serwera
}