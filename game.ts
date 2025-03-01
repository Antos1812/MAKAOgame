import { createDeck } from "./deck";
import { Player } from "./player";
import { CardData } from "./card";

export class Game{
    deck: CardData[];
    players: Player[];

    constructor(playerNames: string[]) {
        this.deck = createDeck();
        this.shuffleDeck();
        this.players = playerNames.map((name) => new Player(name));
    }

    shuffleDeck(): void{
        for (let i = this.deck.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i+1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }
    dealCards(count: number): void{
        for (let i = 0; i<count; i++){
            this.players.forEach((player) => {
                const card = this.deck.pop();
                if(card) {
                    player.drawCard(card);
                }
            });
        }
    }
}