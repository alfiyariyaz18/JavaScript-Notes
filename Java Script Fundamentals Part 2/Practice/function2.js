// function getMilk(bottels, money){
//     const cost = bottels * 25;

//     if (money >= cost){
//         return `${bottels} bottels of milk and your change ${money - cost}Rs.`;
//     }
//     else{
//         return `Sorry, your short on ${cost - money}Rs.`;
//     }
// }

// const bottels = prompt("Enter the number of bottels of milk you want:");
// const money = prompt("Enter your amount:");

// const purchase1 = getMilk(bottels, money);
// console.log(purchase1);


const getMilk = money =>{
    const bottels = Math.floor(money / 25);
    const change = money % 25;

    return `${bottels} bottels of milk and your change ${change} Rs.`;
}

const purchase = getMilk(100.50);
console.log(purchase);