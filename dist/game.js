import { createDeck, shuffleDeck } from "./deck";
import { Player } from "./player";
export class Game {
    constructor(playerNames) {
        this.deck = createDeck();
        shuffleDeck(this.deck);
        this.players = playerNames.map((name) => new Player(name));
    }
    dealCards(count) {
        for (let i = 0; i < count; i++) {
            this.players.forEach((player) => {
                if (this.deck.length === 0) {
                    console.log("0 cards in deck");
                    return;
                }
                const card = this.deck.pop();
                if (card) {
                    player.drawCard(card);
                }
            });
        }
    }
}
