const reverseString = function(value){
    let str = '';
    for(let i = value.length - 1; i >= 0; i--){
        str = str + value[i];
    }

    return str;
}

const reverseNumber = function(value){
    value = String(value);

    let str = '';
    for(let i = value.length - 1; i >= 0; i--){
        str = str + value[i];
    }
    
    str = Number(str);
    return str;
}

const reverseArray = function(value){
    let newArray = [];
    for(let i = value.length - 1; i >= 0; i--){
        newArray.push(value[i]);
    }

    return newArray;
}


const reverseValue = function(value){
    if(typeof(value) === 'string'){
        return reverseString(value);
    }

    else if(typeof(value) === 'number'){
        return reverseNumber(value);
    }

    else if(value instanceof Array){
        return reverseArray(value);
    }
}

console.log(reverseValue([23, 45, 67]));



// console.log(reverseNumber(1234));

// console.log(reverseString('Alfiya'));