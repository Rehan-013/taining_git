let fruit = ['apple', 'orange'];
fruit.push('banana');
console.log(fruit);
fruit.pop();
console.log(fruit);

let upper = fruit.map(fruit => fruit.toUpperCase());
console.log(upper);

fruit.shift();
console.log(fruit);

fruit.unshift('Kiwi');
console.log(fruit);

console.table(fruit)