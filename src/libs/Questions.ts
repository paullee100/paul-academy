export class Question {
    question!: string;
    answers!: { text: string, correct: boolean }[];
    explanation!: string;
    image!: string | undefined;

    constructor(question: string, answers: {text: string, correct: boolean}[], explanation: string, image: string | undefined) {
        Object.assign(this, {question, answers, explanation, image});
    }
}