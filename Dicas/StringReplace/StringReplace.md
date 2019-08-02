// Dica rápida sobre JS -  Substituir caracteres em Strings

/*
** Já se deparou com a necessidade de substituir algum tipo
** de caractere em um determinado conjunto de texto em JS?

** O JavaScript tem um método chamado 'replace()', que aceita
** dois argumentos, o primeiro é o padrão a ser encontrado, 
** e o segundo é o padrão a substituir a ocorrência na string.
** O replace() aceita REGEX - Expressões Regulares (//g) 
*/

let texto = 'R,A,P,I,D,I,N,H,A,S'

// REGEX no primeiro parâmetro e string vazia no segundo
console.log('Com REGEX: ', texto.replace(/,/g, ''))

// String com vírgula ao invês de REGEX no primeiro parâmetro
console.log('Com String: ', texto.replace(',', ''))

/* ---------- Resultado no Console do Navegador ---------- */

> Com REGEX: RAPIDINHAS
> Com String: RA,P,I,D,I,N,H,A,S

// Note que com REGEX ele substitui todas as ocorrências.
// Já com String ele substitui somente a primeira ocorrência.

/* Redes Sociais: @rapsjs -- rapidinhas-js.github.io/site/ */
/* Tema: Monokai ___________ Dica sugerida pelo @ipetinate */