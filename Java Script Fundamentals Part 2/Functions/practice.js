function multiplication(num1, num2){
    console.log(num1, num2);
    const result = num1 * num2;
    return result;
}

const result = multiplication(3, 5);
console.log(result);


// const name1 = 'Alfiya', 'Riyaz';    //  Uncaught SyntaxError: Unexpected string 

const ingredient1Name = prompt("Enter the first ingredient");
const ingredient2Name = prompt("Enter the second ingredient");

function smoothie(ingredient1Name, ingredient2Name){
    const ingredient1Quantity = prompt(`How many ${ingredient1Name} do you want in your Smoothie`);
    const ingredient2Quantity = prompt(`How many ${ingredient2Name} do you want in your Smoothie`);

    console.log(`Ingredients: ${ingredient1Quantity} ${ingredient1Name}, ${ingredient2Quantity} ${ingredient2Name}`);

    const smoothie = `${ingredient1Name} ${ingredient2Name} Smoothie`;
    return smoothie;
}

const smoothie1 = smoothie(ingredient1Name, ingredient2Name);
console.log(smoothie1);