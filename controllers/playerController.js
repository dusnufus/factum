const Player = require('../models/player');

const player_index = (req, res) => {
  Player.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { players: result, title: 'All Players' });
    })
    .catch(err => {
      console.log(err);
    });
}

const player_create_get = (req, res) => {
  res.render('createPlayer', { title: 'Create a new player' });
}

const player_create_post = (req, res) => {
  const player = new Player(req.body);
  player.save()
    .then(result => {
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = {
  player_index,
  player_create_get,
  player_create_post
}