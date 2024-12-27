import { passe, feminin, plusQueParfait} from "../grammarTerms";

//api format
const passeAnterieur = 'passé-antérieur'
const passeCompose = 'passé-composé'
const futurAnterieur = 'futur-antérieur'


export function otherMoodAnswerFeminization(array,arrayIndex,verbObject,tense,number,gender,person) {

  let answer;

  // if verb is pleuvoir or falloir
  if (verbObject.verbID === 75 || verbObject.verbID === 66) {
    answer = array[0];

    // all other verbs
  } else {
    // nous pronoun index
    if (person === 1 && number === 2) {
      answer = array[3];
      // vous pronoun index
    } else if (person === 2 && number === 2) {
      answer = array[4];
      // all other pronoun index
    } else {
      answer = array[arrayIndex - 1];
    }
  }

  //all other verbs
  // singular
  if (number === 1) {
    if (person === 3 && gender === feminin) {
      // aller 3rd person change pronoun and add 'e'
      if (
        verbObject.auxiliaryVerb === "être" &&
        (tense === plusQueParfait || tense === passeCompose || tense === passe || tense === passeAnterieur || tense === futurAnterieur)
      ) {
        const feminizedPronoun = answer.replace(/il/, "elle");
        const feminizedAnswer = feminizedPronoun + "e";
        return feminizedAnswer;

        // regular verbs in 3rd person
      } else {
        const feminizedAnswer = answer.replace(/il/, "elle");
        return feminizedAnswer;
      }
    } else if ((person === 2 || person === 1) && gender === feminin) {
      // aller add 'e' to person 1, 2
      if (
        verbObject.auxiliaryVerb === "être" &&
        (tense === plusQueParfait || tense === passeCompose || tense === passe || tense === passeAnterieur || tense === futurAnterieur)
      ) {
        const feminizedAnswer = answer + "e";
        return feminizedAnswer;
        // regular verbs no e
      } else {
        return answer;
      }
    } else {
      return answer;
    }

    //all other verbs
    //plural
  } else if (number === 2) {
    if (person === 3 && gender === feminin) {
      // aller 3rd person change pronoun and add 'e'
      if (
        verbObject.auxiliaryVerb === "être" &&
        (tense === plusQueParfait ||
          tense === passe ||
          tense === passeCompose ||
          tense === passeAnterieur ||
          tense === futurAnterieur)
      ) {
        const feminizedPronoun = answer.replace(/ils/, `elles`);
        const feminizedAnswer = feminizedPronoun.slice(0, -1) + "es";
        return feminizedAnswer;
        // regular verbs change pronoun
      } else {
        const feminizedAnswer = answer.replace(/ils/, `elles`);
        return feminizedAnswer;
      }
    } else if ((person === 1 || person === 2) && gender === feminin) {
  
      // aller add an es
      if (
        verbObject.auxiliaryVerb === "être" &&
        (tense === plusQueParfait ||
          tense === passe ||
          tense === passeCompose ||
          tense === passeAnterieur ||
          tense === futurAnterieur)
      ) {
        const feminizedAnswer = answer.slice(0, -1) + "es";
        return feminizedAnswer;
        // regular verbs
      } else {
        return answer;
      }
      // all other persons or genders
    } else {
      return answer;
    }
  }
}