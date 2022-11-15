
let randomNumber = Math.floor(Math.random() * 3)
console.log(randomNumber)

let rockButton = document.getElementById('rock')
let paperButton = document.getElementById('paper')
let scissorsButton = document.getElementById('scissors')
let results = document.getElementById('results');

rockButton = 0;
paperButton = 1;
scissorsButton = 2;



$('#rock').on('click', function (){
    switch (randomNumber ){
        case 0: results.innerText ="The computer chose rock \n It's a TIE"
            break;
        case 1: results.innerText = "The computer chose paper \n You LOSE :("
            break;
        case 2: results.innerText = "The computer chose scissors \n You WIN :)"
    }
})


$('#paper').on('click', function (){
    switch (randomNumber ){
        case 0: results.innerText ="The computer chose rock \n You WIN :)"
            break;
        case 1: results.innerText ="The computer chose paper \n It's a TIE"
            break;
        case 2: results.innerText ="The computer chose scissors \n You Lose :("
    }
})


$('#scissors').on('click', function (){
    switch (randomNumber ){
        case 0: results.innerText ="The computer chose rock \n You LOSE:("
            break;
        case 1: results.innerText ="The computer chose paper \n You WIN :)"
            break;
        case 2: results.innerText ="The computer chose scissors \n It's a TIE"
    }
})



$(document).ready(function(){
    $("#tryAgain").click(function(){
        location.reload(true);
    });
});