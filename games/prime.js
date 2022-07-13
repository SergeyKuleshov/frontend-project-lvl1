import { engine, randomNumber } from '../src/index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function getRandomNumbersArray() {
  const resultArray = [];
  let count = 0;
  while (count < 3) {
    const randomNumb = randomNumber(100, 2);
    resultArray.push(randomNumb);
    count += 1;
  }
  return resultArray;
}

const randomNumbersArray = getRandomNumbersArray();

function isPrime(number) {
  let divideWithoutRemainder = 0;
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      divideWithoutRemainder += 1;
    }
  }
  if (divideWithoutRemainder > 2) {
    return false;
  }
  return true;
}

function getCorrectAnswers() {
  const resultArray = [];
  for (const number of randomNumbersArray) {
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    resultArray.push(correctAnswer);
  }
  return resultArray;
}

const correctAnswers = getCorrectAnswers();

function getQuestions() {
  const resultArray = [];
  for (const number of randomNumbersArray) {
    const question = `Question: ${number}`;
    resultArray.push(question);
  }
  return resultArray;
}

const questions = getQuestions();

export default function prime() {
  engine(rules, correctAnswers, questions);
}
