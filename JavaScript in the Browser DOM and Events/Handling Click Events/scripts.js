// Let's now make our application actually do something when we click on the Check button.
// So this is going to be the first time that our code reacts to something that happens in the DOM.

// And for that, we need to use an event listener. Now, an event is something that happens on the page.
// For example, a mouse click, or a mouse moving, or a key press, or many other events.

// Then, with an event listener, we can wait for a certain event to happen,
// and then react to it. So let's try it out now.

// Now  in order to listen for events, we first need to select the element
// where the event should happen. And in this case, we want to listen to the event on this
// button element here, so this Check button.

// Because this is where the click that we're interested in will happen.
// So when we click on this button, something should happen.
// So let's select that button element.

// Now the button has two classes 'check' and 'btn', but the 'btn' is a general class
// which is also used in other buttons but the 'check' class is only specific to the
// check button and that is why we used the 'check' class here.

// document.querySelector('.check');

// And so this will select the button element itself. So just as before,
// this here will then return an element. And now on that element,
// we can call the addEventListener method.

// And this is a method and so we need to call it once more using the parenthesis.

// document.querySelector('.check').addEventListener();

// Now, there are actually multiple ways to listen for events in JavaScript.
// But using this addEventListener method is the best one and also the most used one.

// Now into this addEventListener method, we first need to pass in the type of the event.
// And in this case, it's just a simple click. So the name of the event is actually Click,
// and so that is the first argument that we pass here into this function.

document.querySelector('.check').addEventListener('click')

// But now, we actually need to tell the event listener what to do.
// So basically, we need to specify the reaction to the Click event.
// And we do that by defining a function.

// And that function will contain exactly the code that should be executed whenever this click event happens
// on this Check button. And that function is going to be called the event handler.

