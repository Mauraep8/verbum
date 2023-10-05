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

   
  export default function traireConditions(
    verbArray,
    moodArray,
    tenseArray,
    numberArray,
    genderArray,
    personArray
  ) {
    const filteredVerb = verbArray.filter((verb) => verb.verbID === 121);
    //IF INDICATIVE
    if (moodArray.includes(indicative) === true) {
      //ALWAYS IN PRESENT, OR passeCompose OR plusQueParfait OR passeAnterieur OR futurSimple OR futurAnterieur or imparfait [never passeSimple]
      if (
        tenseArray.includes(present) === false &&
        tenseArray.includes(passeCompose) === false &&
        tenseArray.includes(plusQueParfait) === false &&
        tenseArray.includes(passeAnterieur) === false &&
        tenseArray.includes(futurSimple) === false &&
        tenseArray.includes(futurAnterieur) === false &&
        tenseArray.includes(imparfait) === false
      ) {
        return {
          element: ["verb " + filteredVerb[0].value, indicative],
          missingType: "tense",
          missing: [
            present,
            passeCompose,
            imparfait,
            plusQueParfait,
            passeAnterieur,
            futurSimple,
            futurAnterieur,
          ],
        };
      }
    }
    //IF SUBJUNCTIVE
    // TENSES ALWAYS IN plusQueParfait OR passe OR present [never imparfait]
    if (moodArray.includes(subjunctive) === true && tenseArray.includes(plusQueParfait) === false && tenseArray.includes(passe) === false && tenseArray.includes(present) === false ) {
      return {
        element: ["verb " + filteredVerb[0].value, subjunctive],
        missingType: "tense",
        missing: [passe, plusQueParfait, present],
      };
    }
    return null;
  }
  
 