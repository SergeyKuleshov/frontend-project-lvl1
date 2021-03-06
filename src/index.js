import readlineSync from 'readline-sync';
import greetings from './cli.js';

function randomNumber(range, minNumber) {
  let result = Math.floor(Math.random() * range);
  if (minNumber) {
    if (result < minNumber) {
      result = randomNumber(range, minNumber);
    }
  }
  return result;
}

function engine(rule, correctAnswers, questions) {
  const name = greetings();
  console.log(rule);

  const round = 3;
  for (let i = 0; i < round; i += 1) {
    console.log(`${questions[i]}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = correctAnswers[i];

    if (correctAnswer !== answer) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
}

export { randomNumber, engine };
