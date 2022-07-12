import { engine, randomNumber } from '../src/index.js';

const rules = 'What number is missing in the progression?';

function getRandomSequencesArray() {
  const resultArray = [];
  let count = 0;

  while (count < 3) {
    const sequenceLength = randomNumber(10, 5);

    const start = randomNumber(100);
    const step = randomNumber(10, 2);

    const arrayProgression = [start];

    let numberInTheSequence = start;

    for (let i = 0; i < sequenceLength - 1; i += 1) {
      numberInTheSequence += step;
      arrayProgression.push(numberInTheSequence);
    }
    resultArray.push(arrayProgression);

    count += 1;
  }
  return resultArray;
}

const sequencesArray = getRandomSequencesArray();

function getArrayOfIndexForHiddenNumber(arrayOfArraysSequence) {
  const resultArray = [];
  for (const arrayOfSequences of arrayOfArraysSequence) {
    const randomIndexOfArray = randomNumber(arrayOfSequences.length);
    resultArray.push(randomIndexOfArray);
  }
  return resultArray;
}

const indicesForHiddenNumber = getArrayOfIndexForHiddenNumber(sequencesArray);

function correctAnswersArray() {
  const correctAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const indexOfCurrentHiddenNumber = indicesForHiddenNumber[i];
    const stringCorrectAnswer = String(sequencesArray[i][indexOfCurrentHiddenNumber]);
    correctAnswers.push(stringCorrectAnswer);
  }
  return correctAnswers;
}

const correctAnswers = correctAnswersArray();

function hideTheItems() {
  for (let i = 0; i < sequencesArray.length; i += 1) {
    const indexOfCurrentHiddenNumber = indicesForHiddenNumber[i];
    sequencesArray[i][indexOfCurrentHiddenNumber] = '..';
  }
}

hideTheItems();

function getQuestions(twoDimensionArray) {
  const resultArray = [];
  let stringProgression = '';
  for (const array of twoDimensionArray) {
    stringProgression = array.join(' ');
    const question = `Question: ${stringProgression}`;
    resultArray.push(question);
  }
  return resultArray;
}

const questions = getQuestions(sequencesArray);

export default function progression() {
  engine(rules, correctAnswers, questions);
}
