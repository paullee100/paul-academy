"use client"

import { Question, WritingQuestion } from '@/libs/Questions'
import React, { Fragment } from 'react'
import styles from './writingSection.module.css'

interface Props {
    score: number
    currentQuestionNum: number
    category: WritingQuestion[]
    isUserFinishedQuiz: boolean
    answerChosen: any[]
    updateAnswerChosen: Function
}

const WritingSection = (QUIZSECTION: Props) => {

    const clickAnswer = (index: number) => {
        const updateArray = [...QUIZSECTION.answerChosen]
        updateArray[QUIZSECTION.currentQuestionNum] = index
        QUIZSECTION.updateAnswerChosen(updateArray)
    }

    const isUnderlinedQuestion = !QUIZSECTION.isUserFinishedQuiz && QUIZSECTION.category[QUIZSECTION.currentQuestionNum].getSentence().includes("<")
    
    const regex = /(<[^>]+>)/g
    const match = QUIZSECTION.category[QUIZSECTION.currentQuestionNum] !== undefined ? [...QUIZSECTION.category[QUIZSECTION.currentQuestionNum].getSentence().split(regex)] : []

    const alphabet = ["A", "B", "C", "D"]
    let alphabetIndex = 0

    return (
        <div>

            <div>
                {!QUIZSECTION.isUserFinishedQuiz ?
                    (isUnderlinedQuestion ? 
                        <div>
                            {match.map((val, index) => (
                                <Fragment key={index}>
                                    {val.includes("<") ? 
                                    <span className={styles.underline}>
                                        {val.replace(/[\<\>]/g, "")}
                                        <span className={styles.label}>{alphabet[alphabetIndex++]}</span>
                                    </span> : 
                                    val
                                    }
                                </Fragment>
                            ))}
                        </div> :
                    QUIZSECTION.category[QUIZSECTION.currentQuestionNum].getSentence()) :
                <div>
                {QUIZSECTION.currentQuestionNum < QUIZSECTION.category.length ?
                    (isUnderlinedQuestion ? 
                        <div>
                            {match.map((val, index) => (
                                <Fragment key={index}>
                                    {val.includes("<") ? 
                                    <span className={styles.underline}>
                                        {val.replace(/[\<\>]/g, "")}
                                        <span className={styles.label}>{alphabet[alphabetIndex++]}</span>
                                    </span> : 
                                    val
                                    }
                                </Fragment>
                            ))}
                        </div>:
                        QUIZSECTION.category[QUIZSECTION.currentQuestionNum].getSentence()) : 
                        <></>
                }
                </div>}
            </div>

            <br />

            {QUIZSECTION.currentQuestionNum < QUIZSECTION.category.length ?
            <div className={styles.selectionAnswer}>
                {QUIZSECTION.category[QUIZSECTION.currentQuestionNum].getAnswers().map((answer, index) => (
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
            </div>
            }

            {QUIZSECTION.isUserFinishedQuiz && QUIZSECTION.currentQuestionNum < QUIZSECTION.category.length ? 
                <div className={styles.explanation}>{QUIZSECTION.category[QUIZSECTION.currentQuestionNum].getExplanation()}</div> : 
                <div></div>}
        </div>
    )
}

export default WritingSection