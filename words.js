var newWords = commonWords.filter(function(a) {
  return a.length > 2
})
var gameWord = newWords[
  Math.floor(Math.random() * newWords.length)
].toLowerCase()
var sepChar = gameWord.toLowerCase().split("")
var dashUnder = "_"
var underS = sepChar
  .map(function() {
    return dashUnder
  })
  .join("")

$("#dashes").html(underS)
