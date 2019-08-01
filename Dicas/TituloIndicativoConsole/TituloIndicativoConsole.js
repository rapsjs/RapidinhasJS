const obj = {
  propA: ['R', 'A', 'P'],
  propB: ['I', 'D', 'I'],
  propC: ['N', 'H', 'A'],
}

// Modo 1 - Como string
console.log('Propriedade A', obj.propA)

// Modo 2 - Como objeto
console.log({ PropriedadeB: obj.propB })

// Modo 3 - Como template string
console.log(`Propriedade C: ${obj.propC}`)