"use client"

import React, { useEffect, useRef, useState } from 'react'

interface Props {
    startTime: number
}

const CountDownTimer = ({ startTime }: Props) => {

    const [timeLeft, setTimeLeft] = useState(startTime)
    const [isActive, setIsActive] = useState(true)
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        if (isActive && timeLeft > 0) {
            timerRef.current = setInterval(() => {
                setTimeLeft((prev) => prev - 1)
            }, 1000)
        } else if (timeLeft === 0 && timerRef.current) {
            clearInterval(timerRef.current)
            setIsActive(false)
        }

        return () => {
            if (timerRef.current) clearInterval(timerRef.current)
        }
    }, [isActive, timeLeft])

    const toggleTimer = () => setIsActive(!isActive)

    const resetTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current)
        setIsActive(false)
        setTimeLeft(startTime)
    }

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }

    return (
        <div>
            <div>
                {formatTime(timeLeft)}
            </div>
        </div>
    )
}

export default CountDownTimer