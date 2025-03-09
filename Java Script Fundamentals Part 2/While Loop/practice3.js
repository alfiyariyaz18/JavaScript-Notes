

let rep = 1;
while(rep <= 10){
    console.log(`Weightlifting exercise rep ${rep}`);
    rep++;
}

let dice = Math.random() * 6;
dice = Math.trunc(dice);
dice = dice + 1;

while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc((Math.random() * 6)) + 1;

    if(dice === 6){
        console.log(`You rolled a 6, the loop will now stop`);
    }
}