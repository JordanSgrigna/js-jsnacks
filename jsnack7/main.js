
/* PRIMA PARTE
for (i=0; i<=500; i++) {
    console.log(i*2)
}
*/

let numeroMassimo = prompt("A quale numero deve arrivare la tua tabellina?");

if(!isNaN(numeroMassimo)){
    numeroMassimo = parseInt(numeroMassimo);

    numeroMassimo = numeroMassimo / 2;

    for(let i=0; i<=numeroMassimo; i++){
        console.log(i*2);
    }
}

