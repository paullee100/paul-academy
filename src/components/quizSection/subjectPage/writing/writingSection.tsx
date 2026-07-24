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

    const { score, currentQuestionNum, category, isUserFinishedQuiz, 
        answerChosen, updateAnswerChosen } = QUIZSECTION

    const isInQuizPortion = currentQuestionNum < category.length

    const clickAnswer = (index: number) => {
        const updateArray = [...answerChosen]
        updateArray[currentQuestionNum] = index
        updateAnswerChosen(updateArray)
    }

    const isUnderlinedQuestion = !isUserFinishedQuiz && category[currentQuestionNum].getSentence().includes("<")
    
    const regex = /(<[^>]+>)/g
    const match: string[] = category[currentQuestionNum] !== undefined ? [...category[currentQuestionNum].getSentence().split(regex)] : []

    const highlightAnswers = (answer: { text: string, correct: boolean }, index: number) => {
        let styling = `${styles.none}`

        if (!isUserFinishedQuiz) {
            return styling
        }

        if (answer.correct) {
            styling = `${styles.correct}`
        } else if (answerChosen[currentQuestionNum] === index) {
            styling = `${styles.incorrect}`
        }

        return styling
    }

    return (
        <div>

            {!isUserFinishedQuiz && category[currentQuestionNum].getEssay() ? 
                <ExcerptPrompt category={category[currentQuestionNum]} />
                :
            
            <div>
                <h3>
                    {!isUserFinishedQuiz ? 
                    category[currentQuestionNum].getQuestion() : 
                    isInQuizPortion ?
                    category[currentQuestionNum].getQuestion() :
                    `You scored ${score} out of ${category.length} - ${Math.round(score/category.length*100)}%`}
                </h3>

                {!isUserFinishedQuiz ?
                    (isUnderlinedQuestion ? 
                        <Sentence match={match} /> :
                    category[currentQuestionNum].getSentence()
                    ) :
                
                <div>
                    {isInQuizPortion ?
                        (isUnderlinedQuestion ? 
                            <Sentence match={match} />
                            :
                            category[currentQuestionNum].getSentence()) : 
                            <></>
                    }
                </div>}
            </div>}

            <br />

            {/* ANSWER OPTIONS */}
            {currentQuestionNum < category.length ?
            <div className={styles.selectionAnswer}>
                {category[currentQuestionNum].getAnswers().map((answer, index) => (
                    <div 
                        key={index} 
                        className={highlightAnswers(answer, index)}>

                        <input 
                            disabled={isUserFinishedQuiz} 
                            name="selection" 
                            type="radio" 
                            id={`selection${index}`} 
                            checked={answerChosen[currentQuestionNum] === index} 
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

            {isUserFinishedQuiz && currentQuestionNum < category.length ? 
                <div className={styles.explanation}>{category[currentQuestionNum].getExplanation()}</div> : 
                <div></div>}
        </div>
    )
}

export default WritingSection