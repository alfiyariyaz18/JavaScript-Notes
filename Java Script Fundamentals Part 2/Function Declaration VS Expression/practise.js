// function declaration

function fruitprocessor(apple, orange){
    const juice = `A juice with ${apple} apples and ${orange} oranges`;
    return juice;
}

const ateezJuice = fruitprocessor(2, 4);
console.log(ateezJuice);

// function expression

const fruitprocessor2 = function(apple, orange){
    const juice = `A juice with ${apple} apples and ${orange} oranges`;
    return juice;
}

const btsJuice = fruitprocessor2(3, 1);
console.log(btsJuice);


