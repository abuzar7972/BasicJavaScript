let i = 0,sum;
for(i=1; i<=5; i++){
    let inputNumber = Math.floor(Math.random()*100);
    sum += inputNumber; 
}
console.log("Sum of Number::" +sum);
console.log("Avg of number::" +(sum/5));