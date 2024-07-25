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