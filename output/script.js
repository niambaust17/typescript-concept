"use strict";
// Testing
/*console.log("Hello, World");
const country = "I love Bangladesh";
console.log(country);*/
/* Use Case Of Type in Typescript */
/*// For variable
let playerName = 'Mahi Sarkar';
let age;
age = 25;
age = "Twenty Five";
// playerName = 24; number not assignable to string (when declare and assign value at a time)
console.log(playerName, age);

// For function
function add(a: number, b: number)
{
    return a + b;
}
console.log(add(5, 4));

// For array
let fruits = ['apple', 'orange', 'pineapple'];
fruits.push('banana');
// fruits.push(12); number not assignable to string (when declare and assign value at a time)
console.log(fruits);

let friendsAge = [];
friendsAge.push(25);
friendsAge.push('Twenty Six');
console.log(friendsAge);

let mixed = ['apple', 17, true, {}]; // By using this we can add multiple type of data without any error
mixed.push(10);
mixed.push('fahim');
mixed.push(false);
mixed.push({ name: 'niam', id: 17 });
console.log(mixed);

// For object
let student = {
    name: 'Abir',
    age: 23,
    isCaptain: true,
}

student.age = 24;
// student.address = 'Dhaka'; we cannot add anything because then it break the student object structure
console.log(student);*/
/* End Use Case Of Type in Typescript */
/**################################################################################################################## */
/* Explicit or Union type */
/*// variable
let firstName: string;
let age: number;
let isAdult: boolean;
let numberOfChildren: string | number; // we can assign string or number both (this is union types)

// array
let likeSongs: string[] = [];
likeSongs.push('romantic');
let friendsChild: (number|string)[] = []; //(union type)
friendsChild.push('One', 2);
console.log(friendsChild);

// object
let student : { //by this way we don't add anything
    name: string,
    age: number,
}
student = {
    name: 'akash',
    age: 17,
}
let person: object; // by this way we don't break object structure so we add any type of data(union type)
person = {
    name: "hero",
    age: 35,
    isMarried: false,
}
// person = ['niam', 17, false]; // array is one kind of object so it don't create any */
/* End Explicit or Union type */
/**################################################################################################################### */
/* Dynamic type */
let password; // if any chance of changing that variable type in future then we use any. it accept all type.
let studentNames = [];
let player;
/* End Dynamic type */ 
