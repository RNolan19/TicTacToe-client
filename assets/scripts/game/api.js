// We require 'config' so we can get our API's url, so that we can make requests to our API
const config = require('../config')
// store data inside our 'store'.  Store our 'user'
const store = require('../store')

// createExample will make a request to our API, which will create a new Example
// we require formData because the API needs to know what fields(text) should be in our new Example
const createGame = function () {
// we make a request to out API and we MUST RETURN the result.
  return $.ajax({
    // The method is which HTTP verb to use when making the request.catch
    // We use POST because our documentation told us to.  APIs will have documentation
    method: 'POST',
    // the url our API is expecting when we create a new example.
    // We use '/examples' because our documentation told us to. OBEY THE API's instructions
    url: config.apiUrl + '/games',
    // This is our authorization header. It tells the API who we are by using our user's token to identify us
    // our API needs to know who we are to create anything.  You need a token to create anything.
    headers: {
      // the token was saved in the store when we signed up
      // we access it through store.user.token
      Authorization: 'Token token=' + store.user.token
    },
    // when we create an example, it needs to know what data (ie, text) that example should have
    data: '{}'
  })
}

const updateGame = function (cell, player) {
  return $.ajax({
    method: 'PATCH',
    // when you hit new game, a game id is generated and put in Store
    // store.game.id jsut gives us the number of the gameid, ie 250
    url: config.apiUrl + `/games/` + store.game.id,
    headers: {
    // the token was saved in the store when we signed up
    // we access it through store.user.token
      Authorization: 'Token token=' + store.user.token
    },
    data: {game: {
      cell: {
        index: cell,
        value: player
      },
      over: false
    }}
  })
}

module.exports = {
  createGame,
  updateGame
}
