let userNumber = prompt("Scegli un numero da 0 a 10");
let computerNumber = Math.floor(Math.random() * 11);
console.log(computerNumber);


if(!isNaN(userNumber)){
    userNumber = parseInt(userNumber);

    if(userNumber == computerNumber){
        console.log("HAI VINTO!");
    } else{
        console.log("HAI PERSO!");
    }

} else{
    console.log("Scegli un numero");
}
