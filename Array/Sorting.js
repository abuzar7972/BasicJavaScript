let array = new Array();
for (let j=0; j<10; j++){
    let randomCheck = Math.floor(Math.random()*900+100);
    array.push(randomCheck);
}
console.log("Array before sorting");
console.log(array);
console.log("Array after soting");
array.sort();
console.log(array);

console.log("2nd largest:: " +array[8]);
console.log("2nd lowest:: " +array[2]);