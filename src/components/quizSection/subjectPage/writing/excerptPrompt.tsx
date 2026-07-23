import { WritingQuestion } from '@/libs/Questions'
import React from 'react'
import styles from './excerptPrompt.module.css'

interface Props {
    category: WritingQuestion
}

const ExcerptPrompt = ({ category }: Props) => {

    return (
        <div>
            <div>{category.getSentence()}</div>
            <div className={styles.essay}>{category.getEssay()}</div>
            <h3>{category.getQuestion()}</h3>
        </div>
    )
}

export default ExcerptPrompt