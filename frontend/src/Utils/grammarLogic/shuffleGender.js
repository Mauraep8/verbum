import { shuffleArray } from '../../Utils/shuffleArray'
import { masculin } from "../grammarTerms";

export default function shuffleGender(shuffleState,verbResult) {
// verb pleuvoir 75 always in masculin
    if (verbResult.result.verbID === 75) {
        const filteredGender = shuffleState.genderArrayChecked.filter(
          (obj) => obj.value === masculin
        );
        return shuffleArray(filteredGender);
    // all other verbs    
      } else {
        return shuffleArray(shuffleState.genderArrayChecked);
    
      }
}