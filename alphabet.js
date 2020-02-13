function newButtons() {
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  var letters = alphabet

    .map(function(items) {
      return `<button class="button">${items}</button>`
    })
    .join("")
  $("#letterButtons").html(letters)
}
