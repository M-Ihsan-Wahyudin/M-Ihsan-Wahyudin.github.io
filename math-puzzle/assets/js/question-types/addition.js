import { getRandomNumber } from '../utility.js'

function addiction(level) {
  const numbers = []
  let answer;
  switch (level) {
    case 1:
      for(let i = 0; i < 2; i++) numbers.push(getRandomNumber(10))
      answer = numbers[0] + numbers[1]
      return {
        question: `${numbers[0]} + ${numbers[1]}`,
        answer: answer
      }
    case 2:
      for(let i = 0; i < 2; i++) numbers.push(getRandomNumber(50))
      answer = numbers[0] + numbers[1]
      return {
        question: `${numbers[0]} + ${numbers[1]}`,
        answer: answer
      }
    case 3:
      for(let i = 0; i < 2; i++) numbers.push(getRandomNumber(100))
      answer = numbers[0] + numbers[1]
      return {
        question: `${numbers[0]} + ${numbers[1]}`,
        answer: answer
      }
    case 4:
      for(let i = 0; i < 3; i++) numbers.push(getRandomNumber(500))
      answer = numbers[0] + numbers[1] + numbers[2]
      return {
        question: `${numbers[0]} + ${numbers[1]} + ${numbers[2]}`,
        answer: answer
      }
    case 5:
      for(let i = 0; i < 3; i++) numbers.push(getRandomNumber(1000))
      answer = numbers[0] + numbers[1] + numbers[2]
      return {
        question: `${numbers[0]} + ${numbers[1]} + ${numbers[2]}`,
        answer: answer
      }
    case 6:
      for(let i = 0; i < 3; i++) numbers.push(getRandomNumber(10000))
      answer = numbers[0] + numbers[1] + numbers[2]
      return {
        question: `${numbers[0]} + ${numbers[1]} + ${numbers[2]}`,
        answer: answer
      }
  }
}

export default addiction