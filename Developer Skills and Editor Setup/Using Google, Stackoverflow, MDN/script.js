// PROBLEM 1
// we work for a company that builds a smart home thermometer and our most recent task is this:
// given an array of temperatures of one day, calculate the temperature amplitud. Keep in mind
// that sometimes there might be a sensor error.

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// Understanding the problem
// --------------------------------
// 1. What is temperature amplitude? 
// it's the difference between the highest and the lowest temperatures in the array.

// 2. but how do we actually calculate the highest and the lowest temperature in an array?

// 3. So what's sensor error and what to do when one occurs?

// And here the answer is probably to just ignore the error. Now, here from our data, we can actually see
// what an error looks like. So it's this string here, which says error,
// But it's good to have an idea of all of these questions so that we now really understand the problem
// that we need to solve.


// Breaking up into sub problems
// 1. How to ignore errors?
// 2. find max value in temp array
// 3. find min value in temp array
// 4. Subtract min from max (amplitude) and return it


// So let's start writing a function. So although they don't tell us that we should write
// a function here, whenever we encounter a task like this, it's a good idea to write a function for it.


// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];


// const calcTempAplitude = function (temperatures) {
//     let max = temperatures[0];
//     let min = temperatures[0];

//     for (let i = 1; i < temperatures.length; i++) {
//         if (max < temperatures[i] && typeof(temperatures[i]) === 'number') {
//             max = temperatures[i];
//         }
//         if (min > temperatures[i] && typeof(temperatures[i]) === 'number') {
//             min = temperatures[i];
//         }
//         else{
//             continue;
//         }
//     }

//     console.log(max);
//     console.log(min);

//     const amplitude = max - min;
//     return `The amplitude is ${amplitude}`;

// }

// console.log(calcTempAplitude(temperatures)); 
// console.log(calcTempAplitude([5, -1, -9, 100]));


// PROBLEM 2
// function should now receive two arrays of temperatures.

// Understanding the problem
// -----------------------------
// 1. With two arrays should we implement the functionality twice?    NO just merge two arrays

// Breaking up into sub-problems
// ------------------------------
// 1. How to merge two arrays?


// const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [5, 7, -9, -5, 23, 17, 1, 4, 6];


// const calcTempAplitude = function (temperatures1, temperatures2) {
//     const tempNew = [];
//     for(let i = 0; i < temperatures1.length; i++){
//         if(typeof(temperatures1[i]) !== 'number'){
//             continue;
//         }
//         else{
//             tempNew.push(temperatures1[i]);
//         }
        
//         if(i === temperatures1.length - 1){
//             for(let i = 0; i < temperatures2.length; i++){
//                 if(typeof(temperatures2[i]) !== 'number'){
//                     continue;
//                 }
//                 else{
//                     tempNew.push(temperatures2[i]);
//                 }
//             }
//         }
//     }
    
//     let max = tempNew[0];
//     let min = tempNew[0];

//     for (let i = 1; i < tempNew.length; i++) {
//         if (max < tempNew[i]) {
//             max = tempNew[i];
//         }
//         if (min > tempNew[i]) {
//             min = tempNew[i];
//         }
//     }
//     console.log(tempNew);
//     console.log(max);
//     console.log(min);

//     const amplitude = max - min;
//     return `The amplitude is ${amplitude}`;
// }

// console.log(calcTempAplitude(temperatures1, temperatures2)); 







