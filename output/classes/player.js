export class Player {
    constructor(name, country, age) {
        this.name = name;
        this.country = country;
        this.age = age;
    }
    getProperty() {
        return this.age;
    }
    play() {
        return `${this.name} came from ${this.country}. ${this.name} is ${this.age} years old.`;
    }
}
