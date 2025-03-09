const names = ['Alfiya', 'Afrin', 'Asil', 'Rency', 'Riyaz'];

function whoIsBuying(names){
    const nameLength = names.length
    let buyer = Math.random() * nameLength;
    buyer = Math.trunc(buyer)

    return `${names[buyer]} should pay the bill.`
}

console.log(whoIsBuying(names));