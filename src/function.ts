// function type
// for optional parameter we use ? mark then it doesn't give any error
let myFunc: Function;
myFunc = (str1:string, str2:string, str3?:string) =>
{
    console.log(`Hello ${str1} ${str2}`);
}
myFunc('Asif', 'Khan');



// set a default value if we pass less than required parameter
const add = (num1:number, num2:number=7) =>
{
    console.log(num1 + num2);
}
add(10);
add(10, 15);



// if we don't return anything then it return void that means completely absent value
// but if we return anything then it depends on parameter
const fullName = (firstName: string, lastName: string) : string =>
{
    return firstName + lastName;
}
console.log(fullName('Niam ', 'Md. Affan'));



// aliases type
// when we have bigger type and use them in different position in code again and again so we write them easily as below example, this is aliases type. (like a nick name for which people has a big name) 
type stringOrNumber = number | string;
type userType = { name: string, age: number };

const userDetail = (id: stringOrNumber, user: userType) =>
{
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
}
const sayHi = (user: userType) =>
{
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
}



// function signature 
// a function structure if we break it then it give us error

let calculate: (x: number, y: number, z:string) => number;

calculate = (num1: number, num2: number, operation:string) =>
{
    if (operation === "add")
    {
        return num1 + num2;
    }
    else if (operation === "subtraction")
    {
        return num1 - num2;
    }
    else if (operation === "multiply")
    {
        return num1 * num2;
    }
    else
    {
        return num1 / num2;
    }
}

console.log(calculate(10, 5, 'add'));
console.log(calculate(5, 5, "multiply"));
console.log(calculate(10, 5, 'subtraction'));
console.log(calculate(5, 5, "div"));