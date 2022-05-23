import { getRandomNumber } from "../utility.js";

const operators = ["+", "-"];

function multiplication(level) {
  const numbers = [];
  let answer;
  switch (level) {
    case 1:
      for (let i = 0; i < 2; i++) numbers.push(getRandomNumber(10));
      answer = numbers[0] * numbers[1];
      return {
        question: `${numbers[0]} &times; ${numbers[1]}`,
        answer: answer,
      };
    case 2:
      for (let i = 0; i < 2; i++) numbers.push(getRandomNumber(50));
      answer = numbers[0] * numbers[1];
      if (answer > 500) return multiplication(level);
      return {
        question: `${numbers[0]} &times; ${numbers[1]}`,
        answer: answer,
      };
    case 3:
      for (let i = 0; i < 2; i++) numbers.push(getRandomNumber(100));
      answer = numbers[0] * numbers[1];
      if (answer > 5000) return multiplication(level);
      return {
        question: `${numbers[0]} &times; ${numbers[1]}`,
        answer: answer,
      };
    case 4:
      for (let i = 0; i < 3; i++) numbers.push(getRandomNumber(100));
      answer = numbers[0] * (numbers[1] * numbers[2]);
      if (answer > 10000) return multiplication(level);
      return {
        question: `${numbers[0]} &times; (${numbers[1]} &times; ${numbers[2]})`,
        answer: answer,
      };
    case 5:
      for (let i = 0; i < 3; i++) numbers.push(getRandomNumber(1000));
      answer = numbers[0] * (numbers[1] * numbers[2]);
      if (answer > 100000) return multiplication(level);
      return {
        question: `${numbers[0]} &times; (${numbers[1]} &times; ${numbers[2]})`,
        answer: answer,
      };
    case 6:
      for (let i = 0; i < 3; i++) numbers.push(getRandomNumber(1000));
      const randomOperator = operators[Math.floor(Math.random() * operators.length)];
      answer = numbers[0] * (randomOperator === "+" ? numbers[1] + numbers[2] : numbers[1] - numbers[2]);
      if (answer > 100000) return multiplication(level);
      console.log(answer)
      return {
        question: `${numbers[0]} &times; (${numbers[1]} ${randomOperator} ${numbers[2]})`,
        answer: answer,
      };
  }
}

export default multiplication;
