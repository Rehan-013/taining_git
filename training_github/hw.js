//var declration
var a = 2;

//let declration
let result = 10 + 5 * 4;
let adjustedRes = (10 + 5) * 4;
console.log(result);
console.log(adjustedRes);

//const declration
const i = 4;
// var a=2;

// i = i+1;
//errors


//number
let b = 2;

//string
let c = 'Rehan';

//NaN
console.log("a" * "a");

//boolean
let isValid = true;

//undefined
let d;

//null
let e = null;

//BigInt
let f = 234567897654324567890876n;

//arthimatic
let a1 = 10;
let b1 = 4;

console.log(a1 + b1);
console.log(a1 - b1);
console.log(a1 * b1);
console.log(a1 / b1);
console.log(a1 % b1);
console.log(a1 ** b1);

a1++;
b1--;

console.log(a1);
console.log(b1);

//assingment
let num = 13;
console.log(num)
num += 2;
console.log(num)
num *= 4;
console.log(num)
num %= 6;
console.log(num)

//comparision
let x = 5;
let y = '5';

console.log(x == y);
console.log(x === y);

console.log(x != y);
console.log(x !== y);

console.log(x > 4);
console.log(x <= 5);

//logical
let isAdult = true;
let hasTicket = false;

console.log(isAdult && hasTicket);
console.log(isAdult || hasTicket);
console.log(!isAdult);

//1.precedence
let r = 5 + 5 * 2;
console.log(result);

//2.precedence
let t = 5 + 5 / 2;
console.log(result);


// Type Conversion
let numStr = '134';
let n = Number(numStr);
let st = String(n);
console.log(typeof n);

let bool = Boolean(0);
let str = String(100);

// Type Coercion
console.log('10' * 2);
console.log('10' + 2);
console.log(st)


//Array
let numbers = [1, 2, 3, 4, 5];

// forEach()
numbers.forEach(function (num) {
    console.log(num * 2);
});

let object = {
    name: "Rehan",
    Age: 19,
    Hobby: "Anime"
};

console.table(object);
console.log(object)
console.log(object.name)
console.log(object.Age)
console.log(object.Hobby)

// map()
let doubled = numbers.map(num => num * 2);
console.log(doubled);

let def = (name = "Guest") => {
    console.log(`Welcome ${name}`);
};
def();
def("Rehan");

//1.function
const obj = {
    name: "Normal Function",
    showName: function () {
        console.log(this.name);
    }
};
obj.showName()

//2.function
// Arrow Function don't have to use 'this'
const ob = {
    name: "Arrow Function",
    showName: () => {
        console.log(this.name);
    }
};
ob.showName();

//   Array
let novel = ['Another', 'Ring'];

// Adding 
novel.push('Dark');
console.log(novel);

// Removing 
let last = novel.pop();
console.log(novel);

// map
let upperNovel = novel.map(novel => novel.toUpperCase());
console.log(upperNovel);

//slice 
let nu = [1, 2, 3, 4, 5];
console.log(nu);

let slice = nu.slice(1, 3);
console.log(slice);

nu.splice(3, 1, 20);
console.log(nu);

nu.forEach(element => {
    console.log(element);
});

let Newnu = nu.map(element => element > 2);
console.log(Newnu);

let Filnu = nu.filter(element => element > 2);
console.log(Filnu);
// Explain reducer function 

re = [1, 2, 4, 6, 7];

const ans = re.reduce((max, current) => current > max ? current : max, 0);
console.log(ans);

// switch case statement with arrow function

const calc = (a, b, val) => {
    switch (val) {
        case 'add':
            return a + b;
        case 'sub':
            return a - b;
        case 'mul':
            return a * b;
        case 'div':
            return a / b;
        default:
            console.log("Something weng wrong");
    }
};

console.log(calc(3, 5, 'add'));
console.log(calc(3, 5, 'sub'));
console.log(calc(3, 5, 'mul'));
console.log(calc(3, 5, 'div'));
calc(3, 5, 'mod');

function callbackFunction(){
    console.log('I am  a callback function');
}

function higherOrderFunction(func){
    console.log('I am higher order function');
    func();
}

higherOrderFunction(callbackFunction);

function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  const counter = makeCounter();
  
  console.log(counter()); 
  console.log(counter()); 
  console.log(counter()); 