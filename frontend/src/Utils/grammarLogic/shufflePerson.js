import { shuffleArray } from '../../Utils/shuffleArray'
import {  imperative, thirdPerson, present, secondPerson } from "../grammarTerms";

export default function shufflePerson (shuffleState, verbResult, moodResult, tenseResult) {

    //verbs echoir 83, falloir 66, faseyer 30, pleuvoir 75, seoir 79 - always in 3rd person
    if (
      verbResult.result.verbID === 83 ||
      verbResult.result.verbID === 66 ||
      verbResult.result.verbID === 30 ||
      verbResult.result.verbID === 75 ||
      verbResult.result.verbID === 79
    ) {
      const filteredPerson = shuffleState.personArrayChecked.filter(
        (obj) => obj.value === thirdPerson
      );
     return shuffleArray(filteredPerson);

    } else {
      // if imperatif (general rule never in 3rd)
      if (moodResult.result.value === imperative) {

        // clore imperatif present always in 2nd person
        if (verbResult.result.verbID === 112 && tenseResult.result.value === present) {
          const filteredPerson = shuffleState.personArrayChecked.filter(
            (obj) => obj.value === secondPerson
          );
          return shuffleArray(filteredPerson);
        
        // all other verbs in imperatif never in 3rd person
        } else {
          const filteredPerson = shuffleState.personArrayChecked.filter(
            (obj) => obj.value !== thirdPerson
          );
          return shuffleArray(filteredPerson);
        }
    
        // all other verbs and moods shuffle without exceptions
      } else {
        const shuffledPerson = shuffleArray(shuffleState.personArrayChecked);
        return shuffledPerson;
      }
    }
  };