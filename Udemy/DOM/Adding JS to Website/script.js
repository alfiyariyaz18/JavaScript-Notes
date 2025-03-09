// in this lesson, I want to show you how we can incorporate JavaScript into our websites.

// So first let's create an HTML file called index.html, add the HTML boilerplate and add an H1 to our body

// Now, what if we wanted to insert some JavaScript?
// So previously we've been working a lot with alerts, and what if we can get our website to load up a
// JavaScript alert?

// Now in JavaScript we can add inline JavaScript by simply adding an attribute into the HTML tag.
// So, for example, in the body, I'm going to add an attribute called, "onload".

// <body onload="">
//      <h1>Hello World</h1>
// </body>

// And what this means is that when the body of our website gets loaded up, then whatever JavaScript we
// place inside these two quotation marks will get carried out.

// So what I'm going to say is that when our body is loaded up I'm going to create an alert, and the alert
// is going to say, "Hello Guys". we should also just add a semi-colon there to close off that line of code.

// <body onload="alert('Hello Guys!');">
//    <h1>Hello World</h1>
// </body>

// Now, when the body element gets loaded up, it's going to look inside these quotation marks to carry out
// all of the JavaScript that's inside the body tag.

// So now if I save my web page and I head over to Chrome and I hit refresh, then you can see, as soon as
// the body gets loaded up, we get an alert that says Hello.


// Now, inline JavaScript has a lot of the downsides of inline CSS. It’s not very modular,
// it’s difficult to debug, and it's also not good practice as well, so try to avoid that if you can.

// Now the next way of incorporating JavaScript is internal JavaScript. So can add it by simply using
// a script tag and everything in between the script can simply be JavaScript code.

// <script>
//     alert("Hello Everyone");
// </script>


// And you can see this is just normal old JavaScript, it doesn't have to be contained inside quotation marks this time,

// And now if I hit save you can see it does exactly the same thing.
// The browser will read through this website line by line and, once it hits this script tag, it'll carry
// out the JavaScript that's inside, which in this case is simply an alert that says, "Hello Everyone".


// Now finally, we can also incorporate JavaScript as an external file.
// So instead of having a simple script tag we can have a script tag that has an external source and we
// specify the location of that file inside the attribute src.

// <script src="script.js"></script>

// So now if we add our JavaScript code in the script.js file and create an alert that says, "Hello".
// alert(hello);

// So now when I refresh, the exact same thing happens.