"use client"

import React from 'react'
import styles from "./transitionQuizPage.module.css";
import { Question } from '@/libs/Questions';

interface Props {
    score: number;
    questionNum: number;
    category: Question[];
    quiz: boolean;
    answerChosen: any[];
    setQuestionNum: Function;
    finishQuiz: Function;
    setScore: Function;
}

const TransitionQuizPage = ({ score, questionNum, category, quiz, answerChosen, setQuestionNum, finishQuiz, setScore }: Props) => {
    
    const previousQuestion = () => {
        if (questionNum+1 > category.length) {
            setQuestionNum(0);
        } else {
        setQuestionNum(questionNum-1);
        }
    
        if (quiz) {
            check();
        }
    }

    const nextQuestion = () => {

        if (questionNum+1 === category.length && !quiz) {

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
                setQuestionNum(questionNum+1);
                finishQuiz(true);
                const pass = finalResult();
            }
        } else {
            setQuestionNum(questionNum+1);
        }

        if (quiz && questionNum+1 < category.length) {
            check()
        }
    }

    const check = () => {
        const answerSheet = document.querySelector(`.${styles.changePageButton}`)?.parentNode?.children[0]?.children[1].children[1];

        try {
            resetClass();
            if (category[questionNum-1].answers[answerChosen[questionNum-1]].correct) {
                answerSheet!.children[answerChosen[questionNum-1]].classList.add(`${styles.correct}`);
            } else {
                answerSheet!.children[answerChosen[questionNum-1]].classList.add(`${styles.incorrect}`);
            }
        } catch (e: any) {
            console.log("Hello World!");
            return;
        }
    }

  const resetClass = () => {
    const answerSheet = document.querySelector(`.${styles.changePageButton}`)?.parentNode?.children[0]?.children[1].children[1];
    Array.from(answerSheet!.children).forEach((answer) => {
      if (answer.classList.contains(`${styles.correct}`)) {
        answer.classList.remove(`${styles.correct}`);
      } else if (answer.classList.contains(`${styles.incorrect}`)) {
        answer.classList.remove(`${styles.incorrect}`);
      }
    })
  }

  const finalResult = () => {

    let finalScore = 0;
    for (let i = 0; i < category.length; i++) {
      if (category[i].answers[answerChosen[i]].correct) {
        finalScore++;
      }
    }
    setScore(finalScore);

    return Math.round(score/category.length*100) >= 85;
  }

  return (
    <div className={styles.changePageButton}>
        <button onClick={previousQuestion} disabled={questionNum === 0}>{questionNum < category.length ? "BACK" : "REVIEW"}</button>
        <button onClick={nextQuestion}>{questionNum+1 === category.length ? "FINISH" : "NEXT"}</button>
    </div>
  )
}

export default TransitionQuizPage