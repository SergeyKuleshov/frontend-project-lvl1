import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';
import randomNumber from '../src/index.js';

function quiz() {
  const name = greetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const correctAnswerFunction = (number) => {
    const result = number % 2 === 0 ? 'yes' : 'no';
    return result;
  };

  for (let i = 0; i < 3; i += 1) {
    const number = randomNumber(1000);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = correctAnswerFunction(number);
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
}

export default quiz;
