// Dica rápida sobre JS -  Desestruturando dados em JavaScript

/*
** O ES6 trouxe ao JavaScript uma forma bem interessante de 
** trabalhar com objetos e arrays, através da Atribuição via
** desestruturação. Ao invés de ter que acessar o objeto/array 
** usando o ponto ou [] , podemos atribuir numa var/const/let 
** o que queremos obter. Veja no exemplo abaixo:

> Atribuição via desestruturação - MDN - https://mzl.la/2M27O4I
*/

const objeto = { 
  nome: 'Rapidinhas JS', 
  perfil: '@rapsjs', 
  sobre: 'Dicas sobre JS'
}
var array = [ 1, 2, 3, 4, 5, 6, 7, 8 ]

const { nome, perfil, sobre } = objeto
var [um, dois, ...resto] = array

console.log(`> ${nome} | ${perfil} | ${sobre}`)
console.log(`> ${um}   | ${dois}   | ${resto}`)

/* --------- Resultado no Console/Terminal (Node) --------- */

> Rapidinhas JS | @rapsjs | Dicas sobre JS

>        1 		| 	 2 	  |  3,4,5,6,7,8

/* Redes Sociais: @rapsjs -- rapidinhas-js.github.io/site/ */
/* Tema: One Dark --------- Dica sugerida pelo @luisslanca */