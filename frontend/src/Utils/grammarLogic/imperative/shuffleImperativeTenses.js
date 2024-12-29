import { shuffleArray } from '../../shuffleArray'
import {present,passe} from "../../grammarTerms";

export default function shuffleImperativeTenses (shuffleState, verbResult) {

    // if verb paitre 127 filter everything that is not present
    if (verbResult.result.verbID === 127) {
      const filteredTense = shuffleState.tenseArrayChecked.filter(
        (obj) => obj.value === present
      );
      return shuffleArray(filteredTense);

    // all other verbs filter out everything that is not passe and present
    } else {
      const filteredTense = shuffleState.tenseArrayChecked.filter(
        (obj) => obj.value === passe || obj.value === present
      );
      return shuffleArray(filteredTense);
    }
}
  