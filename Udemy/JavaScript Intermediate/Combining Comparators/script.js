// the three basic comparatives are two ampersands (&&) for AND
// so whether if condition one is true and condition two is true. 

// You can check to see if either condition one is true or condition two is true by 
// using the OR combiner. And you can do this using two pipe signs (||),

// And finally, the exclamation mark (!) means NOT, or the opposite of something.

var loveScore = (Math.random() * 100) + 1
loveScore = Math.floor(loveScore);

var userName = prompt("What is your name?");
var crushName = prompt("What is your crush's name?");

if(loveScore > 70){
    alert(`${userName} and ${crushName}, Your love score is ${loveScore}, you love each other like kanye love kanye`);
}

if(loveScore > 30 && loveScore <= 70){
    alert(`${userName} and ${crushName}, Your love score is ${loveScore}`);
}

if(loveScore < 30){
    alert(`${userName} and ${crushName}, Your love score is ${loveScore}, you go with each other like oil and water`);
}