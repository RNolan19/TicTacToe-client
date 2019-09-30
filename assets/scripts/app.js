'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  $('#change-password').hide()
  $('.h2changepassword').hide()
  $('#sign-out').hide()
  $('.h2signout').hide()
  $('#gameboard').hide()
  $('#new-game').hide()
  $('.h2newgame').hide()
  $('#get-record').hide()

  $('.box').on('click', gameEvents.onBoxClick)

  $('#new-game').on('click', gameEvents.onCreateGame)
  $('#get-record').on('click', gameEvents.onGetRecord)
})
