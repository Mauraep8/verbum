import {
    conditional,
    futurSimple,
    imparfait,
    imperative,
    indicative,
    present,
    secondPerson,
    subjunctive,
  } from "../grammarTerms";

   
  export default function paitreConditions(
    verbArray,
    moodArray,
    tenseArray,
    personArray
  ) {
    const filteredVerb = verbArray.filter((verb) => verb.verbID === 127);
    //IF INDICATIVE
    if (moodArray.includes(indicative) === true) {
      //ALWAYS IN PRESENT OR futurSimple or imparfait [never passeSimple passeCompose plusQueParfait passeAnterieur, futurAnterieur]
      if (
        tenseArray.includes(present) === false &&
        tenseArray.includes(futurSimple) === false &&
        tenseArray.includes(imparfait) === false
      ) {
        return {
          element: ["verb " + filteredVerb[0].value, `l'${indicative}`],
          missingType: "tense",
          missing: [
            present,
            imparfait,
            futurSimple,
          ],
        };
      }
    }
    //IF SUBJUNCTIVE
    // TENSES ALWAYS IN present [never imparfait plusQueParfait OR passe]
    if (moodArray.includes(subjunctive) === true && tenseArray.includes(present) === false ) {
      return {
        element: ["verb " + filteredVerb[0].value, `le ${subjunctive}`],
        missingType: "tense",
        missing: [present],
      };
    }
    //IF IMPERATIVE     
    if (moodArray.includes(imperative)===true){
      //ALWAYS IN PRESENT
      if(tenseArray.includes(present)===false){
        return {
            element: ["verb " + filteredVerb[0].value, `l'${imperative}`],
            missingType: "tense",
            missing: [
              present,
            ],
        };
      }
      //ALWAYS IN 2ND PERSON, NEVER 1ST PERSON  
      if(personArray.includes(secondPerson)===false){
        return {
            element: ["verb " + filteredVerb[0].value, `l'${imperative}`],
            missingType: "person",
            missing: [
              secondPerson,
            ],
        };
      }
    }
    //IF CONDITIONAL
    //ALWAYS IN PRESENT NEVER IN PASSE
    if(moodArray.includes(conditional)===true && tenseArray.includes(present)===false){
      return {
        element: ["verb " + filteredVerb[0].value, `le ${conditional}`],
        missingType: "tense",
        missing: [
          present,
        ],
    };
    }
    return null;
  }
  
 