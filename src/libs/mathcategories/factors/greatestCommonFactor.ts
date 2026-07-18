import { generate_greatest_common_factor } from "@/libs/helper/generator";
import { shuffle } from "@/libs/helper/utility";
import { Question } from "@/libs/Questions";

const numOfQuestions = 10
const greatestCommonFactors = Array.from({ length: numOfQuestions }, _ => generate_greatest_common_factor())
// [
//     generate_greatest_common_factor(), 
//     generate_greatest_common_factor(), 
//     generate_greatest_common_factor(), 
//     generate_greatest_common_factor()]

export const GreatestCommonFactor = 
    greatestCommonFactors.map((questions) => (
        new Question(
            "What are the greatest common factors for " + questions[0] + " and " + questions[1],
            shuffle([
                { text: questions[2].toString(), correct: true},
                { text: questions[3].toString(), correct: false },
                { text: questions[4].toString(), correct: false },
                { text: questions[5].toString(), correct: false },
            ]),
            "",
            undefined
        )
    ))