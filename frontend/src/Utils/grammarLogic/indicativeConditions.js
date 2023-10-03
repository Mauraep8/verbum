import {
    conditional,
    feminin,
    firstPerson,
    futurAnterieur,
    futurSimple,
    imparfait,
    imperative,
    indicative,
    masculin,
    passe,
    passeAnterieur,
    passeCompose,
    passeSimple,
    plural,
    plusQueParfait,
    present,
    secondPerson,
    singular,
    subjunctive,
    thirdPerson,
} from "../grammarTerms";

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