"use client"

import React, { useState } from 'react'
import styles from "./transitionQuizPage.module.css";
import { Question } from '@/libs/Questions';

interface Props {
    score: number;
    currentQuestionNum: number;
    category: Question[];
    isUserFinishedQuiz: boolean;
    answerChosen: any[];
    setCurrentQuestionNum: Function;
    setIsUserFinishedQuiz: Function;
    setScore: Function;
}

const TransitionQuizPage = ({ score, currentQuestionNum, category, isUserFinishedQuiz, answerChosen, setCurrentQuestionNum, setIsUserFinishedQuiz, setScore }: Props) => {
    
    const previousQuestion = () => {
        if (currentQuestionNum+1 > category.length) {
            setCurrentQuestionNum(0);
        } else {
            setCurrentQuestionNum(currentQuestionNum-1);
        }
    }

    const nextQuestion = () => {

        if (currentQuestionNum+1 === category.length && !isUserFinishedQuiz) {

            if (answerChosen.includes(undefined)) {
                let unanswered: string[] = [];
                answerChosen.map((question: string | undefined, index: number) => {
                    if (question === undefined) {
                        unanswered.push((index+1).toString());
                    }
                });
                alert(`You have not answered questions ${unanswered.join(", ")}`)
                return;
            }

            if (confirm("Finish Quiz?")) {
                setCurrentQuestionNum(currentQuestionNum+1);
                setIsUserFinishedQuiz(true);
                finalResult()
            }
        } else {
            setCurrentQuestionNum(currentQuestionNum+1);
        }
    }

  const finalResult = () => {

    let finalScore = 0;
    for (let i = 0; i < category.length; i++) {
      if (category[i].getAnswers()[answerChosen[i]].correct) {
        finalScore++;
      }
    }
    setScore(finalScore);

    return Math.round(score/category.length*100) >= 85;
  }

  return (
    <div className={styles.changePageButton}>
        <button onClick={previousQuestion} disabled={currentQuestionNum === 0}>{currentQuestionNum < category.length ? "BACK" : "REVIEW"}</button>
        {currentQuestionNum < category.length && <button onClick={nextQuestion}>{currentQuestionNum+1 === category.length ? "FINISH" : "NEXT"}</button>}
    </div>
  )
}

export default TransitionQuizPage