import { getRandomNumber } from '../utility.js'

function ratios(level) {
  const numbers = []
  let answer;
  let totalItem;
  switch (level) {
    case 1:
      for(let i = 0; i < 2; i++) numbers.push(getRandomNumber(5))
      totalItem = getRandomNumber(20)
      answer = numbers[0] + numbers[1]
      if(totalItem < 10 || totalItem % answer !== 0) return ratios(level)
      answer = (totalItem / answer) * numbers[0]
      return {
        question: `Rasio pria : wanita ${numbers[0]}:${numbers[1]} <br> Total Orang ${totalItem} <br> Jumlah Pria ?`,
        answer: answer
      }
    case 2:
      for(let i = 0; i < 2; i++) numbers.push(getRandomNumber(20))
      totalItem = getRandomNumber(40)
      answer = numbers[0] + numbers[1]
      if(totalItem < 25 || totalItem % answer !== 0) return ratios(level)
      answer = (totalItem / answer) * numbers[0]
      return {
        question: `Rasio pria : wanita ${numbers[0]}:${numbers[1]} <br> Total Orang ${totalItem} <br> Jumlah Pria ?`,
        answer: answer
      }
    case 3:
      for(let i = 0; i < 2; i++) numbers.push(getRandomNumber(50))
      totalItem = getRandomNumber(100)
      answer = numbers[0] + numbers[1]
      if(totalItem < 50 || totalItem % answer !== 0) return ratios(level)
      answer = (totalItem / answer) * numbers[0]
      return {
        question: `Rasio pria : wanita ${numbers[0]}:${numbers[1]} <br> Total Orang ${totalItem} <br> Jumlah Pria ?`,
        answer: answer
      }
    case 4:
      for(let i = 0; i < 2; i++) numbers.push(getRandomNumber(100))
      totalItem = getRandomNumber(300)
      answer = numbers[0] + numbers[1]
      if(totalItem < 150 || totalItem % answer !== 0) return ratios(level)
      answer = (totalItem / answer) * numbers[0]
      return {
        question: `Rasio pria : wanita ${numbers[0]}:${numbers[1]} <br> Total Orang ${totalItem} <br> Jumlah Pria ?`,
        answer: answer
      }
    case 5:
      for(let i = 0; i < 2; i++) numbers.push(getRandomNumber(200))
      totalItem = getRandomNumber(600)
      answer = numbers[0] + numbers[1]
      if(totalItem < 300 || totalItem % answer !== 0) return ratios(level)
      answer = (totalItem / answer) * numbers[0]
      return {
        question: `Rasio pria : wanita ${numbers[0]}:${numbers[1]} <br> Total Orang ${totalItem} <br> Jumlah Pria ?`,
        answer: answer
      }
    case 6:
      for(let i = 0; i < 2; i++) numbers.push(getRandomNumber(500))
      totalItem = getRandomNumber(1000)
      answer = numbers[0] + numbers[1]
      if(totalItem < 500 || totalItem % answer !== 0) return ratios(level)
      answer = (totalItem / answer) * numbers[0]
      return {
        question: `Rasio pria : wanita ${numbers[0]}:${numbers[1]} <br> Total Orang ${totalItem} <br> Jumlah Pria ?`,
        answer: answer
      }
  }
}

export default ratios