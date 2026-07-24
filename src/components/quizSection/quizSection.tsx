import React, { useState } from 'react'
import styles from "./quizSection.module.css";
import { MathQuestion, Question, ReadingQuestion, WritingQuestion } from '@/libs/Questions';
import MathSection from './subjectPage/math/mathSection';
import WritingSection from './subjectPage/writing/writingSection';
import ReadingSection from './subjectPage/reading/readingSection';
import TransitionQuizPage from './transitionQuizPage/transitionQuizPage';
import CountDownTimer from './timer/countdowntimer';

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
    
    const START_TIME = 50 * 60
    const [timeLeft, setTimeLeft] = useState(START_TIME)
    
    const subjectType = () => {

        const className = QUIZSECTION.category[0].constructor.name.toLowerCase()
        const subjectName = className.substring(0, className.indexOf('q'))

        if (subjectName === 'writing') {
            return (
                <div>
                    <WritingSection score={QUIZSECTION.score} currentQuestionNum={QUIZSECTION.currentQuestionNum} category={QUIZSECTION.category as WritingQuestion[]} isUserFinishedQuiz={QUIZSECTION.isUserFinishedQuiz} answerChosen={QUIZSECTION.answerChosen} updateAnswerChosen={QUIZSECTION.updateAnswerChosen} />,
                </div>
            )
        } else if (subjectName === 'reading') {
            return (
                <div>
                    <ReadingSection score={QUIZSECTION.score} currentQuestionNum={QUIZSECTION.currentQuestionNum} category={QUIZSECTION.category as ReadingQuestion[]} isUserFinishedQuiz={QUIZSECTION.isUserFinishedQuiz} answerChosen={QUIZSECTION.answerChosen} updateAnswerChosen={QUIZSECTION.updateAnswerChosen} />,
                </div>
            )
        } else if (subjectName === 'math') {
            return (
                <div>
                    <MathSection score={QUIZSECTION.score} currentQuestionNum={QUIZSECTION.currentQuestionNum} category={QUIZSECTION.category as MathQuestion[]} isUserFinishedQuiz={QUIZSECTION.isUserFinishedQuiz} answerChosen={QUIZSECTION.answerChosen} updateAnswerChosen={QUIZSECTION.updateAnswerChosen}/>
                </div>
            )
        }

        return (
            <div>
                <div>
                    {className}
                </div>
                <div>
                    {subjectName}
                </div>
                <div>
                    "ERROR"
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className={styles.header}>
                <h1>
                    <div>QUIZ</div>
                    <CountDownTimer startTime={timeLeft} />
                </h1>
                <h2>{`${(QUIZSECTION.currentQuestionNum+1)}/${QUIZSECTION.category.length}`}</h2>
            </div>

            <div>
                {QUIZSECTION.category.map((_, index) => (
                    <button className={styles.questionBtn} key={`questionBtn${index+1}`} onClick={_ => QUIZSECTION.setCurrentQuestionNum(index)}>{index+1}</button>
                ))}
            </div>

            <div className={styles.quiz}>
                {subjectType()}
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