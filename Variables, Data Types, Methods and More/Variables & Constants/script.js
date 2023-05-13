const styles = "padding: 10px; background: red; color: white; font-size: 20px;";

console.log("%cVariables & Constants", styles);

// Ways to Declare Variables -> var, let, const
let firstName = "Ayyan";
let lastName = "Tariq";

console.log(firstName, lastName);

let age = 22;
console.log(age);

age = 23;
console.log(age);

let score;

score = 10;
console.log(score);

if (true) {
  score = score + 10;
  console.log(score);
}

const arr = [1, 2, 3, 4, 5];

arr.push(6);

console.log(arr);

const person = {
  name: "Ayyan",
  age: 23,
};

console.log(person);

person.email = "dev.ayyansheikh@gmail.com";
console.log(person);

// Declare Multiple Values at Once
let a, b, c;

const d = 10,
  e = 15,
  f = 30;

console.log(a);
console.log(f);
