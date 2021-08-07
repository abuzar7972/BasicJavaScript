let yearCheck = Math.floor(Math.random() * 10000);
if(yearCheck % 4 == 0 ){
    if(yearCheck %100 ==0){
        if(yearCheck % 400 ==0)
        console.log(yearCheck+ ":Is a Leap Year");
        else
            console.log("Not a Leap Year");
    }
    else
        console.log(yearCheck+ ":Is Leap Year");
    }    
else
    console.log(yearCheck+ ":Is not a Leap Year");

