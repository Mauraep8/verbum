import { shuffleArray } from '../../Utils/shuffleArray'
import {  imperative } from "../grammarTerms";

//verbs without imperatif 
//choir 82 
//dechoir 84
//echoir 83
//faillir 59
//falloir 66
//faseyer 30
//pleuvoir 75
//pouvoir 78
//seoir 79



export default function shuffleMood(shuffleState,verbResult) {
  if (
    verbResult.result.verbID === 82 ||
    verbResult.result.verbID === 84 ||
    verbResult.result.verbID === 83 ||
    verbResult.result.verbID === 59 ||
    verbResult.result.verbID === 66 ||
    verbResult.result.verbID === 30 ||
    verbResult.result.verbID === 75 ||
    verbResult.result.verbID === 78 ||
    verbResult.result.verbID === 79
  ) {
    const filteredMood = shuffleState.moodArrayChecked.filter(
      (obj) => obj.value !== imperative
    );
    return shuffleArray(filteredMood);
  } else {
    return shuffleArray(shuffleState.moodArrayChecked);
  }
}