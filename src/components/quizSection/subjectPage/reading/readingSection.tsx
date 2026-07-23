import { ReadingQuestion } from '@/libs/Questions'
import React from 'react'
import styles from './readingSection.module.css'
import Image from 'next/image'

interface Props {
    score: number
    currentQuestionNum: number
    category: ReadingQuestion[]
    isUserFinishedQuiz: boolean
    answerChosen: any[]
    updateAnswerChosen: Function
}

const ReadingSection = (QUIZSECTION: Props) => {

    const isQuizPortion = QUIZSECTION.currentQuestionNum < QUIZSECTION.category.length
    const category = QUIZSECTION.category
    const currentQuestionNum = QUIZSECTION.currentQuestionNum
    const isUserFinishedQuiz = QUIZSECTION.isUserFinishedQuiz
    const answerChosen = QUIZSECTION.answerChosen

    const clickAnswer = (index: number) => {
        const updateArray = [...answerChosen]

        for (let i = 0; i < updateArray.length; i++)
            updateArray[i] = index
        // updateArray[currentQuestionNum] = index
        QUIZSECTION.updateAnswerChosen(updateArray)
    }

    return (
        <div>
            <div>
                {category[currentQuestionNum] ?
                    <div>
                        <div>
                            {category[currentQuestionNum].getInstruction() && category[currentQuestionNum].getInstruction()}
                        </div>
        
                        {category[currentQuestionNum].getEssay() && 
                            <div className={styles.essay}>
                                {category[currentQuestionNum].getEssay()}
                            </div>}
        
                        <div>
                            {category[currentQuestionNum].getImage() && <Image src={category[currentQuestionNum].getImage()} alt="" width={300} height={200} />}
                        </div>
                    </div>

                : <div></div>}

                {/* QUESTIONS/FINISHED QUIZ */}
                <h3>
                    {isQuizPortion ? 
                    QUIZSECTION.category[QUIZSECTION.currentQuestionNum].getQuestion() : 
                    `You scored ${QUIZSECTION.score} out of ${QUIZSECTION.category.length} - ${Math.round(QUIZSECTION.score/QUIZSECTION.category.length*100)}%`}
                </h3>

                {category[currentQuestionNum] && 
                 category[currentQuestionNum].getPrompt() && 
                    <div className={styles.prompt}>
                        {category[currentQuestionNum].getPrompt()}
                    </div>}

                {isQuizPortion ? 
                    category[currentQuestionNum].getAnswers().map((answer, index) => (
                    <div key={`answer${index}`} className={!isUserFinishedQuiz ? styles.none : answer.correct ? styles.correct : answerChosen[currentQuestionNum] === index ? styles.incorrect : styles.none}>
                        <input disabled={isUserFinishedQuiz} name="selection" type="radio" id={`selection${index}`} checked={answerChosen[currentQuestionNum] === index} onChange={_ => clickAnswer(index)} />
                        <label htmlFor={`selection${index}`}>{answer.text}</label>
                    </div>
                )) : 
                <div>
                    You finished!
                </div>}
            </div>
        </div>
    )
}

export default ReadingSection