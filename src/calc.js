import readlineSync from 'readline-sync';
import greetings from './cli.js';

function resultOfExpression(leftNumb, rightNumb, opr) {
  let result;
  switch (opr) {
    case '+':
      result = leftNumb + rightNumb;
      break;
    case '-':
      result = leftNumb - rightNumb;
      break;
    case '*':
      result = leftNumb * rightNumb;
      break;
    default:
      result = NaN;
      break;
  }
  return result;
}

const arrayOfOperator = ['+', '-', '*'];


function randomNumber(range) {
  return Math.floor(Math.random() * range);
}


function calc() {
  //  \\\\\приветствие \ПОВТОР\
  const name = greetings();

  //  {{{Здесь новое
  console.log('What is the result of the expression?');

  // const correctAnswerFunction = (number) => {
  //   const result = number % 2 === 0 ? 'yes' : 'no';
  //   return result;
  // };

  //  \\\\\\ВСЕГДА ТРИ ВОПРОСА-ОТВЕТА
  for (let i = 0; i < 3; i += 1) {
    // {{{const randomNumber = Math.floor(Math.random() * 100);

    // {{{ блок с индивидуальной логикой
    const leftNumber = randomNumber(3);
    const rightNumber = randomNumber(3);
    const indexOfOperator = randomNumber(3);
    const operator = arrayOfOperator[indexOfOperator];

    // console.log(`Question: ${randomNumber}`);
    console.log(`Question: ${leftNumber} ${operator} ${rightNumber}`);

    //  \\\\\Вопрос и получение ответа \повтор\
    const answer = Number(readlineSync.question('Your answer: '));

    //  const correctAnswer = correctAnswerFunction(randomNumber);
    const correctAnswer = resultOfExpression(leftNumber, rightNumber, operator);

    //  \\\\\Проверка на правильность ответа. Поздравление или проигрыш -
    //  \все повторяется\
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer 
was '${correctAnswer}'.\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
}

export default calc;

// - bin/games/brain-game
// - bin/games/brain-even
// - bin/games/brain-calc

// - src/cli.js
// - src/even.js
// - src/calc.js
// - src/index.js
