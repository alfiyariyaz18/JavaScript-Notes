// Let's now take functions even one step further and calling one function from inside another function.
// And this is something that we do all the time in JavaScript.

// And to illustrate functions calling other functions let's go back to our initial example
// of a function being like a fruitProcessor.

// function fruitProcessor(apple, orange){
//     const juice = `A juice with ${apple} apples and ${orange} oranges`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// output:
// A juice with 2 apples and 3 oranges

// So remember that we had this function which was like a fruit processor
// which received a certain number of apples and a certain number of oranges.
// And then based on that it basically produced and returned juice to us.

// But now in this example let's consider that the fruit processor
// can only make juice with smaller fruit pieces. And so before making the juice
// the fruit processor now needs another machine that first cuts the fruits that we give it
// in to multiple smaller pieces.


// So, let's actually start by writing that machine. So basically that function 
// that cuts a fruit into multiple pieces.

// So let's say function cutFruitPieces and this function will receive a fruit.
// And all this function will do is to return the fruit cut in four pieces.
// So basically fruit multiplied by four.

function cutFruitPieces(fruit){
    return fruit * 4;
}

// So that's our machine that cuts the fruit in pieces. And now here in the fruitProcessor itself
// we received apples and oranges and then we're gonna use our newly created machine
// to cut the received apples and oranges into pieces.

// So we start by calling cutFruitPieces function inside fruitProcessor function 
// with the number of apples that were received.
// And the result of calling this function we will then capture it into a variable called, applePieces.
// And now let's do the same for the oranges that we receive.

// And so for the first time now we called one function inside of another function.
// So if we now call fruitProcessor function with two and three as arguments then 
// this will execute the fruitProcessor function body
// which then in turn will call the cutFruitPieces function, and actually twice.

function fruitProcessor(apple, orange){
    const applePieces = cutFruitPieces(apple);
    const orangePieces = cutFruitPieces(orange);

    const juice = `A juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`
    return juice;
}

console.log(fruitProcessor(2, 3));



