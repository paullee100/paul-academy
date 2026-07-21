import { Question, WritingQuestion, MathQuestion } from "./Questions";

interface Categories {
    Definition: Question[],
    Exponent: MathQuestion[],
    Factor: MathQuestion[],
    GreatestCommonFactor: MathQuestion[],
    LeastCommonMultiple: MathQuestion[],
    PrimeFactor: MathQuestion[],
    Pemdas: MathQuestion[],
    // primeNumber: PrimeNumber,
    MathPractice: MathQuestion[],
    Writing: WritingQuestion[]
}

export const getCategory = (category: Categories, topic: string) => {
    const action = category[topic as keyof typeof category]
    return action
}

export const getCategoryName = (topic: string) => {
    return topic.replace(/([a-z])([A-Z])/g, '$1 $2')
}