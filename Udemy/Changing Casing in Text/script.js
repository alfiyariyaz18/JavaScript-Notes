// Now, the last thing that I want to show you that you can do with strings is, 
// you can use a method called toUpperCase()
// that changes all of the characters in your string to uppercase.

// So as we have done before, we simply take the variable, and then we write 
// a dot, and then we use toUpperCase to turn every single character in the 
// string to the uppercase version of it.

let myName = 'Alfiya';
// console.log(myName.toUpperCase());    //   ALFIYA

// Now at the moment this functionality is completed and then this data is lost.
// So if you wanted this to be saved to this variable then all we need to do is 
// say that myName equals the old version of myName, changed to uppercase, 
// and then reassigned to the same variable.

myName = myName.toUpperCase();
// console.log(myName);

// Now we can change it in the other direction as well. All in lower case.

myName = myName.toLowerCase();
// console.log(myName);

// So let's do a challenge,
// So what I want you to do is to create a prompt that asks the user for their name,
// but if they give you a name that is uppercase or lowercase, I want you to be able to send them an alert
// that says "Hello," and then their name, so for example Alfiya, but the name has to be capitalized, 
// but only for the first character and none of the rest of the characters.

let userName = prompt("Enter you name:");
const userFirstLetter = userName.slice(0,1).toUpperCase();
const userRestLetter = userName.slice(1, userName.length).toLowerCase();

userName = userFirstLetter + userRestLetter
alert("Hello " + userName);


// Step by step explanation

// 1. Create a variable to store the name that user enter via prompt (userName).
// 2. Slice the first character from the name, capitalize it and then store the result into a variable (userFirstLetter).
// 3. slice the rest of the characters from the name and store it in another variable (userRestLetter).
// 4. Finally reassign the name variable (userName) by concatenating the other two variables (userFirstLetter + userRestLetter).
// 5. Now create an alert printing "Hello" and the users name.

