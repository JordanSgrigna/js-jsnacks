let firstWord = prompt("Scegli una parola:");
let secondWord = prompt("Scegli una seconda parola:");

let isFirstWordNotANumber = isNaN(firstWord);
let isSecondWordNotANumber = isNaN(secondWord);


if(isFirstWordNotANumber && isSecondWordNotANumber){

    if(firstWord.length < secondWord.length){
        console.log("(prima parola)" + firstWord + " " + "(seconda parola)"+secondWord);

    } else if (firstWord.length > secondWord.length){
        console.log("(seconda parola)" + secondWord + " " + "(prima parola)" + firstWord);

    } else{
        console.log("Le parole hanno lunghezza uguale");
    }
}
