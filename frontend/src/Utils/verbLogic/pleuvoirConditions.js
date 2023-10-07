import {
    conditional,
    indicative,
    masculin,
    subjunctive,
    thirdPerson,
  } from "../grammarTerms";


 export default function pleuvoirConditions(
   verbArray,
   moodArray,
   genderArray,
   personArray,
 ) {

   //VERIFY CONDITIONS FOR VERB PLEUVOIR #75 = 3rd person + masc gender + never in IMPERATIF

   // ALWAYS 3RD PERSON
   const filteredVerb = verbArray.filter((verb) => verb.verbID === 75);
   if (personArray.includes(thirdPerson) === false) {
     return {
       element: "verb " + filteredVerb[0].value,
       missingType: "person",
       missing: [thirdPerson],
     };
   }

   // ALWAYS MASC GENDER
   if (genderArray.includes(masculin) === false) {
     return {
       element: "verb " + filteredVerb[0].value,
       missingType: "gender",
       missing: [masculin],
     };
   }

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
   return null
 }
      
  