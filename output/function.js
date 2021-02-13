"use strict";
// function type
// for optional parameter we use ? mark then it doesn't give any error
var myFunc;
myFunc = function (str1, str2, str3) {
    console.log("Hello " + str1 + " " + str2);
};
myFunc('Asif', 'Khan');
// set a default value if we pass less than required parameter
var add = function (num1, num2) {
    if (num2 === void 0) { num2 = 7; }
    console.log(num1 + num2);
};
add(10);
add(10, 15);
// if we don't return anything then it return void that means completely absent value
// but if we return anything then it depends on parameter
var fullName = function (firstName, lastName) {
    return firstName + lastName;
};
console.log(fullName('Niam ', 'Md. Affan'));
var userDetail = function (id, user) {
    console.log("User id is " + id + ", name is " + user.name + " and age is " + user.age);
};
var sayHi = function (user) {
    console.log("Hello " + (user.age > 50 ? "Sir" : "Mr.") + " " + user.name);
};
// function signature 
// a function structure if we break it then it give us error
var calculate;
calculate = function (num1, num2, operation) {
    if (operation === "add") {
        return num1 + num2;
    }
    else if (operation === "subtraction") {
        return num1 - num2;
    }
    else if (operation === "multiply") {
        return num1 * num2;
    }
    else {
        return num1 / num2;
    }
};
console.log(calculate(10, 5, 'add'));
console.log(calculate(5, 5, "multiply"));
console.log(calculate(10, 5, 'subtraction'));
console.log(calculate(5, 5, "div"));
