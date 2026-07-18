"use client"

import React from 'react'
import styles from "./quizSection.module.css";
import { Question } from '@/libs/Questions';
import Image from "next/image";

interface Props {
    score: number;
    currentQuestionNum: number;
    category: Question[];
    isUserFinishedQuiz: boolean;
    answerChosen: any[];
    updateAnswerChosen: Function
}

const QuizSection = ({ score, currentQuestionNum, category, isUserFinishedQuiz, answerChosen, updateAnswerChosen }: Props) => {
  
    const clickAnswer = (index: number) => {
        const updateArray = [...answerChosen];
        updateArray[currentQuestionNum] = index;
        updateAnswerChosen(updateArray);
    
    }

  return (
    <div>
        <div className={styles.header}>
            <h1>Quiz</h1>
            <h2>{`${(currentQuestionNum+1)}/${category.length}`}</h2>
        </div>

        <div className={styles.quiz}>
            {currentQuestionNum < category.length && category[currentQuestionNum].image ?
            <Image src={category[currentQuestionNum].image} alt="" width={300} height={200}/>
            :
            <div></div>
            }

            <h2>
                {!isUserFinishedQuiz ? 
                category[currentQuestionNum].question : 
                `You scored ${score} out of ${category.length} - ${Math.round(score/category.length*100)}%`}
            </h2>

            {currentQuestionNum < category.length ? 
            <div className={styles.selectionAnswer}>
            {category[currentQuestionNum].answers.map((answer, index) => (
                answer.text[0] === '/' ?
                <div key={index} className={isUserFinishedQuiz ? styles.none : answerChosen[index] === index ? styles.correct : styles.incorrect}>
                    <input 
                        disabled={isUserFinishedQuiz} 
                        name="selection" 
                        type="radio" 
                        id={`selection${index}`} 
                        checked={answerChosen[currentQuestionNum] === index} 
                        onChange={_ => clickAnswer(index)} />
                    
                    <label htmlFor={`selection${index}`}>
                        <Image src={answer.text} alt="" width={200} height={100}/>
                    </label>
                </div>
                :
                <div 
                    key={index} 
                    className={!isUserFinishedQuiz ? styles.none : 
                                answer.correct ? styles.correct : 
                                answerChosen[currentQuestionNum] === index ? styles.incorrect : 
                                styles.none}>
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
            </div>}

            <div className={styles.explanation}>Explanation</div>
              
        </div>
    </div>
  )
}

export default QuizSection