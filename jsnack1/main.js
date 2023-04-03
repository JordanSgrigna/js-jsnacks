let firstNumber = prompt("Scegli un numero");
let secondNumber = prompt("Scegli un secondo numero");

let isFirstNumberANumber = !isNaN(firstNumber);
let isSecondNumberANumber = !isNaN(secondNumber);


if (isFirstNumberANumber && isSecondNumberANumber){
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    if(firstNumber > secondNumber){
        console.log("Il numero più grande è il primo: " + firstNumber);
    } else if(firstNumber == secondNumber) {
        console.log("I numeri sono uguali");
    } else {
        console.log("Il numero più grande è il secondo: " + secondNumber);
    }

} else{
    console.log("Riavvia il programma");
}