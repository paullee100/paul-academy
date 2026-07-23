import React from 'react'
import styles from "./quizSection.module.css";
import { MathQuestion, Question, ReadingQuestion, WritingQuestion } from '@/libs/Questions';
import Image from "next/image";
import MathSection from './subjectPage/math/mathSection';
import WritingSection from './subjectPage/writing/writingSection';
import ReadingSection from './subjectPage/reading/readingSection';
import TransitionQuizPage from './transitionQuizPage/transitionQuizPage';

interface Props {
    score: number;
    currentQuestionNum: number;
    setCurrentQuestionNum: Function;
    category: Question[];
    isUserFinishedQuiz: boolean;
    answerChosen: any[];
    updateAnswerChosen: Function
    isOnInstructionPage: boolean
    setIsUserFinishedQuiz: Function
    setScore: Function

}

const QuizSection = (QUIZSECTION: Props) => {

    const className = QUIZSECTION.category[0].constructor.name
    const subjectType = className.substring(0, className.indexOf('Q'))

    const subject = {
        Writing: <WritingSection score={QUIZSECTION.score} currentQuestionNum={QUIZSECTION.currentQuestionNum} category={QUIZSECTION.category as WritingQuestion[]} isUserFinishedQuiz={QUIZSECTION.isUserFinishedQuiz} answerChosen={QUIZSECTION.answerChosen} updateAnswerChosen={QUIZSECTION.updateAnswerChosen} />,
        Reading: <ReadingSection score={QUIZSECTION.score} currentQuestionNum={QUIZSECTION.currentQuestionNum} category={QUIZSECTION.category as ReadingQuestion[]} isUserFinishedQuiz={QUIZSECTION.isUserFinishedQuiz} answerChosen={QUIZSECTION.answerChosen} updateAnswerChosen={QUIZSECTION.updateAnswerChosen} />,
        Math: <MathSection score={QUIZSECTION.score} currentQuestionNum={QUIZSECTION.currentQuestionNum} category={QUIZSECTION.category as MathQuestion[]} isUserFinishedQuiz={QUIZSECTION.isUserFinishedQuiz} answerChosen={QUIZSECTION.answerChosen} updateAnswerChosen={QUIZSECTION.updateAnswerChosen}/>
    }

    return (
        <div>
            <div className={styles.header}>
                <h1>QUIZ</h1>
                <h2>{`${(QUIZSECTION.currentQuestionNum+1)}/${QUIZSECTION.category.length}`}</h2>
            </div>

            <div>
                {QUIZSECTION.category.map((_, index) => (
                    <button className={styles.questionBtn} key={`questionBtn${index+1}`} onClick={_ => QUIZSECTION.setCurrentQuestionNum(index)}>{index+1}</button>
                ))}
            </div>

            <div className={styles.quiz}>
                {subject[subjectType as keyof typeof subject]}
            </div>

            {!QUIZSECTION.isOnInstructionPage && 
                <div className={styles.transitionButton}>
                    <TransitionQuizPage 
                    score={QUIZSECTION.score} 
                    currentQuestionNum={QUIZSECTION.currentQuestionNum} 
                    category={QUIZSECTION.category} 
                    isUserFinishedQuiz={QUIZSECTION.isUserFinishedQuiz} 
                    answerChosen={QUIZSECTION.answerChosen} 
                    setCurrentQuestionNum={QUIZSECTION.setCurrentQuestionNum} 
                    setIsUserFinishedQuiz={QUIZSECTION.setIsUserFinishedQuiz} 
                    setScore={QUIZSECTION.setScore} />
            </div>}
        </div>
    )
}

export default QuizSection