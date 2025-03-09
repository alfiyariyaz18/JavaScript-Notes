// Let's now return to our code and learn how logical operators work in JavaScript.
// And let's actually use the Boolean variables from the last lecture.

// So the one about having a drivers license and having good vision.
// So, we are gonna create a variable for each of them.

// let hasDriversLicense = true;
// let hasGoodVision = true;

// AND Operator (&&)
// ----------------------

// console.log(hasDriversLicense && hasGoodVision);   // true

// But now, of course, we will change one of them to false.

// hasGoodVision = false;

// console.log(hasDriversLicense && hasGoodVision);  // false

// So remember, the result of true and false will be false,
// because it's enough for one variable to be false
// for the result of the operation to be false.


// OR Operator (||)
// ------------------

// let hasDriversLicense = true;
// let hasGoodVision = false;

// console.log(hasDriversLicense || hasGoodVision);  // true

// So it's enough for one of the variables to be true for the whole operation to become true
// it will become false only when all variables are false


// NOT Operator (!)
// ------------------

// let hasDriversLicense = true;
// let hasGoodVision = false;

// We use the NOT operator to basically invert one of the values.

// console.log(!hasDriversLicense);  // false


// since we know how all of this works, we can use these variables to take a decision.
// So let's say that we want to determine whether Sarah should drive or not.

let hasDriversLicense = true;
let hasGoodVision = false;

// So let's create a new Boolean variable and use the others to determine whether Sarah should drive or not.

// and our model is that Sarah should drive, if she has a driver's license
// and at the same time has good vision.

const shouldDrive = hasDriversLicense && hasGoodVision;

// and now we can use this variable to finally take the decision.

// if (shouldDrive) console.log("Sarah is able to drive");
// else console.log("Someone else should drive");


// we can put the condition right inside the IF condition.
// we usually create the condition right  in the IF statement.

// if (hasDriversLicense && hasGoodVision) console.log("Sarah is able to drive");
// else console.log("Someone else should drive");

// the result is, someone else should drive.

// So that is because has good vision is false, and so our condition of has driver's license
// and has good vision is not true. Because it's only true in case that both of them are true,

// But of course, we can change it once more.

// hasDriversLicense = true;
// hasGoodVision = true;

// And so right now, both of them are true

// if (hasDriversLicense && hasGoodVision) console.log("Sarah is able to drive");
// else console.log("Someone else should drive");

// So has driver's license true and has good vision true.
// So true and true, is true and so Sarah is able to drive.


// let's take it to the next level and add another Boolean variable here.

// So, let's now also add isTired. And let's set it to true as well.
// So we can say that this is our variable C.

let isTired = true;

// So if you want to say has driver's license or has good vision or is tired.
// All you have to do is to add another OR operator here, just like you would add another plus
// or another minus operator.

console.log(hasDriversLicense || hasGoodVision || isTired);    // true
console.log(hasDriversLicense && hasGoodVision && isTired);    // true


// And now, we can use this to improve our decision making, whether Sarah should drive or not.
// So with this third variable now, we want Sarah to be able to drive if she has a driver's license, 
// if she has good vision and if she is not tired.

// So let's now translate that into a condition.


hasDriversLicense = true;
hasGoodVision = true;
isTired = true;

// So she needs to have a driver's license and good vision. But now additionally, we want her to be not tired.
// So right now she is tired, it's true and that's, of course, not good for driving.
// So we want the opposite of being tired. And so therefore, we need to invert it.

// All we need to do is to use the NOT operator.

if (hasDriversLicense && hasGoodVision && !isTired) console.log("Sarah is able to drive");
else console.log("Someone else should drive");

// we got the result 'Someone else should drive', that's because

// hasDriverslicense -> true    hasGoodVision -> true    isTired -> true
// But however NOT isTired is false. Therefor  true && true && false  gives false.

// Now to fix this, we need to change isTired to false.

// And so right now is tired is false and therefore not is tired will become true.
// And then we have true and true and true and then in this situation, Sarah will be able to drive.

hasDriversLicense = true;
hasGoodVision = true;
isTired = false;

if (hasDriversLicense && hasGoodVision && !isTired) console.log("Sarah is able to drive");
else console.log("Someone else should drive");
