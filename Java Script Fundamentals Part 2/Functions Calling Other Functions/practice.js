// const friutCuttingMachine = (fruit) =>{
//     const friutPieces = fruit * 4;
//     return friutPieces;
// }


// function fruitProcessor(apple, orange){
//     const applePieces = friutCuttingMachine(apple);
//     const orangePieces = friutCuttingMachine(orange);
//     const juice = `A juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
//     return juice;
// }

// const juice1 = fruitProcessor(3, 2);
// console.log(juice1);


// function getMilk(money, cost){
//     console.log(`Buy ${calcBottles(money, cost)} bottles of milk`)
//     console.log(`Your change is ${clacChange(money, 20)} Rs.`);
// }

// function calcBottles(money, cost){
//     const numberOfBottles = Math.floor(money / cost);
//     return numberOfBottles;
// }

// function clacChange(money, cost){
//     const change = money % cost;
//     return change;
// } 

// const change = getMilk(25, 10);
// console.log(change);




// function getMilk(money){
//     console.log(`Buy ${calcBottles(money)} bottles of milk.`);
//     return `Your change is ${change(money)} Rs.`;
// }

// function calcBottles(money){
//     const calcBottles = Math.floor(money / 20);
//     return calcBottles;
// }

// function change(money){
//     const change = money % 20;
//     return change;
// }

// const purchaseMilk = getMilk(50);
// console.log(purchaseMilk);



//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(weight, height){
    const bmi = Math.round(weight / height ** 2);
    return bmi;
}


// If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(54, 1.61);
console.log(bmi); 

// bmi should equal 20 when it's rounded to the nearest whole number.


console.log(Math.pow(7, 3));  //  343

// Math.pow(base, exponent)

// Math.round is more mathematically correct it will round to the nearest number
// Eg: 3.5 will be rounded to 4 and 3.4 will be rounded to 3

// Math.floor will just simply take away all decimal places.
