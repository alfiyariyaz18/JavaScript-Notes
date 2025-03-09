// So let's learn about the "prompt()" keyword. I want you to write a
// prompt that asks the user "What is your name?"

// prompt("What is your name?");

// And now if we check the browser it will run my code and it will show me a prompt.
// Now, a prompt is pretty much identical to an alert() or a pop-up,
// but in this case, it actually allows the user to input something, namely a piece of text.

// So I'm going to tell it that my name is "Alfiya".
// So what happened to that piece of data? How can I retrieve it back?
// What exactly just happened?

// Well, nothing. It's not committed to memory,
// so that piece of information is just out there in the air and it's lost.
// So how can we remember it? Well we can use something called a variable.

var myName = 'Alfiya';
console.log(myName);

// Now let's take a look at variables in more detail. This is what the syntax looks like.
// The first word var is a keyword, and just as alert is a keyword or prompt is a keyword,
// This tells us that we are creating a new variable, or creating a new data container, and that container has
// the name of whatever it is that we give it here.

// In this case, we called it myName. And then we set that variable to be equal to the value which is the
// string "Alfiya". Now, every time we refer to myName, the computer knows that 
// we're talking about the string "Alfiya". And now we get to the end, there's a semi-colon,
// we finished our line of code and that container has a lid placed on it.

// Now, the special feature of a var, and why it's called a var, is because it stands for the word variable.
// So that means you can vary the data that you keep inside it.
// So, in the next instance, if I decide that I didn't really like my name, and I wanted to change it, then
// I can tap into that same container, by writing its name,in this case myName, and I can set  it equal a new value. 


// And what that means is that the computer will find the box that has the name of myName.
// It’ll take out the content that's currently contained and delete it, and then it will reassign it a new
// value depending on what I wrote on the right hand side of the equal sign.

// myName = 'ATEEZ';

// And with that line of code I varied what's contained inside my box.
// Notice that in this case, I don't have to repeat the keyword var again.
// The word var is only used when you're constructing a new box to contain your data or 
// when you’re constructing a new variable.

// When you decide to use the variable or when you decide to change the variable you don't need to use
// that keyword var anymore. It only needs to occur once in the lifetime of your variables.

var yourName = prompt("What is your name?");
console.log(yourName);

alert("My name is " + myName + " and your name is " + yourName + "!");