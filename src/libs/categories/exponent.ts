import { eval_math, generate_exponent } from "../helper/helper";
import { Question } from "../Questions";

const exponents: string[] = generate_exponent(6, 1, 2, 10);
const answerExponents = [eval_math(exponents[0]), 
                         eval_math(exponents[1]), 
                         eval_math(exponents[2]), 
                         eval_math(exponents[3]),
                         eval_math(exponents[4]),
                         eval_math(exponents[5])
                        ]

export const Exponent = [
    new Question(
        "Simplify " + exponents[0],
        [
            { text: answerExponents[0][0].toString(), correct: true },
            { text: answerExponents[0][1].toString(), correct: false },
            { text: answerExponents[0][2].toString(), correct: false },
            { text: answerExponents[0][3].toString(), correct: false }
        ],
        "",
        undefined
    ),
    new Question(
        "Simplify " + exponents[1],
        [
            { text: answerExponents[1][0].toString(), correct: true },
            { text: answerExponents[1][1].toString(), correct: false },
            { text: answerExponents[1][2].toString(), correct: false },
            { text: answerExponents[1][3].toString(), correct: false }
        ],
        "",
        undefined
    ),
    new Question(
        "Simplify " + exponents[2],
        [
            { text: answerExponents[2][0].toString(), correct: true },
            { text: answerExponents[2][1].toString(), correct: false },
            { text: answerExponents[2][2].toString(), correct: false },
            { text: answerExponents[2][3].toString(), correct: false }
        ],
        "",
        undefined
    ),
    new Question(
        "Simplify " + exponents[3],
        [
            { text: answerExponents[3][0].toString(), correct: true },
            { text: answerExponents[3][1].toString(), correct: false },
            { text: answerExponents[3][2].toString(), correct: false },
            { text: answerExponents[3][3].toString(), correct: false }
        ],
        "",
        undefined
    ),
    new Question(
        "Simplify " + exponents[4],
        [
            { text: answerExponents[4][0].toString(), correct: true },
            { text: answerExponents[4][1].toString(), correct: false },
            { text: answerExponents[4][2].toString(), correct: false },
            { text: answerExponents[4][3].toString(), correct: false }
        ],
        "",
        undefined
    ),
    new Question(
        "Simplify " + exponents[5],
        [
            { text: answerExponents[5][0].toString(), correct: true },
            { text: answerExponents[5][1].toString(), correct: false },
            { text: answerExponents[5][2].toString(), correct: false },
            { text: answerExponents[5][3].toString(), correct: false }
        ],
        "",
        undefined
    )
]