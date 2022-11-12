// I am creating variables so we can access the inputs and buttons

const billInput = document.getElementById("billInput");

const tipInput = document.getElementById("tipInput")

const numberOfPeopleDiv = document.getElementById("numberOfPeople")

const perPersonTotalDiv = document.getElementById("perPersonTotal")



let numberOfPeople = Number(numberOfPeopleDiv.innerText)
console.log(numberOfPeople)



function calculateBill(){
    const bill = Number(billInput.value)
    const tipPercentage = Number(tipInput.value) / 100;
    const total = bill + tipPercentage;



}

// Still need to work on it
