// drawback older browser not support, don't bundling (it affect on performance issue)
import { Player } from './classes/player.js';
import { IsPlayer } from './interfaces/isPlayer.js';

const player1 = new Player("Sakib", "BD", 35);

let player2: IsPlayer; 
player2 = new Player("Maminul", 'BD', 25);
const players: IsPlayer[] = [];
console.log(player1, player1.play());
console.log(player2);
players.push(player1, player2);
console.log(players)

// interface 
// like aliases but work for both object and class (it gives a structure)

// interface using in object
interface RectangleOption
{
    width: number;
    length: number;
}

function drawRectangle(option: RectangleOption)
{
    let width = option.width;
    let length = option.length;
}

drawRectangle({
    width: 30,
    length: 20,
    // height:10 we don't pass like this if not in interface we can add it by pass by reference
});

let threeDRectangle = {
    width: 30,
    length: 20,
    height:10
}
drawRectangle(threeDRectangle);



// interface using in class
