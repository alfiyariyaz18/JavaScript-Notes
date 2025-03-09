'use strict';

function reverseValue(myValue){
    if(typeof(myValue) === 'string'){
        let newStr = '';
        for (let i = myValue.length - 1; i >= 0; i--){
            newStr = newStr + myValue[i];
        }
        return newStr;
    }

    else if(typeof(myValue) === 'number'){
        let str = String(myValue);
        let newStr = '';

        for(let i = str.length - 1; i >= 0; i--){
            newStr = newStr + str[i];
        }
        newStr = Number(newStr);
        return newStr
    }

    else if(myValue instanceof Array){
        let newArray = [];
        for(let i = myValue.length - 1; i >= 0; i--){
            newArray.push(myValue[i]);
        }
        return newArray;
    }

    else{
        return myValue;
    }
}

const objectNew = {
    firstName: 'Alfiya',
    age: 20
}

const arrayNew = ['Alfiya', 'Riyaz', 'Ateez'];

console.log(reverseValue('ho'));



const reverseString = function(value){
    let newStr = "";
    for(let i = value.length - 1; i >= 0; i--){
        newStr = newStr + value[i];
    }
    return newStr;
}

const reverseNumber = function(value){
    value = String(value);
    let newStr = "";
    for(let i = value.length - 1; i >= 0; i--){
        newStr = newStr + value[i];
    }
    newStr = Number(newStr);
    return newStr;
}

const reverseArray = function(value){
    let newArray = [];
    for(let i = value.length - 1; i >= 0; i--){
        newArray.push(value[i]);
    }
    return newArray;
}

const reverseValue2 = function(value){
    if(typeof value === 'string'){
        console.log(reverseString(value));
    }

    else if(typeof value === 'number'){
        console.log(reverseNumber(value));
    }

    else if(value instanceof Array){
        console.log(reverseArray(value));
    }

    else{
        return console.log(value);
    }
}


const array = ['Alfiya', "Riyaz", 20, 'Progarmmer'];
const object = {
    firstName: 'Alfiya',
    lastName: 'Riyaz',
    age: 20,
    job: "Programmer"
}

reverseValue2(object);

