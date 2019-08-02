
//get the button
const btnCompare = document.querySelector('#btnCompare');
const btnRandomize = document.querySelector('#btnRandomize');
const btnAdvanceCompare = document.querySelector('#btnAdvance');

//add function when button is clicked
btnCompare.addEventListener('click', compareValues);
btnRandomize.addEventListener('click', randomPass);
btnAdvanceCompare.addEventListener('click', advancedValues);

//The result of the button
function compareValues() {
  //pull the two numbers
  let firstNumber = document.querySelector("#firstNumber").value
  let secondNumber = document.querySelector("#secondNumber").value
  let thirdNumber = document.querySelector("#thirdNumber").value

  let result


    //Distinct IF statement #1
    if ((firstNumber > secondNumber) && (firstNumber > thirdNumber)) {
        result = `The first number "${firstNumber}" is greater than "${secondNumber}" & "${thirdNumber}"`
    } else if (secondNumber > thirdNumber) {
        result = `The second number "${secondNumber}" is greater than "${firstNumber}" & "${thirdNumber}"`
    } else {
        result = `The third number "${thirdNumber}" is greater than "${firstNumber}" & "${secondNumber}"`
    }

    //distinct IF statement #2
    if ((secondNumber > firstNumber) && (secondNumber > thirdNumber)) {
        result = `The second number "${secondNumber}" is greater than "${firstNumber}" & "${thirdNumber}"`
    } else if (firstNumber > thirdNumber) {
        result = `The first number "${firstNumber}" is greater than "${secondNumber}" & "${thirdNumber}"`            
    } else {
        result = `The third number "${thirdNumber}" is greater than "${firstNumber}" & "${secondNumber}"`
    }
       
    //distinct IF statement #3
    if ((thirdNumber > secondNumber) && (thirdNumber > firstNumber)) {
        result = `The third number "${thirdNumber}" is greater than "${firstNumber}" & "${secondNumber}"`
    } else if (secondNumber > firstNumber) {
        result = `The second number "${secondNumber}" is greater than "${firstNumber}" & "${thirdNumber}"`
    } else {
        result = `The first number "${firstNumber}" is greater than "${secondNumber}" & "${thirdNumber}"`            
    }

    //return the data
    document.querySelector("#total").innerHTML = result

    alert (result)
  
}

//random
function randomPass() {

    //returns value from 1 to 100
    function diceroll() {
        return Math.ceil(Math.random() * (100 - 1) + 1);
    }

    document.querySelector("#firstNumber").value = diceroll()
    document.querySelector("#secondNumber").value = diceroll()
    document.querySelector("#thirdNumber").value = diceroll()
 
}

//advanced compare values 
function advancedValues() {
    let firstNumber = document.querySelector("#firstNumber").value
    let secondNumber = document.querySelector("#secondNumber").value
    let thirdNumber = document.querySelector("#thirdNumber").value

    let highestNumber = 0
    
    //pass to array
    const arrayNumbers = [firstNumber, secondNumber, thirdNumber]


    //compare to see who is the highest
    for (let x = 0; x < arrayNumbers.length; x++) {
        if (highestNumber < arrayNumbers[x]) {
            highestNumber = arrayNumbers[x]
        }
    }

    const result = `The highest number is ${highestNumber}.`

    document.querySelector("#total").innerHTML = result
    
}