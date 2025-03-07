export var Suit;
(function (Suit) {
    Suit["Hearts"] = "Hearts";
    Suit["Diamonds"] = "Diamonds";
    Suit["Clubs"] = "Clubs";
    Suit["Spades"] = "Spades";
})(Suit || (Suit = {}));
export var Rank;
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
})(Rank || (Rank = {}));
export function createCard(data, frame) {
    const card = add([
        sprite("cards", { frame }),
        pos(0, 0),
        scale(1),
        area(),
        {
            suit: data.suit,
            rank: data.rank,
            flip() {
                // dokonczyc logikee
            },
            highlight(active) {
                // tu tez dokonczyc
            }
        }
    ]);
    return card;
}
