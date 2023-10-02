import {
    imparfait,
    passe,
    plusQueParfait,
    present,
    subjunctive,
  } from "../grammarTerms";


export default function subjunctiveConditions (tenseArray) {
    if (
        tenseArray.includes(present) === false &&
        tenseArray.includes(passe) === false &&
        tenseArray.includes(imparfait) === false &&
        tenseArray.includes(plusQueParfait) === false
      ) {
        return{
            element: subjunctive,
            missingType: 'tense',
            missing: [present, passe, imparfait, plusQueParfait],
         }
    }
    return null  
    
}