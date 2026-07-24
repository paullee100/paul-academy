export class Question {
    #type
    #question
    #answers
    #explanation

    constructor(type: string, question: string, answers: {text: string, correct: boolean}[], explanation: string) {
        this.#type = type
        this.#question = question
        this.#answers = answers
        this.#explanation = explanation
    }

    getType() {
        return this.#type
    }

    getQuestion() {
        return this.#question
    }

    getAnswers() {
        return this.#answers
    }

    getExplanation() {
        return this.#explanation
    }

    getClass() {
        return this.toString()
    }
}

export class WritingQuestion extends Question {

    #sentence
    #essay
    #instruction

    constructor(question: string, sentence: string, essay: string, answers: {text: string, correct: boolean}[], explanation: string, instruction: string = "") {
        
        super("writing", question, answers, explanation)
        this.#sentence = sentence
        this.#essay = essay
        this.#instruction = instruction
    }

    getSentence() {
        return this.#sentence
    }

    getEssay() {
        return this.#essay
    }

    getInstruction() {
        return this.#instruction
    }
}

export class ReadingQuestion extends Question {

    #image
    #essay
    #prompt
    #instruction

    constructor(question: string, answers: {text: string, correct: boolean}[], explanation: string, essay: string, prompt: string, image: string, instruction: string = "") {
        super("reading", question, answers, explanation)
        this.#image = image
        this.#essay = essay
        this.#prompt = prompt
        this.#instruction = instruction
    }

    getImage() {
        return this.#image
    }

    getEssay() {
        return this.#essay
    }

    getPrompt() {
        return this.#prompt
    }

    getInstruction() {
        return this.#instruction
    }
}

export class MathQuestion extends Question {

    #image

    constructor(question: string, answers: {text: string, correct: boolean}[], explanation: string, image: string = "") {
        super("math", question, answers, explanation)
        this.#image = image
    }

    getImage() {
        return this.#image
    }
}

/**
 * Creates an array consisting of a string text and 
 * boolean correct if the text is correct as an answer 
 * to the question
 * 
 * @param answerContent [[text1, correct1], [text2, correct2], [text3, correct3], [text4, correct4], ..., [textN, correctN]]
 * @returns 
 */
export const Answers = (answerContent: (string | boolean)[][]) => {

    const answers = []

    for (let i = 0; i < answerContent.length; i++) {
        const answer = {
            text: answerContent[i][0] as string, correct: answerContent[i][1] as boolean
        }
        answers.push(answer)
    }

    return answers
}