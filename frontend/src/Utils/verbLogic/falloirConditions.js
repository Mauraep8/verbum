import {
  conditional,
  indicative,
  singular,
  subjunctive,
  thirdPerson,
} from "../grammarTerms";

//VERIFY CONDITIONS FOR FALLOIR #66 = 3rd person + singular + never in IMPERATIF

export default function falloir(
  verbArray,
  moodArray,
  numberArray,
  personArray
) {
  // ALWAYS IN 3RD PERSON  
  const filteredVerb = verbArray.filter((verb) => verb.verbID === 66);
  if (personArray.includes(thirdPerson) === false) {
    return {
      element: "verb " + filteredVerb[0].value,
      missingType: "person",
      missing: [thirdPerson],
    };
  }
  //ALWAYS SINGULAR NUMBER
  if (numberArray.includes(singular) === false) {
    return {
      element: "verb " + filteredVerb[0].value,
      missingType: "number",
      missing: [singular],
    };
  }
  //NEVER IN IMPERATIVE
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
