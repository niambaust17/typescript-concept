import { IsPlayer } from '../interfaces/isPlayer.js';
export class Player implements IsPlayer
{
    constructor(public name: string, readonly country: string, private age: number) { }

    getProperty()
    {
        return this.age;
    }
    play()
    {
        return `${this.name} came from ${this.country}. ${this.name} is ${this.age} years old.`;
    }
}