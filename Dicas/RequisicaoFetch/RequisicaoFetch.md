// Dica rápida sobre JS -  Requisição de dados com Fetch API

/*
** Para fazer uma requisição HTTP e consumir dados o JS tem 
** o Fetch. Podemos configurar a requisição de forma simples
** passando um objeto de config depois da URL, para GET não é
** necessário passar parâmetros, mas para outros verbos sim. 
** Abaixo temos a forma simples de utilização deste método.

> Usando Fetch - APIs da Web | MDN : https://mzl.la/2KucMnU
*/

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

/* ---------- Resultado no Console do Navegador ---------- */

> Usuario: rapidinhas-js 
  ▼ []
    ► 0: {login: "rapidinhas-js", id: XXXXXXXX, node_id: ...
      length: 1
	► __proto__: Array(0)
          
/* Redes Sociais: @rapsjs -- rapidinhas-js.github.io/site/ */
/* Tema: Dracula ---------- Dica sugerida pelo @rafaluck46 */