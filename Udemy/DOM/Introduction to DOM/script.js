// So this module is all about the Document Object Model, or what people tend to call the DOM.

// Now up till this point our websites have been static. We basically planned what content our website 
// should have and also the appearance of that content. So we wrote the HTML and the CSS code, then we hit Save and 
// refreshed our browser, and there is our website.

// Now here's a problem, if we want our website to be interactive, then we need to be able to change parts
// of the website on the spot, So that means, when a user clicks on a button, we'll need to respond to that by 
// changing the content or the appearance of our website.

// Now this is the problem that the DOM or the Document Object Model solves.
// It basically catalogs the web page into individual objects that we can select and manipulate.

// So here we've got the HTML code of a really basic website,

// <html>
//     <head>
//         <title>My Website</title>
//     </head>

//     <body>
//         <button>Alert</button>
//     </body>
// </html> 


// Now, the task of converting an HTML file into the DOM is done by the browser
// when you load up the web page. And what it does is that it turns each of these elements and their associated
// data into a tree structure with a whole bunch of objects that you can select and manipulate.



// So the tree model is how you'll see the DOM represented.
// You can see that all of the elements in our HTML has been converted into objects, and their relationships
// to each other mapped out in the tree diagram.

// So, for example, the head section is a descendant of the HTML object, but the head and the body, they're
// siblings, they're not descendants of each other. And everything that is contained inside your HTML document
// is contained in an object called, "the document."

var title = document.firstElementChild.firstElementChild.firstElementChild;
title = title.innerHTML = 'Alfiya';

console.log(title);