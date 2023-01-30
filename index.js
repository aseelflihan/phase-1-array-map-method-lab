const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];




const titleCased = () => {
  const tutorialArr = tutorials.map((y) => UpperCaseWord(y));
  return tutorialArr;
};

function UpperCaseWord(string) {
  const wordsArr = string.split(" ");
  const upWordsArr = wordsArr.map((word) => {
    const sentence = word.charAt(0).toUpperCase() + word.slice(1);
    return sentence;
  });
  const normalSentence = upWordsArr.join(" ");
  return normalSentence;
}
console.log(titleCased());