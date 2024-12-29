import {
    futurAnterieur,
    futurSimple,
    imparfait,
    indicative,
    passe,
    passeAnterieur,
    passeCompose,
    plusQueParfait,
    present,
    subjunctive,
  } from "../grammarTerms";

   
  export default function absoudreConditions(
    verbArray,
    moodArray,
    tenseArray,
  ) {
    const filteredVerb = verbArray.filter((verb) => verb.verbID === 92);
  
    //IF INDICATIVE
    //ALWAYS IN PRESENT, OR passeCompose OR plusQueParfait OR imparfait OR passeAnterieur OR futurSimple OR futurAnterieur [never passeSimple]
    if (
      moodArray.includes(indicative) === true &&
      tenseArray.includes(present) === false &&
      tenseArray.includes(passeCompose) === false &&
      tenseArray.includes(plusQueParfait) === false &&
      tenseArray.includes(imparfait) === false &&
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
          imparfait,
          passeAnterieur,
          futurSimple,
          futurAnterieur,
        ],
      };
    }
    //IF SUBJUNCTIVE
    //ALWAYS IN present OR plusQueParfaitse OR passe [never imparfait]
    if (
      moodArray.includes(subjunctive) === true &&
      tenseArray.includes(present) === false &&
      tenseArray.includes(plusQueParfait) === false &&
      tenseArray.includes(passe) === false
    ) {
      return {
        element: ["verb " + filteredVerb[0].value, `le ${subjunctive}`],
        missingType: "tense",
        missing: [present, passe, plusQueParfait],
      };
    }
    return null;
  }
  
 