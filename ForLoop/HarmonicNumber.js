const readline = require("readline-sync");
let num = readline.questionInt("Enter Number: ");
let harmonicNumber = 0;
for (n=0; n<num;n++){
    harmonicNumber = harmonicNumber + (1/n);
}
console.log("Harmonic number : " +harmonicNumber);