const objeto = { 
  nome:   'Rapidinhas JS', 
  perfil: '@rapsjs', 
  sobre:  'Dicas sobre JS'
}
var array = [ 1, 2, 3, 4, 5, 6, 7, 8 ]

const { nome, perfil, sobre } = objeto
var [um, dois, ...resto] = array

console.log(`> ${nome} | ${perfil} | ${sobre}`)

console.log(`> ${um}   | ${dois}   | ${resto}`)