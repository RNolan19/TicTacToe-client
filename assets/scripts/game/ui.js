'use strict'
// require store object, so we can keep track of the user and their unique token
const store = require('../store')
const events = require('./events')

const invalidMove = function () {
  $('#message').text('Invalid move.  Please select an empty square')
  $('#message').addClass('failure')
}

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onCreateGameSuccess = function (responseData) {
  successMessage('Time For A New Game! Player X Will Go First')
  store.game = responseData.game
  console.log('win' + responseData)
  $('#gameboard').show()
}

const onCreateGameFailure = function () {
  failureMessage('New Game Did Not Load Properly')
  console.log('lose')
}

const updateGameSuccess = function (responseData) {
  store.game = responseData.game
  console.log(responseData)
}

module.exports = {
  invalidMove,
  onCreateGameSuccess,
  onCreateGameFailure,
  updateGameSuccess
}
