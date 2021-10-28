export const ajouter = (a: number, b: number) => a + b
export const multiplier = (a: number, b: number) => a * b
export const soustraire = (a: number, b: number) => a - b
export const diviser = (a: number, b: number) => {
  if (b === 0) throw new Error()
  return a / b
}
export const modulo = (a: number, b: number) => a % b
