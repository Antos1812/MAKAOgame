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
            const playedCard = this.hand.splice(index, 1)[0];
            return playedCard;
        }
        console.warn("Wrong card indx");
        return null;
    }

    getHand(): CardData[] {
        return [...this.hand];
    }



    hasCards(): boolean {
        return this.hand.length > 0;
    }
}