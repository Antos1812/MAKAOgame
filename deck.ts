import {CardData, Suit, Rank} from "./card";



export function createDeck(): CardData[]{
    const deck: CardData[] = [];

    Object.values(Suit).forEach((suit) => {
        Object.values(Rank).forEach((rank) => {
            deck.push({suit, rank});
        });
    });

    return deck;
}