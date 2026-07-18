"use client"

import React from 'react'
import styles from "./category-list.module.css";
import Link from 'next/link';
import { getCategory } from '@/libs/category';
import { Question } from '@/libs/Questions';

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
    Exponent: Question[],
    Factor: Question[],
    GreatestCommonFactor: Question[],
    LeastCommonMultiple: Question[],
    PrimeFactor: Question[],
    Pemdas: Question[],
    // primeNumber: PrimeNumber,
    MathPractice: Question[],
    default: Question[]
}

const CategoryList = ({ categoryList, setCurrentQuestionNum, setScore, updateCategory, updatePage, setIsUserFinishedQuiz, updateAnswerChosen }: Props) => {
  
  const categoryTitle = []
  for (const [key, value] of Object.entries(categoryList)) {
    const result = key.replace(/([a-z])([A-Z])/g, '$1 $2');
    categoryTitle.push(result)
  }

  const changeCategory = (topic: string) => {
    setCurrentQuestionNum(0);
    setScore(0);
    updateCategory(topic);
    updatePage(true);
    setIsUserFinishedQuiz(false)

    const clearAnswers = Array(getCategory(categoryList, topic).length).fill(undefined);
    updateAnswerChosen(clearAnswers);
  }

  return (
    <div>
        <div className={styles.categoryList}>
            <ol>
              {categoryTitle.map((topic, index) => (
                <li onClick={_ => changeCategory(topic.replaceAll(' ', ''))} key={topic}>{topic}</li>
              ))}
            </ol>
        </div>
    </div>
  )
};

CategoryList.displayName = 'CategoryList';

export default CategoryList