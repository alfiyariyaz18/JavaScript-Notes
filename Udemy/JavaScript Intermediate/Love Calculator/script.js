const yourName = prompt("Enter your name");
const crushName = prompt("Enter your crush name");

let num = Math.random();
num = num * 100;
num = Math.floor(num) + 1;

if(num >= 50 && num < 70){
    alert(`${yourName} and ${crushName} are ${num}% Match. You both will make a good couple`);
}
else if(num >= 70){
    alert(`${yourName} and ${crushName} are ${num}% Match. You both are made for each other`);
}
else{
    alert(`${yourName} and ${crushName} are ${num}% Match`);
}

