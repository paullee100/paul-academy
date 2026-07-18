// https://en.wikipedia.org/wiki/Unicode_subscripts_and_superscripts

import { convert_unicode_to_decimal, generate_multiple_choice_answers, getRandomNumber, getRandomOperator, is_prime, noPemdasAlgorithm, reverseStr, shuntingYardAlgorithm } from "./utility";

/********** EXPONENT **********/
/**
 * 
 * @param generateNum 
 * @param generateExponentLength 
 * @param minBase 
 * @param maxBase 
 * @returns 
 */
export const generate_exponent = (generateNum: number, generateExponentLength: number, minBase: number, maxBase: number): string[] => {
    const exponents = ['\u2070', '\u00B9', '\u00B2', '\u00B3', '\u2074', '\u2075', '\u2076', '\u2077', '\u2078', '\u2079'];
    const negative = '\u207B'

    const output: string[] = [];
    for (let problems = 0; problems < generateNum; problems++) {
        const rng = Math.random();
        const base = getRandomNumber(minBase, maxBase);
        const exponent: string[] = []
        for (let exponentLength = 0; exponentLength < generateExponentLength; exponentLength++) {
            exponent.push(exponents[Math.floor(Math.random()*(exponents.length-5))]);
        }
        if (rng < 0.5 && exponent[0] != '\u2070') {
            exponent.unshift(negative);
        }
        output.push(`${base}${exponent.join('')}`);
    }
    return output;
}

/********** FACTOR **********/
/**
 * Generates a non-prime number factor
 * 
 * @returns 
 */
export const generate_factor = () => {
    const min: number = 3
    const max: number = 25

    // prevents a prime number from being generated
    const num1: number = Math.floor(Math.random()*(max-min+1))+min
    const num2: number = Math.floor(Math.random()*(max-min+1))+min

    const total = num1 * num2
    const factors: number[] = []

    for (let i = 1; i <= total; i++) {
        if (total % i === 0) factors.push(i) 
    }

    const halfIndex = Math.ceil(factors.length / 2)
    const firstHalf = factors.slice(0, halfIndex)

    const index = Math.floor(Math.random()*firstHalf.length)

    const answer = [factors[index], factors[factors.length-index-1]]
    return [total, answer.join(", "), [1, factors[1+Math.floor(Math.random()*(factors.length-1))]].join(", "), -1, -1]
}

const generate_local_factor = (total: number) => {
    const factors: number[] = []

    for (let i = 1; i <= total; i++) {
        if (total % i === 0) factors.push(i) 
    }

    return factors
}

/**
 * Generates prime factors of a number
 * 
 * @returns {(string | number)[]}
 */
export const generate_prime_factor = () => {
    const min: number = 4
    const max: number = 1000
    let getNum: number = Math.floor(Math.random()*(max-min+1))+min
    const factors: number[] = []

    while (is_prime(getNum)) {
        getNum = Math.floor(Math.random()*(max-min+1))+min
    }
    let n = getNum
    let i = 2
    while (i * i <= n) {
        if (n % i) i++
        else {
            n = Math.floor(n / i)
            factors.push(i)
        }
    }
    if (n > 1) factors.push(n)

    const unique = [...new Set(factors)]
    const hasDupePrime = unique.length === factors.length

    return [getNum, factors.join(", "), hasDupePrime ? factors.slice(1).join(", ") : unique.join(", "), factors.slice(0, -1).join(", "), generate_local_factor(getNum).join(", ")]
}

/**
 * 
 * @returns 
 */
export const generate_greatest_common_factor = () => {
    const min: number = 4
    const max: number = 100
    let num = []
    let getNumA: number = -1
    while (true) {
        num = []
        getNumA = Math.floor(Math.random()*(max-min+1))+min
        let getNumB: number = Math.floor(Math.random()*(max-min+1))+min

        while (getNumB === getNumA) getNumB = Math.floor(Math.random()*(max-min+1))+min

        num.push(getNumA, getNumB)
        while (getNumB !== 0) {
            let temp = getNumB
            getNumB = getNumA % getNumB
            getNumA = temp
        }

        if (getNumA > 2) break
    }

    // console.log(generate_multiple_choice_answers(getNumA))
    return [num[0], num[1], getNumA, Math.max(num[0], num[1]), num[0]+num[1], Math.floor(Math.max(num[0], num[1])/Math.min(num[0], num[1]))]
}

/**
 * 
 * @returns 
 */
export const generate_least_common_multiple = () => {
    const min: number = 3
    const max: number = 25
    let getNumA = Math.floor(Math.random()*(max-min+1))+min
    let getNumB = Math.floor(Math.random()*(max-min+1))+min

    while (getNumB === getNumA) getNumB = Math.floor(Math.random()*(max-min+1))+min

    const a = getNumA
    const b = getNumB
    while (getNumB !== 0) {
        let temp = getNumB
        getNumB = getNumA % getNumB
        getNumA = temp
    }

    return [a, b, (a*b)/getNumA, Math.min(a, b), a+b, Math.abs(a-b) !== Math.min(a, b) ? Math.abs(a-b) : a+b]
}

/********** PEMDAS **********/
export const generate_PEMDAS_problems = () => {
    const numOperands = getRandomNumber(4, 6) // Number of numbers in the problem
    let problem = ''

    const operators: string[] = ['+', '-', '*', '/', '^']
    for (let i = 0; i < numOperands; i++) {
        const number = getRandomNumber(1, 10) // Change range as needed
        problem += number

        if (i < numOperands - 1) {
            const operator = getRandomOperator(operators)
            problem += ` ${operator} `
            if (operator === '^') operators.pop()
        }
    }

    // Randomly decide to add parentheses
    if (Math.random() > 0.5) {
        const parts = problem.split(' ')
        let index = getRandomNumber(0, parts.length-3)
        index = index % 2 === 1 ? index+1 : index

        parts[index] = `(${parts[index]}`
        parts[index + 2] = `${parts[index+2]})`
        problem = parts.join(' ')
    }

    const answer: string[] = [
        shuntingYardAlgorithm(problem.replaceAll(' ', '')).toString(), 
        noPemdasAlgorithm(problem.replaceAll(' ', '').replaceAll('(', '').replaceAll(')', '')).toString(), 
        shuntingYardAlgorithm(reverseStr(problem.replaceAll(' ', ''))).toString(), 
        "-1"
    ]

    return [problem].concat(answer)
}