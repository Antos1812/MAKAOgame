import { CardData } from "./card";

export class Player {
    name: string;
    hand: CardData[];

    constructor(name:string){
        this.name = name;
        this.hand = [];
    }

    drawCard(card: CardData): void {
        this.hand.push(card);
    }

    playCard(index: number): CardData | null {
        if(index >= 0 && index < this.hand.length) {
            return this.hand.splice(index, 1)[0];
        }
        return null;
    }
}