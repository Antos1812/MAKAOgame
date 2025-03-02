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

export type CardObj = {
  suit: Suit;
  rank: Rank;
  element: HTMLElement;
  flip: () => void;
  highlight: (active: boolean) => void;
};

export function createCard(data: CardData, frame: number): CardObj {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.dataset.suit = data.suit;
  cardElement.dataset.rank = data.rank;
  cardElement.style.backgroundImage = `url('/path/to/cards/spritesheet.png')`; 
  cardElement.style.backgroundPosition = `0px ${-frame * 100}px`;
  cardElement.style.width = "100px"; 
  cardElement.style.height = "150px";

  
  function flip() {
      cardElement.classList.toggle("flipped");
  }

  
  function highlight(active: boolean) {
      if (active) {
          cardElement.classList.add("highlighted");
      } else {
          cardElement.classList.remove("highlighted");
      }
  }

  document.body.appendChild(cardElement); 
  return {
      suit: data.suit,
      rank: data.rank,
      element: cardElement,
      flip,
      highlight
  };
}
