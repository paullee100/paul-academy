"use client"

import React from 'react'
import styles from "./category-list.module.css";
import Link from 'next/link';

interface Props {
    unlockedSection: number;
    setQuestionNum: Function;
    setScore: Function;
    updateCategory: Function;
    updatePage: Function;
    answerChosen: any[];
    updateAnswerChosen: Function;
}

const CategoryList = ({ unlockedSection, setQuestionNum, setScore, updateCategory, updatePage, answerChosen, updateAnswerChosen }: Props) => {
  const changeCategory = (index: number) => {
    if (index > unlockedSection) {
        alert("Oops, you haven't unlocked that one yet! Complete the previous sections to continue!");
        return
    }
    setQuestionNum(0);
    setScore(0);
    updateCategory(index);
    updatePage(true);

    const clearAnswers = Array(answerChosen.length).fill(undefined);
    updateAnswerChosen(clearAnswers);
  }

  return (
    <div>
        <div className={styles.categoryList}>
            <ol>
                <li onClick={_ => changeCategory(0)}>Definitions</li>
                <li onClick={_ => changeCategory(1)}>Exponents</li>
                <li onClick={_ => changeCategory(2)}>Factors</li>
                <li onClick={_ => changeCategory(3)}>PEMDAS</li>
                <li onClick={_ => changeCategory(4)}>Prime Numbers</li>
                <li onClick={_ => changeCategory(5)}>Math Practice A</li>
                <li onClick={_ => changeCategory(6)}><Link href='/multiplication-table'>Multiplication Table</Link></li>
                <li onClick={_ => changeCategory(7)}>8</li>
                <li onClick={_ => changeCategory(8)}>9</li>
                <li onClick={_ => changeCategory(9)}>10</li>
            </ol>
        </div>
    </div>
  )
};

CategoryList.displayName = 'CategoryList';

export default CategoryList