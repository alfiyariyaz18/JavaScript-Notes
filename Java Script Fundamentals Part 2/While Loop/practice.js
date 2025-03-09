// for(let i = 1; i <= 10; i++){
//     console.log(`Weightlifting Exercice repetition ${i}`);
// }

// let rep = 1;
// while(rep <= 10){
//     console.log(`Weightlifting Exercice repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while(dice !== 6){
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;

//     if(dice === 6){
//         console.log(`You rolled a ${dice}`);
//     }
// }

const alfiya = [
    'Alfiya',
    'Riyaz',
    2024 - 2004,
    'Programmer',
    ['Mike', 'Sam', 'John']
]

// let i = 0;
// let type = [];
// while(i < alfiya.length){
//     // type.push(typeof(alfiya[i]));
//     type[i] = typeof(alfiya[i]);
//     i = i + 1
// }

// console.log(type);

// const years = [2004, 2008, 2011, 2020];
// let i = 0;
// let ages = [];

// while(i < years.length){
//     ages.push(2024 - years[i]);
//     i++;
// }

// console.log(ages);

// let i = 0;
// while(i < alfiya.length){
//     if(typeof(alfiya[i]) !== 'string'){
//         continue;
//     }else console.log(alfiya[i], typeof(alfiya[i]));

//     i = i + 1;
// }

let exercise = 1;
while(exercise <= 3){
    let rep = 1;
    while(rep <= 5){
        if(exercise === 1){
            console.log(`Pushup ${rep}`);
            rep = rep + 1;
        }
        else if(exercise === 2){
            console.log(`Pullup ${rep}`);
            rep = rep + 1;
        }

        else if(exercise === 3){
            console.log(`Scout ${rep}`);
            rep = rep + 1;
        }
    }

    exercise = exercise + 1;
}