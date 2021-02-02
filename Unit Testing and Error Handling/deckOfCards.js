function printDeckOfCards(cards) {
    function createCard(card) {
        let face = card[0];
        let suit = card[1];

        let validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        let validSuits = { 'S': '\u2660', 'H': '\u2665', 'D': '\u2666', 'C': '\u2663', }
        if (!validFaces.includes(face) || !Object.keys(validSuits).includes(suit)) {
           return  console.log((`Invalid card: ${face}${suit}`))
        }

        return {
            face,
            suit,
            toString() {
                return `${face}${validSuits[suit]}`;
            }
        };
    }

    cards = cards.map(card => {
        card = card.split('')
        suit = card.pop();
        face = card.join('')
        return [face, suit]
    })

    return  cards.map(card => createCard(card)).join(' ')

}

console.log('' + printDeckOfCards(['AS', '10D', 'KH', '2C']));
console.log('' + printDeckOfCards(['5S', '3D', 'QD', '1C']));