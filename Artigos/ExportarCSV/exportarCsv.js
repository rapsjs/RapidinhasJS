

function gerarCsv(usuarios) {
  buscarDados(usuarios)
}

function criarArquivo(dados) {
  var csv = dados.map(e => e.join(';')).join('\n')

  var csvBlob = new Blob([csv], { type: "text/csv;charset=utf-8;" })

  var dataAtual = new Date()
  var nome = 'NomeDoArquivo'
  var options = { hour: '2-digit', minute: '2-digit', second: '2-digit' }

  var nomeArquivo = `${nome}_${dataAtual.toLocaleDateString('pt-BR', options).replace(/\//g, '_').replace(' ', '_')}.csv`

  return download(nomeArquivo, URL.createObjectURL(csvBlob));
}

function download(nomeArquivo, conteudo) {
  var element = document.createElement('a');

  element.setAttribute('href', conteudo);
  element.setAttribute('download', nomeArquivo);
  element.setAttribute('target', '_blank');

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function buscarDados(usuarios) {
  var promiseList = []

  promiseList.push(new Promise((resolve, reject) => {
    usuarios.forEach(usuario => {
      fetch(`https://api.github.com/users/${usuario}`)
        .then(resposta => {
          return resposta.json()
        })
        .then(json => {
          resolve(new Array(`"${json.login}", """${json.id}", "${json.name}", "${json.bio}", `))
        })
    })
  }))

  Promise.all(promiseList).then(contentList => {
    criarArquivo(contentList)
  })
}