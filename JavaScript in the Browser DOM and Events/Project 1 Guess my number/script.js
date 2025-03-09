'use strict';

// this project is called Guess My Number! the goal of this project
// is to simply guess a secret number which is between 1 and 20.

// So as you just saw on the browser, all of this interface here basically
// is implemented in HTML. And the whole HTML document is made up of smaller HTML Elements.

// And so now in JavaScript, we can actually select the HTML Elements based on their class.
// So a little bit like we can select Elements in CSS. We can do the same in JavaScript.

// Before we learn what the DOM and DOM Manipulation actually are, let's quickly learn an easy way
// of selecting an HTML Element using JavaScript. And this is how it works.

// We write document.querySelector, So this querySelector is basically
// a method that's available on the document object. And more about that later.

// Now into this method, we need to pass in a Selector. And again, this Selector
// is exactly the same Selector that we would use in CSS.

// So we pass in the string and select the Element with the class name of message.

// document.querySelector('.message');

// Again, this is exactly how we would select the same Element using CSS. Right?
// Now if it was an ID instead of a class, we would use the # Right?
// But in this case, it is really a class, And so let's use the dot(.)

// And now we can quickly take a look at the result of this selection here,
// using the Console.

// console.log(document.querySelector('.message'));
// Output: <p class="message">Start guessing...</p>

// And so indeed we already have the p Element here selected.
// So this is the first, DOM manipulation that you did.

// Now this Element here itself is not really that useful.
// So instead let's actually get this text. So this "Start guessing..."

// All we have to do is .textContent
console.log(document.querySelector('.message').textContent);   //  Start guessing...

// So, this part here(document.querySelector('.message')) first selects the Element.
// And so the result of this querySelector method is gonna be an Element.
// And then on that Element, we can read the textContent property.

// And so that's why we use another dot(.) here and remember when we have multiple dot operators,
// they are executed from left to right.


