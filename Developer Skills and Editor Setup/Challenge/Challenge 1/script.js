// Given an array of forecasted maximum temperatures, the thermometer displays a 
// string with the given temperatures. 

// Example: [17, 21, 23] will print "... 17ºC in 1days ... 21ºC in 2 days ... 23ºC in 3 days ..." 

// Your tasks: 
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a 
// string like the above to the console. Try it with both test datasets. 

// 2. Use the problem-solving framework: Understand the problem and break it up 
// into sub-problems! 

// Test data: 
// § Data 1: [17, 21, 23] 
// § Data 2: [12, 5, -5, 0, 4]

// Solution
// ----------

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printForecast = function(arr){
    console.log(arr.length);
    let str = '';

    for(let i = 0; i < arr.length; i++){
        str = str + `${arr[i]}C in ${i + 1}days...`;
    }

    return str;
}

// console.log(printForecast(arr2));

const forcastPrint = function(arr){
    let i = 0;
    str = '';
    while(i < arr.length){
        str = str + `${arr[i]}C in ${i + 1}days... `;
        i = i + 1;
    }

    return str;
}

console.log(forcastPrint(arr2));


// Understanding the problem
// ---------------------------
// 1. Array transformed to string, separated by ....
// 2. What is X days? Answer: index + 1

// Breaking up into sub-problems
// -------------------------------
// 1. transforming array into string
// 2. transforming each element to string with C
// 3. strings needs to contain day (index + 1)
// 4. Add .... between elements and start and end of string
// 5. Return the string

