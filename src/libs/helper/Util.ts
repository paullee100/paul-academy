import { Question } from "./Questions";

/**
 * Shuffling using the Fisher-Yates Shuffle or Knuth Shuffle.
 */
export const shuffle = (array: string[] | number[] | Question[] | { text: string, correct: boolean}[]) => {
    let currentIndex = array.length, randomIndex;

    // While there remain element to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}