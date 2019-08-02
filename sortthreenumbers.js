
//get the button
const btnCompare = document.querySelector('#btnCompare');

//add function when button is clicked
btnCompare.addEventListener('click', compareValues);

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
  //document.querySelector("#total").innerHTML = result

  
}
