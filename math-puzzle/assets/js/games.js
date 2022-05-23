class Games {
  score = 0
  totalHealth = 3
  health = 3

  constructor() {
    this.init()
  }

  init() {
    this.setGame()
  }

  setGame() {
    this.setGameScore()
    this.setGameHealth()
  }

  setGameScore() {
    const score = document.querySelector("#score")
    score.innerHTML = this.score
  }

  setGameHealth() {
    const health = document.querySelector("#health")
    health.innerHTML = ""
    const icon = document.createElement("i")
    icon.classList.add("fa-solid", "fa-heart", "text-[#DE3535]")
    for (let i = 0; i < this.health; i++) {
      health.appendChild(icon.cloneNode(true))
    }
    icon.classList.remove("text-[#DE3535]")
    icon.classList.add("text-white/30")
    for(let i = 0; i < this.totalHealth - this.health; i++) {
      health.appendChild(icon.cloneNode(true))
    }
  }

  addScore() {
    this.score += Math.round(11.1)
    this.setGameScore()
  }

  removeHealth() {
    this.health--
    this.setGameHealth()
  }

  resetGame() {
    this.score = 0
    this.health = 3
    this.setGame()
  }

  getScore() {
    return this.score
  }

  setScore(score) {
    this.score = score
  }

  getHealth() {
    return this.health
  }

  setHealth(health) {
    this.health = health
  }
}

export default Games