import {CardData, Suit, Rank} from "./card";



export function createDeck(): CardData[]{
    return Object.values(Suit).flatMap((suit) =>
        Object.values(Rank).map((rank) => ({suit,rank}))
    );
}