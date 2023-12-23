import { passe, feminin, plusQueParfait } from "../../grammarTerms";

export function subjunctiveAnswerFeminization(array,arrayIndex,verbObject,tense,number,gender,person) {

  //find the answer in the apiArray
  let answer;

  //if verb is pleuvoir or falloir
  if (verbObject.verbID === 75 || verbObject.verbID === 66) {
    answer = array[0];

    // ALL OTHER VERBS
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

  //ONCE ANSWER FOUND, NEXT STEP IS FEMINIZATION AND QU'IL/QU'ELLE REPLACEMENT OF THIRD PERSON PRONOUN

  // singular
  if (number === 1) {
    if (person === 3 && gender === feminin && verbObject.verbID !== 75) {

      // aller 3rd person change pronoun and add 'e'
      if (
        verbObject.auxiliaryVerb === "être" &&
        (tense === plusQueParfait || tense === passe)
      ) {
        const feminizedPronoun = answer.replace(/qu'il/, `qu'elle`);
        return feminizedPronoun + "e";

        // regular verbs in 3rd person feminized
      } else {
        return answer.replace(/qu'il/, `qu'elle`);
    
      }
    } else if ((person === 2 || person === 1) && gender === feminin) {

      // aller add e for person 1,2
      if (
        verbObject.auxiliaryVerb === "être" &&
        (tense === plusQueParfait || tense === passe)
      ) {
        return answer + "e";
       

        // regular verbs no e
      } else {
        return answer
      }
    } else {
      return answer
    }

    //plural
  } else if (number === 2) {
    if (person === 3 && gender === feminin) {
      // aller 3rd person change pronoun and add 'e'
      if (
        verbObject.auxiliaryVerb === "être" &&
        (tense === plusQueParfait || tense === passe)
      ) {
        const feminizedPronoun = answer.replace(/qu'ils/, `qu'elles`);
        return feminizedPronoun.slice(0, -1) + "es";
 
      } else {
        return answer.replace(/qu'ils/, `qu'elles`);
        
      }
    } else if ((person === 1 || person === 2) && gender === feminin) {
      // aller add an e
      if (
        verbObject.auxiliaryVerb === "être" &&
        (tense === plusQueParfait || tense === passe)
      ) {
        return answer.slice(0, -1) + "es";
        
      } else {
        return answer
      }
    } else {
      return answer
    }
  }
}
