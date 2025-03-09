// Now that we have a better understanding of what DOM and DOM manipulation are,
// lets now actually select and manipulate some more elements.

// So in the previous lecture, we already selected this message element here,
// by using querySelector, right? Then we also got the text content from the selected element.
// But besides getting the text content, we can also set the content of the element.
// So let do that.

// So instead of start guessing, lets say like correct number.
// So that's actually gonna be like the winning phrase.

// So again we select the element, using querySelector : document.querySelecto()

// and the same selector so again, the element with the class of message : document.querySelector('.message')

// and then again text content : document.querySelector('.message').textContent

// we will actually set this content to something else. And we do that by writing equal,
// and then whatever we want the new content to be. So lets say, correct number

document.querySelector('.message').textContent = "Correct Number";
// In the browser in the place of "Start guessing" we have "Correct Number"

// And so what we did here is really already DOM manipulation. Because in fact, here we 
// manipulated the text content of one of the DOM notes.

// So now lets go ahead and select the elements with the class 'number' and 'score'.

document.querySelector('.number').textContent = '$';
document.querySelector('.score').textContent = 55
// Check browser for results

// And now lets move on and do the same, actually with this input field.
// So an input field as the name says, is where we can input some data.
// And so actually we can also get the data from here, and we can of course also set it.
// So lets just see how that works,

// class name of input field is guess
console.log(document.querySelector('.guess').value);

// the big difference is that with an input field, to get the actual value, we use the value property.
// And we can of course also use it to set a value, so to manipulate this element.

document.querySelector('.guess').value = 55;

// And so now we see 55 in the input field. So as if we had written it ourselves.
// So we can delete it here just like any input field, but instead of us written the number,
// it was JavaScript who wrote the 23 here for us

console.log(document.querySelector('.guess').value);
// Now in the console we see the number 55 instead of an empty line.