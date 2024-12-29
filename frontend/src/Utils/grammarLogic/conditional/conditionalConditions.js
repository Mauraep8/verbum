import {
  conditional,
  passe,
  present,
} from "../../grammarTerms";

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
