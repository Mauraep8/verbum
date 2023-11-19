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
    secondPerson,
    singular,
    subjunctive,
  } from "../grammarTerms";

   
  export default function frireConditions(
    verbArray,
    moodArray,
    tenseArray,
    personArray,
    numberArray,
  ) {
    const filteredVerb = verbArray.filter((verb) => verb.verbID === 108);
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
      //IF INDICATIVE PRESENT, ALWAYS IN SINGULAR NUMBER
      if(tenseArray.includes(present)===true&& numberArray.includes(singular)===false){
        return {
            element: ["verb " + filteredVerb[0].value, `l'${indicative} ${present}`],
            missingType: "number",
            missing: [singular],
          };
      }
    }
    //IF SUBJUNCTIVE
    // TENSES ALWAYS IN plusQueParfait OR passe [never imparfait or present]
    if (moodArray.includes(subjunctive) === true && tenseArray.includes(plusQueParfait) === false && tenseArray.includes(passe) === false ) {
      return {
        element: ["verb " + filteredVerb[0].value, `le ${subjunctive}`],
        missingType: "tense",
        missing: [passe, plusQueParfait],
      };
    }

    //IF IMPERATIVE 
    //PRESENT ALWAYS IN SINGULAR
    if (moodArray.includes(imperative)===true && tenseArray.includes(present)===true && numberArray.includes(singular)===false){
        return {
            element: ["verb " + filteredVerb[0].value, `l'${imperative} ${present}`],
            missingType: "number",
            missing: [
              singular,
            ],
        };
    //present always in second person
    } else if (moodArray.includes(imperative)===true && tenseArray.includes(present)===true && personArray.includes(secondPerson)===false){
      return {
          element: ["verb " + filteredVerb[0].value, `l'${imperative} ${present}`],
          missingType: "person",
          missing: [secondPerson,],
      };
    }
    return null;
  }
  
 