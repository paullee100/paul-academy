import { Question, WritingQuestion } from "../Questions"

const CHAR = {
    square_root: '\u221A',
    cube_root: ''    
}

/**
 * Wrapper for specified quizzes
 */
export type QUIZSECTION = {
    score: number
    currentQuestionNum: number
    category: Question[]
    /** Check if user is finished, true if finished and false otherwise */
    isUserFinished: boolean
    answerChosen: any[]
    updateAnswerChosen: Function
}

interface Categories {
    Definition: Question[],
    Exponent: Question[],
    Factor: Question[],
    GreatestCommonFactor: Question[],
    LeastCommonMultiple: Question[],
    PrimeFactor: Question[],
    Pemdas: Question[],
    // primeNumber: PrimeNumber,
    MathPractice: Question[],
    Writing: WritingQuestion[]
}

/**
 * 
 * 
 */
export type CATEGORYLIST = {
    categoryList: Categories
    setCurrentQuestionNum: Function
    setScore: Function
    updateCategory: Function
    updatePage: Function
    /**  */
    setIsUserFinishedQuiz: Function
    updateAnswerChosen: Function
}