"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rank = exports.Suit = void 0;
exports.createCard = createCard;
var CARD_WIDTH = 100;
var CARD_HEIGHT = 150;
var SPRITE_SHEET_URL = '';
var Suit;
(function (Suit) {
    Suit["Hearts"] = "Hearts";
    Suit["Diamonds"] = "Diamonds";
    Suit["Clubs"] = "Clubs";
    Suit["Spades"] = "Spades";
})(Suit || (exports.Suit = Suit = {}));
var Rank;
(function (Rank) {
    Rank["Two"] = "2";
    Rank["Three"] = "3";
    Rank["Four"] = "4";
    Rank["Five"] = "5";
    Rank["Six"] = "6";
    Rank["Seven"] = "7";
    Rank["Eight"] = "8";
    Rank["Nine"] = "9";
    Rank["Ten"] = "10";
    Rank["Jack"] = "J";
    Rank["Queen"] = "Q";
    Rank["King"] = "K";
    Rank["Ace"] = "A";
})(Rank || (exports.Rank = Rank = {}));
function createCard(data, frame, parentElement) {
    if (!data || !data.suit || !data.rank) {
        throw new Error("Wrong card data");
    }
    if (frame < 0 || frame > 12) {
        throw new Error("Wrong frame value");
    }
    var cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.dataset.suit = data.suit;
    cardElement.dataset.rank = data.rank;
    cardElement.style.backgroundImage = "url('')";
    cardElement.style.backgroundPosition = "0px ".concat(-frame * CARD_HEIGHT, "px");
    cardElement.style.width = "".concat(CARD_WIDTH, "px");
    cardElement.style.height = "".concat(CARD_HEIGHT, "px");
    function flip() {
        cardElement.classList.toggle("flipped");
    }
    function highlight(active) {
        if (active) {
            cardElement.classList.add("highlighted");
        }
        else {
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
        flip: flip,
        highlight: highlight,
        destroy: destroy
    };
}
