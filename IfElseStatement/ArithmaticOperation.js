let a = 10;
let b = 100;
let c = 20;

arithmaticOperation_1 = a+b*c;
arithmaticOperation_2 = c+a/b;
arithmaticOperation_3 = a%b+c;
arithmaticOperation_4 = a*b+c;

let maxNumber = arithmaticOperation_1;
if(maxNumber<arithmaticOperation_2)
maxNumber = arithmaticOperation_2;
if(maxNumber<arithmaticOperation_3)
maxNumber = arithmaticOperation_3;
if(maxNumber<arithmaticOperation_4)
maxNumber = arithmaticOperation_4;

let minNumber = arithmaticOperation_1;
if(minNumber>arithmaticOperation_2)
minNumber = arithmaticOperation_2;
if(minNumber>arithmaticOperation_3)
minNumber = arithmaticOperation_3;
if(minNumber<arithmaticOperation_4)
minNumber = arithmaticOperation_4;

console.log("Max Number of three operation is ::" +maxNumber);
console.log("Min number of three operation is::" +minNumber);
