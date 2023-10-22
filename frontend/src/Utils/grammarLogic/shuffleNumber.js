import { shuffleArray } from '../../Utils/shuffleArray'
import {  imperative, firstPerson, present, plural, singular, indicative, secondPerson, subjunctive, imparfait } from "../grammarTerms";

export default function shuffleNumber (shuffleState, verbResult, moodResult, tenseResult, personResult) {

     //falloir 66 only in singulier
    if (verbResult.result.verbID === 66 ) {
        const filteredNumber = shuffleState.numberArrayChecked.filter(
          (obj) => obj.value === singular
        );
        return shuffleArray(filteredNumber);
    
    //clore 112 imperatif present always singular  
    } else if (verbResult.result.verbID === 108 && moodResult.result.value === imperative && tenseResult.result.value === present){
      const filteredNumber = shuffleState.numberArrayChecked.filter(
        (obj) => obj.value === singular
      );
      return shuffleArray(filteredNumber);

      //frire 108 indicative or imperatif present always singular  
    } else if (verbResult.result.verbID === 108 && (moodResult.result.value === indicative||moodResult.result.value === imperative) && tenseResult.result.value === present){
      const filteredNumber = shuffleState.numberArrayChecked.filter(
        (obj) => obj.value === singular
      );
      return shuffleArray(filteredNumber);

      // choir 82  
    } else if (verbResult.result.verbID === 82){
      //if person 1 or 2 always in singular in indicative and subjunctive present   
     if ((moodResult.result.value === subjunctive || moodResult.result.value === indicative) && tenseResult.result.value === present && (personResult.result.value === firstPerson || personResult.result.value === secondPerson)){
      const filteredNumber = shuffleState.numberArrayChecked.filter(
        (obj) => obj.value === singular
      );
      return shuffleArray(filteredNumber);
      //subjunctive imparfait always in singular
     } else if (moodResult.result.value === subjunctive && tenseResult.result.value === imparfait) {
      const filteredNumber = shuffleState.numberArrayChecked.filter(
        (obj) => obj.value === singular
      );
      return shuffleArray(filteredNumber);
     } else {
      return shuffleArray(shuffleState.numberArrayChecked);
     }
      
    //if imperatif and if person is 1, always plural
    } else if (moodResult.result.value === imperative && personResult.result.value === firstPerson) {
            const filteredNumber = shuffleState.numberArrayChecked.filter(
              (obj) => obj.value === plural
            );
          return shuffleArray(filteredNumber); 
    } else {
    
      // all other moods and persons and verbs
  
      return shuffleArray(shuffleState.numberArrayChecked);
    }
  }