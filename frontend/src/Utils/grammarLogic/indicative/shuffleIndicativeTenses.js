import { shuffleArray } from '../../shuffleArray'
import {passeCompose, plusQueParfait,passeAnterieur,futurAnterieur,passeSimple,passe,imparfait,} from "../../grammarTerms";

export default function shuffleIndicativeTenses (shuffleState, verbResult) {
  
      // if verb is clore 112 or frire 108 take out imparfait and passe simple and passe(never in indicatif)
    if (verbResult.result.verbID === 112 || verbResult.result.verbID === 108 ) {     
      const filteredTense = shuffleState.tenseArrayChecked.filter(
        (obj) =>
        obj.value !== imparfait &&
        obj.value !== passeSimple &&
        obj.value !== passe

      );
      return shuffleArray(filteredTense);

      // if verb is traire 121 or absoudre 92, take out passe simple and passe(never in indicatif)
    } else if (
      verbResult.result.verbID === 121 ||
      verbResult.result.verbID === 92
    ) {
      const filteredTense = shuffleState.tenseArrayChecked.filter(
        (obj) => 
        obj.value !== passeSimple &&
        obj.value !== passe
      );
      return shuffleArray(filteredTense);

    // if verb is choir 82 or dechoir 84, take out imparfait and passe(never in indicatif)
    } else if (
      verbResult.result.verbID === 84 ||
      verbResult.result.verbID === 82
    ) {
      const filteredTense = shuffleState.tenseArrayChecked.filter(
        (obj) => 
        obj.value !== imparfait &&
        obj.value !== passe
      );
      return shuffleArray(filteredTense);

    // if verb is paitre 127 or seoir 79, take out passeSimple, passeCompose, plusQueParfait,passeAnterieur,futurAnterieur and passe(never in indicatif)
    } else if (
      verbResult.result.verbID === 127 ||
      verbResult.result.verbID === 79
    ) {
      const filteredTense = shuffleState.tenseArrayChecked.filter(
        (obj) => 
        obj.value !== passeSimple &&
        obj.value !== passeCompose &&
        obj.value !== plusQueParfait &&
        obj.value !== passeAnterieur &&
        obj.value !== futurAnterieur &&
        obj.value !== passe
      );
      return shuffleArray(filteredTense);

      // all other verbs bc indicatif is never in passe
    } else {
      const filteredTense = shuffleState.tenseArrayChecked.filter(
        (obj) => obj.value !== passe
      );
      return shuffleArray(filteredTense);
    }
}

