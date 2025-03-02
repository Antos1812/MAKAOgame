import {Game} from "./game";

const game = new Game(["Player 1", "Player 2"]);
game.dealCards(5);

console.log("Gives cards:");
game.players.forEach((player) => {
    const handString = player.hand.map(card => `${card.rank} of ${card.suit}`).join(", ");
    console.log(`${player.name}:`,player.hand);
});