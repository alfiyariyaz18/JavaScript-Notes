var lovePercentage = Math.random() * 100;
lovePercentage = Math.floor(lovePercentage) + 1
console.log(lovePercentage);

// So we have a love score here and we know that we get a number between 1 to 100.
// So that will be the condition that we will test.

if (lovePercentage > 70) {
    console.log("Your love score is " + lovePercentage + "% You love each other like Kanye love Kanye");
}

else {
    console.log("Your love score is " + lovePercentage + "% ");
}

