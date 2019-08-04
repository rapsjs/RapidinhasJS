let usuario = 'rapidinhas-js'
let dados = []

fetch(`https://api.github.com/users/${usuario}`)
  .then(resposta => {
    return resposta.json()
  })
  .then(json => {
    dados.push(json)
  })

console.log(`Usuario: ${usuario}`, dados)