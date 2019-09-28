'use strict'
// require store object, so we can keep track of the user and their unique token
const store = require('../store')

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

const onSignUpSuccess = function () {
  successMessage('Signed up successfully!')
}

const onSignUpFailure = function () {
  failureMessage('Sign Up Failed')
}

// responseData is just a parameter.  It is the data the API sends back when we make a request
// In this case, it has our user and our user's token
const onSignInSuccess = function (responseData) {
  successMessage('Signed in successfully! Click "New Game" button to begin!')
  console.log('response data is', responseData)
  // save the user we got from the API inside of 'store', so we can use it later
  // from any file
  store.user = responseData.user
  console.log('store is', store)

  //  a good place to hide the sign in button
  $('#sign-in').hide()
}

const onSignInFailure = function () {
  failureMessage('Sign In Failed')
}

const onChangePasswordSuccess = function () {
  successMessage('Password changed successfully!')
}

const onChangePasswordFailure = function () {
  failureMessage('Password change Failed')
}

const onSignOutSuccess = function (responseData) {
  successMessage('Signed out successfully!')
}

const onSignOutFailure = function () {
  failureMessage('Sign Out Failed')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  successMessage,
  failureMessage,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutFailure,
  onSignOutSuccess
}
