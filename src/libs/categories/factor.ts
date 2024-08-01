import { generate_factor, generate_greatest_common_factor, generate_least_common_multiple, generate_prime_factor } from "../helper/helper"
import { Question } from "../Questions"

const factors = [generate_factor(), generate_factor(), generate_factor(), generate_factor()]
const primeFactors = [generate_prime_factor(), generate_prime_factor(), generate_prime_factor(), generate_prime_factor()]
const greatestCommonFactors = [generate_greatest_common_factor(), generate_greatest_common_factor(), generate_greatest_common_factor(), generate_greatest_common_factor()]
const leastCommonMultiple = [generate_least_common_multiple(), generate_least_common_multiple(), generate_least_common_multiple(), generate_least_common_multiple()]

export const Factor = [
    new Question(
        "What are the factors for " + factors[0][0],
        [
            { text: factors[0][0].toString(), correct: true },
            { text: "answer2", correct: false },
            { text: "answer3", correct: false },
            { text: "answer4", correct: false }
        ],
        "",
        undefined
    ),
    new Question(
        "What are the factors for " + factors[1][0],
        [
            { text: factors[1][1].toString(), correct: true },
            { text: "answer2", correct: false },
            { text: "answer3", correct: false },
            { text: "answer4", correct: false }
        ],
        "",
        undefined
    ),
    new Question(
        "What are the factors for " + factors[2][0],
        [
            { text: factors[2][1].toString(), correct: true },
            { text: "answer2", correct: false },
            { text: "answer3", correct: false },
            { text: "answer4", correct: false }
        ],
        "",
        undefined
    ),
    new Question(
        "What are the factors for " + factors[3][0],
        [
            { text: factors[3][1].toString(), correct: true },
            { text: "answer2", correct: false },
            { text: "answer3", correct: false },
            { text: "answer4", correct: false }
        ],
        "",
        undefined
    ),
    new Question(
        "What are the prime factors for " + primeFactors[0][0],
        [
            { text: primeFactors[0][1].toString(), correct: true },
            { text: "answer2", correct: false },
            { text: "answer3", correct: false },
            { text: "answer4", correct: false }
        ],
        "",
        undefined
    ),
    new Question(
        "What are the prime factors for " + primeFactors[1][0],
        [
            { text: primeFactors[1][1].toString(), correct: true },
            { text: "answer2", correct: false },
            { text: "answer3", correct: false },
            { text: "answer4", correct: false }
        ],
        "",
        undefined
    ),
    new Question(
        "What are the prime factors for " + primeFactors[2][0],
        [
            { text: primeFactors[2][1].toString(), correct: true },
            { text: "answer2", correct: false },
            { text: "answer3", correct: false },
            { text: "answer4", correct: false }
        ],
        "",
        undefined
    ),
    new Question(
        "What are the prime factors for " + primeFactors[3][0],
        [
            { text: primeFactors[3][1].toString(), correct: true },
            { text: "answer2", correct: false },
            { text: "answer3", correct: false },
            { text: "answer4", correct: false }
        ],
        "",
        undefined
    ),
    new Question(
        "What are the greatest common factors for " + greatestCommonFactors[0][0] + " and " + greatestCommonFactors[0][1],
        [
            { text: greatestCommonFactors[0][2].toString(), correct: true },
            { text: (greatestCommonFactors[0][2]+1).toString(), correct: false },
            { text: (greatestCommonFactors[0][2]*2).toString(), correct: false },
            { text: (greatestCommonFactors[0][2]+2).toString(), correct: false }
        ],
        "",
        undefined
    ),
    new Question(
        "What are the greatest common factors for " + greatestCommonFactors[1][0] + " and " + greatestCommonFactors[1][1],
        [
            { text: greatestCommonFactors[1][2].toString(), correct: true },
            { text: (greatestCommonFactors[1][2]+1).toString(), correct: false },
            { text: (greatestCommonFactors[1][2]*2).toString(), correct: false },
            { text: (greatestCommonFactors[1][2]+2).toString(), correct: false }
        ],
        "",
        undefined
    ),
    new Question(
        "What are the greatest common factors for " + greatestCommonFactors[2][0] + " and " + greatestCommonFactors[2][1],
        [
            { text: greatestCommonFactors[2][2].toString(), correct: true },
            { text: (greatestCommonFactors[2][2]+1).toString(), correct: false },
            { text: (greatestCommonFactors[2][2]*2).toString(), correct: false },
            { text: (greatestCommonFactors[2][2]+2).toString(), correct: false }
        ],
        "",
        undefined
    ),
    new Question(
        "What are the greatest common factors for " + greatestCommonFactors[3][0] + " and " + greatestCommonFactors[3][1],
        [
            { text: greatestCommonFactors[3][2].toString(), correct: true },
            { text: (greatestCommonFactors[3][2]+1).toString(), correct: false },
            { text: (greatestCommonFactors[3][2]*2).toString(), correct: false },
            { text: (greatestCommonFactors[3][2]-2).toString(), correct: false }
        ],
        "",
        undefined
    ),
    new Question(
        "What are the least common multiple for " + leastCommonMultiple[0][0] + " and " + leastCommonMultiple[0][1],
        [
            { text: leastCommonMultiple[0][2].toString(), correct: true },
            { text: leastCommonMultiple[0][3].toString(), correct: false },
            { text: leastCommonMultiple[0][4].toString(), correct: false },
            { text: leastCommonMultiple[0][5].toString(), correct: false }
        ],
        "",
        undefined
    ),
    new Question(
        "What are the least common multiple for " + leastCommonMultiple[1][0] + " and " + leastCommonMultiple[1][1],
        [
            { text: leastCommonMultiple[1][2].toString(), correct: true },
            { text: leastCommonMultiple[1][3].toString(), correct: false },
            { text: leastCommonMultiple[1][4].toString(), correct: false },
            { text: leastCommonMultiple[1][5].toString(), correct: false }
        ],
        "",
        undefined
    ),
    new Question(
        "What are the least common multiple for " + leastCommonMultiple[2][0] + " and " + leastCommonMultiple[2][1],
        [
            { text: leastCommonMultiple[2][2].toString(), correct: true },
            { text: leastCommonMultiple[2][3].toString(), correct: false },
            { text: leastCommonMultiple[2][4].toString(), correct: false },
            { text: leastCommonMultiple[2][5].toString(), correct: false }
        ],
        "",
        undefined
    ),
    new Question(
        "What are the least common multiple for " + leastCommonMultiple[3][0] + " and " + leastCommonMultiple[3][1],
        [
            { text: leastCommonMultiple[3][2].toString(), correct: true },
            { text: leastCommonMultiple[3][3].toString(), correct: false },
            { text: leastCommonMultiple[3][4].toString(), correct: false },
            { text: leastCommonMultiple[3][5].toString(), correct: false }
        ],
        "",
        undefined
    )
]