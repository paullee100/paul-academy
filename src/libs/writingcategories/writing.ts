import { Answers, WritingQuestion } from "../Questions";

export const Writing = [
    new WritingQuestion(
        "Which underlined section of the text below contains an error?",
        "What the monkey <don't realize>, " +
        "though, <was that> the <banana was> just " +
        "bait to lure <him to> the back of his cage.",
        "",
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
        "",
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
        "",
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
        "",
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
        "",
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
        "",
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
        "",
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
        "",
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
        "",
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
        "",
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
        "",
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
        "",
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
        "",
        Answers([
            ["Jimmy took his book off the table.", false],
            ["Jawan tucked his shirt into his pants.", false],
            ["Mark cannot identify the problem.", true],
            ["Shirley spent her money on candy.", false]
        ]),
        "A preposition is a word that describes the relationship between a verb and an object. You can often think of prepositions as \"placement words\": off, in, into, on, around, at, behind, beside, and under are all examples of prepositions.",
    ),
    new WritingQuestion(
        "Which of the following is a conjunction from the sentence below?",
        "Dinesh, your mom and dad are here to pick you up and take you to the concert!",
        "",
        Answers([
            ["to the concert", false],
            ["and", true],
            ["pick you up", false],
            ["Dinesh", false]
        ]),
        "A conjunction is a transitional word that links two phrases or clauses together. In this case, the conjunction \"and\" is used twice: once to link two people in a list, and once to link the independent and dependent clauses in the sentence."
    ),
    new WritingQuestion(
        "Which of the following words is NOT spelled correctly?",
        "",
        "",
        Answers([
            ["opportunity", false],
            ["abutment", false],
            ["examinasion", true],
            ["salivary", false]
        ]),
        "The word should be spelled \"examination.\" The other options are all correct."
    ),
    new WritingQuestion(
        "What is the predicate in the sentence below?",
        "Samir and his grandmother went to the bank.",
        "",
        Answers([
            ["went to the bank", true],
            ["Samir and his grandmother", false],
            ["Samir and his grandmother went", false],
            ["to the bank", false]
        ]),
        "A predicate is the part of a sentence, or a clause, that tells what the subject is doing or what the subject is. In this sentence, the predicate is the combination of the verb, preposition, and object. The verb is \"went,\" the prepositional phrase is \"to the,\" and the object is \"bank.\""
    ),
    new WritingQuestion(
        "Read the sentence below and identify the word that fits best in the blank.",
        "If you don\'t clean up this room, _____ not going to be allowed to go to the dance.",
        "",
        Answers([
            ["you\'re", true],
            ["your\'e", false],
            ["yore", false],
            ["your", false]
        ]),
        "The sentence needs to say \"you are\" in the blank to be grammatically correct, so the best answer is its contraction form \"you\'re.\" \"Your\" is a possessive pronoun. \"Yore\" is a word meaning \"a long time past\" and, fittingly, is not often used in modern English. \"Your\'e\" is not a real contraction."
    ),
    new WritingQuestion(
        "What is the subject of the sentence below?",
        "The red bike rolled down the hill to Mario\'s house with no one riding on top of it.",
        "",
        Answers([
            ["hill", false],
            ["Mario", false],
            ["bike", true],
            ["house", false]
        ]),
        "The bike is the subject of the sentence; it is the main thing that is performing the action. It may be tempting to choose Mario because he is the only person identified in the sentence. However, Mario isn\'t doing anything in the sentence; he is only mentioned in regards to his house."
    ),
    new WritingQuestion(
        "Which of the following words is spelled correctly",
        "",
        "",
        Answers([
            ["antidote", true],
            ["obstriction", false],
            ["manafest", false],
            ["carcas", false]
        ]),
        "\"Antidote\" is the only word that is spelled correctly. The correct spelling of the other words is \"obstruction,\" \"manifest,\" and \"carcass.\""
    ),
    new WritingQuestion(
        "Which of the following is an adjective from the sentence below?",
        "Jonas threw the red ball to Sophia, who excitedly caught it and threw it back.",
        "",
        Answers([
            ["threw", false],
            ["excitedly", false],
            ["it", false],
            ["red", true]
        ]),
        "An adjective is a word that describes or modifies a noun. The word \"red\" describes the noun \"ball.\""
    ),
    new WritingQuestion(
        "The teacher has asked students to write a persuasive paragraph about whether a democracy or a monarchy is a better form of government. Which of the following is the most appropriate sentence to begin the paragraph?",
        "",
        "",
        Answers([
            ["Democracies and monarchies are both great forms of government because...", false],
            ["A monarchy is a form of government that...", false],
            ["A democracy is a better form of government than a monarchy because...", true],
            ["America is a democracy, and...", false]
        ]),
        "The correct answer is the only introduction that sets up a persuasive argument, determining one of the forms of government as superior and preparing to explain it."
    ),
    new WritingQuestion(
        "What is the subject of the sentence below?",
        "Just as everyone thought the game was over, the home team scored 10 unanswered points and came back to win the contest.",
        "",
        Answers([
            ["thought", false],
            ["game", false],
            ["home team", true],
            ["contest", false]
        ]),
        "The subject is the person, place, or thing that is doing the action in the sentence. In this case, the \"home team\" is the subject of the sentence and is followed by the action \"scored.\""
    ),
    new WritingQuestion(
        "In the sentence below, the bolded word is functioning as a(n)",
        "After having to fast prior to their blood test, the |hungry| students ran to the cafeteria to order their lunches and eat as soon as they left the testing center.",
        "",
        Answers([
            ["noun", false],
            ["verb", false],
            ["adverb", false],
            ["adjective", true]
        ]),
        "An adjective\'s purpose is to describe a noun. The word \"hungry\" modifies the noun \"students,\" explaining what kind of students are running to the cafeteria. Therefore, \"hungry\" is an adjective."
    ),
    // Use the following scenario
    // sentence
    // essay
    // question
    new WritingQuestion(
        "The student asks you to help them with revisions. Which of the changes below would improve the clarity of sentence one?",
        "The teacher has asked students to read over the paragraphs they just wrote and revise them before handing them in. Here is what one student wrote.",
        "The most important part of the war was D-Day, when allies went to France and fought Germany. This was a very deadly battle, but it helped the allied side fight back and begin to push Germans back to Germany. This was the turning point in the war. America went on to win World War II because of this.",
        Answers([
            ["D-Day was the most important part of the war because allies fought Germany.", false],
            ["The most important part of the war was when allies went to fight Germany in France. D-Day was important.", false],
            ["The most important part of World War II was D-Day, when allies went to France and fought Germany.", true],
            ["France fought Germany with the help of the allies on D-Day, which was the most important event in the war.", false]
        ]),
        "The sentence would be clearer if it clearly identified what war the writer is talking about. This is especially important in the first sentence of the paragraph. The other answer options are overly wordy and confusing, and none of them mention World War II by name.",
        "Use the scenario below to answer question 26"
    ),
    new WritingQuestion(
        "What suggestion would you make to the student to make their letter more appropriate for the audience?",
        "The teacher has asked students to write a letter to their congressman asking for a law to be changed. Here is what one student wrote.",
        "Hey Congressman McCartner, What\'s up? I was hoping you could vote to change the gun laws. I think guns are bad and we need more gun control. Please vote for more gun control.\n\nThanks,\nSantos",
        Answers([
            ["be specific about what bill they want the congressman to vote on", false],
            ["avoid using personal pronouns", false],
            ["explain their opinion more explicitly", false],
            ["use formal language in the beginning of the letter", true]
        ]),
        "The opening of the letter is not appropriate for a letter to a congressman. The student should change \"Hey\" and \"What\'s up?\" to diction that is more formal and respectful. This tone would work if the student was writing to a friend, but not if the student is writing to a person in a position of authority that they don\'t know.",
        "Use the scenario to answer questions 27-28"
    ),
    new WritingQuestion(
        "The teacher asks the student to write more in their letter. Which of the following is the best question to ask to help the student draft more of their letter and revise what they have already written?",
        "The teacher has asked students to write a letter to their congressman asking for a law to be changed. Here is what one student wrote.",
        "Hey Congressman McCartner,\n\nWhat\'s up? I was hoping you could vote to change the gun laws. I think guns are bad and we need more gun control. Please vote for more gun control.\n\nThanks,\nSantos",
        Answers([
            ["Why are you writing to the congressman?", false],
            ["Who is your audience?", false],
            ["What is another law besides gun control that you can ask the congressman about?", false],
            ["What is a specific bill that the congressman can vote on to provide more gun control?", true]
        ]),
        "The last answer choice is correct because it is the only question that will lead to the student writing more about their current topic."
    ),
    new WritingQuestion(
        "Paula is learning when it is appropriate to use a thesaurus to find synonyms for frequently used words. Which word should Paula look up in her thesaurus?",
        "In her essay, Paula is informing the audience about the Bauhaus State School in Germany and its influences.",
        "(1) One of the most famous art centers evolved between 1919 and 1933 in Germany and it was called Bauhaus. (2) It was famous for bringing in some of the top teachers around the world and focusing on different trades, including metalworking, pottery, sculpting, painting, wood shopping, and more. (3) Some of the most famous teachers from there included Paul Klee, Wassily Kandinsky, Anni Albers, and the head of the school, Walter Gropius. (4) The school was thriving for 15 years and was producing some of the world\'s greatest artists. (5) The school was shut down when the famous Nazi regime took over in Germany and outlawed it in 1933.",
        Answers([
            ["famous", true],
            ["including", false],
            ["art", false],
            ["over", false]
        ]),
        "The word \"famous\" is used four times in this short excerpt. While \"including\" and \"art\" are used twice, they are used in different contexts and not used nearly as much as the word \"famous.\" Words like \"renowned\" or \"prominent\" would be good synonyms that a thesaurus would advise, and it can help her realize that \"famous\" might not be the word she was looking for to describe the Nazi party. \"Infamous\" would fit better.",
        "Use the scenario below to answer questions 29-30"
    ),
    new WritingQuestion(
        "Paula wants to use a transition that sets up sentence 5. What would be a good transition word or phrase to use?",
        "In her essay, Paula is informing the audience about the Bauhaus State School in Germany and its influences.",
        "(1) One of the most famous art centers evolved between 1919 and 1933 in Germany and it was called Bauhaus. (2) It was famous for bringing in some of the top teachers around the world and focusing on different trades, including metalworking, pottery, sculpting, painting, wood shopping, and more. (3) Some of the most famous teachers from there included Paul Klee, Wassily Kandinsky, Anni Albers, and the head of the school, Walter Gropius. (4) The school was thriving for 15 years and was producing some of the world\'s greatest artists. (5) The school was shut down when the famous Nazi regime took over in Germany and outlawed it in 1933.",
        Answers([
            ["Furthermore,", false],
            ["However,", true],
            ["First,", false],
            ["On top of that,", false]
        ]),
        "The paragraph discusses the positives of the Bauhaus Center and how it was used to educate many different artists. The final sentence goes in a different direction, talking about its demise. Therefore, you would want to use a transition like \"however\" that switches the direction of the paragraph."
    )
]