import { shuffleArray } from '../../shuffleArray'
import {present,passeCompose, plusQueParfait,passeAnterieur,futurAnterieur,passeSimple,passe,imperative,subjunctive,imparfait,conditional } from "../../grammarTerms";

export default function shuffleConditionalTenses (shuffleState, verbResult) {

    const filteredTense = shuffleState.tenseArrayChecked.filter(
      (obj) => obj.value === passe || obj.value === present
    );
    return shuffleArray(filteredTense)

}
  

