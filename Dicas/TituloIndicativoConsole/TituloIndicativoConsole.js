const obj = {
  propA: ['R', 'A', 'P'],
  propB: ['I', 'D', 'I'],
  propC: ['N', 'H', 'A'],
}

// Modo 1 - String
console.log('Propriedade A', obj.propA)

// Modo 2 - Objeto
console.log({ PropriedadeB: obj.propB })

// Modo 3 - Template String
console.log(`Propriedade C: ${obj.propC}`)