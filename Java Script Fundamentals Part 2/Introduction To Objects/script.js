// So after arrays, it's now time to learn about another data structure in JavaScript, which is objects.
// So up until this point, we have been using arrays as a data structure
// to basically store multiple related values in the same variable.

// So let's just quickly recap that.

const alfiya = [
    'Alfiya',
    'Riyaz',
    2024 - 2004,
    'Progammer',
    ['Mike', 'John', 'Steve']
]

// and you see that I'm writing this in multiple lines now. And that is perfectly acceptable
// As long as we remember the commas here after each of the elements, we're gonna be fine.

// So again, this is basically a data structure which combines multiple values
// which all belong to this Alfiya entity.

// Now we know intuitively that this first element here of the array
// should be called the first name. And this second is the last name.
// Third is age, fourth is job, and the last is friends.

// But in arrays, there is no way of giving these elements a name.
// And so we can't reference them by name, but only by their order number
// in which they appear in the array.

// And so to solve that problem, we have another data structure in JavaScript, which is objects.

// So in objects, we actually define key value pairs. And so then we can give each of these values here, a name.

// So again, we're defining a variable. And so I'm calling this one alfiya2,
// and then this is the actual object. So now instead of the square brackets
// that we use for arrays, we use the curly brackets or curly braces.

// So these curly braces here are to define a new object. And so let's now fill up this object with key value pairs.
// So the key is basically the variable name.

// So let's say, first name, then a colon, and then the value.
// And the value can be of any type that we want here. Then to define another key value pair,
// we just separate them with commas, just like in the array.

const  alfiya2 = {
    firstName: 'Alfiya',
    lastName: 'Riyaz',
    age: 2024 - 2004,
    job: 'Programmer',
    friends: ['Mike', 'John', 'Steve']
}

// And so essentially with this, we were able to assign a name
// to each of these values that we had.
// So that's something that was impossible in arrays.

// Now each of these keys is also called a property.
// So we say that this object here, which is called alfiya2 has five properties.

// Now, objects are probably the most fundamental concept in the whole of JavaScript language.
// So there are multiple ways of creating objects. But again, using the curly braces like this
// is the easiest one, and it's called the object literal Syntax 
// because we are literally writing down the entire object content.

// So to recap, just like arrays, we use objects to essentially group together
// different variables that really belong together such as the properties of alfiya
// that we've been working with.

// Now, the big difference between objects and arrays, is that in objects, the order of these values
// does not matter at all when we want to retrieve them. And that's important to keep in mind.

// So in arrays, the order in which we specify the elements matters a lot
// because that's how we access these elements. So we can only access array elements
// using their order number.

// This means that we should use arrays for more order data, and objects for more unstructured data.
// And data that we actually want to name, and then retrieve from the object, based on that name.