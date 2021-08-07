let UNIT = 1;
let TEN = 10;
let HUNDRED = 100;
let randomCheck = Math.floor(Math.random()*1000);
if (randomCheck == UNIT){
    console.log("UNIT");
}
else if(randomCheck == TEN){
    console.log("TEN");
}
else{
    console.log("HUNDRED");
}