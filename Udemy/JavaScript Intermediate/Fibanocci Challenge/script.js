function fibanocciChallenge(n){
    let newArray = [0, 1]
    if(n === 1){
        newArray = [0];
        return newArray;
    }

    else if(n === 2){
        newArray = [0, 1];
        return newArray;
    }

    else{
        for(let i = 0; newArray.length < n; i++){
            newArray.push(newArray[i] + newArray[i + 1]);
        }
        return newArray;
    }

    
}

const output = fibanocciChallenge(10);
console.log(output);