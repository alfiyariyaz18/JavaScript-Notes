// Let's learn about the switch statement, which is an alternative way of 
// writing a complicated if/else statement, when all we want to do is to compare 
// one value to multiple different options, basically.

// So in this example, let's say we have a weekday variable and for each day there is a different activity.
// So basically we're gonna map one activity to each day.

// So Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday.
// And for that, we could use an if/else statement with multiple ELS if blocks,
// but we can also use the easier to use switch statement.

// So what we're switching is basically the day. So this is what we're gonna compare to multiple options.
// Then we need two curly braces to define a block, and then we can define cases.

const day = 'friday';

switch(day){            // So basically what this will do is it will compare day to Monday here in a strict equality way. day === 'monday'
    case 'monday':    
        console.log('warm up');
        console.log("core workout");
        break;      // this is needed otherwise the code will keep exucuting further
                    //  without the break, the code simply continues executing

    case 'tuesday':
    case 'thursday':
        console.log('morning workout');
        console.log('day workout');
        break;

    case 'wednesday':
        console.log("morning late workout");
        console.log('day workout');
        break;
    
    case 'friday':
        console.log('morning rest');
        break;
    
    case 'saturday':
    case 'sunday':
        console.log('not for discussion');
        break;

    default:
        console.log("Not a Valid Day");     // And so the default is gonna be executed if all the other cases fail.
                                            // It's basically like an else block at the end of a long if/else statement.
}   

console.log("Hi");

// And remember that the switch statement actually does a strict comparison.
// So this was really designed for equality and not for like comparing stuff.

// It is technically possible to do that with some workarounds,
// but that's not the goal of the switch statement.


// Now just as a fun exercise and to get a better idea of how this actually works
// and also how the if/else statement works I want to challenge you to write this same logic,
// but this time as an if/else statement, okay?


if (day === 'monday'){
    console.log('warm up');
    console.log("core workout");

}else if (day === 'tuesday' || day === 'thursday'){
    console.log('morning workout');
    console.log('day workout');

}else if (day === 'wednesday'){
    console.log("morning late workout");
    console.log('day workout');

}else if (day === 'friday') console.log('morning rest');

else if (day === 'saturday' || day === 'sunday') console.log('not for discussion');

else console.log("Not a Valid Day");

// When we compare both switch statement and if else statement, 
// see that we're writing quite a lot of repetitive code, especially always the day
// and then the triple equals in the if else statement.

// So and that's what the switch statement kind of tries to avoid.

// So with the switch statement, we have to write a little bit more code,
// but it's also a lot more readable, which means that it is easier to understand
// if you just read the code.