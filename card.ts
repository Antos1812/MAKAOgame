
const CARD_WIDTH = 100;
const CARD_HEIGHT = 150;
const SPRITE_SHEET_URL = '';


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
  destroy: () => void;
};

export function createCard(data: CardData, frame: number, parentElement: HTMLElement): CardObj {
  if(!data || !data.suit || !data.rank) {
    throw new Error("Wrong card data");
  }
  if (frame < 0 || frame > 12) {
    throw new Error("Wrong frame value");
  }
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.dataset.suit = data.suit;
  cardElement.dataset.rank = data.rank;
  cardElement.style.backgroundImage = `url('')`; 
  cardElement.style.backgroundPosition = `0px ${-frame * CARD_HEIGHT}px`;
  cardElement.style.width = `${CARD_WIDTH}px`; 
  cardElement.style.height = `${CARD_HEIGHT}px`;

  
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

  function destroy() {
      parentElement.removeChild(cardElement);

      cardElement.removeEventListener("click", flip);
  }
  parentElement.appendChild(cardElement);

  return {
      suit: data.suit,
      rank: data.rank,
      element: cardElement,
      flip,
      highlight,
      destroy
  };

  
}
