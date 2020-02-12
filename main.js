$(document).ready(function() {
  var newWords = commonWords.filter(function(a) {
    return a.length > 2
  })
  var gameWord = newWords[Math.floor(Math.random() * newWords.length)]
  var sepChar = gameWord.split("")

  var dashUnder = "_"
  var underS = sepChar.map(function() {
    return `
    <p class="underScores">${dashUnder}</p>
    `
  })
  $("#word").html(gameWord)
  $("#dashes").html(underS)
  $("#letterButtons").html(letters)
  $("#turnsLeft").html(`Number of turns 8`)
  console.log(gameWord)
  console.log(sepChar)
  console.log(alphabet)
})

// document.getElementById("dashes").innerHTML = `${sepChar}`
