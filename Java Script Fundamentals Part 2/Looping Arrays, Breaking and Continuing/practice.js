const alfiya = [
    'Alfiya',
    'Riyaz',
    2025 - 2004,
    'programmer',
    ['Mike', 'Sam', 'John']
]

for(let i = 0; i < alfiya.length; i++){
    if(typeof(alfiya[i]) === 'number'){
        break;
    }
    else{
        console.log(alfiya[i], typeof(alfiya[i]));
    }
}



