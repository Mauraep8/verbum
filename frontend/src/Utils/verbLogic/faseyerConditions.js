import {
    conditional,
    indicative,
    subjunctive,
    thirdPerson,
} from "../grammarTerms";

export default function faseyerConditions(verbArray, moodArray,personArray){
const filteredVerb = verbArray.filter((verb) => verb.verbID === 30);
   
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
// ALWAYS 3RD PERSON
     if (personArray.includes(thirdPerson) === false) {
       return { 
         element: "verb " + filteredVerb[0].value,
         missingType: "person",
         missing: [thirdPerson],
       };
     }
return null
}