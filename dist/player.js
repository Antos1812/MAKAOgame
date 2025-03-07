export class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }
    drawCard(card) {
        this.hand.push(card);
    }
    playCard(index) {
        if (index >= 0 && index < this.hand.length) {
            const playedCard = this.hand.splice(index, 1)[0];
            return playedCard;
        }
        console.warn("Wrong card indx");
        return null;
    }
    getHand() {
        return [...this.hand];
    }
    hasCards() {
        return this.hand.length > 0;
    }
}
