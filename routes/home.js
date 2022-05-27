const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')

router.get('/', homeController.homePage)
router.get('/list', homeController.sendListSongs)
router.get('/stream', homeController.handle);
router.get('/download', homeController.download);

module.exports = router;