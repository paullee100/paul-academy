import { shuffle } from "@/libs/helper/utility";
import { generate_exponent } from "../../helper/generator";
import { MathQuestion } from "../../Questions";
import { eval_exponent } from "./exponentHelper";

const exponents: string[] = generate_exponent(10, 1, 2, 10);
const answerExponents = exponents.map((exponent) => (
    eval_exponent(exponent)
))

export const Exponent = 
    exponents.map((question, index) => (
        new MathQuestion(
            "Simplify " + question,
            shuffle([
            { text: answerExponents[index][0].toString(), correct: true },
            { text: answerExponents[index][1].toString(), correct: false },
            { text: answerExponents[index][2].toString(), correct: false },
            { text: answerExponents[index][3].toString(), correct: false }
            ]),
            "",
        )
    ))
