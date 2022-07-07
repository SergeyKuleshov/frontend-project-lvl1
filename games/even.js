import { engine, randomNumber } from '../src/index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

function getRandomNumbersArray() {
  const randomNumbersArray = [];
  let count = 0;
  while (count < 3) {
    randomNumbersArray.push(randomNumber(100));
    count += 1;
  }
  return randomNumbersArray;
}

const numbersArray = getRandomNumbersArray();

function getCorrectAnswer(number) {
  const result = number % 2 === 0 ? 'yes' : 'no';
  return result;
}

function getArrayCorrectAnswers(arr) {
  const arrayCorrectAnswers = [];
  for (let i = 0; i < arr.length; i += 1) {
    arrayCorrectAnswers.push(getCorrectAnswer(arr[i]));
  }
  return arrayCorrectAnswers;
}

const arrayCorrectAnswers = getArrayCorrectAnswers(numbersArray);

function evenQuestions(arr) {
  const questionsArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    questionsArray.push(`Question: ${arr[i]}`);
  }
  return questionsArray;
}

const questions = evenQuestions(numbersArray);

function even() {
  engine(rules, arrayCorrectAnswers, questions);
}

export default even;
