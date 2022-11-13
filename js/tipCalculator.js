// I am creating variables so we can access the inputs and buttons

const billInput = document.getElementById("billTotalInput");
console.log(billInput)

const tipInput = document.getElementById("tipInput")
console.log(tipInput)

const numberOfPeopleDiv = document.getElementById("numberOfPeople")

const perPersonTotalDiv = document.getElementById("perPersonTotal")



let numberOfPeople = Number(numberOfPeopleDiv.innerText)
console.log(numberOfPeople)



function calculateBill(){
    const bill = Number(billInput.value)
    const tipPercentage = Number(tipInput.value) / 100;
    const total = bill + tipPercentage;

    const perPersonTotal = total / numberOfPeople;
    console.log(perPersonTotal)
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
}

// Still need to work on it
