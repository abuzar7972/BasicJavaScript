let money = 100;
let winGame = 0;
let loseGame = 0;
while(money >= 0 && money <= 200){
    let randomCheck = Math.floor(Math.random() * 1000) % 2;
    if( randomCheck == 0){
        loseGame++;
        money--;
    }else{
        winGame++;
        money++;
    }
}
console.log("Total money:" +money);
console.log("Total win:" +winGame);
console.log("Total lose:" +loseGame);
