import {CardData, Suit, Rank} from "./card";



export function createDeck(): CardData[]{
    return Object.values(Suit).flatMap((suit) =>
        Object.values(Rank).map((rank) => ({suit,rank}))
    );
}

export function shuffleDeck(): void{
    for (let i = this.deck.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
}