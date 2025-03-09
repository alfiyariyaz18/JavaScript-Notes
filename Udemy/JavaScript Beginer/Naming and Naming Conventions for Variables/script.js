// Now in this lesson I want to cover some really important points about how you should name your variables
// And what I want to show you is that there are some rules that govern how you should name your variables.

// So there are some common rules that good programmers will follow,
// first of which is, give your variables meaningful names so that anybody can figure out quite easily what
// is the data that's likely to be stored inside it.

// It's like if you had named all of your folders on your desktop untitled folder 1, 2, 3, 4,
// 5, 6, then you will be spending hours and hours digging through each of these folders trying to find
// the things that you're looking for.

// And instead, if you named it pictures or movies or documents, then it would be a lot easier to try and
// figure out what they contain. And it's the same story here with variable naming.

// So aside from this, there are certain things that JavaScript will not let you do when you're trying to
// name your variables. So for example, I can't call my variable var because this would be insanely confusing, 
// and JavaScript does not actually allow you to do this.

// var var = 7;

// You can see that we've got this little error here and it already tells us that we can't structure our code like
// this. But you can, however, have a variable name that contains keywords.

// So, for example, if you called it myvar, that's totally valid, and you can see from the coloring or the
// syntax highlighting, it's already showing you that this is valid.

var myvar = 7;

// Now, the other rule is that your variable name cannot begin with a number.
// So, for example, you can't call your variable 123.

// var 123 = 7;

// This is also not allowed. However, like keywords, your variable name can contain numbers, 
// so you can call it my123 and that's totally cool.

// var my123 = 7;

// The next rule is that your variable names can't contain spaces, so it can't be my name = "Alfiya".
// This makes absolutely no sense because it treats that space as if you're trying to write another different
// bit of code.

// var my name = 'Alfiya';

// The first word that comes after var is going to be seen as the name of your variable.
// So your variable is called my, and so it doesn't know what to do with this extra name thing 
// that you've squeezed in here. So no spaces, basically.

// And finally the names can only contain letters, numbers, the dollar sign, and an underscore.
// No other symbols are valid for naming a variable. So, for example, you can't call your variable my-name.
// This is not valid. However, if you wish, you can call it my_name. That is a valid variable name.

// var my-name = 'Alfiya';
// var my_name = 'Alfiya';

// Now finally the last thing that you'll see me do throughout the course is that I will name all of my
// variables using camel casing and this means that I will start out the name with a lowercase word and
// then every subsequent word will be capitalized.

// And this is called camel casing, just as the camel humps are higher than its head, 
// first word is not capitalized, and every subsequent one is.
