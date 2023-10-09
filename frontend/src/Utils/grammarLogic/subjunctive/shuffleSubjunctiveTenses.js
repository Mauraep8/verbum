import { shuffleArray } from '../../shuffleArray'
import {present,passeCompose, plusQueParfait,passeAnterieur,futurAnterieur,passeSimple,passe,imperative,subjunctive,imparfait,conditional } from "../../grammarTerms";

export default function shuffleSubjunctiveTenses (shuffleState, verbResult) {
    // subjunctive only in present, passe, plusQueParfait, imparfait

    // if verb is traire 121 or clore 112 or absoudre 92, only present, passe, plusQueParfait
    if (
      verbResult.result.verbID === 121 ||
      verbResult.result.verbID === 112 ||
      verbResult.result.verbID === 92
    ) {
      const filteredTense = shuffleState.tenseArrayChecked.filter(
        (obj) =>
          obj.value === passe ||
          obj.value === present ||
          obj.value === plusQueParfait
      );
      return shuffleArray(filteredTense);

      // if verb is frire 108 only in plusQueParfait and passe
    } else if (
        verbResult.result.verbID === 108) {
        const filteredTense = shuffleState.tenseArrayChecked.filter(
          (obj) =>
            obj.value === passe ||
            obj.value === plusQueParfait
        );
        return shuffleArray(filteredTense);

    // if verb is paitre 127 or seoir 79 only in present
    } else if (
        verbResult.result.verbID === 127 || verbResult.result.verbID === 79) {
        const filteredTense = shuffleState.tenseArrayChecked.filter(
          (obj) =>
            obj.value === present 
        );
        return shuffleArray(filteredTense);

    // all other verbs take out everything that is not passe present imparfait plusQueParfait
    } else {
      const filteredTense = shuffleState.tenseArrayChecked.filter(
        (obj) =>
          obj.value === passe ||
          obj.value === present ||
          obj.value === imparfait ||
          obj.value === plusQueParfait
      );
      return shuffleArray(filteredTense);
    }
}

