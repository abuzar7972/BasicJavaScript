let counter = 0;
let number = 5500;
while (number != 0) {
    number = Math.floor(number / 100);
    counter++;
}
switch (counter) {
    case 1:
        console.log("Unit");
        break;
    case 2:
        console.log("Ten");
        break;
    case 3:
        console.log("Hundred");
        break;
    case 4:
        console.log("Thousand");
        break;
    case 5:
        console.log("Lakh");
        break;
    default:
        console.log("Out of Bounds");
}