"use client"

import React from 'react'
import styles from "./quizSection.module.css";
import { Question } from '@/libs/Questions';
import Image from "next/image";

interface Props {
    score: number;
    questionNum: number;
    category: Question[];
    quiz: boolean;
    answerChosen: any[];
    updateAnswerChosen: Function
}

const QuizSection = ({ score, questionNum, category, quiz, answerChosen, updateAnswerChosen }: Props) => {
  const clickAnswer = (index: number) => {
    const updateArray = [...answerChosen];
    updateArray[questionNum] = index;
    updateAnswerChosen(updateArray);
    
  }

  return (
    <div>
        <div className={styles.header}>
            <h1>Quiz</h1>
            <h2>{`${(questionNum+1)}/${category.length}`}</h2>
        </div>

        <div className={styles.quiz}>
            {questionNum < category.length && category[questionNum].image ?
            <Image src={category[questionNum].image} alt="" width={300} height={200}/>
            :
            <div></div>
            }

            <h2>{questionNum < category.length ? category[questionNum].question : `You scored ${score} out of ${category.length} - ${Math.round(score/category.length*100)}%`}</h2>
              
            {questionNum < category.length ? 
            <div className={styles.selectionAnswer}>
            {category[questionNum].answers.map((answer, index) => (
                answer.text[0] === '/' ?
                <div key={index}>
                    <input disabled={quiz} name="selection" type="radio" id={`selection${index}`} checked={answerChosen[questionNum] === index} onChange={_ => clickAnswer(index)} />
                    <label htmlFor={`selection${index}`}><Image src={answer.text} alt="" width={200} height={100}/></label>
                </div>
                :
                <div key={index}>
                    <input disabled={quiz} name="selection" type="radio" id={`selection${index}`} checked={answerChosen[questionNum] === index} onChange={_ => clickAnswer(index)} />
                    <label htmlFor={`selection${index}`}>{answer.text}</label>
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