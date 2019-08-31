_onExport() {
  this.search();
}

_csvGenerator(dados) {
  var csv = dados.map(e => e.join(';')).join('\n');

  var csvBlob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

  var dataAtual = new Date();

  var options = { hour: '2-digit', minute: '2-digit', second: '2-digit' }

  var filename = `${this.titulo}_${dataAtual.toLocaleDateString('pt-BR', options).replace(/\//g, '_').replace(' ', '_')}.csv`

  return this._download(filename, URL.createObjectURL(csvBlob));
}

_download(filename, text) {
  var element = document.createElement('a');

  element.setAttribute('href', text);
  element.setAttribute('download', filename);
  element.setAttribute('target', '_blank');

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

_getContent(ids) {
  var promiseList = []

  if (!this.ids) {
    ids.forEach((value, index) => {
      promiseList.push(new Promise((resolve, reject) => {
        super.ajaxGet(this.of + '/get', { id: value }, response => {
          console.log('Reposta pegar: ', response);
          if (response.success) {
            this.set('data', response[this.of]);
            resolve(new Array(`"${response.card.code.trim()}"`, `"${response.card.description.replace(/(<([^>]+)>)|; /ig, "").replace(/\n/ig, '').trim().normalize()}"`))
          }
        })
      }))
    })
  }

  Promise.all(promiseList).then(contentList => {
    this._csvGenerator(contentList)
  })
}

search(callback) {
  this._isLoading = true;
  this.set('list.result', []);
  this.set('filter.institutionId', super.getCurrentInstitution());
  this.set('filter.lines', 2147483647);

  super.ajaxGet(this.of + '/search', this.filter, response => {
    if (response.success && response.data)
      this.set('list', response.data)

    if (!this.list.total)
      this.set('list.total', 0);

    this.set('_lastFilter', JSON.parse(JSON.stringify(this.filter)));

    var ids = this.list.result.map(x => x.id)
    this._getContent(ids)
    this._isLoading = false;
  });
}