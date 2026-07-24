import { MathQuestion } from '@/libs/Questions'
import styles from '../section.module.css'
import React from 'react'
import Image from 'next/image'

interface Props {
    score: number
    currentQuestionNum: number
    category: MathQuestion[]
    isUserFinishedQuiz: boolean
    answerChosen: any[]
    updateAnswerChosen: Function
}

const MathSection = (QUIZSECTION: Props) => {

    const {score, currentQuestionNum, category, isUserFinishedQuiz, 
        answerChosen, updateAnswerChosen } = QUIZSECTION

    const isInQuizPortion = currentQuestionNum < category.length

    const clickAnswer = (index: number) => {
        const updateArray = [...answerChosen];
        updateArray[currentQuestionNum] = index;
        updateAnswerChosen(updateArray);
    }

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

    const createAnswers = (answer: { text: string, correct: boolean }, index: number) => {

        const imageOrText = answer.text[0] === '/' ? 
            `${<Image src={answer.text} alt="" width={200} height={100} />}` :
            `${answer.text}`

        return (
           <div key={index} className={highlightAnswers(answer, index)}>
                    <input 
                    disabled={isUserFinishedQuiz} 
                    name="selection" 
                    type="radio" 
                    id={`selection${index}`} 
                    checked={answerChosen[currentQuestionNum] === index} 
                    onChange={_ => clickAnswer(index)}
                    className={styles.answerInput} />
                            
                <label htmlFor={`selection${index}`}>
                    {imageOrText}
                </label>
            </div>
        )
    }

    return (
        <div className={styles.quiz}>
            {isInQuizPortion && category[currentQuestionNum].getImage() ?
            <Image src={category[currentQuestionNum].getImage()!} alt="" width={300} height={200}/>
            :
            <div></div>
            }

            {/* QUESTIONS/FINISHED QUIZ */}
            <h2>
                {isInQuizPortion ? 
                category[currentQuestionNum].getQuestion() : 
                `You scored ${score} out of ${category.length} - ${Math.round(score/category.length*100)}%`}
            </h2>

            {/* MULTIPLE CHOICE */}
            {isInQuizPortion ? 
                <div className={styles.selectionAnswer}>
                {category[currentQuestionNum].getAnswers().map((answer, index) => (
                    createAnswers(answer, index)
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