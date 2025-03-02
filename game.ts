import { createDeck, shuffleDeck } from "./deck";
import { Player } from "./player";
import { CardData } from "./card";

export class Game {
    deck: CardData[];
    players: Player[];

    constructor(playerNames: string[]) {
        this.deck = createDeck();
        shuffleDeck(this.deck);
        this.players = playerNames.map((name) => new Player(name));
    }

    dealCards(count: number): void {
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
