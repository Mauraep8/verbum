import {
    futurAnterieur,
    futurSimple,
    imparfait,
    indicative,
    passeAnterieur,
    passeCompose,
    passeSimple,
    plusQueParfait,
    present,
} from "../../grammarTerms";

export default function indicativeConditions (tenseArray){
    
    if (
        tenseArray.includes(present) === false &&
        tenseArray.includes(passeCompose) === false &&
        tenseArray.includes(imparfait) === false &&
        tenseArray.includes(plusQueParfait) === false &&
        tenseArray.includes(passeSimple) === false &&
        tenseArray.includes(passeAnterieur) === false &&
        tenseArray.includes(futurSimple) === false &&
        tenseArray.includes(futurAnterieur) === false
      ) {
        return{
            element: indicative,
            missingType: "tense",
            missing: [
              present,
              passeCompose,
              imparfait,
              plusQueParfait,
              passeSimple,
              passeAnterieur,
              futurSimple,
              futurAnterieur,
            ],
        }
        
    }
    return null
}