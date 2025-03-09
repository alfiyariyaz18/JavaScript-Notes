
const newArray = []

function fizzBuzz(count){
    if(count % 3 === 0 && count % 5 === 0)newArray.push('FizzBuzz')
    else if(count % 3 === 0)newArray.push('Fizz')
    else if(count % 5 === 0)newArray.push('Buzz')
    else newArray.push(count)
}


let count  = 1;

while(count <= 100){
    fizzBuzz(count)
    count++
}

console.log(newArray);