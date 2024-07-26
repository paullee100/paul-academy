import React from 'react'
import styles from "./instructionPage.module.css";

interface Props {
  name: string;
  updatePage: Function;
}

const InstructionPage = ({ name, updatePage }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        {name}
      </div>

      <div className={styles.startBtn}>
        <button onClick={_ => updatePage(false)}>START</button>
      </div>
    </div>
  )
}

export default InstructionPage