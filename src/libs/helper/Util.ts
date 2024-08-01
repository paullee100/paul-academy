import { Question } from "../Questions";

/**
 * Shuffling using the Fisher-Yates Shuffle or Knuth Shuffle.
 */
export const shuffle = (array: string[] | number[] | Question[] | { text: string, correct: boolean}[]): any[] => {
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

/**
 * 
 * @param unicode 
 * @returns 
 */
export const convert_unicode_to_decimal = (unicode: number): string => {
    switch (unicode) {
        case 8304:
            return '0'
        case 185:
            return '1'
        case 178:
            return '2'
        case 179:
            return '3'
        case 8308:
            return '4'
        case 8309:
            return '5'
        case 8310:
            return '6'
        case 8311:
            return '7'
        case 8312:
            return '8'
        case 8313:
            return '9'
        case 8315:
            return '-'
        default:
            alert(unicode);
            return 'Something went wrong!';
    }
}

/**
 * Checks if integer is a prime number
 * 
 * @param n integer
 * @returns true if the given number is a prime number, false otherwise
 */
export const is_prime = (n: number) => {
    // Check if n=1 or n=0
    if (n <= 1) return false;
    // Check if n=2 or n=3
    if (n == 2 || n == 3) return true;
    // Check whether n is divisible by 2 or 3
    if (n % 2 == 0 || n % 3 == 0) return false;
    // Check from 5 to square root of n
    // Iterate i by (i+6)
    for (let i = 5; i <= Math.sqrt(n); i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) return false;
    }
    return true;
}

/**
 * 
 * @param min 
 * @param max 
 * @returns 
 */
export const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random()*(max-min+1))+min
}

export const getRandomOperator = () => {
    const operators: string[] = ['+', '-', '*', '/', '^']
    const index = Math.floor(Math.random() * operators.length)
    return operators[index]
}

export const generate_multiple_choice_answers = (correctAnswer: number) => {
    const choices = [parseFloat(correctAnswer.toFixed(10))]
    const delta = Math.max(1, Math.abs(correctAnswer) * 0.1)

    while (choices.length < 4) {
        let incorrectAnswer = correctAnswer + getRandomNumber(-delta*10, delta*10);
        incorrectAnswer = parseFloat(incorrectAnswer.toFixed(10))

        if (!choices.includes(incorrectAnswer)) choices.push(Math.abs(incorrectAnswer))
    }

    return choices
}