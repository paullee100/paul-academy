import { generate_prime_factor } from "@/libs/helper/generator";
import { shuffle } from "@/libs/helper/utility";
import { MathQuestion } from "@/libs/Questions";

const numOfQuestions = 4
const primeFactors = Array.from({ length: numOfQuestions }, _ => generate_prime_factor())

export const PrimeFactor = 
    primeFactors.map((questions) => (
        new MathQuestion(
            "What are the prime factors for " + questions[0],
            shuffle([
                { text: questions[1].toString(), correct: true },
                { text: questions[2].toString(), correct: false },
                { text: questions[3].toString(), correct: false },
                { text: questions[4].toString(), correct: false },
            ]),
            "",
            undefined
        )
    ))