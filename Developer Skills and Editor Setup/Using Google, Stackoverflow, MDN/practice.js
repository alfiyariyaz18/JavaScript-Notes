// const tempratures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcAmplitude = function(temp){
//     let max = temp[0];
//     let min = temp[0];

//     for(let i = 1; i < temp.length; i++){
//         if(typeof(temp[i]) === 'number'){
//             if(max < temp[i]){
//                 max = temp[i];
//             }
//             if(min > temp[i]){
//                 min = temp[i];
//             }
//         }
//         else{
//             continue;
//         }
//     }

//     console.log(max, min);
//     const amplitude = max - min;
//     return `The amplitude is ${amplitude}`;
// }

// console.log(calcAmplitude(tempratures));



const tempratures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [5, 7, -9, -5, 23, 17, 1, 4, 6];

const calcAmplitude = function(temp1, temp2){
    let newArray = [];
    for(let i = 0; i < temp1.length; i++){
        newArray.push(temp1[i]);

        if(i === temp1.length -1){
            let i = 0;
            while(i < temp2.length){
                newArray.push(temp2[i])
                i = i + 1
            }
        }
    }

    console.log(newArray);

    let max = newArray[0];
    let min = newArray[0];


    let i = 1;
    while(i < newArray.length){
        if(typeof(newArray[i]) === 'number'){
            if(max < newArray[i]){
                max = newArray[i];
            }

            if(min > newArray[i]){
                min = newArray[i];
            }
        }
        

        i = i + 1;
    }

    console.log(max, min);
    const amplitude = max - min;
    return `The amplitude is ${amplitude}`;

}

console.log(calcAmplitude(tempratures1, temperatures2));