'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

let player = 'X'

// switching between 'X' and 'O'
const switchPlayer = function () {
  if (player === 'X') {
    player = 'O'
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

const gameOverMessage = function () {
  $('#message').text(`Player ${player} wins!  You are a Tic Tac Toe genius!
    Click "New Game" To See If You Can Keep Your Streak Alive!`)
  $('#gameboard').hide()
  switchPlayer('X')
}

const isGameOver = function () {
  console.log(store.game.cells)
  if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2]) {
    gameOverMessage()
  } else if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6]) {
    // endGame()
    gameOverMessage()
    console.log('You connected row 036. You Win!')
  } else if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8]) {
    console.log('You connected row 048.  You win!')
    gameOverMessage()
  } else if (store.game.cells[1] !== '' && store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7]) {
    console.log('You connected row 147.  You win!')
    gameOverMessage()
  } else if (store.game.cells[2] !== '' && store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8]) {
    console.log('You connected row 258.  You win!')
    gameOverMessage()
  } else if (store.game.cells[2] !== '' && store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6]) {
    console.log('You connected row 246.  You win!')
    gameOverMessage()
  } else if (store.game.cells[3] !== '' && store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5]) {
    console.log('You connected row 345. You win!')
    gameOverMessage()
  } else if (store.game.cells[6] !== '' && store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8]) {
    console.log('You connected row 678.  You win!')
    gameOverMessage()
  }
}

const onBoxClick = function (event) {
  event.preventDefault()

  // gives the id of target of our event listener, aka the box
  const cell = event.target.id

  // if the box you click on has no text, add 'x'

  if ($(event.target).text() === '') {
   // const box = event.target
    $(event.target).text(player)
    $('#message').text(`Player ${player} has made a successful move`)
    store.game.cells[cell] = player
    // call gameOver function here
    isGameOver()

    //  gives the api.updateGame function the index and value that we clicked on
    //  updates the array via the AJAX patch
    api.updateGame(cell, player)
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)

    // switches from player X to player 0
    switchPlayer()
  } else {
    ui.invalidMove()
  }
}
module.exports = {
  onBoxClick,
  onCreateGame,
  switchPlayer,
  isGameOver
}
