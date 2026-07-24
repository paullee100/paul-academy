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

    const { score, currentQuestionNum, category, isUserFinishedQuiz, 
            answerChosen, updateAnswerChosen } = QUIZSECTION

    const isInQuizPortion = currentQuestionNum < category.length

    const clickAnswer = (index: number) => {
        const updateArray = [...answerChosen]
        updateArray[currentQuestionNum] = index
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
                    {isInQuizPortion ? 
                    category[currentQuestionNum].getQuestion() : 
                    `You scored ${score} out of ${category.length} - ${Math.round(score/category.length*100)}%`}
                </h3>

                {category[currentQuestionNum] && 
                 category[currentQuestionNum].getPrompt() && 
                    <div className={styles.prompt}>
                        {category[currentQuestionNum].getPrompt()}
                    </div>}

                {isInQuizPortion ? 
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