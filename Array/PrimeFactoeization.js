const readline = reqire('readline-sync');
let inputNumber = readline.question("Enter number to calculate factors::");
let PrimeFactorArray = new Array();
let i;
for(i=2; i<=inputNumber; i++){
    if((inputNumber % i) == 0 && checkPrimeFactor(i) == true){
        array.push(i);
    } 
}

console.log("Total number of prime factors are::" +array.length);
console.log(PrimeFactorArray);
function checkPrimeFactor(n){
    let factors = 0;
    for(i=2; i<n; i++){
        if(n % i == 0)
        factors++;
    }
    if(factors == 0){
        return true;
    }
    return false;
}