function newTurns() {
  var turns = 8
  var turnsLeft = turns.on("click", function() {
    turns = --turns
  })
  console.log(turnsLeft)
  $("#turnsLeftInGame").html(turnsLeft)
}

// function newButtons() {
//   var alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("")
//   var letters = alphabet
//     .map(function(items) {
//       return `<button >${items}</button>`
//     })
//     .join("")
//   $("#letterButtons").html(letters)
// }
// object.onclick = function() {
//   myScript
// }
