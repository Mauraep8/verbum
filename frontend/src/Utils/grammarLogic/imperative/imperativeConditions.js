import {
    firstPerson,
    imperative,
    passe,
    plural,
    present,
    secondPerson,
} from "../../grammarTerms";

export default function imperativeConditions (tenseArray,numberArray,personArray) {
    if (
        tenseArray.includes(present) === false &&
        tenseArray.includes(passe) === false
      ) {
        return{
            element: imperative,
            missingType: 'tense',
            missing: [present, passe],
        }  
      }

      if (
        personArray.includes(firstPerson) === true &&
        numberArray.includes(plural) === false
      ) {
        return{
            element: [imperative, 'first person'],
            missingType: "number",
            missing: [plural],
        }
      }
      if (
        personArray.includes(firstPerson) === false &&
        personArray.includes(secondPerson) === false
      ) {
        return{
            element: imperative,
            missingType: 'person',
            missing: [firstPerson, secondPerson],
        }
      }
  return null
}