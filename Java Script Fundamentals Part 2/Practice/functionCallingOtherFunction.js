// Arrow Function

const cutFruitPieces = fruit => fruit * 4;

const fruitProcessor = (apple, orange) =>{
    const applePieces = cutFruitPieces(apple);
    const orangePieces = cutFruitPieces(orange);

    const juice = `A juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));


// Function Expression

const cuttingMachine = function(fruit){
    return fruit * 3;
}

const juicer = function (grape, mango){
    const grapeSlices = cuttingMachine(grape);
    const maongoSlices = cuttingMachine(mango);

    const juice = `A juice with ${grapeSlices} slices of grape and ${maongoSlices} slices of mango.`;
    return juice;
}

console.log(juicer(5, 3));

