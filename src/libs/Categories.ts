import { Definition } from "./categories/definition";
import { PracticeA } from "./categories/practiceA";

const Categories = [
    Definition,
    [],
    [],
    [],
    [],
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
            return "";
        case 2:
            return "";
        case 3:
            return "";
        case 4:
            return "";
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