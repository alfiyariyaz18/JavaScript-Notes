// // get milk function
// function getMilk(){
//     console.log("Leave House");

//     console.log("Move Right");
//     console.log("Move Right");

//     console.log("Move Up");
//     console.log("Move Up");
//     console.log("Move Up");
//     console.log("Move Up");

//     console.log("Move Right");
//     console.log("Move Right");

//     console.log("Buy Milk");

//     console.log("Move Left");
//     console.log("Move Left");

//     console.log("Move Down");
//     console.log("Move Down");
//     console.log("Move Down");
//     console.log("Move Down");

//     console.log("Move Left");
//     console.log("Move Left");

//     console.log("Enter House");
// }

// getMilk();


// getMilk function with Parameters and Arguments

// function getMilk(bottles){
//     console.log("Leave House");

//     console.log("Move Right");
//     console.log("Move Right");

//     console.log("Move Up");
//     console.log("Move Up");
//     console.log("Move Up");
//     console.log("Move Up");

//     console.log("Move Right");
//     console.log("Move Right");

//     console.log("Buy " + bottles + " bottles of Milk");

//     console.log("Move Left");
//     console.log("Move Left");

//     console.log("Move Down");
//     console.log("Move Down");
//     console.log("Move Down");
//     console.log("Move Down");

//     console.log("Move Left");
//     console.log("Move Left");

//     console.log("Enter House");
// }

// getMilk(2);

// Challenge: recieve money as input and according to the money you should return how many bottles of
// milk you could buy and also return the change.


// function getMilk(money){
//     const bottles = money / 1.5
//     const change = money % 1.5;
    
//     console.log(`You will get ${Math.floor(bottles)} bottels of milk and your change is ${change}`);
// }

// getMilk(5);


function calcBottle(money, cost){
    const bottels = money / cost;
    return bottels;
}

function calcChange(money, cost){
    const change = money % cost;
    return change;
}

function getMilk(money, cost){
    const bottles = calcBottle(money, cost);
    const change = calcChange(money, cost);
    return `You will get ${Math.floor(bottles)} bottels of milk and your change is ${change}`;
}

console.log(getMilk(4, 1.5));