import { Question } from '@/libs/Questions'
import styles from './section.module.css'
import React from 'react'
import Image from 'next/image'

interface Props {
    score: number
    currentQuestionNum: number
    category: Question[]
    isUserFinishedQuiz: boolean
    answerChosen: any[]
    updateAnswerChosen: Function
}

const MathSection = (QUIZSECTION: Props) => {

    const clickAnswer = (index: number) => {
        const updateArray = [...QUIZSECTION.answerChosen];
        updateArray[QUIZSECTION.currentQuestionNum] = index;
        QUIZSECTION.updateAnswerChosen(updateArray);
    }

    return (
        <div>
            {QUIZSECTION.currentQuestionNum < QUIZSECTION.category.length && QUIZSECTION.category[QUIZSECTION.currentQuestionNum].getImage() ?
            <Image src={QUIZSECTION.category[QUIZSECTION.currentQuestionNum].getImage()!} alt="" width={300} height={200}/>
            :
            <div></div>
            }

            {/* <h2>
                {!QUIZSECTION.isUserFinishedQuiz ? 
                QUIZSECTION.category[QUIZSECTION.currentQuestionNum].getQuestion() : 
                `You scored ${QUIZSECTION.score} out of ${QUIZSECTION.category.length} - ${Math.round(QUIZSECTION.score/QUIZSECTION.category.length*100)}%`}
            </h2> */}

            {QUIZSECTION.currentQuestionNum < QUIZSECTION.category.length ? 
                <div className={styles.selectionAnswer}>
                {QUIZSECTION.category[QUIZSECTION.currentQuestionNum].getAnswers().map((answer, index) => (
                    answer.text[0] === '/' ?
                        <div key={index} className={QUIZSECTION.isUserFinishedQuiz ? styles.none : QUIZSECTION.answerChosen[index] === index ? styles.correct : styles.incorrect}>
                            <input 
                                disabled={QUIZSECTION.isUserFinishedQuiz} 
                                name="selection" 
                                type="radio" 
                                id={`selection${index}`} 
                                checked={QUIZSECTION.answerChosen[QUIZSECTION.currentQuestionNum] === index} 
                                onChange={_ => clickAnswer(index)} />
                            
                            <label htmlFor={`selection${index}`}>
                                <Image src={answer.text} alt="" width={200} height={100} />
                            </label>
                        </div>
                    :
                    <div 
                        key={index} 
                        className={!QUIZSECTION.isUserFinishedQuiz ? styles.none : 
                                    answer.correct ? styles.correct : 
                                    QUIZSECTION.answerChosen[QUIZSECTION.currentQuestionNum] === index ? styles.incorrect : 
                                    styles.none}>

                        <input 
                            disabled={QUIZSECTION.isUserFinishedQuiz} 
                            name="selection" 
                            type="radio" 
                            id={`selection${index}`} 
                            checked={QUIZSECTION.answerChosen[QUIZSECTION.currentQuestionNum] === index} 
                            onChange={_ => clickAnswer(index)} />
                        
                        <label 
                            htmlFor={`selection${index}`}>
                                {answer.text}
                        </label>
                    </div>
                ))}
                </div> : 
                <div>
                    You finished!
                </div>}

            <div className={styles.explanation}>Explanation</div>
        </div>
    )
}

export default MathSection