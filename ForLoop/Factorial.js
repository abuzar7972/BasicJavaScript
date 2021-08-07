const readline = reqire('realine-sync');
let inputNumber = readline.question("Enter number to calculate factorial::");
let factorial = 1;
for (let j=1; j<=inputNumber; j++){
    factorial *= j;
}
console.log("Fctorial::" +factorial);