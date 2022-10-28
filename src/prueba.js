
import {Gato} from './index.js'

let gato = new Gato

console.log(gato.imprimirEstado())
gato.alimentar()
gato.dormir()
gato.jugar()
console.log(gato.imprimirEstado())
gato.pasoDelTiempo(7920000)
console.log(gato.imprimirEstado())
