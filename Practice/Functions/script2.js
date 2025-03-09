const calcAge = birthYear => 2025 - birthYear;

const yearsUntilRetirement = function(firstName, birthYear){
    const age = calcAge(birthYear);
    const yearsLeft = 60 - age;
    
    if(yearsLeft >= 0){
        console.log(firstName);
        return yearsLeft;
        console.log(firstName);
    }
    else{
        return -1;
    }
}

console.log(yearsUntilRetirement('Alfiya', 2004));
