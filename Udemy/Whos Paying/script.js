function whosPaying(names){
         
    const nameLength = names.length
    let range = Math.random()
    range = range * nameLength;
    range = Math.floor(range);

    return names[range] + ' is going to buy lunch today!';

}

const names = ['Alfiya', 'Aparna', 'Rohan', 'Kiran', 'Anjaly'];

console.log(whosPaying(names));