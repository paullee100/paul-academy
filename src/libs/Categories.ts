import { Definition } from "./categories/definition";
import { Exponent } from "./categories/exponent";
import { Factor } from "./categories/factor";
import { PEMDAS } from "./categories/pemdas";
import { PracticeA } from "./categories/practiceA";
import { PrimeNumber } from "./categories/primeNumber";
import { shuffle } from "./helper/Util";

const Categories = [
    Definition,
    Exponent,
    Factor,
    PEMDAS,
    PrimeNumber,
    PracticeA,
    [],
    [],
    [],
    [],
]

export const getCategory = (index: number) => {
    return Categories[index];
}

export const getCategoryName = (index: number): string => {
    switch (index) {
        case 0:
            return "Definition";
        case 1:
            return "Exponent";
        case 2:
            return "Factor";
        case 3:
            return "PEMDAS";
        case 4:
            return "Prime Number";
        case 5:
            return "Practice A";
        case 6:
            return "";
        case 7:
            return "";
        case 8:
            return "";
        case 9:
            return "";
        default:
            return "An error has occurred!";
    }
}