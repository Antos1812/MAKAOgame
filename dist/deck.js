import { Suit, Rank } from "./card";
export function createDeck() {
    return Object.values(Suit).flatMap((suit) => Object.values(Rank).map((rank) => ({ suit, rank })));
}
export function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
}
