import { hello } from './hello'
import { ajouter, soustraire, diviser, multiplier, modulo } from './calcul'

const { a: aa, b: bb, c: cc } = { a: 'a', b: 'b', c: 'c' }
console.log('Hello', aa, bb, cc)

hello('John Doe')

console.log(`5 + 4 = ${ajouter(5, 4)}`)
console.log(`5 - 4 = ${soustraire(5, 4)}`)
console.log(`5 / 4 = ${diviser(5, 4)}`)
console.log(`5 * 4 = ${multiplier(5, 4)}`)
console.log(`5 % 4 = ${modulo(5, 4)}`)
