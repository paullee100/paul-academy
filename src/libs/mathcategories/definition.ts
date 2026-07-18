import { Question } from "../Questions";

export const Definition = [
    new Question( 
        "What is an integer?", 
        [
            { text: "Any positive or negative whole number, including zero. Integers do not include fractions (1/3), decimals (0.56), or mixed numbers (7*(3/4))", correct: true},
            { text: "Any integer that can be divided by 2 without leaving a remainder.", correct: false},
            { text: "Cannot be written as fractions or decimals because the number of decimal places is infinite and there is no recurring pattern of digits within the number.", correct: false},
            { text: "The basic building blocks of mathematics.", correct: false},
            { text: "None of the above", correct: false}
        ],
        "Integers are whole numbers including zero.",
        undefined
    ),
    new Question(
        "A perfect square is ",
        [
            { text: "another way of writing a fractional exponent.", correct: false},
            { text: "a number that has an integer for its square root. There are 10 perfect squares from 1 to 100.", correct: true},
            { text: "a superscript number placed next to another number at the top right.", correct: false},
            { text: "a graph to see the distance between numbers", correct: false}
        ],
        "Result of the square root will equal to an integer value.",
        undefined
    ),
    new Question(
        "What is the definition of a prime number?",
        [
            { text: "A number that has an integer for its square root. There are 10 perfect squares from 1 to 100.", correct: false},
            { text: "Any positive or negative whole number, including zero. Integers do not include fractions (1/3), decimals (0.56), or mixed numbers (7*(3/4))", correct: false},
            { text: "Any integer that cannot be divided evenly by 2.", correct: false},
            { text: "Any whole number greater than 1 that has only two factors, itself and 1; that is, a number that can be divided evenly only by 1 and itself.", correct: true}
        ],
        "Definition is the green answer",
        undefined
    ),
    new Question(
        "What is the definition of a composite number?",
        [
            { text: "A superscript number placed next to another number at the top right.", correct: false},
            { text: "Any positive or negative whole number, including zero. Integers do not include fractions (1/3), decimals (0.56), or mixed numbers (7*(3/4))", correct: false},
            { text: "Cannot be written as fractions or decimals because the number of decimal places is infinite and there is no recurring pattern of digits within the number.", correct: false},
            { text: "Any whole number greater than 1 that has more than two different factors; in other words, any whole number that is not a prime number", correct: true}
        ],
        "Definition is the green answer",
        undefined
    ),
    new Question(
        "What is the definition of a even number?",
        [
            { text: "Cannot be written as fractions or decimals because the number of decimal places is infinite and there is no recurring pattern of digits within the number.", correct: false},
            { text: "Any integer that can be divided by 2 without leaving a remainder.", correct: true},
            { text: "Any interger that cannot be divided evenly by 2", correct: false},
            { text: "A superscript number placed next to another number at the top right.", correct: false}
        ],
        "Definition is the green answer",
        undefined
    ),
    new Question(
        "Rational numbers ",
        [
            { text: "is a superscript number placed next to another number at the top right.", correct: false},
            { text: "cannot be written as fractions or decimals because the number of decimal places is infinite and there is no recurring pattern of digits within the number.", correct: false},
            { text: "include all integers, decimals, and fractions. Any terminating or repeating decimal number is a rational number.", correct: true},
            { text: "are the basic building blocks of mathematics.", correct: false}
        ],
        "Definition is the green answer",
        undefined
    ),
    new Question(
        "Irrational numbers ",
        [
            { text: "cannot be written as fractions or decimals because the number of decimal places is infinite and there is no recurring pattern of digits within the number.", correct: true},
            { text: "include all integers, decimals, and fractions. Any terminating or repeating decimal number is a rational number.", correct: false},
            { text: "are the basic building blocks of mathematics.", correct: false},
            { text: "are any number that uses a decimal point to show the part of the number that is less than one.", correct: false}
        ],
        "Definition is the green answer",
        undefined
    )
]