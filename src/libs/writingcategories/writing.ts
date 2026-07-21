import { Answers, WritingQuestion } from "../Questions";

export const Writing = [
    new WritingQuestion(
        "Which underlined section of the text below contains an error?",
        "What the monkey <don't realize>, " +
        "though, <was that> the <banana was> just " +
        "bait to lure <him to> the back of his cage.",
        Answers([
            ["A", true],
            ["B", false],
            ["C", false],
            ["D", false]
        ]),
        "The word \"don\'t\" is a contraction of \"do not,\" which would not work in the sentence. \"The monkey do not realize\" would be ungrammatical since it is a singular noun with a plural verb form. Since there is only one monkey, the correct contraction is \"doesn\'t,\" which represents \"does not.\"",
    ),
    new WritingQuestion(
        "Which underlined section of the text below contains an error?",
        "The <Boston Red Sox> <won the> World Series <in 2004 after> " +
        "83 years without a <titel>.",
        Answers([
            ["A", false],
            ["B", false],
            ["C", false],
            ["D", true]
        ]),
        "The word \"title\" is spelled wrong in the sentence.",
    ),
    new WritingQuestion(
        "Which underlined section of the text below contains an error?",
        "<Rosita let> the woman behind <her go first> at the checkout counter because she <had less> items in her cart <than Rosita.>",
        Answers([
            ["A", false],
            ["B", false],
            ["C", true],
            ["D", false]
        ]),
        "The proper word to use in the sentence is \"fewer,\" not \"less.\" When referring to countable items, the correct word is \"fewer,\" as in this instance of groceries in a cart. When refering to an uncountable amount of something or a collective noun, the correct word is \"less,\" as in \"He has less water in his glass than me.\"",
    ),
    new WritingQuestion(
        "Which underlined section of the text below contains an error?",
        "<Whenever it> rains a lot outside<, > Abuela Maria <complains that> her leg <ache.>",
        Answers([
            ["A", false],
            ["B", false],
            ["C", false],
            ["D", true]
        ]),
        "The noun \"leg\" is singular, so it needs the singular form of the verb to maintain subject-verb agreement. This sentence should use \"aches\" rather than \"ache.\"",
    ),
    new WritingQuestion(
        "Which underlined section of the text below contains an error?",
        "Margaret<, >wants <to go to> the movies with Ebony<, >who really <wants to see> the new horror movie.",
        Answers([
            ["A", true],
            ["B", false],
            ["C", false],
            ["D", false]
        ]),
        "This is an ungrammatical comma. It doesn\'t make sense for the reader to pause between the subject and verb of the sentence.",
    ),
    new WritingQuestion(
        "Which underlined section of the text below contains an error?",
        "Some say <the term> \"Renaissance man\" <were inspired> solely by Leonardo Da Vinci<, >a man famous <for having a diverse> set of talents and skills.",
        Answers([
            ["A", false],
            ["B", true],
            ["C", false],
            ["D", false]
        ]),
        "The sentence uses a plural verb form, \"were,\" even though the subject, \"the term,\" is singular.",
    ),
    new WritingQuestion(
        "Which underlined section of the text below contains an error?",
        "Sammy and Tyrone <ran> outside <so they could> chase <after the> ice cream truck on <there> bikes.",
        Answers([
            ["A", false],
            ["B", false],
            ["C", false],
            ["D", true]
        ]),
        "The writer uses the wrong \"there\" in the sentence. The bikes belong to Sammy and Tyrone, so the correct word to use would be \"their,\" which is a possessive pronoun. \"There\" refers to a direction.",
    ),
    new WritingQuestion(
        "Which underlined section of the text below contains an error?",
        "While the city council and emergency team <began preparing> for the <hurricane;> the residents began evacuating to the nearest <shelter,> following orders from <their local> mayor.",
        Answers([
            ["A", false],
            ["B", true],
            ["C", false],
            ["D", false]
        ]),
        "There should be a comma after \"hurricane,\" not a semicolon. A semicolon can only be used to divide two independent clauses. The first clause here is not independent because it can\'t stand on its own as a complete sentence; thus, it cannot end in a semicolon or any end punctuation.",
    ),
    new WritingQuestion(
        "Which underlined section of the text below contains an error?",
        "<Its> time for the <dog to go> <outside and> do <its> business.",
        Answers([
            ["A", true],
            ["B", false],
            ["C", false],
            ["D", false]
        ]),
        "This sentence shows us the two different ways to use the word \"its.\" When the word is a contraction of \"it\" and \"is,\" the word gets an apostrophe (\"it\'s\"). When the word is meant to be possessive, the word does not get an apostrophe (\"its\"). Since \"It is time\" is the correct grammatical phrase to start the sentence, the first word should be \"It\'s.\"",
    ),
    new WritingQuestion(
        "The teacher asked students to write an essay about the periodic table. A student wrote the following sentence in their essay.",
        "The <periodic table was> a chart <that shows> people all of the periodic elements<, > along with some information <about each one>.",
        Answers([
            ["A", true],
            ["B", false],
            ["C", false],
            ["D", false]
        ]),
        "The verb in choice (A) is written in the wrong tense. \"Was\" is past tense; the periodic table isn\'t just something from the past, but rather something that is still in use today. By changing \"was\" to \"is,\" the sentence will make more sense.",
    ),
    new WritingQuestion(
        "The teacher has asked students to write an essay about their summer. A student is having difficulty figuring out what to write about. Which of the following is an effective pre-writing strategy that will help them write their essay?",
        "",
        Answers([
            ["Have the student write a paragraph about what they did during the summer.", false],
            ["Give the student a graphic organizer that will help them brainstorm ideas.", true],
            ["Ask students to revise their essay to make it more informative.", false],
            ["Tell the student to write about a different topic.", false]
        ]),
        "A graphic organizer will help the student think through their summer and the topics they can write about.",
    ),
    new WritingQuestion(
        "What is the subject of the sentence below?",
        "The more Jack thought about his guitar, the more he realized how much it had become a part of him.",
        Answers([
            ["guitar", false],
            ["Jack", true],
            ["he", false],
            ["thought", false]
        ]),
        "The subject of the sentence is the person or thing that is acting or in a state of being in the sentence. In this sentence, Jack is the one who is thinking about his guitar. Jack is the subject and the guitar is the direct object.",
    ),
    new WritingQuestion(
        "Which of the following is an adverb from the sentence below?",
        "Yakira blindly grabbed for her green water bottle and knocked it off the table onto the ground.",
        Answers([
            ["grabbed", false],
            ["Yakira", false],
            ["blindly", true],
            ["green", false]
        ]),
        "An adverb is a word that modifies a verb, and adjective, or another adverb in a sentence. In the sentence in question, the adverb \"blindly\" modifies the verb \"grabbed.\" How did she grab for the water bottle? She grabbed for it \"blindly.\" Many adverbs end in \"-ly,\" which can help you identify them in a sentence.",
    ),
    new WritingQuestion(
        "Which of the following words is spelled correctly?",
        "",
        Answers([
            ["desparate", false],
            ["consolt", false],
            ["grane", false],
            ["betray", true]
        ]),
        "\"Betray\" is the only word that is spelled correctly. \"Desparate\" should be spelled \"desperate,\" \"consolt\" should be spelled \"consult,\" and \"grane\" should be spelled \"grain.\"",
    ),
    new WritingQuestion(
        "Which of the following sentences does NOT contain a preposition?",
        "",
        Answers([
            ["Jimmy took his book off the table.", false],
            ["Jawan tucked his shirt into his pants.", false],
            ["Mark cannot identify the problem.", true],
            ["Shirley spent her money on candy.", false]
        ]),
        "A preposition is a word that describes the relationship between a verb and an object. You can often think of prepositions as \"placement words\": off, in, into, on, around, at, behind, beside, and under are all examples of prepositions.",
    )
]