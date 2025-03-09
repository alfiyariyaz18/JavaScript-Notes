// const tempratures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const amplitude = function(temp){
//     let max = temp[0]
//     let min = temp[0];

//     for(let i = 0; i < temp.length; i++){
//         if(typeof(temp[i]) === 'number'){
//             if(temp[i] > max){
//                 max = temp[i];
//             }

//             if(temp[i] < min){
//                 min = temp[i];
//             }

//         }
//     }

//     console.log(max, min);
//     const amplitude = max - min;
//     return amplitude;
// }

// console.log(amplitude(tempratures));


const tempratures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [5, 7, -9, -5, 23, 17, 1, 4, 6];


const amplitude = function(temp1, temp2){
    const newArray = []
    for(let i = 0; i < temp1.length; i++){
        newArray.push(temp1[i]);
        if(i === temp1.length - 1){
            for(let i = 0; i < temp2.length; i++){
                newArray.push(temp2[i]);
            }
        }
    }

    console.log(newArray);

    let max = newArray[0];
    let min = newArray[0];

    for(let i = 0; i < newArray.length; i++){
        if(typeof(newArray[i]) === 'number'){
            if(newArray[i] > max){
                max = newArray[i];
            }
            if(newArray[i] < min){
                min = newArray[i];
            }
        }
    }

    console.log(max, min);
    const amplitude = max - min;
    return amplitude;
}

console.log(amplitude(tempratures1, temperatures2));
