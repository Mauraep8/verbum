import { shuffleArray } from '../../shuffleArray'
import {present, passe} from "../../grammarTerms";

export default function shuffleConditionalTenses (shuffleState, verbResult) {
if (verbResult.result.verbID === 127 || verbResult.result.verbID === 79){
    const filteredTense = shuffleState.tenseArrayChecked.filter(
      (obj) =>  obj.value === present
    );
    return shuffleArray(filteredTense)
} else {
  const filteredTense = shuffleState.tenseArrayChecked.filter(
    (obj) => obj.value === passe || obj.value === present
    );
    return shuffleArray(filteredTense)
  }

}
  

