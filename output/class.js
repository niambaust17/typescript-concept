"use strict";
// we access all property from outside(all property are by default public) this is weird 
/*class Player
{
    name: string;
    country: string;
    age: number;

    constructor(name:string, country:string, age:number) {
        this.name = name;
        this.country = country;
        this.age = age;
    }

    play()
    {
        return `${this.name} came from ${this.country}. ${this.name} is ${this.age} years old.`;
    }
}

const player1 = new Player("Sakib", "BD", 35);
const player2 = new Player("Maminul", 'BD', 25);
console.log(player1, player1.play());
const players: Player[] = [];
players.push(player1, player2);
console.log(players)*/
// access modifier 
// so all property cannot be access from outside, if we use access modifier then we can simplify it
class Player {
    constructor(name, country, age) {
        this.name = name;
        this.country = country;
        this.age = age;
    }
    play() {
        return `${this.name} came from ${this.country}. ${this.name} is ${this.age} years old.`;
    }
}
const player1 = new Player("Sakib", "BD", 35);
const player2 = new Player("Maminul", 'BD', 25);
console.log(player1, player1.play());
// console.log(player1.age); we cannot access or modify from outside
// player1.country = 'England'; we can not modify it but we can access it
console.log(player1.country);
const players = [];
players.push(player1, player2);
console.log(players);
