import React from 'react'
import styles from "./quizSection.module.css";
import { MathQuestion, Question, WritingQuestion } from '@/libs/Questions';
import Image from "next/image";
import MathSection from './subjectPage/mathSection';
import WritingSection from './subjectPage/writingSection';

interface Props {
    score: number;
    currentQuestionNum: number;
    setCurrentQuestionNum: Function;
    category: Question[];
    isUserFinishedQuiz: boolean;
    answerChosen: any[];
    updateAnswerChosen: Function
}

const QuizSection = (QUIZSECTION: Props) => {

    const subjectType = QUIZSECTION.category[0] instanceof WritingQuestion

    return (
        <div>
            <div className={styles.header}>
                <h1>Quiz</h1>
                <h2>{`${(QUIZSECTION.currentQuestionNum+1)}/${QUIZSECTION.category.length}`}</h2>
            </div>

            <div>
                {QUIZSECTION.category.map((val, index) => (
                    <button key={`questionBtn${index+1}`} onClick={_ => QUIZSECTION.setCurrentQuestionNum(index)}>{index+1}</button>
                ))}
            </div>

            <div className={styles.quiz}>
                <h3>
                    {!QUIZSECTION.isUserFinishedQuiz ? 
                    QUIZSECTION.category[QUIZSECTION.currentQuestionNum].getQuestion() : 
                    QUIZSECTION.currentQuestionNum < QUIZSECTION.category.length ?
                    QUIZSECTION.category[QUIZSECTION.currentQuestionNum].getQuestion() :
                    `You scored ${QUIZSECTION.score} out of ${QUIZSECTION.category.length} - ${Math.round(QUIZSECTION.score/QUIZSECTION.category.length*100)}%`}
                </h3>
                {
                    subjectType ? 
                    <WritingSection score={QUIZSECTION.score} currentQuestionNum={QUIZSECTION.currentQuestionNum} category={QUIZSECTION.category as WritingQuestion[]} isUserFinishedQuiz={QUIZSECTION.isUserFinishedQuiz} answerChosen={QUIZSECTION.answerChosen} updateAnswerChosen={QUIZSECTION.updateAnswerChosen} /> :
                    <MathSection score={QUIZSECTION.score} currentQuestionNum={QUIZSECTION.currentQuestionNum} category={QUIZSECTION.category as MathQuestion[]} isUserFinishedQuiz={QUIZSECTION.isUserFinishedQuiz} answerChosen={QUIZSECTION.answerChosen} updateAnswerChosen={QUIZSECTION.updateAnswerChosen} />
                }

            </div>
        </div>
    )
}

export default QuizSection