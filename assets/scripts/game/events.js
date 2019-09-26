'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

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

const onBoxClick = function (event) {
  event.preventDefault()
  console.log('The event listener works')

  // const box = event.target
  $(event.target).text(player)
  switchPlayer()
}

module.exports = {
  onBoxClick
}
