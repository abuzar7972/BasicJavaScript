const readline = require("readline-sync");
let number = readline.questionInt("Enter number: ");
for (let i=1; i<number; i++){
    console.log("2 ^ " +i+ " is::" + 2**i);
}