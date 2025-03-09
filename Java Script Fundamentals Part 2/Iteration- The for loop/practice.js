// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Weight lifting repetition ${rep}`);
// }

// Looping through arrays
// const alfiya = [
//     'Alfiya',
//     'Riyaz',
//     2024 - 2004,
//     'programmner',
//     ['Anjaly', 'Kiran', 'Rohan', 'Aparna'],
//     true
// ]

// log every element of the array individually
// for(let i = 0; i < alfiya.length; i++){
//     console.log(alfiya[i], typeof(alfiya[i]));
// }

// let type = [];
// for(let i = 0; i < alfiya.length; i++){
//     type.push(typeof(alfiya[i]));
// }

// console.log(type);


// const years = [2004, 2008, 2011, 2024];
// let ages = [];

// for(let i = 0; i < years.length; i++){
//     ages.push(2024 - years[i]);
// }

// console.log(ages);

// for(let i = 0; i < alfiya.length; i++){
//     if(typeof(alfiya[i]) === 'string'){
//         console.log(alfiya[i], typeof(alfiya[i]));
//     }
//     else{
//         continue;
//     }
// }

// for(let i = 0; i < alfiya.length; i++){
//     if(typeof(alfiya[i]) === 'number'){
//         console.log(alfiya[i], typeof(alfiya[i]));
//         break;
//     }
//     else{
//         console.log(alfiya[i], typeof(alfiya[i]));
//     }
// }


// Looping backward
const alfiya = [
    'Alfiya',
    'Riyaz',
    2024 - 2004,
    'programmner',
    ['Anjaly', 'Kiran', 'Rohan', 'Aparna'],
    true
]

for(let i = alfiya.length - 1; i >= 0; i--){
    console.log(alfiya[i], i);
}

for(let exercise = 1; exercise <= 3; exercise++){
    for(let rep = 1; rep <= 5; rep++){
        if(exercise === 1){
            console.log(`Pushup rep ${rep}`);
        }
        else if(exercise === 2){
            console.log(`Pullup rep ${rep}`);
        }

        else if(exercise === 3){
            console.log(`Squat rep ${rep}`);
        }
    }


}
