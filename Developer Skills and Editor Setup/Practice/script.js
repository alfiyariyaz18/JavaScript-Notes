const reverseString = function(value){
    let str = '';
    for(let i = value.length - 1; i >= 0; i--){
        str = str + value[i];
    }

    return str;
}

const reverseNumber = function(value){
    value = String(value);
    let num = '';
    for(let i = value.length - 1; i >= 0; i--){
        num = num + value[i];
    }
    num = Number(num);
    return num
}

const reverseArray = function(value){
    let array = [];
    for(let i = value.length - 1; i >= 0; i--){
        array.push(value[i]);
    }

    return array;
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

    else{
        return value;
    }
}


