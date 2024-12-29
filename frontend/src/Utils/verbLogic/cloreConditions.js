import {
    futurAnterieur,
    futurSimple,
    imperative,
    indicative,
    passe,
    passeAnterieur,
    passeCompose,
    plusQueParfait,
    present,
    singular,
    subjunctive,
    secondPerson
  } from "../grammarTerms";

   
  export default function cloreConditions(
    verbArray,
    moodArray,
    tenseArray,
    personArray,
    numberArray,
  ) {
    const filteredVerb = verbArray.filter((verb) => verb.verbID === 112);
    //IF INDICATIVE
    if (moodArray.includes(indicative) === true) {
      //ALWAYS IN PRESENT, OR passeCompose OR plusQueParfait OR passeAnterieur OR futurSimple OR futurAnterieur [never passeSimple or imparfait]
      if (
        tenseArray.includes(present) === false &&
        tenseArray.includes(passeCompose) === false &&
        tenseArray.includes(plusQueParfait) === false &&
        tenseArray.includes(passeAnterieur) === false &&
        tenseArray.includes(futurSimple) === false &&
        tenseArray.includes(futurAnterieur) === false
      ) {
        return {
          element: ["verb " + filteredVerb[0].value, `l'${indicative}`],
          missingType: "tense",
          missing: [
            present,
            passeCompose,
            plusQueParfait,
            passeAnterieur,
            futurSimple,
            futurAnterieur,
          ],
        };
      }
    }
    //IF SUBJUNCTIVE
    // TENSES ALWAYS IN plusQueParfait OR passe OR present [never imparfait]
    if (moodArray.includes(subjunctive) === true && tenseArray.includes(plusQueParfait) === false && tenseArray.includes(passe) === false && tenseArray.includes(present) === false ) {
      return {
        element: ["verb " + filteredVerb[0].value, `le ${subjunctive}`],
        missingType: "tense",
        missing: [passe, plusQueParfait, present],
      };
    }

    //IF IMPERATIVE 
    
    if (moodArray.includes(imperative)===true){

      //IF PRESENT ALWAYS IN SINGULAR
      if(tenseArray.includes(present)===true && numberArray.includes(singular)===false){
            return {
                element: ["verb " + filteredVerb[0].value, `l'${imperative} ${present}`],
                missingType: "number",
                missing: [
                  singular,
                ],
            };
      // if present ALWAYS IN 2ND PERSON, NEVER 1ST PERSON 
      } else if(tenseArray.includes(present)===true & personArray.includes(secondPerson)===false){
        return {
            element: ["verb " + filteredVerb[0].value, `l'${imperative} ${present}`],
            missingType: "person",
            missing: [
              secondPerson,
            ],
        };
      }
    
        return null;
  }
  return null
}
  
 