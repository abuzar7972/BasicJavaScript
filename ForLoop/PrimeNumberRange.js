const readline = require('readline-sync');
let beginNumber = readline.question("Enter initial number to check:: ");
let endNumber = readline.question("Enter last number::");
for (let i=beginNumber; i<= endNumber; i++){
    let primeCheck = true;
    for (let j=0; j<= Math.sqrt(i); j++){
        if(i % j == 0){
            primeCheck = false;
            break;
        }
    }
    if(primeCheck && i != 1){
        console.log(i+ "::Is Prime");
        console.log(i);
    }
}