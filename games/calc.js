import { engine, randomNumber } from '../src/index.js';

// engine(rules, arrayCorrectAnswers, questions);

const rules = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

function getRandomArraysOfExpressions() {
  const arrayOfExpressions = [];
  let count = 0;
  while (count < 3) {
    const firstNumber = randomNumber(100);
    const secondNumber = randomNumber(100);
    const operator = operators[randomNumber(3)];
    arrayOfExpressions.push([firstNumber, operator, secondNumber]);
    count += 1;
  }
  return arrayOfExpressions;
}

const arrayOfExpressions = getRandomArraysOfExpressions();

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

function getCorrectAnswersArray() {
  const correctAnswers = [];
  for (const partOfExpression of arrayOfExpressions) {
    const [firstNumber, operator, secondNumber] = partOfExpression;
    correctAnswers.push(String(getCorrectAnswer(firstNumber, operator, secondNumber)));
  }
  return correctAnswers;
}

const arrayCorrectAnswers = getCorrectAnswersArray();

function getQuestions() {
  const questions = [];
  for (const partOfExpression of arrayOfExpressions) {
    const [firstNumber, operator, secondNumber] = partOfExpression;
    questions.push(`Question: ${firstNumber} ${operator} ${secondNumber}`);
  }
  return questions;
}

const questions = getQuestions();

function calc() {
  engine(rules, arrayCorrectAnswers, questions);
}

export default calc;
