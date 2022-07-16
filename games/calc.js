import { engine, randomNumber } from '../src/index.js';

const rule = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

function getRandomPartsOfTheExpressions() {
  const partsOfTheExpressions = [];
  let count = 0;
  while (count < 3) {
    const firstNumber = randomNumber(100);
    const secondNumber = randomNumber(100);
    const operator = operators[randomNumber(3)];
    partsOfTheExpressions.push([firstNumber, operator, secondNumber]);
    count += 1;
  }
  return partsOfTheExpressions;
}

const randomPartsOfTheExpressions = getRandomPartsOfTheExpressions();

function getCorrectAnswer(firstN, opr, secondN) {
  switch (opr) {
    case '+':
      return firstN + secondN;
    case '-':
      return firstN - secondN;
    case '*':
      return firstN * secondN;
    default:
      return console.log('Дефолт произойти не может, но линтер требует');
  }
}

function getCorrectAnswers(partsOfTheExpressions) {
  const correctAnswers = [];
  partsOfTheExpressions.forEach((partsOfExpression) => {
    const [firstNumber, operator, secondNumber] = partsOfExpression;
    const stringCorrectAnswer = String(getCorrectAnswer(firstNumber, operator, secondNumber));
    correctAnswers.push(stringCorrectAnswer);
  });
  return correctAnswers;
}

const correctAnswers = getCorrectAnswers(randomPartsOfTheExpressions);

function getQuestions(partsOfTheExpressions) {
  const questions = [];
  partsOfTheExpressions.forEach((partsOfExpression) => {
    const [firstNumber, operator, secondNumber] = partsOfExpression;
    questions.push(`Question: ${firstNumber} ${operator} ${secondNumber}`);
  });
  return questions;
}

const questions = getQuestions(randomPartsOfTheExpressions);

function calc() {
  engine(rule, correctAnswers, questions);
}

export default calc;
