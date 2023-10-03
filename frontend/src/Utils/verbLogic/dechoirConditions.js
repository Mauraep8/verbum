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

  export default function dechoirConditions(verbArray,moodArray,tenseArray,numberArray,genderArray,personArray){
    const filteredVerb = verbArray.filter((verb) => verb.verbID === 84);

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
   //IF INDICATIVE
  if (moodArray.includes(indicative) === true) {
    //ALWAYS IN PRESENT, OR passeCompose OR plusQueParfait OR passeSimple OR passeAnterieur OR futurSimple OR futurAnterieur
    if (
      tenseArray.includes(present) === false &&
      tenseArray.includes(passeCompose) === false &&
      tenseArray.includes(plusQueParfait) === false &&
      tenseArray.includes(passeSimple) === false &&
      tenseArray.includes(passeAnterieur) === false &&
      tenseArray.includes(futurSimple) === false &&
      tenseArray.includes(futurAnterieur) === false
    ) {
      return {
        element: "verb " + filteredVerb[0].value,
        missingType: "tense",
        missing: [
          present,
          passeCompose,
          plusQueParfait,
          passeSimple,
          passeAnterieur,
          futurSimple,
          futurAnterieur,
        ],
      };
    }
}
   return null
}