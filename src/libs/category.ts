import { Question, WritingQuestion } from "./Questions";

interface Categories {
    Definition: Question[],
    Exponent: Question[],
    Factor: Question[],
    GreatestCommonFactor: Question[],
    LeastCommonMultiple: Question[],
    PrimeFactor: Question[],
    Pemdas: Question[],
    // primeNumber: PrimeNumber,
    MathPractice: Question[],
    Writing: WritingQuestion[]
}

export const getCategory = (category: Categories, topic: string) => {
    const action = category[topic as keyof typeof category]
    return action
}

export const getCategoryName = (topic: string) => {
    return topic.replace(/([a-z])([A-Z])/g, '$1 $2')
}