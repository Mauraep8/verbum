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

   
  export default function frireConditions(
    verbArray,
    moodArray,
    tenseArray,
    numberArray,
    genderArray,
    personArray
  ) {
    const filteredVerb = verbArray.filter((verb) => verb.verbID === 108);
    // console.log('hello')
    //IF INDICATIVE
    if (moodArray.includes(indicative) === true) {
      //ALWAYS IN PRESENT, OR passeCompose OR plusQueParfait OR passeAnterieur OR futurSimple OR futurAnterieur [never passeSimple or imparfait]
      if (
        tenseArray.includes(present) === false &&
        tenseArray.includes(passeCompose) === false &&
        tenseArray.includes(plusQueParfait) === false &&
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
            passeAnterieur,
            futurSimple,
            futurAnterieur,
          ],
        };
      }
      //IF INDICATIVE PRESENT, ALWAYS IN SINGULAR NUMBER
      if(tenseArray.includes(present)===true&& numberArray.includes(singular)===false){
        return {
            element: ["verb " + filteredVerb[0].value, 'present indicative'],
            missingType: "number",
            missing: [singular],
          };
      }
    }
    //IF SUBJUNCTIVE
    // TENSES ALWAYS IN plusQueParfait OR passe [never imparfait or present]
    if (moodArray.includes(subjunctive) === true && tenseArray.includes(plusQueParfait) === false && tenseArray.includes(passe) === false ) {
      return {
        element: ["verb " + filteredVerb[0].value, subjunctive],
        missingType: "tense",
        missing: [passe, plusQueParfait],
      };
    }

    //IF IMPERATIVE 
    //PRESENT ALWAYS IN SINGULAR
    if (moodArray.includes(imperative)===true && tenseArray.includes(present)===true && numberArray.includes(singular)===false){
        return {
            element: ["verb " + filteredVerb[0].value, 'present imperative'],
            missingType: "number",
            missing: [
              singular,
            ],
        };
    }
    return null;
  }
  
 