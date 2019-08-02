
(function(){
    let meuUsuario = 'ipetinate'
    let dados = []

    fetch('https://api.github.com/users/ipetinate')
      .then(resposta => {
            return resposta.json();
           })    
      .then(json => {
        dados.push(json);
        console.log(dados);
      })

    console.log(`Usuario: ${meuUsuario}`, dados)

    // fetch('./file.json')
    //   .then(response => response.json())
    //   .then(data => console.log(data))

}())
