const reverseString = function(value){
    let newStr = '';
    for(let i = value.length - 1; i >= 0; i--){
        newStr = newStr + value[i]
    }
    return newStr;
}

const reverseNumber = function(value){
    value = String(value);
    let newNum = reverseString(value);
    newNum = Number(newNum);
    return newNum;
}

const reverseArray = function(value){
    let newArray = [];
    for(let i = value.length - 1; i >= 0; i--){
        newArray.push(value[i])
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

    else if(Array.isArray(value)){
        return reverseArray(value);
    }

    else{
        return value
    }
}



console.log(reverseValue(12345));