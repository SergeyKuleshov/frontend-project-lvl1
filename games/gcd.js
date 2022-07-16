import { randomNumber, engine } from '../src/index.js';

const rule = 'Find the greatest common divisor of given numbers';

function getRandomNumbers() {
  let count = 0;
  const randomNumbers = [];
  while (count < 3) {
    const firstNumber = randomNumber(100);
    const secondNumber = randomNumber(100);
    randomNumbers.push([firstNumber, secondNumber]);
    count += 1;
  }
  return randomNumbers;
}

const randomNumbers = getRandomNumbers();

function getCorrectAnswer(firstNumber, secondNumber) {
  let commonDivisor = 0;
  let count = 1;
  const minNumber = firstNumber < secondNumber ? firstNumber : secondNumber;
  while (count <= minNumber) {
    if (firstNumber % count === 0 && secondNumber % count === 0) {
      commonDivisor = count;
    }
    count += 1;
  }
  return String(commonDivisor);
}

function getCorrectAnswers(numbers) {
  const correctAnswers = [];
  numbers.forEach((twoNumbersForGcd) => {
    const [firstNumber, secondNumber] = twoNumbersForGcd;
    correctAnswers.push(getCorrectAnswer(firstNumber, secondNumber));
  });
  return correctAnswers;
}

const correctAnswers = getCorrectAnswers(randomNumbers);

function getQuestions(numbers) {
  const quesions = [];
  numbers.forEach((twoNumbersForGcd) => {
    const [firstNumber, secondNumber] = twoNumbersForGcd;
    const question = `Question: ${firstNumber} ${secondNumber}`;
    quesions.push(question);
  });
  return quesions;
}

const questions = getQuestions(randomNumbers);

function gcd() {
  engine(rule, correctAnswers, questions);
}

export default gcd;
