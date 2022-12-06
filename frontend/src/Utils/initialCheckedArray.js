import { fetchVerbs } from "../Store/verbAPI";





export const personCheckedArray = [
  { value: "1er", status: true, category: "person" },
  { value: "2ème", status: true, category: "person" },
  { value: "3ème", status: true, category: "person" },
];
export const genderArrayChecked = [
  { value: "féminin", status: true, category: "gender" },
  { value: "masculin", status: true, category: "gender" },
  { value: "-none-", status: true, category: "gender" },
];
export const numberArrayChecked = [
  { value: "singulier", status: true, category: "number" },
  { value: "pluriel", status: true, category: "number" },
];
export const tenseArrayChecked = [
  { value: "présent", status: true, category: "tense" },
  { value: "passé composé", status: true, category: "tense" },
  { value: "imparfait", status: true, category: "tense" },
  { value: "plus-que-parfait", status: true, category: "tense" },
  { value: "passé", status: true, category: "tense" },
  { value: "passé simple", status: true, category: "tense" },
  { value: "passé antérieur", status: true, category: "tense" },
  { value: "futur simple", status: true, category: "tense" },
  { value: "futur antérieur", status: true, category: "tense" },
];
export const moodArrayChecked = [
  { value: "indicatif", status: true, category: "mood" },
  { value: "subjonctif", status: true, category: "mood" },
  { value: "impératif", status: true, category: "mood" },
  { value: "conditionnel", status: true, category: "mood" },
];



// const newthing = personCheckedArray.map(singleObject=> {

//     const newProp = {
//         value: singleObject.verbName,
//         status: true,
//         category: 'verb'
//     }
//     return Object.assign(singleObject, newProp)
// })

// console.log(newthing)
