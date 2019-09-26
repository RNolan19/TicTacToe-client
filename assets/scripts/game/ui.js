'use strict'
// require store object, so we can keep track of the user and their unique token
const store = require('../store')

const invalidMove = function () {
  $('#message').text('Not a valid move, sir.  Please select another square')
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
  successMessage('Time For A New Game! Make Your First Move')
  console.log('win' + responseData)
}

const onCreateGameFailure = function () {
  failureMessage('New Game Did Not Load Properly')
  console.log('lose')
}

module.exports = {
  invalidMove,
  onCreateGameSuccess,
  onCreateGameFailure
}
