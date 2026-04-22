"use client"

import React, { useState } from 'react'
import styles from "./multiplicationTable.module.css";
import Link from 'next/link';

const MultiplicationTablePage = () => {
  const SIZE = 12
  const table: string[][] = [];

  for (let row: number = 0; row < SIZE; row++) {
    table.push([]);
    for (let col: number = 0; col < SIZE+1; col++) {
      if (col === 0) {
        table[row].push((row+col+1).toString());
      } else {
        table[row].push('');
      }
    }
  }


  const [disable, setDisable] = useState(false);
  const [score, setScore] = useState(0);

  const [userAnswer, updateUserAnswer] = useState(Array.from({ length: SIZE }, () => Array(SIZE).fill(0)))
  const [result, updateResult] = useState(Array.from({ length: SIZE }, () => Array(SIZE).fill(false)))

  const updateValue = (event: React.ChangeEvent<HTMLInputElement>, rowIndex: number, colIndex: number) => {
    
    updateUserAnswer(prevUserAnswer =>
      prevUserAnswer.map((row, indexRow) => (
        indexRow === rowIndex ?
          row.map((col, indexCol) => (indexCol+1 === colIndex ? 
            parseInt(event.target.value, 10) : col)) 
            : 
            row
      ))
    )
    
  }

  const checkAnswer = () => {

    const finalAnswer = [...result]
    for (let rowIndex: number = 0; rowIndex < userAnswer.length; rowIndex++) {

      for (let colIndex: number = 0; colIndex < userAnswer[rowIndex].length; colIndex++) {

        if (userAnswer[rowIndex][colIndex] === (rowIndex+1)*(colIndex+1)) {
          console.log("CORRECT!!!!")
          setScore(score+1)

          finalAnswer[rowIndex][colIndex+1] = true

        }
      }
    }

    updateResult(finalAnswer)
    setDisable(true);
  }


  return (
    <div className={styles.container}>
      <div className={styles.quiz}>
        <table>
          <tbody className={styles.timeTable}>
            
            <tr>
              {
                Array.from({ length: SIZE+1 }).map((_, index) => (
                  <td key={`row header${index}`}><span>{index}</span></td>
                ))
              }
            </tr>

            {table.map((valueArray: string[], rowIndex: number) => (
              <tr key={`row${rowIndex}`}>
                {valueArray.map((num: string, colIndex: number) => (
                  <td key={`box${colIndex}`}>
                    {colIndex > 0 ? 
                      <input type="number" onChange={event => updateValue(event, rowIndex, colIndex)} disabled={disable} className={!disable ? styles.white : (result[rowIndex][colIndex] ? styles.correct : styles.incorrect) }/>
                       : 
                      <span>{num}</span>
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.finishButton} onClick={checkAnswer} disabled={disable}>Finish</button>
        <Link className={styles.home} href="/">Home</Link>
      </div>
    </div>
  )
}

export default MultiplicationTablePage