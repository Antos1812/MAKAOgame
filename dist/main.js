import { Game } from "./game.js";
kaboom();
const game = new Game(["Player 1", "Player 2"]);
game.dealCards(5);
game.players.forEach((player, index) => {
    player.hand.forEach((card, cardIndex) => {
        add([
            text(`${card.rank} ${card.suit}`),
            pos(100 + cardIndex * 50, 100 + index * 100),
            area(),
            scale(1.5),
        ]);
    });
});
