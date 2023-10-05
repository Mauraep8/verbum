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

export default function choirConditions(
  verbArray,
  moodArray,
  tenseArray,
  numberArray,
  genderArray,
  personArray
) {
  const filteredVerb = verbArray.filter((verb) => verb.verbID === 82);

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
    // IF PRESENT PLURAL INDICATIVE, ALWAYS IN 3RD PERSON
    if (tenseArray.includes(present) === true) {
      if (
        numberArray.includes(plural) === true &&
        personArray.includes(thirdPerson) === false
      ) {
        return {
          element: [
            "verb " + filteredVerb[0].value,
            "plural present indicative",
          ],
          missingType: "person",
          missing: [thirdPerson],
        };
      }
    }
  }
  //IF SUBJUNCTIVE
  if (moodArray.includes(subjunctive) === true) {

    //IF IMPERFECT SUBJUNCTIVE, ALWAYS SINGULAR
    if (tenseArray.includes(imparfait) === true) {
      if (
        numberArray.includes(singular) === false
      ) {
        return {
          element: [
            "verb " + filteredVerb[0].value,
            "plural imperfect subjunctive",
          ],
          missingType: "number",
          missing: [singular],
        };
      }
    }
      // IF PRESENT PLURAL SUBJUNCTIVE, ALWAYS IN 3RD PERSON
  if (tenseArray.includes(present) === true) {
    if (
      numberArray.includes(plural) === true &&
      personArray.includes(thirdPerson) === false
    ) {
      return {
        element: [
          "verb " + filteredVerb[0].value,
          "plural present subjunctive",
        ],
        missingType: "person",
        missing: [thirdPerson],
      };
    }
  }
  }

  return null;
}