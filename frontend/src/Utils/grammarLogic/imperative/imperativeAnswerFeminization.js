import { passe, feminin } from "../../grammarTerms";

export function imperativeAnswerFeminization(array,verbObject,tense,number,gender,person) {
  // Imperatif request comes in array of 3 potential answers (tu, nous, vous)

  // 1st person
  if (person === 1) {
    // feminize ending if auxiliary is etre, feminin gender and passé tense
    if (
      verbObject.auxiliaryVerb === "être" &&
      gender === feminin &&
      tense === passe
    ) {
      return array[1].slice(0, -1) + "es";

      // other conditions no feminization
    } else {
      return array[1];
    }

    // 2nd person
  } else if (person === 2) {
    // singular
    if (number === 1) {
      // feminize ending if auxiliary is etre, feminin gender and passé tense
      if (
        verbObject.auxiliaryVerb === "être" &&
        gender === feminin &&
        tense === passe
      ) {
        return array[0] + "e";

        //other conditions no feminization
      } else {
        return array[0];
      }

      // plural
    } else if (number === 2) {
      // feminize ending if auxiliary is etre, feminin gender and passé tense
      if (verbObject.auxiliaryVerb === "être" && tense === passe) {
        return array[2].slice(0, -1) + "es";

        //other conditions no feminization
      } else {
        return array[2];
      }
    }
  }
}
