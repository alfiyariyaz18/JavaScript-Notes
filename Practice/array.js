const friends = ['Sam', 'Jay', 'Mike']

friends.push('San')
console.log(friends);

console.log(friends.push('John'));
console.log(friends.unshift('Luis')); 
console.log(friends);

console.log(friends.pop());
console.log(friends);

console.log(friends.shift());
console.log(friends.indexOf("Luis"));

console.log(friends.includes("Luis"));

if(friends.includes('Luis')){
    console.log("You have a friend called Mike.");
}

else{
    console.log("No");
}


