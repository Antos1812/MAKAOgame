import { CardData, Suit, Rank } from "./card";

export function createDeck(): CardData[] {
    return Object.values(Suit).flatMap((suit) =>
        Object.values(Rank).map((rank) => ({ suit, rank }))
    );
}

export function shuffleDeck(deck: CardData[]): void {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}
