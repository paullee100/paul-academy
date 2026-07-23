"use client"

import React from 'react'
import styles from "./category-list.module.css";
import Link from 'next/link';
import { getCategory } from '@/libs/category';
import { Question, WritingQuestion, MathQuestion, ReadingQuestion } from '@/libs/Questions';

interface Props {
    categoryList: Categories;
    setCurrentQuestionNum: Function;
    setScore: Function;
    updateCategory: Function;
    updatePage: Function;
    setIsUserFinishedQuiz: Function;
    updateAnswerChosen: Function;
}

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
    Writing: WritingQuestion[],
    Reading: ReadingQuestion[]
}

const CategoryList = (CATEGORYLIST: Props) => {

  const changeCategory = (topic: string) => {
    CATEGORYLIST.setCurrentQuestionNum(0);
    CATEGORYLIST.setScore(0);
    CATEGORYLIST.updateCategory(topic);
    CATEGORYLIST.updatePage(true);
    CATEGORYLIST.setIsUserFinishedQuiz(false)

    const clearAnswers = Array(getCategory(CATEGORYLIST.categoryList, topic).length).fill(undefined);
    CATEGORYLIST.updateAnswerChosen(clearAnswers);
  }

  return (
    <div>
        <div className={styles.categoryList}>
            <ol>
              {Object.entries(CATEGORYLIST.categoryList).map(([objKey, value], index) => (
                <li onClick={_ => changeCategory(objKey)} key={index}>{objKey.replace(/([a-z])([A-Z])/g, '$1 $2')}</li>
              ))}
            </ol>
        </div>
    </div>
  )
};

CategoryList.displayName = 'CategoryList';

export default CategoryList