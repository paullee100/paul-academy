import { convert_unicode_to_decimal } from "@/libs/helper/utility";

/**
 * 
 * @param equation 
 * @returns 
 */
export const eval_exponent = (equation: string): (number|string)[] => {

    if (equation.includes('\u207B')) {
        const val = equation.split('\u207B')
        const base = val[0]
        const exponent = val[1]

        return [`1/${(base+exponent)}`, `${base+exponent}`, (Number(base)-Number(convert_unicode_to_decimal(exponent.charCodeAt(0)))).toString(), `1/${equation}`]
    } else {
        for (let i = 0; i < equation.length; i++) {
            const firstHalf = equation.slice(0, i);
            const secondHalf = equation.slice(i+1, equation.length);
            if (equation[i-1] !== '-' && equation[i].charCodeAt(0) > 177) {
                equation = firstHalf + equation[i].replace(equation[i], '^' + convert_unicode_to_decimal(equation[i].charCodeAt(0))) + secondHalf;
    
            } else if (equation[i-1] === '-') {
                equation = firstHalf + equation[i].replace(equation[i], convert_unicode_to_decimal(equation[i].charCodeAt(0))) + secondHalf;
    
            }
        }
    
        // bug: 2^2 returns 4 for three of the answers
        const base = Number(equation.split("^")[0])
        const exponent = Number(equation.split("^")[1])
        const equationValue = parseFloat((base ** exponent).toFixed(10))
        return [equationValue, base+exponent, exponent > 1 ? base*exponent : base*base, exponent > 1 ? base : exponent]

    }

}
