import { engine, randomNumber } from '../src/index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function getRandomNumbers() {
  const randomNumbers = [];
  let count = 0;
  while (count < 3) {
    const randomNumb = randomNumber(100, 2);
    randomNumbers.push(randomNumb);
    count += 1;
  }
  return randomNumbers;
}

const randomNumbers = getRandomNumbers();

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

function getCorrectAnswers(numbers) {
  const correctAnswers = [];
  numbers.forEach((number) => {
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    correctAnswers.push(correctAnswer);
  });
  return correctAnswers;
}

const correctAnswers = getCorrectAnswers(randomNumbers);

function getQuestions(numbers) {
  const questions = [];
  numbers.forEach((number) => {
    const question = `Question: ${number}`;
    questions.push(question);
  });
  return questions;
}

const questions = getQuestions(randomNumbers);

export default function prime() {
  engine(rule, correctAnswers, questions);
}
