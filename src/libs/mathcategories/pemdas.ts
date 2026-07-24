import { generate_PEMDAS_problems } from "../helper/generator"
import { MathQuestion } from "../Questions"

const pemdas = [generate_PEMDAS_problems(), generate_PEMDAS_problems(), generate_PEMDAS_problems(), generate_PEMDAS_problems(), generate_PEMDAS_problems()]

export const PEMDAS = 
    pemdas.map((question, index) => (
        new MathQuestion(
            "Solve " + question[0],
            [
                { text: question[1], correct: true },
                { text: question[2], correct: false },
                { text: question[3], correct: false },
                { text: question[4], correct: false }
            ],
            "",
        )
    ))