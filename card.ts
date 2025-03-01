export enum Suit {
    Hearts = "Hearts",
    Diamonds = "Diamonds",
    Clubs = "Clubs",
    Spades = "Spades"
  }
  
  export enum Rank {
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8",
    Nine = "9",
    Ten = "10",
    Jack = "J",
    Queen = "Q",
    King = "K",
    Ace = "A"
  }

  export interface CardData {
    suit: Suit;
    rank: Rank;
  }

  export type CardObj = GameObj & {
    suit: Suit;
    rank: Rank;
    flip: () => void;
    highlight: (active: boolean) => void;
  };

  export function createCard(data: CardData, frame: number): CardObj {
    const card = add ([
        sprite("cards", {frame}),
        pos(0,0),
        scale(1),
        area(),
        {
            suit: data.suit,
            rank: data.rank,
            flip() {
                // dokonczyc logikee
            },
            highlight(active: boolean){
                // tu tez dokonczyc
            }
        }
    ]) as CardObj;
    return card;
  }
  