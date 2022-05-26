const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')

router.get('/', homeController.homePage)
router.get('/list', homeController.sendListSongs)
router.get('/stream', homeController.handle);

router.get('/download', (req, res) => {
    const file = __dirname + '/Data/Audio/TheArchers-20210510.mp3';
    res.download(file);
});

module.exports = router;