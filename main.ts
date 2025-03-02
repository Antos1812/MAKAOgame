import { Game } from "./game.js";


const game = new Game(["Player 1", "Player 2"]);
game.dealCards(5);

game.players.forEach((player, index) => {
    player.hand.forEach((card, cardIndex) => {
        const cardElement = document.createElement("div");
        cardElement.textContent = `${card.rank} ${card.suit}`;
        cardElement.style.position = "absolute";
        cardElement.style.left = `${100 + cardIndex * 50}px`;
        cardElement.style.top = `${100 + index * 100}px`;
        cardElement.style.transform = "scale(1.5)";
        document.body.appendChild(cardElement);
    });
});
