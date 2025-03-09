const alfiya = [
    'Alfiya',
    'Riyaz',
    2025 -2004,
    'Programmer',
    ['Sam', 'Mike', 'John']
]

for(let i = alfiya.length - 1; i >= 0; i--){
    console.log(i, alfiya[i]);
}


for(let exercise = 1; exercise <= 3; exercise++){
    for(let rep = 1; rep <= 5; rep++){
        if(exercise === 1){
            console.log(`weightlifting exercise rep${rep}`);
        }

        else if(exercise === 2){
            console.log(`pushup exercise rep${rep}`);
        }

        else if(exercise === 3){
            console.log(`pullup exercise rep${rep}`);
        }
    }
}