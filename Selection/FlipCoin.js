const head = 0;
let FlipCoin = Math.ceil(Math.random()* 10) % 2;
if(FlipCoin == head){
    console.log("Heads");
} 
else{
    console.log("Tails");
}