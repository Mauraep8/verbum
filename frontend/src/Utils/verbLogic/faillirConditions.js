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

   
  export default function faillirConditions(
    verbArray,
    moodArray,
    tenseArray,
    numberArray,
    genderArray,
    personArray
  ) {
    const filteredVerb = verbArray.filter((verb) => verb.verbID === 59);
  // NEVER IN IMPERATIVE
  if (
    moodArray.includes(indicative) === false &&
    moodArray.includes(subjunctive) === false &&
    moodArray.includes(conditional) === false
  ) {
    return {
      element: "verb " + filteredVerb[0].value,
      missingType: "mood",
      missing: [indicative, subjunctive, conditional],
    };
  }
    return null;
  }
  
 