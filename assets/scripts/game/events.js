'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

let player = 'X'
let counter = 0
let gameOver = false

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
  gameOver = false
  player = 'X'
  counter = 0

  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
  $('.box').text('')
}

const isGameOver = function () {
  console.log(store.game.cells)

  if (gameOver === false && counter < 9) {
    counter += 1
  }

  if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2]) {
    gameOver = true
    checkForWin()
  } else if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6]) {
    // endGame()
    checkForWin()
    gameOver = true
    console.log('You connected row 036. You Win!')
  } else if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8]) {
    console.log('You connected row 048.  You win!')
    checkForWin()
    gameOver = true
  } else if (store.game.cells[1] !== '' && store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7]) {
    console.log('You connected row 147.  You win!')
    checkForWin()
    gameOver = true
  } else if (store.game.cells[2] !== '' && store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8]) {
    console.log('You connected row 258.  You win!')
    checkForWin()
    gameOver = true
  } else if (store.game.cells[2] !== '' && store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6]) {
    console.log('You connected row 246.  You win!')
    checkForWin()
    gameOver = true
  } else if (store.game.cells[3] !== '' && store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5]) {
    console.log('You connected row 345. You win!')
    checkForWin()
    gameOver = true
  } else if (store.game.cells[6] !== '' && store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8]) {
    console.log('You connected row 678.  You win!')
    checkForWin()
    gameOver = true
  } else if (counter === 9) {
    checkForWin()
  }
}

const checkForWin = function () {
  if (counter === 9 && gameOver === false) {
    $('#message').text("It's a tie.  You can't end on a draw.  Click 'New Game' to play again!")
  } else if (counter % 2 === 1) {
    $('#message').text("Player X wins!  You are a Tic Tac Toe Maestro!  Click 'New Game' to play again and keep the winning streak alive!")
  } else if (counter % 2 === 0) {
    $('#message').text("Player O wins!  You are a Tic Tac Toe Prodigy!  Click 'New Game' to play again and keep the winning streak alive!")
  }
  $('#gameboard').hide()
  switchPlayer('X')
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
