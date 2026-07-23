import React, { Fragment } from 'react'
import styles from './writingSection.module.css'

interface Props {
    match: string[]
}

const Sentence = ({ match }: Props) => {

    const alphabet = ["A", "B", "C", "D"]
    let alphabetIndex = 0

    return (
        <div>
            {match.map((val, index) => (
                <Fragment key={index}>
                    {val.includes("<") ? 
                        <span className={styles.underline}>
                            {val.replace(/[\<\>]/g, "")}
                            <span className={styles.label}>{alphabet[alphabetIndex++]}</span>
                        </span> : 
                    val
                }
                </Fragment>
            ))}
        </div>
    )
}

export default Sentence