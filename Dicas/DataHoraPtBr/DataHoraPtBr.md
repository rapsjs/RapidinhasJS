// Dica rápida sobre JS -  Data e Hora no formato local.

/*
** Para obter a data e hora no formato brasileiro, temos o
** método 'toLocaleDateString' que aceita dois argumentos
** (local, opções), as opções podem ser passadas através
** de um objeto de configuração, que define a formatação.
** Acesse o link abaixo para mais infos no site da Mozilla.

> toLocaleDateString() - MDN --> https://mzl.la/31amwKJ
*/

var date = new Date()

var options = { 
  hour:   '2-digit', 
  minute: '2-digit', 
  second: '2-digit', 
}

var dateTimeNow = date.toLocaleDateString('pt-BR', options)

console.log(`Data/Hora: ${dateTimeNow}`)



/*_______________________________________________________*/

/* Instagram: @ipetinate - GitHub: http://bit.ly/2LP19L3 */