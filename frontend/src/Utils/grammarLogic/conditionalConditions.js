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

export default function conditionalConditions(tenseArray) {
  if (
    tenseArray.includes(present) === false &&
    tenseArray.includes(passe) === false
  ) {
    return{
        element: conditional,
        missingType: "tense",
        missing: [present, passe],
      }
    }
    return null
}
