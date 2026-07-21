import { generate_least_common_multiple } from "@/libs/helper/generator";
import { shuffle } from "@/libs/helper/utility";
import { MathQuestion } from "@/libs/Questions";

const numOfQuestions = 4
const leastCommonMultiple = Array.from({ length: numOfQuestions }, _ => generate_least_common_multiple())

export const LeastCommonMultiple = 
    leastCommonMultiple.map((questions) => (
        new MathQuestion(
        "What are the least common multiple for " + questions[0] + " and " + questions[1],
        shuffle([
            { text: questions[2].toString(), correct: true },
            { text: questions[3].toString(), correct: false },
            { text: questions[4].toString(), correct: false },
            { text: questions[5].toString(), correct: false }
        ]),
        "",
        undefined
        )
    ))