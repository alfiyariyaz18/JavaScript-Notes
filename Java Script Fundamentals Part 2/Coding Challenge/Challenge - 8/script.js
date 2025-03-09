// Let's improve Steven's tip calculator even more, this time using loops! 

// Your tasks: 

// 1. Create an array 'bills' containing all 10 test bill values 
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals') 
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
// tips and total values (bill + tip) for every bill value in the bills array. Use a for 
// loop to perform the 10 calculations! 

// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52 
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the 
// tips and totals arrays 

// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
// an argument. This function calculates the average of all numbers in the given 
// array. This is a difficult challenge (we haven't done this before)! Here is how to 
// solve it: 

// 4.1. First, you will need to add up all values in the array. To do the addition, 
// start by creating a variable 'sum' that starts at 0. Then loop over the 
// array using a for loop. In each iteration, add the current value to the 
// 'sum' variable. This way, by the end of the loop, you have all values 
// added together 

// 4.2. To calculate the average, divide the sum you calculated before by the 
// length of the array (because that's the number of elements)

// 4.3. Call the function with the 'totals' array


// SOLUTION
// -------------

// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let totals = [];

// const calcTip1 = function(billValue){
//     if(billValue >= 50 && billValue <= 300){
//         return billValue * (15 / 100);
//     }
//     else return billValue * (20 / 100);
// }



// for (let i = 0; i < bills.length; i++) {

//     const calcTip = function (billValue) {
//         if (billValue >= 50 && billValue <= 300) {
//             tips.push(billValue * (15 / 100));
//             totals.push(billValue + tips[i]);
//         }
//         else{
//             tips.push(billValue * (20 / 100));
//             totals.push(billValue + tips[i]);
//         } 
//     }
    
//     calcTip(bills[i])
// }

// console.log(tips)
// console.log(totals);



let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip1 = function(billValue){
    if(billValue >= 50 && billValue <= 300){
        return billValue * (15 / 100);
    }
    else return billValue * (20 / 100);
}

for (let i = 0; i < bills.length; i++){
    const tip = calcTip1(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(tips);
console.log(totals);


// And now you might wonder why I am able to declare this tip variable here as a constant.
// Am I not changing it in every loop iteration? Well, actually that's not what happens.
// Actually, in each iteration, a new tip variable is gonna be created.
// So we're not mutating, we're not changing the original tip that we declare here.
// In each iteration, we will simply create a new one and that's why we can use const

const calcAverage = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }

    const average = sum / arr.length;
    return average;
}

console.log(calcAverage(totals));