import { generate_PEMDAS_problems } from "../helper/generator"
import { Question } from "../Questions"

const pemdas = [generate_PEMDAS_problems(), generate_PEMDAS_problems(), generate_PEMDAS_problems(), generate_PEMDAS_problems(), generate_PEMDAS_problems()]

export const PEMDAS = 
    pemdas.map((question, index) => (
        new Question(
            "Solve " + question[0],
            [
                { text: question[1], correct: true },
                { text: question[2], correct: false },
                { text: question[3], correct: false },
                { text: question[4], correct: false }
            ],
            "",
            undefined
        )
    ))