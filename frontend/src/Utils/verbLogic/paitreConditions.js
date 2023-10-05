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

   
  export default function paitreConditions(
    verbArray,
    moodArray,
    tenseArray,
    numberArray,
    genderArray,
    personArray
  ) {
    const filteredVerb = verbArray.filter((verb) => verb.verbID === 127);
    //IF INDICATIVE
    if (moodArray.includes(indicative) === true) {
      //ALWAYS IN PRESENT OR futurSimple or imparfait [never passeSimple passeCompose plusQueParfait passeAnterieur, futurAnterieur]
      if (
        tenseArray.includes(present) === false &&
        tenseArray.includes(futurSimple) === false &&
        tenseArray.includes(imparfait) === false
      ) {
        return {
          element: ["verb " + filteredVerb[0].value, indicative],
          missingType: "tense",
          missing: [
            present,
            imparfait,
            futurSimple,
          ],
        };
      }
    }
    //IF SUBJUNCTIVE
    // TENSES ALWAYS IN  OR present [never imparfait plusQueParfait OR passe]
    if (moodArray.includes(subjunctive) === true && tenseArray.includes(present) === false ) {
      return {
        element: ["verb " + filteredVerb[0].value, subjunctive],
        missingType: "tense",
        missing: [present],
      };
    }
    //IF IMPERATIVE 
    //PRESENT ALWAYS IN PRESENT
    if (moodArray.includes(imperative)===true && tenseArray.includes(present)===false ){
        return {
            element: ["verb " + filteredVerb[0].value, 'imperative'],
            missingType: "tense",
            missing: [
              present,
            ],
        };
    }
    return null;
  }
  
 