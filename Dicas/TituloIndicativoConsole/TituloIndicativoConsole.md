// Dica rápida sobre JS -  Titulo Indicativo no console.log()

/*
** Em alguns momentos é necessário utilizar o console.log()
** para visualizar alguma coisa, e por isso, algumas vezes
** nossa saída de dados do console fica cheia de objetos ou
** de 'prints' de dados, para auxiliar na leitura, podemos
** utilizar a seguinte dica, títulos para nossos logs, veja:
*/

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

/* ---------- Resultado no Console do Navegador ---------- */

1. > Propriedade A (3) ► ["R", "A", "P"]

2. > ▼ { PropriedadeB: Array(3) }
		► PropriedadeB: (3) ["I", "D", "I"]
		► __proto__: Object
        
3. > Propriedade C: N,H,A

/* Redes Sociais: @rapsjs -- rapidinhas-js.github.io/site/ */
/* Tema: Monokai _____ Dica sugerida pelo @renan.teixeira_ */

https://www.inexistentman.net/2011/03/tabela-com-mais-de-4000-simbolos-e-caracteres-especiais/