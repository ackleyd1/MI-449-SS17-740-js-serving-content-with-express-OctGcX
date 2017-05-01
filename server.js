var express = require('express')
var app = express()
var port = process.env.PORT || 8080

var games = {}

function createGame (game) {
  var id = Object.keys(games).length
  game.createdAt = new Date()
  games[id] = game
}

createGame({
  title: 'Pikmin',
  description: 'Pikmin is one of the single greatest games for the Nintendo "Lunchbox" GameCube. The charming, little pikmin help you gather your ship parts so you can repair your ship and fly back to your home planet to see your family. You can only survive for 30 days on this strange planet that resembles a post apocalyptic Earth. Their determination to fight off enemy creatures to help you return to your planet is admirable. It could bring a tear to a glass eye. It makes me wish these little guys were real :,(',
  info: 'Pikmin is a real-time strategy video game developed and published by Nintendo for the GameCube in 2001.',
  image: '/images/pikmin/pikmin-header.png',
  cardImage: '/images/pikmin/pikmin-card-image.jpg',
  link: '/pikmin'
})

createGame({
  title: 'Super Smash Bros. Melee',
  description: 'Super Smash Bros. Melee for the Nintendo GameCube is the best in the series, hands-down. The competitive scene is thriving, 15 years after its initial release. Even without support from Nintendo, who intended for the game to stay a party game, the community still manages to host large tournaments. There is even a feature-length documentary that charted the early years of this competitive scene. One of the largest tournaments, Genesis 4, is this weekend, January 20th-22nd 2017. I play often with my roommate and I also compete in tournaments, although I perform rather poorly. Yet I keep coming back to "hit the sticks" and play another 8 minutes, 4 stocks, no items match.',
  info: 'Super Smash Bros. Melee is a crossover fighting game developed by HAL Laboratory and published by Nintendo for the GameCube video game console.',
  image: '/images/melee/melee-header.jpeg',
  cardImage: '/images/melee/melee-card-image.png',
  link: '/melee'
})

createGame({
  title: 'The Legend of Zelda: The Wind Waker',
  description: 'The Legend of Zelda: The Wind Waker is a classic Nintendo title for the GameCube I hold dear to my heart. The cartoon aesthetic caught my 8yr old eye right away. I recall my quest to max out all my hearts and gather every little collectible there was. It was one of those games where you wanted to beat everything, and once you did, you would play through the whole game again, this time in Link\'s PAJAMAS instead of the traditional green garments. Also, all of the Hylian text would be translated into plain English. I find myself coming back to it often, and its HD remake is one of the few reasons I got the Wii U.',
  info: 'The Legend of Zelda: The Wind Waker is an action-adventure game developed and published by Nintendo for the GameCube home video game console.',
  image: '/images/windwaker/windwaker-header.png',
  cardImage: '/images/windwaker/windwaker-card-image.jpg',
  link: '/windwaker'
})

app.set('view engine', 'ejs')

app.use(express.static('static'))

app.get('/', function (request, response) {
  response.render('pages/index', {
    games: games
  })
})

// for (var game in games) {
//   app.get(game.link, function (request, response) {
//     response.render('pages/game', {
//       games: games,
//       game: game
//     })
//   })
// }

app.get('/pikmin', function (request, response) {
  response.render('pages/game', {
    games: games,
    game: games[0]
  })
})

app.get('/melee', function (request, response) {
  response.render('pages/game', {
    games: games,
    game: games[1]
  })
})

app.get('/windwaker', function (request, response) {
  response.render('pages/game', {
    games: games,
    game: games[2]
  })
})

app.listen(port)
