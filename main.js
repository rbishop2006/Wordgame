$(document).ready(function() {
  newButtons()
  var turns = 8
  var letterClicked = ""
  var word = underS
  $(".button").on("click", function(e) {
    e.preventDefault()
    currentClicked = $(this).html()
    letterClicked = currentClicked
    $(this).attr("disabled", true)

    for (i = 0; i < gameWord.length; i++) {
      if (letterClicked === gameWord.charAt(i)) {
        answers = word.split("")
        answers[i] = letterClicked

        word = answers.join("")
      }
    }
    if (word.includes(letterClicked)) {
      turns = turns
    } else {
      turns--
    }
    if (turns == 0) {
      $("#letterButtons").html("Game Over")
    }
    if (word == gameWord) {
      $("#letterButtons").html("You Won!!!")
    }
    $("#dashes").html(word)
    $("#turnsLeftInGame").html(`Guesses left ${turns}`)
  })
})
