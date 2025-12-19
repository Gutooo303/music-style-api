const express = require('express');
const router = express.Router();
const musicController = require('../controllers/musicController');

router.get('/songs', musicController.getAllSongs);

module.exports = router;