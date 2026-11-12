import { Card } from "./types";
import { MODIFIERS, NUMBER_CARD_COUNTS, ACTION_CARDS, NUMBER_OF_ACTION_CARD_COPIES, MAX_NUMBER_OF_CARDS } from "./constants";


export function createFlip7Deck(): Card[] {
    const deck: Card[] = [];

    function addNumberCards(): void {
        for (const [num, count] of Object.entries(NUMBER_CARD_COUNTS)) {
            for (let i = 0; i < count; i++) {
                deck.push({ id: `${num}-${i}`, type: 'NUMBER', value: parseInt(num) });
            }
        }
    }

    function addModifierCards(): void {
        for (const modifier of MODIFIERS) {
            deck.push({ id: modifier, type: 'MODIFIER', value: modifier });
        }
    }

    function addActionCards(): void {
        for (const action of ACTION_CARDS) {
            for (let i = 0; i < NUMBER_OF_ACTION_CARD_COPIES; i++) {
                deck.push({ id: `${action}-${i}`, type: 'ACTION', value: action });
            }
        }
    }

    addNumberCards();
    addModifierCards();
    addActionCards();

    if (deck.length !== MAX_NUMBER_OF_CARDS) {
        throw new Error(
            `Expected ${MAX_NUMBER_OF_CARDS} cards, but got ${deck.length}.`
        );
    }

    shuffle(deck);

    return deck;
}




export function shuffle(deck: Card[]): Card[] {
    for (let i = deck.length - 1; i >= 1; i--) {
        const generatedRandomIndex = Math.floor(Math.random() * (i + 1));

        const temp = deck[i];
        deck[i] = deck[generatedRandomIndex];
        deck[generatedRandomIndex] = temp;
    }

    return deck;
}