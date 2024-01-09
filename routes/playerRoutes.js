const express = require('express');
const playerController = require('../controllers/playerController');

const router = express.Router();

router.get('/createPlayer', playerController.player_create_get);
router.get('/', playerController.player_index);
router.post('/createPlayer', playerController.player_create_post);
//router.get('/:id', blogController.blog_details);
//router.delete('/:id', blogController.blog_delete);

module.exports = router;