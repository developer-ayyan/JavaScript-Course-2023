console.log("Stack Vs Heap");

// Value is stored in the stack
const name = "Ayyan";
const age = 30;

// Reference is stored in the heap
const person = {
  name: "Ayyan Tariq",
  age: 22,
};

let newName = name;
// console.log(name, newName); // Ayyan, Ayyan
newName = "Muffin";

let newPerson = person;
// console.log(person, newPerson); // { name: 'Ayyan Tariq', age: 22 }, { name: 'Ayyan Tariq', age: 22 }
newPerson.name = "Aryan";

console.log(name, newName); // Ayyan, Muffin
console.log(person, newPerson); // { name: 'Ayyan Tariq', age: 22 }, { name: 'Aryan', age: 22 }
