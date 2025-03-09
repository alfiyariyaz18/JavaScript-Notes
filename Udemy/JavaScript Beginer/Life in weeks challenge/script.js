function lifeInWeeks(age){
    const yearsLeft = 90 - age;
    const monthsLeft = yearsLeft * 12;
    const weeksLeft =  yearsLeft * 52;
    const daysLeft = yearsLeft * 365;

    return `You have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left.`
}

console.log(lifeInWeeks(20));