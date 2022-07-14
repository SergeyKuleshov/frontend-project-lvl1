import { randomNumber, engine } from '../src/index.js';

const gcdRules = 'Find the greatest common divisor of given numbers';

function getRandomNumbersArray() {
  let count = 0;
  const resultArray = [];
  while (count < 3) {
    const firstNumber = randomNumber(100);
    const secondNumber = randomNumber(100);
    resultArray.push([firstNumber, secondNumber]);
    count += 1;
  }
  return resultArray;
}

const numbersForGcd = getRandomNumbersArray();

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

function getArrayCorrectAnswer(twoDimensionsArray) {
  const resultArray = [];
  twoDimensionsArray.forEach((arrayWithTwoNumbersForGcd) => {
    const [firstNumber, secondNumber] = arrayWithTwoNumbersForGcd;
    resultArray.push(getCorrectAnswer(firstNumber, secondNumber));
  });
  return resultArray;
}

const arrayCorrectAnswers = getArrayCorrectAnswer(numbersForGcd);

function getGcdQuestions(twoDimensionsArray) {
  const resultArray = [];
  twoDimensionsArray.forEach((arrayWithTwoNumbersForGcd) => {
    const [firstNumber, secondNumber] = arrayWithTwoNumbersForGcd;
    const strQuestion = `Question: ${firstNumber} ${secondNumber}`;
    resultArray.push(strQuestion);
  });
  return resultArray;
}

const gcdQuestions = getGcdQuestions(numbersForGcd);

function gcd() {
  engine(gcdRules, arrayCorrectAnswers, gcdQuestions);
}

export default gcd;
