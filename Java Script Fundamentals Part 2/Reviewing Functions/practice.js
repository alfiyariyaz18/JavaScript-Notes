const calcAge = birthYear => 2024 - birthYear;

const yearsUntilRetirement = function(birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 60 - age;

    if(retirement > 0){
        return `${firstName} has ${retirement} years until retirement.`;
    }
    else return -1;
}

const retirement = yearsUntilRetirement(2004, 'Alfiya');
console.log(retirement);
console.log(yearsUntilRetirement(1950, "Bob"));