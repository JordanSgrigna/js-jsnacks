let nomiInvitatiFesta = ["Marco" , "Paolo" , "Chiara" , "Giovanni" , "Camilla" , "Chiara"];
let userName = prompt("Qual è il tuo nome?");

userName = userName.toLowerCase();

let check = false


/*
for(let i=0; i < nomiInvitatiFesta.lenght; i++){

    if(nomiInvitatiFesta.indexOf(userName) > -1){
        console.log("Puoi partecipare alla festa!");
    } else{
        console.log("Non puoi partecipare");
    }
}
*/


for(let i = 0; i < nomiInvitatiFesta.length; i++){

    if(nomiInvitatiFesta[i].toLowerCase() == userName){
        check = true;
    }
}

if(check == true){
    console.log("Sei invitato alla festa");
} else{
    console.log("Non sei invitato");
}