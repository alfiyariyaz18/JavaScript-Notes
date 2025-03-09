year = 2004;

if(year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0){
            console.log(year + " Is a leap year.");
        }
        else{
            console.log(year + " It's not a leap year.");
        }
    }
    else{
        console.log(year + " Is a leap year.");
    }
}
else{
    console.log(year + " It's not a leap year.");
}