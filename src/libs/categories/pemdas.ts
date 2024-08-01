import { generate_PEMDAS_problems } from "../helper/helper"
import { Question } from "../Questions"

const pemdas = [generate_PEMDAS_problems(), generate_PEMDAS_problems(), generate_PEMDAS_problems(), generate_PEMDAS_problems(), generate_PEMDAS_problems()]

export const PEMDAS = [
    new Question(
        "Solve " + pemdas[0][0],
        [
            { text: pemdas[0][1], correct: true },
            { text: pemdas[0][2], correct: false },
            { text: pemdas[0][3], correct: false },
            { text: pemdas[0][4], correct: false }
        ],
        "",
        undefined
    ),
    new Question(
        "Solve " + pemdas[1][0],
        [
            { text: pemdas[1][1], correct: true },
            { text: pemdas[1][2], correct: false },
            { text: pemdas[1][3], correct: false },
            { text: pemdas[1][4], correct: false }
        ],
        "",
        undefined
    ),
    new Question(
        "Solve " + pemdas[2][0],
        [
            { text: pemdas[2][1], correct: true },
            { text: pemdas[2][2], correct: false },
            { text: pemdas[2][3], correct: false },
            { text: pemdas[2][4], correct: false }
        ],
        "",
        undefined
    ),
    new Question(
        "Solve " + pemdas[3][0],
        [
            { text: pemdas[3][1], correct: true },
            { text: pemdas[3][2], correct: false },
            { text: pemdas[3][3], correct: false },
            { text: pemdas[3][4], correct: false }
        ],
        "",
        undefined
    ),
    new Question(
        "Solve " + pemdas[4][0],
        [
            { text: pemdas[4][1], correct: true },
            { text: pemdas[4][2], correct: false },
            { text: pemdas[4][3], correct: false },
            { text: pemdas[4][4], correct: false }
        ],
        "",
        undefined
    )
]