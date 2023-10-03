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

export default function pouvoirConditions(verbArray,moodArray){

const filteredVerb = verbArray.filter((verb) => verb.verbID === 78);
// ALWAYS IN INDICATIVE, OR SUBJUNCTIVE OR CONDITIONAL
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
  return null
}