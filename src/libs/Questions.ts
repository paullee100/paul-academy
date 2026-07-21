export class Question {
    #question
    #answers
    #explanation

    constructor(question: string, answers: {text: string, correct: boolean}[], explanation: string) {
        this.#question = question
        this.#answers = answers
        this.#explanation = explanation
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
}

export class WritingQuestion extends Question {

    #sentence

    constructor(question: string, sentence: string, answers: {text: string, correct: boolean}[], explanation: string) {
        super(question, answers, explanation)
        this.#sentence = sentence
    }

    getSentence() {
        return this.#sentence
    }
}

export class MathQuestion extends Question {

    #image

    constructor(question: string, answers: {text: string, correct: boolean}[], explanation: string, image: string | undefined) {
        super(question, answers, explanation)
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