let meuUsuario = 'ipetinate'
let dados = []

fetch('https://api.github.com/users/ipetinate')
  .then(resposta => resposta.json())
  .then(json => dados = json)

console.log(`Usuario: ${meuUsuario}`, dados)

// fetch('./file.json')
//   .then(response => response.json())
//   .then(data => console.log(data))