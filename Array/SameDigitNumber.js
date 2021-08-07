let SameDigitNumber = new Array;
for (let i=1; i<100; i++){
    if (i % 11 == 0){
        SameDigitNumber.push(i);
    }
}
console.log("Same Two Digit Number Are:: " +SameDigitNumber.toString);