import { shuffleArray } from '../../shuffleArray'
import {present,passeCompose, plusQueParfait,passeAnterieur,futurAnterieur,passeSimple,passe,imperative,subjunctive,imparfait,conditional } from "../../grammarTerms";

export default function shuffleSubjunctiveTenses (shuffleState, verbResult) {

    // if verb is traire #61 or clore #70 or #72, take out imparfait
    if (
      verbResult.result.verbID === 61 ||
      verbResult.result.verbID === 70 ||
      verbResult.result.verbID === 72
    ) {
      const filteredTense = shuffleState.tenseArrayChecked.filter(
        (obj) =>
          obj.value === passe ||
          obj.value === present ||
          obj.value === plusQueParfait
      );
      return shuffleArray(filteredTense);
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

