let nomiInvitatiFesta = ["Marco" , "Paolo" , "Chiara" , "Giovanni" , "Camilla" , "Chiara"];
let userName = prompt("Qual è il tuo nome?");

for(let i=0; i < nomiInvitatiFesta.lenght; i++){
    if(nomiInvitatiFesta.indexOf(userName) > -1){
        console.log("Puoi partecipare alla festa!");
    } else{
        console.log("Non puoi partecipare");
    }
}