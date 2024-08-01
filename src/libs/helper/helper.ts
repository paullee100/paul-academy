// https://en.wikipedia.org/wiki/Unicode_subscripts_and_superscripts

import { convert_unicode_to_decimal, generate_multiple_choice_answers, getRandomNumber, getRandomOperator, is_prime } from "./Util";

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
        if (rng < 0.5) {
            exponent.push(negative);
        }
        for (let exponentLength = 0; exponentLength < generateExponentLength; exponentLength++) {
            exponent.push(exponents[Math.floor(Math.random()*(exponents.length-5))]);
        }
        output.push(`${base}${exponent.join('')}`);
    }
    return output;
}

/**
 * 
 * @param equation 
 * @returns 
 */
export const eval_math = (equation: string): number[] => {
    for (let i = 0; i < equation.length; i++) {
        const firstHalf = equation.slice(0, i);
        const secondHalf = equation.slice(i+1, equation.length);
        if (equation[i-1] !== '-' && equation[i].charCodeAt(0) > 177) {
            equation = firstHalf + equation[i].replace(equation[i], '**' + convert_unicode_to_decimal(equation[i].charCodeAt(0))) + secondHalf;

        } else if (equation[i-1] === '-') {
            equation = firstHalf + equation[i].replace(equation[i], convert_unicode_to_decimal(equation[i].charCodeAt(0))) + secondHalf;

        }
    }

    return generate_multiple_choice_answers(eval(equation));
}

/********** FACTOR **********/
/**
 * 
 * @returns 
 */
export const generate_factor = () => {
    const min: number = 3
    const max: number = 1000
    const getNum: number = Math.floor(Math.random()*(max-min+1))+min
    const factors: number[] = []

    for (let i = 1; i <= getNum; i++) {
        if (getNum % i === 0) factors.push(i) 
    }
    return [getNum, factors]
}

/**
 * 
 * @returns 
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

    return [getNum, factors]
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

    console.log(generate_multiple_choice_answers(getNumA))
    return [num[0], num[1], getNumA]
}

/**
 * 
 * @returns 
 */
export const generate_least_common_multiple = () => {
    const min: number = 3
    const max: number = 100
    let getNumA = Math.floor(Math.random()*(max-min+1))+min
    let getNumB = Math.floor(Math.random()*(max-min+1))+min

    while (getNumB === getNumA) getNumB = Math.floor(Math.random()*(max-min+1))+min

    let a = getNumA
    let b = getNumB
    while (getNumB !== 0) {
        let temp = getNumB
        getNumB = getNumA % getNumB
        getNumA = temp
    }
    return [a, b].concat(generate_multiple_choice_answers((a*b)/getNumA))
}

/**
 * 
 * @param num 
 * @returns 
 */
export const get_factors = (num: number) => {
    const factor = []
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) factor.push(i)
    }
    return factor
}

/********** PEMDAS **********/
export const generate_PEMDAS_problems = () => {
    const numOperands = getRandomNumber(2, 4) // Number of numbers in the problem
    let problem = ''

    for (let i = 0; i < numOperands; i++) {
        const number = getRandomNumber(1, 10) // Change range as needed
        problem += number

        if (i < numOperands - 1) {
            const operator = getRandomOperator()
            problem += ` ${operator} `
        }
    }

    // Randomly decide to add parentheses
    if (Math.random() > 0.5) {
        const parts = problem.split(' ')
        let index = getRandomNumber(0, parts.length-3)
        // while (typeof(parts[index]) !== 'number') {
        //     index = getRandomNumber(0, parts.length-3)
        //     console.log(typeof(parts[index]) === 'number')
        // }
        parts[index] = `(${parts[index]}`
        parts[index + 2] = `${parts[index+2]})`
        problem = parts.join(' ')
    }

    // Replace '^' with '**' for JavaScript exponentiation
    problem = problem.replace(/\^/g, '**')

    const answer: string[] = generate_multiple_choice_answers(eval(problem)).map(String)
    return [problem].concat(answer)
}