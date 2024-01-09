const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  highScore: {
    type: Number,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  xp: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

const Player = mongoose.model('Player', playerSchema);
module.exports = Player;