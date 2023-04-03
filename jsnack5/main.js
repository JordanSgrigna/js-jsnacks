let numbersChosen = [];

for(let i=0 ; i < 6 ; i++){
    let userNumbers = prompt("Scegli un numero");

    if(!isNaN(userNumbers)){
        userNumbers = parseInt(userNumbers);

    }


    if(userNumbers%2 == 1){
        numbersChosen.push(userNumbers);
    }
}


console.log(numbersChosen)