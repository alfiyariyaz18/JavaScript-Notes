const friends = ['Anjaly', 'Kiran', 'Rohan', 'Aparna'];

// .push method to add an element to the end of an array
console.log(friends.push('Aman'));   //  5   
console.log(friends)

// .unshift method to add an element to the begining of an array
console.log(friends.unshift('Agnivesh'));    //  6
console.log(friends);

// both push and unshift method returns the length of the new array

// .pop method to remove the last element of an araay
console.log(friends.pop());   //   Aman
console.log(friends);

// .shift method to remove the first element of an array
console.log(friends.shift());   //  Agnivesh
console.log(friends);

// both pop and shift method returns the removed element of the array

const years = [2004, 2008, 2011, 2024];

// .indexOf to know the index of a certain element in the array
console.log(years.indexOf(2011));  //  2

// if we try the indexOf method on an element which is not there in the array
// we will get minus one (-1).
console.log(years.indexOf(2019));  //  -1

// .includes method returns true if an element is present in the array
// and returns if an element is not present in the array.

console.log(years.includes(2004));  //  true
console.log(years.includes(1983));  //  false

// .includes method uses strict equality to check if an element is present in the array
// which means it does not perform type coercion.

console.log(years.includes(2008));   // true
console.log(years.includes('2008'));   //  false

// writing conditionals using include method
if (friends.includes('Aparna')){
    console.log('Aparna is a friend');
}
