import { WritingQuestion } from "../Questions";

export const Writing = [
    new WritingQuestion(
        "Which underlined section of the text below contains an error?",
        "What the monkey <don't realize>, " +
        "though, <was that> the <banana was> just " +
        "bait to lure <him to> the back of his cage.",
        [
            { text: "A", correct: true },
            { text: "B", correct: false },
            { text: "C", correct: false },
            { text: "D", correct: false },
        ],
        "The word \"don\'t\" is a contraction of \"do not,\" which would not work in the sentence. \"The monkey do not realize\" would be ungrammatical since it is a singular noun with a plural verb form. Since there is only one monkey, the correct contraction is \"doesn\'t,\" which represents \"does not.\"",
        undefined
    ),
    new WritingQuestion(
        "Which underlined section of the text below contains an error?",
        "The <Boston Red Sox> <won the> World Series <in 2004 after> " +
        "83 years without a <titel>.",
        [
            { text: "A", correct: false },
            { text: "B", correct: false },
            { text: "C", correct: false },
            { text: "D", correct: true },
        ],
        "The word \"title\" is spelled wrong in the sentence.",
        undefined
    ),
    new WritingQuestion(
        "Which underlined section of the text below contains an error?",
        "<Rosita let> the woman behind <her go first> at the checkout counter because she <had less> items in her cart <than Rosita.>",
        [
            { text: "A", correct: false },
            { text: "B", correct: false },
            { text: "C", correct: true },
            { text: "D", correct: false }
        ],
        "The proper word to use in the sentence is \"fewer,\" not \"less.\" When referring to countable items, the correct word is \"fewer,\" as in this instance of groceries in a cart. When refering to an uncountable amount of something or a collective noun, the correct word is \"less,\" as in \"He has less water in his glass than me.\"",
        undefined
    ),
    new WritingQuestion(
        "Which underlined section of the text below contains an error?",
        "<Whenever it> rains a lot outside<,> Abuela Maria <complains that> her leg <ache.>",
        [
            { text: "A", correct: false },
            { text: "B", correct: false },
            { text: "C", correct: false },
            { text: "D", correct: true }
        ],
        "The noun \"leg\" is singular, so it needs the singular form of the verb to maintain subject-verb agreement. This sentence should use \"aches\" rather than \"ache.\"",
        undefined
    ),
    new WritingQuestion(
        "The teacher has asked students to write an essay about their summer. A student is having difficulty figuring out what to write about. Which of the following is an effective pre-writing strategy that will help them write their essay?",
        "",
        [
            { text: "Have the student write a paragraph about what they did during the summer.", correct: false },
            { text: "Give the student a graphic organizer that will help them brainstorm ideas.", correct: true },
            { text: "Ask students to revise their essay to make it more informative.", correct: false },
            { text: "Tell the student to write about a different topic.", correct: false }
        ],
        "A graphic organizer will help the student think through their summer and the topics they can write about.",
        undefined
    ),
    new WritingQuestion(
        "What is the subject of the sentence below?",
        "The more Jack thought about his guitar, the more he realized how much it had become a part of him.",
        [
            { text: "guitar", correct: false },
            { text: "Jack", correct: true },
            { text: "he", correct: false },
            { text: "thought", correct: false }
        ],
        "The subject of the sentence is the person or thing that is acting or in a state of being in the sentence. In this sentence, Jack is the one who is thinking about his guitar. Jack is the subject and the guitar is he direct object.",
        undefined
    )
]