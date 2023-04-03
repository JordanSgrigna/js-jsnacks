let userNumbers;
let somma = 0;

for(let i=1; i<=10; i++){
    userNumbers = prompt("Scegli il " + i + " numero");
    
    if(!isNaN(userNumbers)){
        userNumbers = parseInt(userNumbers);
        somma = somma + userNumbers;

    } else {
        console.log("Scegli altri numeri");
        i--;
    }


}

console.log(somma);