var alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
var letters = alphabet.map(function(items) {
  return `<button onclick="this.disabled=true">${items.toUpperCase()}</button>`
})
