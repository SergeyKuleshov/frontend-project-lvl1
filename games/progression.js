import { engine, randomNumber } from '../src/index.js';

const rule = 'What number is missing in the progression?';

function getRandomSequences() {
  const sequences = [];
  let count = 0;

  while (count < 3) {
    const sequenceLength = randomNumber(10, 5);

    const start = randomNumber(100);
    const step = randomNumber(10, 2);

    const sequenceOfNumbers = [start];

    let numberInTheSequence = start;

    for (let i = 0; i < sequenceLength - 1; i += 1) {
      numberInTheSequence += step;
      sequenceOfNumbers.push(numberInTheSequence);
    }
    sequences.push(sequenceOfNumbers);

    count += 1;
  }
  return sequences;
}

const sequences = getRandomSequences();

function getRandomIndicesForHiddenNumber(sequencesOfNumbers) {
  const indices = [];
  sequencesOfNumbers.forEach((arrayOfSequences) => {
    const randomIndex = randomNumber(arrayOfSequences.length);
    indices.push(randomIndex);
  });
  return indices;
}

const indicesForHiddenNumber = getRandomIndicesForHiddenNumber(sequences);

function getCorrectAnswers(indices, sequencesOfNumbers) {
  const correctAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const indexOfCurrentHiddenNumber = indices[i];
    const stringCorrectAnswer = String(sequencesOfNumbers[i][indexOfCurrentHiddenNumber]);
    correctAnswers.push(stringCorrectAnswer);
  }
  return correctAnswers;
}

const correctAnswers = getCorrectAnswers(indicesForHiddenNumber, sequences);

function hideTheItems(indices) {
  for (let i = 0; i < sequences.length; i += 1) {
    const indexOfCurrentHiddenNumber = indices[i];
    sequences[i][indexOfCurrentHiddenNumber] = '..';
  }
}

hideTheItems(indicesForHiddenNumber);

function getQuestions(sequencesOfNumbers) {
  const questions = [];
  sequencesOfNumbers.forEach((sequnce) => {
    const stringProgression = sequnce.join(' ');
    const question = `Question: ${stringProgression}`;
    questions.push(question);
  });
  return questions;
}

const questions = getQuestions(sequences);

export default function progression() {
  engine(rule, correctAnswers, questions);
}
