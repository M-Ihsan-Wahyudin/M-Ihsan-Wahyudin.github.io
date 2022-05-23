import { getRandomNumber } from '../utility.js'

function fractions(level) {
  const numbers = []
  let answer;
  let question;
  switch (level) {
    case 1:
      for(let i = 0; i < 2; i++) numbers.push(getRandomNumber(10))
      if(numbers[0] % numbers[1] === 0) return fractions(level)
      question = Math.round((numbers[0] / numbers[1]) * 100) / 100
      answer = `<sup>${numbers[0]}</sup>&frasl;<sub>${numbers[1]}</sub>`
      return {
        question: `${question}`,
        answer: answer
      }
    case 2:
      for(let i = 0; i < 2; i++) numbers.push(getRandomNumber(50))
      if(numbers[0] % numbers[1] === 0) return fractions(level)
      question = Math.round((numbers[0] / numbers[1]) * 100) / 100
      answer = `<sup>${numbers[0]}</sup>&frasl;<sub>${numbers[1]}</sub>`
      return {
        question: `${question}`,
        answer: answer
      }
    case 3:
      for(let i = 0; i < 2; i++) numbers.push(getRandomNumber(100))
      if(numbers[0] % numbers[1] === 0) return fractions(level)
      question = Math.round((numbers[0] / numbers[1]) * 100) / 100
      answer = `<sup>${numbers[0]}</sup>&frasl;<sub>${numbers[1]}</sub>`
      return {
        question: `${question}`,
        answer: answer
      }
    case 4:
      for(let i = 0; i < 2; i++) numbers.push(getRandomNumber(500))
      if(numbers[0] % numbers[1] === 0) return fractions(level)
      question = Math.round((numbers[0] / numbers[1]) * 100) / 100
      answer = `<sup>${numbers[0]}</sup>&frasl;<sub>${numbers[1]}</sub>`
      return {
        question: `${question}`,
        answer: answer
      }
    case 5:
      for(let i = 0; i < 2; i++) numbers.push(getRandomNumber(1000))
      if(numbers[0] % numbers[1] === 0) return fractions(level)
      question = Math.round((numbers[0] / numbers[1]) * 100) / 100
      answer = `<sup>${numbers[0]}</sup>&frasl;<sub>${numbers[1]}</sub>`
      return {
        question: `${question}`,
        answer: answer
      }
    case 6:
      for(let i = 0; i < 2; i++) numbers.push(getRandomNumber(10000))
      if(numbers[0] % numbers[1] === 0) return fractions(level)
      question = Math.round((numbers[0] / numbers[1]) * 100) / 100
      answer = `<sup>${numbers[0]}</sup>&frasl;<sub>${numbers[1]}</sub>`
      return {
        question: `${question}`,
        answer: answer
      }
  }
}

export default fractions