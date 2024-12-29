import {
    conditional,
    indicative,
    subjunctive,
  } from "../grammarTerms";

export default function pouvoirConditions(verbArray,moodArray){

const filteredVerb = verbArray.filter((verb) => verb.verbID === 78);
// ALWAYS IN INDICATIVE, OR SUBJUNCTIVE OR CONDITIONAL (never in imperatif)
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