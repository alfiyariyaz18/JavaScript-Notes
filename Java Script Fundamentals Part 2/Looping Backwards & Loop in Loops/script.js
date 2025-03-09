// This tim ewe're gonna do two interesting things. First, we will loop over an array backwards,
// and then second we will also create a loop inside another loop.

const alfiya = [
    'Alfiya',
    'Riyaz',
    2024 - 2004,
    ['Mike', 'Steven', 'John']
]

// let's now loop over this array backwards.
// So the first element that we want to print is the friends array,
// then age, last name, and finally first name.

// So essentially, in the last lecture we looped from the beginning.
// So we started with index zero, then one all the way to three.
// But now, we want to start at three then two and all the way to zero.
// which is gonna be the last index. And so, now we need to create the for loop according
// to this new information.

// So, let's start again with the counter i, but now what should be the initial value of the counter?
// And we already replied to that question, so it should be three
// but we shouldn't just write three here because we already learned that hard coded values
// are not a good idea.

// So what is three? Well, three is basically just the length of the array,
// which is four minus one.

// for (let i = alfiya.length - 1;)

// Now the condition, when do we want the loop to stop?
// Well, it should stop after i becomes less than zero.
// So i should be greater or equal to zero.

// for (let i = alfiya.length - 1; i >= 0;)

// Now we need to decrease the index or the counter. And so instead of using I plus plus,
// which we used before to increment the value we use minus minus to decrement
// or to decrease the value by one, or we could also write i = i - 1 .

// for(let i = alfiya.length - 1; i >= 0; i = i - 1)

// The rest is just as before

// for(let i = alfiya.length - 1; i >= 0; i = i - 1){
//     console.log(alfiya[i]);
// }

// and yes, great job it works. And just to really show it,
// let's also log the counter variable to the console.

for(let i = alfiya.length - 1; i >= 0; i = i - 1){
    console.log(i, alfiya[i]);
}


// Okay, so that was the first part of this lecture.
// And now, I want to show you how we can create a loop inside of a loop.

// And to do this, let's go back to our gym example from the first loop lecture.
// So there, we had 10 repetitions for a certain weightlifting exercise,
// But now let's say that we have three different exercises and we want to repeat each of them five times.

// So that means a total of 15 repetitions five for each of the three exercises.
// So to log all these exercises, we will need a loop inside a loop.

// for (let rep = 1; rep <= 5; rep++){
//     console.log(`Weightlifting Exercise ${rep}`);
    
//     if(rep === 5){
//         for(rep = 1; rep <= 5; rep++){
//             console.log(`Squat Exercise ${rep}`);

//             if(rep === 5){
//                 for(rep = 1; rep <= 5; rep++){
//                     console.log(`Pushup Exercise ${rep}`);
//                 }
//             }
//         }
//     }
// }


for (let exercise = 1; exercise <= 3; exercise++){
    for(let rep = 1; rep <= 5; rep++){
        if(exercise === 1){
            console.log(`Weightlifting Exercise ${rep}`);
        }

        else if(exercise === 2){
            console.log(`Squat Exercise ${rep}`);
        }

        else{
            console.log(`Pushup Exercise ${rep}`); 
        }
    }
}