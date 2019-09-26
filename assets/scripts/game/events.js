'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const gameBoard = ['','','','','','','','','']

let player = 'X'

// switching between 'X' and 'O'
const switchPlayer = function () {
  if (player === 'X') {
    player = 'O'
    console.log(player)
  } else {
    player = 'X'
    console.log(player)
  }
}

const onCreateGame = function (event) {
  event.preventDefault()

  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
  $('.box').text('')
}

const onBoxClick = function (event) {
  event.preventDefault()
  console.log('The event listener works')

  if ($(event.target).text() === '') {
  // const box = event.target
    $(event.target).text(player)
    switchPlayer()
  } else {
    ui.invalidMove()
  }
}


module.exports = {
  onBoxClick,
  onCreateGame,
  switchPlayer
}
