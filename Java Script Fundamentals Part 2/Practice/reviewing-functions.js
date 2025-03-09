const friends = ['Anjaly', 'Aparna', 'Rohan', 'Kiran', 'Ruben'];
const newLength = friends.push('Savio');
console.log(newLength);

const newElement = friends.unshift('Evan');
console.log(newElement);
console.log(friends);

console.log(friends.pop()); 
console.log(friends);

console.log(friends.shift());
console.log(friends);

const years = new Array(2004, 2008, 2011);
console.log(years.indexOf(2011));

console.log(years.includes(2004));
console.log(years.includes(2003));

