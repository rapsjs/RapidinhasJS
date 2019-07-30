var date = new Date()

var options = { 
  hour:   '2-digit', 
  minute: '2-digit', 
  second: '2-digit', 
}

var dateTimeNow = date.toLocaleDateString('pt-BR', options)

console.log(`Data/Hora: ${dateTimeNow}`)