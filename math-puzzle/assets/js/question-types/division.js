import { getRandomNumber } from '../utility.js'

function division(level) {
  const numbers = []
  let answer;
  switch (level) {
    case 1:
      for(let i = 0; i < 2; i++) numbers.push(getRandomNumber(10))
      if(numbers[0] % numbers[1] !== 0) return division(level)
      answer = numbers[0] / numbers[1]
      return {
        question: `${numbers[0]} &divide; ${numbers[1]}`,
        answer: answer
      }
    case 2:
      for(let i = 0; i < 2; i++) numbers.push(getRandomNumber(50))
      if(numbers[0] % numbers[1] !== 0) return division(level)
      answer = numbers[0] / numbers[1]
      return {
        question: `${numbers[0]} &divide; ${numbers[1]}`,
        answer: answer
      }
    case 3:
      for(let i = 0; i < 2; i++) numbers.push(getRandomNumber(100))
      if(numbers[0] % numbers[1] !== 0) return division(level)
      answer = numbers[0] / numbers[1]
      return {
        question: `${numbers[0]} &divide; ${numbers[1]}`,
        answer: answer
      }
    case 4:
      for(let i = 0; i < 2; i++) numbers.push(getRandomNumber(1000))
      if(numbers[0] % numbers[1] !== 0) return division(level)
      answer = numbers[0] / numbers[1] 
      return {
        question: `${numbers[0]} &divide; ${numbers[1]}`,
        answer: answer
      }
    case 5:
      for(let i = 0; i < 2; i++) {
        const isNegative = Math.random() > 0.5 ? true : false
        if(i === 0) isNegative ? numbers.push(getRandomNumber(1000)) : numbers.push(getRandomNumber(1000) * -1)
        else if(i === 1) isNegative ? numbers.push(getRandomNumber(500)) : numbers.push(getRandomNumber(500) * -1)
      }
      if(numbers[0] % numbers[1] !== 0) return division(level)
      answer = numbers[0] / numbers[1]
      return {
        question: `${numbers[0]} &divide; ${numbers[1]}`,
        answer: answer
      }
    case 6:
      for(let i = 0; i < 2; i++) {
        const isNegative = Math.random() > 0.5 ? true : false
        if(i === 0) isNegative ? numbers.push(getRandomNumber(1000)) : numbers.push(getRandomNumber(1000) * -1)
        else if(i === 1) isNegative ? numbers.push(getRandomNumber(500)) : numbers.push(getRandomNumber(500) * -1)
      }
      answer = numbers[0] / numbers[1]
      return {
        question: `${numbers[0]} &divide; ${numbers[1]}`,
        answer: answer.toString().substring(0, 5)
      }
  }
}

export default division