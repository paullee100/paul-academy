export class Question {
    #question
    #answers
    #explanation
    #image

    constructor(question: string, answers: {text: string, correct: boolean}[], explanation: string, image: string | undefined) {
        this.#question = question
        this.#answers = answers
        this.#explanation = explanation
        this.#image = image
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

    getImage() {
        return this.#image
    }
}

export class WritingQuestion extends Question {

    #sentence

    constructor(question: string, sentence: string, answers: {text: string, correct: boolean}[], explanation: string, image: string | undefined) {
        super(question, answers, explanation, image)
        this.#sentence = sentence
    }

    getSentence() {
        return this.#sentence
    }
}