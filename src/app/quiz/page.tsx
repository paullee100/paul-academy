"use client"

import React, { useEffect, useState } from 'react'
import styles from "./quiz.module.css";
import { getCategory, getCategoryName } from '@/libs/Categories';
import Link from 'next/link';
import { Question } from '@/libs/Questions';
import CategoryList from '@/components/category-list/category-list';
import InstructionPage from '@/components/instruction-page/instruction-page';
import QuizSection from '@/components/quiz-section/quizSection';
import TransitionQuizPage from '@/components/quiz-section/transitionQuizPage/transitionQuizPage';

const QuizPage = () => {
  const [questionNum, setQuestionNum] = useState(0);
  const [score, setScore] = useState(0);
  const [currentCategory, updateCategory] = useState(0);
  const [unlockedSection, updateSection] = useState(6);
  const [instructionPage, updatePage] = useState(true);
  const [quiz, finishQuiz] = useState(false);
  
  let category: Question[] = getCategory(currentCategory);
  const [answerChosen, updateAnswerChosen] = useState(Array(category.length).fill(undefined));

  return (
    <div className={styles.container}>

      <CategoryList unlockedSection={unlockedSection} setQuestionNum={setQuestionNum} setScore={setScore} updateCategory={updateCategory} updatePage={updatePage} answerChosen={answerChosen} updateAnswerChosen={updateAnswerChosen}/>

      <div className={styles.content}>
        <div className={styles.app}>

          {instructionPage ? 
            <InstructionPage name={getCategoryName(currentCategory)} updatePage={updatePage} />
          :
            <QuizSection score={score} questionNum={questionNum} category={category} quiz={quiz} answerChosen={answerChosen} updateAnswerChosen={updateAnswerChosen}/>
          }
          
          {!instructionPage && <TransitionQuizPage score={score} questionNum={questionNum} category={category} quiz={quiz} answerChosen={answerChosen} setQuestionNum={setQuestionNum} finishQuiz={finishQuiz} setScore={setScore} />}
        </div>
      </div>
    </div>
  )
}

export default QuizPage