"use client"

import React, { useState } from 'react'
import styles from "./quiz.module.css";
import { getCategory, getCategoryName } from '@/libs/category';
import { Question, WritingQuestion, MathQuestion } from '@/libs/Questions';
import CategoryList from '@/components/category-list/category-list';
import InstructionPage from '@/components/instruction-page/instruction-page';
import QuizSection from '@/components/quizSection/quizSection';
import TransitionQuizPage from '@/components/quizSection/transitionQuizPage/transitionQuizPage';
import { Definition } from '@/libs/mathcategories/definition';
import { Exponent } from '@/libs/mathcategories/exponent/exponent';
import { Factor } from '@/libs/mathcategories/factors/factor';
import { GreatestCommonFactor } from '@/libs/mathcategories/factors/greatestCommonFactor';
import { LeastCommonMultiple } from '@/libs/mathcategories/factors/leastCommonMultiple';
import { PrimeFactor } from '@/libs/mathcategories/factors/primeFactor';
import { PEMDAS } from '@/libs/mathcategories/pemdas';
import { PrimeNumber } from '@/libs/mathcategories/primeNumber';
import { PracticeQuiz } from '@/libs/mathcategories/practiceQuiz';
import { Writing } from '@/libs/writingcategories/writing';

interface Categories {
    Definition: Question[],
    Exponent: MathQuestion[],
    Factor: MathQuestion[],
    GreatestCommonFactor: MathQuestion[],
    LeastCommonMultiple: MathQuestion[],
    PrimeFactor: MathQuestion[],
    Pemdas: MathQuestion[],
    // primeNumber: PrimeNumber,
    MathPractice: MathQuestion[],
    Writing: WritingQuestion[]
}

const QuizPage = () => {
  // Question Number for the current category
  const [currentQuestionNum, setCurrentQuestionNum] = useState(0);
  // Keep track of correct answers
  const [score, setScore] = useState(0);
  // Keep track of the current category the user is in
  const [currentCategory, updateCategory] = useState("Definition");
  // Instruction page to explain what the current category is about
  const [instructionPage, updateInstructionPage] = useState(true);
  // Determines if the user finishes the quiz
  const [isUserFinishedQuiz, setIsUserFinishedQuiz] = useState(false);
  
  const categoryList: Categories = {
    Definition: Definition,
    Exponent: Exponent,
    Factor: Factor,
    GreatestCommonFactor: GreatestCommonFactor,
    LeastCommonMultiple: LeastCommonMultiple,
    PrimeFactor: PrimeFactor,
    Pemdas: PEMDAS,
    // primeNumber: PrimeNumber,
    MathPractice: PracticeQuiz,
    Writing: Writing
  }
  let category: Question[] = getCategory(categoryList, currentCategory);

  // Keep track of the answers the user select in the quiz
  const [answerChosen, updateAnswerChosen] = useState(Array(category.length).fill(undefined));

  return (
    <div className={styles.container}>

      <CategoryList 
        categoryList={categoryList}
        setCurrentQuestionNum={setCurrentQuestionNum} 
        setScore={setScore} 
        updateCategory={updateCategory} 
        updatePage={updateInstructionPage} 
        setIsUserFinishedQuiz={setIsUserFinishedQuiz} 
        updateAnswerChosen={updateAnswerChosen}/>

      {/* Main */}
      <div className={styles.content}>
        <div className={styles.app}>

          {instructionPage ? 
            <InstructionPage 
              name={getCategoryName(currentCategory)} 
              updatePage={updateInstructionPage} />
          :
            <QuizSection 
              score={score} 
              currentQuestionNum={currentQuestionNum} 
              setCurrentQuestionNum={setCurrentQuestionNum}
              category={category} isUserFinishedQuiz={isUserFinishedQuiz} 
              answerChosen={answerChosen} 
              updateAnswerChosen={updateAnswerChosen}/>
          }
          
          {!instructionPage && 
            <div className={styles.transitionButton}>
              <TransitionQuizPage 
                score={score} 
                currentQuestionNum={currentQuestionNum} 
                category={category} 
                isUserFinishedQuiz={isUserFinishedQuiz} 
                answerChosen={answerChosen} 
                setCurrentQuestionNum={setCurrentQuestionNum} 
                setIsUserFinishedQuiz={setIsUserFinishedQuiz} 
                setScore={setScore} />
            </div>}
        </div>
      </div>
    </div>
  )
}

export default QuizPage