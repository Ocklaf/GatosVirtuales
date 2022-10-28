
class Gato{
  MAX_VALUE = 10
  MIN_VALUE = 0
  hambre = this.getRandomValue0to10()
  cansancio = this.getRandomValue0to10()
  felicidad = this.getRandomValue0to10()
  randomToStateChange = 0
  hours = 0

  getRandomChangeStates() {
    return Math.floor(Math.random()*3)
  }

  getRandomValue0to10() {
    return Math.floor(Math.random() * 11)    
  }

  alimentar() {
    if (this.hambre > this.MIN_VALUE && this.getRandomChangeStates() > 0) {
      this.hambre--
    }
  }

  dormir() {
    if (this.cansancio > this.MIN_VALUE && this.getRandomChangeStates() > 0) {
      this.cansancio--
    }
  }

  jugar() {
    if (this.felicidad < this.MAX_VALUE && this.getRandomChangeStates() >0) {
      this.felecidad++
    }
  }

  imprimirEstado() {
    return `Nivel de felicidad (min 0/max10): ${this.felicidad}\nNivel de cansancio (min 0/max10): ${this.cansancio}\nNivel de hambre (min 0/max10): ${this.hambre}`
  }

  pasoDelTiempo(milisegundos) {
    this.hours = parseInt(milisegundos / 3600000)
    this.randomToStateChange = this.getRandomChangeStates()
    this.enougthTimeAndRandomStatesIsOne = this.hours >= 1 && this.randomToStateChange
    
      if (this.tiempoHambre()) {
        this.hambre++        
      }
      if (this.tiempoCansancio()) {
        this.cansancio++
      }
      if (this.tiempoFelicidad()) {
        this.felicidad--
      }
    
  }

  tiempoHambre() {
    return this.hambre < 10 && this.enougthTimeAndRandomStatesIsOne
  }

  tiempoCansancio() {
    return this.cansancio < 10 && this.enougthTimeAndRandomStatesIsOne
  }

  tiempoFelicidad() {
    return this.felicidad > 0 && this.enougthTimeAndRandomStatesIsOne
  }
}

export {
  Gato
}
