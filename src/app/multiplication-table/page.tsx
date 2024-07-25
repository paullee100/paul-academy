"use client"

import React, { useState } from 'react'
import styles from "./multiplicationTable.module.css";

const MultiplicationTablePage = () => {
  const table: string[][] = [];

  for (let row: number = 0; row < 13; row++) {
    table.push([]);
    for (let col: number = 0; col < 13; col++) {
      if (row === 0 || col === 0) {
        table[row].push((row+col).toString());
      } else {
        table[row].push('');
      }
    }
  }

  const [value, setValue] = useState(Array(156));
  const [disable, setDisable] = useState(false);
  const [score, setScore] = useState(0);

  const updateValue = (event: React.ChangeEvent<HTMLInputElement>, num: number) => {
    const val = event.target.value;
    value[num] = parseInt(val, 10);
    setValue(value);

  }

  const checkAnswer = () => {
    const timeTable = document.querySelector(`.${styles.timeTable}`);
    console.log(value[1]);

    for (let row: number = 1; row < timeTable?.children.length!; row++) {

      const rowSection = timeTable?.children!;
      for (let col: number = 1; col < rowSection[row].children.length!; col++) {
        const rowVal: number = parseInt(rowSection[0].children[col].firstChild?.textContent!, 10);
        const colVal: number = parseInt(rowSection[row].children[0].firstChild?.textContent!, 10);

        if (value[(row-1)*rowSection[row].children.length + col] === rowVal * colVal) {
          rowSection[row].children[col].children[0].classList.add(`${styles.correct}`);
          setScore(score+1);
        } else {
          rowSection[row].children[col].children[0].classList.add(`${styles.incorrect}`);
        }
      }
    }
    setDisable(true);
  }


  return (
    <div className={styles.container}>
      <div className={styles.quiz}>
        <table>
          <tbody className={styles.timeTable}>
            {table.map((valueArray: string[], rowIndex: number) => (
              <tr key={`row${rowIndex}`}>
                {valueArray.map((num: string, colIndex: number) => (
                  <td key={`box${colIndex}`}>
                    {num === '' ? <input type="number" onChange={event => updateValue(event, (rowIndex-1) * valueArray.length + colIndex)} disabled={disable}/> : <span>{num}</span>}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.finishContainer}>
        <button className={styles.finishButton} onClick={checkAnswer}>Finish</button>
      </div>
    </div>
  )
}

export default MultiplicationTablePage