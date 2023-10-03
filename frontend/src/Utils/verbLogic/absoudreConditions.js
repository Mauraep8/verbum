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

   
  export default function absoudreConditions(
    verbArray,
    moodArray,
    tenseArray,
    numberArray,
    genderArray,
    personArray
  ) {
    const filteredVerb = verbArray.filter((verb) => verb.verbID === 92);
  
    //IF INDICATIVE
    if (moodArray.includes(indicative) === true) {
      //ALWAYS IN PRESENT, OR passeCompose OR plusQueParfait OR imparfait OR passeAnterieur OR futurSimple OR futurAnterieur [never passeSimple]
      if (
        tenseArray.includes(present) === false &&
        tenseArray.includes(passeCompose) === false &&
        tenseArray.includes(plusQueParfait) === false &&
        tenseArray.includes(imparfait) === false &&
        tenseArray.includes(passeAnterieur) === false &&
        tenseArray.includes(futurSimple) === false &&
        tenseArray.includes(futurAnterieur) === false
      ) {
        return {
          element: ["verb " + filteredVerb[0].value, indicative],
          missingType: "tense",
          missing: [
            present,
            passeCompose,
            plusQueParfait,
            imparfait,
            passeAnterieur,
            futurSimple,
            futurAnterieur,
          ],
        };
      }
    }
    //IF SUBJUNCTIVE
    if (moodArray.includes(subjunctive) === true) {
        //ALWAYS IN present OR plusQueParfaitse OR passe [never imparfait]
      if (
        tenseArray.includes(present) === false &&
        tenseArray.includes(plusQueParfait) === false &&
        tenseArray.includes(passe) === false 
      ) {
        return {
            element: ["verb " + filteredVerb[0].value, subjunctive],
            missingType: "tense",
            missing: [
              present,
              passe,
              plusQueParfait,
            ],
          };

         }
    
    }
    return null;
  }
  
 