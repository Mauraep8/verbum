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

//never imperatif mood, indicative (only present, imparfait, futur), subjunctive and conditional (only present)3rd person only
export default function seoir (verbArray,moodArray,tenseArray,personArray){
      
        const filteredVerb = verbArray.filter((verb) => verb.verbID === 79);

        //verify mood
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
        //verify indicative tenses
        if (moodArray.includes(indicative)) {
          if (
            tenseArray.includes(present) === false &&
            tenseArray.includes(imparfait) === false &&
            tenseArray.includes(futurSimple) === false
          ) {
            return {
              element: ["verb " + filteredVerb[0].value, indicative],
              missingType: "tense",
              missing: [present, imparfait, futurSimple],
            };
          }
        }
        //verify subjunctive tenses
        if (moodArray.includes(subjunctive)) {
          if (tenseArray.includes(present) === false) {
            return {
              element: ["verb " + filteredVerb[0].value, subjunctive],
              missingType: "tense",
              missing: [present],
            };
          }
        }
        //verify conditional tenses
        if (moodArray.includes(conditional)) {
          if (tenseArray.includes(present) === false) {
            return {
              element: ["verb " + filteredVerb[0].value, conditional],
              missingType: "tense",
              missing: [present],
            };
          }
        }
        //verify 3rd person
        if (personArray.includes(thirdPerson) === false) {
          return {
            element: "verb " + filteredVerb[0].value,
            missingType: "person",
            missing: [thirdPerson],
          };
        }
        return null;  
}