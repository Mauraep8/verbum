import {
    conditional,
    indicative,
    subjunctive,
  } from "../grammarTerms";

   
  export default function faillirConditions(
    verbArray,
    moodArray,
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
  
 