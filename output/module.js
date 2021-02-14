// drawback older browser not support, don't bundling (it affect on performance issue)
import { Player } from './classes/player.js';
const player1 = new Player("Sakib", "BD", 35);
let player2;
player2 = new Player("Maminul", 'BD', 25);
const players = [];
console.log(player1, player1.play());
console.log(player2);
players.push(player1, player2);
console.log(players);
function drawRectangle(option) {
    let width = option.width;
    let length = option.length;
}
drawRectangle({
    width: 30,
    length: 20,
});
let threeDRectangle = {
    width: 30,
    length: 20,
    height: 10
};
drawRectangle(threeDRectangle);
// interface using in class
