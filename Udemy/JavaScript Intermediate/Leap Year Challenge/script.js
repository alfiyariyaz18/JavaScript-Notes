// const year = prompt("Enter a year");

// if(year % 4 === 0){
//     if(year % 100 === 0){
//         if(year % 400 === 0){
//             alert("Its a Leap Year");
//         }
//         else{
//             alert("Its not a Leap Year");
//         }
//     }
//     else{
//         alert("Its a Leap Year");
//     }
// }
// else{
//     alert("Its not a Leap Year");
// }

function isLeap(year){
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                return "Leap year.";
            }
            else{
                return "Not leap year.";
            }
        }
        else{
            return "Leap year.";
        }
    }
    else{
        return "Not leap year.";
    }
}

const year = isLeap(2001);
console.log(year);