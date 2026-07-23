"use client"

import { Question, WritingQuestion } from '@/libs/Questions'
import React, { Fragment } from 'react'
import styles from './writingSection.module.css'
import Sentence from './sentence'
import ExcerptPrompt from './excerptPrompt'

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
    const match: string[] = QUIZSECTION.category[QUIZSECTION.currentQuestionNum] !== undefined ? [...QUIZSECTION.category[QUIZSECTION.currentQuestionNum].getSentence().split(regex)] : []

    return (
        <div>

            {!QUIZSECTION.isUserFinishedQuiz && QUIZSECTION.category[QUIZSECTION.currentQuestionNum].getEssay() ? 
                <ExcerptPrompt category={QUIZSECTION.category[QUIZSECTION.currentQuestionNum]} />
                :
            
            <div>
                <h3>
                    {!QUIZSECTION.isUserFinishedQuiz ? 
                    QUIZSECTION.category[QUIZSECTION.currentQuestionNum].getQuestion() : 
                    QUIZSECTION.currentQuestionNum < QUIZSECTION.category.length ?
                    QUIZSECTION.category[QUIZSECTION.currentQuestionNum].getQuestion() :
                    `You scored ${QUIZSECTION.score} out of ${QUIZSECTION.category.length} - ${Math.round(QUIZSECTION.score/QUIZSECTION.category.length*100)}%`}
                </h3>

                {!QUIZSECTION.isUserFinishedQuiz ?
                    (isUnderlinedQuestion ? 
                        <Sentence match={match} /> :
                    QUIZSECTION.category[QUIZSECTION.currentQuestionNum].getSentence()
                    ) :
                
                <div>
                {QUIZSECTION.currentQuestionNum < QUIZSECTION.category.length ?
                    (isUnderlinedQuestion ? 
                        <Sentence match={match} />
                        :
                        QUIZSECTION.category[QUIZSECTION.currentQuestionNum].getSentence()) : 
                        <></>
                }
                </div>}
            </div>}

            <br />

            {/* ANSWER OPTIONS */}
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