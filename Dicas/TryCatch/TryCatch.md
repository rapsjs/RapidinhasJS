// Utilizando try...catch para tratar exceções

/*
** Uma forma simples e prática de tratar exceções é usando um
** try...catch. No bloco try você valida a regra negocial, se
** der certo prossegue, senão você lança uma exceção que será
** capturada no bloco catch. Temos também o bloco finally que
** é opcional, ele é executado sempre ao final, independente
** do que ocorrer no try ou no catch.
*/

> try...catch - Javascript | MDN -- https://mzl.la/2HyHYBv


try {
  throw new Error('Deu ruim no Try.');
}
catch (ex) {
  console.error('Ops, erro:', ex.message);
}
finally {
  console.log('Finalizou!');
}

/* ---------- Resultado no Console ou Terminal ----------- */

> Ops, erro: Deu ruim no Try.
> Finalizou!

/* Redes Sociais: @rapsjs ------------- https://rapsjs.com */