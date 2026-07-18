import { Definition } from "./mathcategories/definition";
import { Exponent } from "./mathcategories/exponent/exponent";
import { Factor } from "./mathcategories/factors/factor";
import { PEMDAS } from "./mathcategories/pemdas";
import { PracticeQuiz } from "./mathcategories/practiceQuiz";
import { PrimeNumber } from "./mathcategories/primeNumber";
import { Question } from "./Questions";

interface Categories {
    Definition: Question[],
    Exponent: Question[],
    Factor: Question[],
    GreatestCommonFactor: Question[],
    LeastCommonMultiple: Question[],
    PrimeFactor: Question[],
    Pemdas: Question[],
    // primeNumber: PrimeNumber,
    MathPractice: Question[],
    default: Question[]
}

export const getCategory = (category: Categories, topic: string) => {
    
    const action = category[topic as keyof typeof category] || category['default']
    return action
    
    // switch (index) {
    //     case 0:
    //         return Definition
    //     case 1:
    //         return Exponent
    //     case 2:
    //         return Factor
    //     // add: fractions (addition, subtraction, multiplication, division)
    //     // proper (numerator < denominator), improper (numerator > denominator)
    //     case 3:
    //         return PEMDAS
    //     case 4:
    //         return PrimeNumber
    //     // 2d shapes (area, perimeter)
    //     // 3d shapes (surface area, volume)
    //     // statistics
    //     case 5:
    //         return PracticeQuiz
    //     default:
    //         alert("This section have not been implemented yet!")
    //         return []
    // }
}

export const getCategoryName = (topic: string) => {
    return topic.replace(/([a-z])([A-Z])/g, '$1 $2')
    // switch (index) {
    //     case 0:
    //         return "Definition";
    //     case 1:
    //         return "Exponent";
    //     case 2:
    //         return "Factor";
    //     case 3:
    //         return "PEMDAS";
    //     case 4:
    //         return "Prime Number";
    //     case 5:
    //         return "Practice Quiz";
    //     case 6:
    //         return "";
    //     case 7:
    //         return "";
    //     case 8:
    //         return "";
    //     case 9:
    //         return "";
    //     default:
    //         return "An error has occurred!";
    // }
}