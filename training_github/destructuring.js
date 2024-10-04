//nested destructuring
let user = {
    id: 1,
    profile: {
      username: 'johndoe',
      email: 'john@example.com'
    }
  };
  
  let {
    profile: { username, email }
  } = user;
  
  console.log(username); // Output: johndoe
  console.log(email);    // Output: john@example.com
  
  // default values destructuring
  let [a = 5, b = 10] = [1];

console.log(a); // Output: 1 (from array)
console.log(b); // Output: 10 (default value)

let { x = 0, y = 0 } = { x: 3 };

console.log(x); // Output: 3 (from object)
console.log(y); // Output: 0 (default value)

// Destructuring in Function Parameters

function displayUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
  }
  
  let user = { name: 'Bob', age: 30 };
  displayUser(user); // Output: Name: Bob, Age: 30
  
  // Array destructuring in parameters
  function sum([a, b]) {
    return a + b;
  }
  
  console.log(sum([5, 10])); // Output: 15
  