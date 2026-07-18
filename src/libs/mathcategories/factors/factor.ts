import { generate_factor, generate_greatest_common_factor, generate_least_common_multiple, generate_prime_factor } from "../../helper/generator"
import { Question } from "../../Questions"

const numOfQuestions = 10
const factors = Array.from({ length: numOfQuestions }, _ => generate_factor())

export const Factor =
    factors.map((questions) => (
        new Question(
            "Which of the following answer is the factor for " + questions[0],
        [
            { text: questions[1].toString(), correct: true },
            { text: questions[2].toString(), correct: false },
            { text: questions[3].toString(), correct: false },
            { text: questions[4].toString(), correct: false }
        ],
        "",
        undefined
        )
    ))