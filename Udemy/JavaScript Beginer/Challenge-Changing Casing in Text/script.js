// Now, the last thing that I want to show you that you can do with strings is, you can use a method called
// toUpperCase() that changes all of the characters in your string to uppercase.

var myName = 'Alfiya';
console.log(myName.toUpperCase());
console.log('Riyaz'.toUpperCase());

myName = myName.toUpperCase();
console.log(myName);

// you can use a method called toLowerCase() that changes all of the characters in your string to lowercase.
myName = myName.toLowerCase();
console.log(myName);


// So what I want you to do is to create a prompt that asks the user for their name,
// but if they give you a name that is uppercase or lowercase, I want you to be able to send them an alert
// that says "Hello," and then their name, so for example alfiya, but the name has to be capitalized, 
// but only for the first character and none of the rest of the characters.

var userName = prompt("Enter your name");
userName = userName.slice(0,1).toUpperCase() + userName.slice(1, userName.length).toLowerCase();

alert("Hello " + userName + "!");
