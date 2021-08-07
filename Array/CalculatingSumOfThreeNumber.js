let array = [1, 2, -1, 0, 9, -8, 1, 4];
console.log("Three Number wiht some zero are");
let i,j,k;
for(i=0; i<array.length-2; i++){
    for(k=i+1; k<array.length-1; k++){
        for(j=k+1; j<array.length; j++){
            if (array[i] + array[j] + array[k] == 0){
                console.log(array[i], array[k], array[j]);
            }
        }
    }
}