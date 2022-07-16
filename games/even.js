import { engine, randomNumber } from '../src/index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

function getRandomNumbers() {
  const randomNumbers = [];
  let count = 0;
  while (count < 3) {
    randomNumbers.push(randomNumber(100));
    count += 1;
  }
  return randomNumbers;
}

const randomNumbers = getRandomNumbers();

function isEven(number) {
  const result = number % 2 === 0;
  return result;
}

function getCorrectAnswers(numbers) {
  const correctAnswers = [];
  numbers.forEach((number) => {
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    correctAnswers.push(correctAnswer);
  });
  return correctAnswers;
}

const correctAnswers = getCorrectAnswers(randomNumbers);

function getQuestions(numbers) {
  const questions = [];
  for (let i = 0; i < numbers.length; i += 1) {
    questions.push(`Question: ${numbers[i]}`);
  }
  return questions;
}

const questions = getQuestions(randomNumbers);

function even() {
  engine(rule, correctAnswers, questions);
}

export default even;
